import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  CompactType,
  DisplayGrid,
  Gridster,
  GridsterConfig,
  GridsterItem,
  GridsterItemConfig,
  GridType,
} from 'angular-gridster2';
import { GroupedContainers, Mfe, PageContainer, PageSectionLayout, pageLayout } from './paramters';

interface MfeItem extends GridsterItemConfig {
  id: string;
  title: string;
  remoteEntry: string;
}

interface TabView {
  tabName: string;
  items: MfeItem[];
}

interface GridsterApiLike {
  resize: () => void;
  calculateLayout: () => void;
}

type SectionView =
  | { sectionName: string; kind: 'flat'; items: MfeItem[]; options: GridsterConfig; gridApi?: GridsterApiLike }
  | { sectionName: string; kind: 'grouped'; tabs: TabView[]; activeTab: number; options: GridsterConfig; gridApi?: GridsterApiLike };


@Component({
  selector: 'app-home-orchestrator',
  standalone: true,
  imports: [CommonModule, Gridster, GridsterItem],
  templateUrl: './home-orchestrator.component.html',
  styleUrl: './home-orchestrator.component.scss',
})
export class HomeOrchestratorComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('widgetHost', { read: ElementRef }) widgetHosts!: QueryList<ElementRef<HTMLElement>>;
  private sanitizer = inject(DomSanitizer);
  private hostRef = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private resizeObserver?: ResizeObserver;
  private currentLayout: 'desktop' | 'tablet' | 'mobile' | null = null;

  sections: SectionView[] = this.buildSections(pageLayout);

  loaded = signal<Record<string, boolean>>({});
  safeUrls = signal<Record<string, SafeResourceUrl>>({});

  ngAfterViewInit(): void {
    this.createObserver();
    this.createResizeObserver();
    this.widgetHosts.changes.subscribe(() => this.observeHosts());
    queueMicrotask(() => this.observeHosts());
    queueMicrotask(() => this.syncSectionWidths(this.getGridWidth()));
    this.validateLayout(this.getGridWidth());
  }

  validateLayout(width: number): void {

    let layout: 'mobile' | 'tablet' | 'desktop';

    if (width < 600) { layout = 'mobile'; }
    else if (width < 1200) { layout = 'tablet'; }
    else { layout = 'desktop'; }

    if (layout === this.currentLayout) return;
    this.currentLayout = layout;
    alert(`Current layout: ${layout}`);
  }

  setActiveTab(sectionName: string, tabIndex: number): void {
    const section = this.sections.find((current) => current.sectionName === sectionName);
    if (!section || section.kind !== 'grouped') return;
    (section as Extract<SectionView, { kind: 'grouped' }>).activeTab = tabIndex;
    queueMicrotask(() => this.observeHosts());
  }

  getActiveTab(section: SectionView): TabView | null {
    if (section.kind !== 'grouped') return null;
    return section.tabs[section.activeTab] ?? null;
  }

  removeItem(itemId: string): void {
    console.log('[grid-debug] removeItem:start', { itemId });
    let removed: MfeItem | null = null;

    for (const section of this.sections) {
      if (section.kind === 'flat') {
        const found = section.items.find((item) => item.id === itemId) ?? null;
        if (!found) continue;

        console.log('[grid-debug] removeItem:found-flat', {
          section: section.sectionName,
          item: found,
        });
        removed = found;
        const nextItems = section.items.filter((item) => item.id !== itemId);
        section.items = this.expandNeighborIntoGap(nextItems, found);
        continue;
      }

      section.tabs = section.tabs.map((tab) => {
        const found = tab.items.find((item) => item.id === itemId) ?? null;
        if (!found) return tab;

        console.log('[grid-debug] removeItem:found-tab', {
          section: section.sectionName,
          tab: tab.tabName,
          item: found,
        });
        removed = found;
        const nextItems = tab.items.filter((item) => item.id !== itemId);
        return { ...tab, items: this.expandNeighborIntoGap(nextItems, found) };
      });
    }

    if (removed) {
      console.log('[grid-debug] removeItem:removed', { itemId, removed });
      this.loaded.update((state) => {
        const next = { ...state };
        delete next[itemId];
        return next;
      });

      this.safeUrls.update((state) => {
        const next = { ...state };
        delete next[itemId];
        return next;
      });
    }

    if (!removed) {
      console.log('[grid-debug] removeItem:not-found', { itemId });
    }

    this.refreshGridOptions();

    console.log('[grid-debug] removeItem:end', { itemId });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.resizeObserver?.disconnect();
  }

  isLoaded(id: string): boolean {
    return !!this.loaded()[id];
  }

  getSafeUrl(id: string): SafeResourceUrl | null {
    return this.safeUrls()[id] ?? null;
  }

  private getGridWidth(): number {
    const gridElement = this.hostRef.nativeElement.querySelector('gridster') as HTMLElement | null;
    return gridElement?.clientWidth ?? this.hostRef.nativeElement.clientWidth;
  }

  private createObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = (entry.target as HTMLElement).dataset['widgetId'];
        if (!id) continue;
        this.loadWidget(id);
        this.observer?.unobserve(entry.target);
      }
    }, { rootMargin: '250px 0px', threshold: 0.01 });
  }

  private createResizeObserver(): void {
    this.resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      this.syncSectionWidths(entry.contentRect.width);
    });

    this.resizeObserver.observe(this.hostRef.nativeElement);
  }

  private syncSectionWidths(containerWidth: number): void {
    if (!containerWidth || containerWidth <= 0) return;

    this.refreshGridOptions();
  }

  private observeHosts(): void {
    for (const ref of this.widgetHosts.toArray()) {
      const el = ref.nativeElement;
      const id = el.dataset['widgetId'];
      if (!id || this.isLoaded(id)) continue;
      this.observer?.observe(el);
    }
  }

  private loadWidget(id: string): void {
    if (this.isLoaded(id)) return;
    const item = this.getAllItems().find((dashboardItem) => dashboardItem.id === id);
    if (!item) return;

    this.loaded.update(s => ({ ...s, [id]: true }));
    this.safeUrls.update(s => ({
      ...s,
      [id]: this.sanitizer.bypassSecurityTrustResourceUrl(this.normalizeRemoteEntry(item.remoteEntry)),
    }));
  }

  private normalizeRemoteEntry(remoteEntry: string): string {
    try {
      const url = new URL(remoteEntry);
      const host = url.hostname.replace(/^www\./, '');
      const isYouTube = host === 'youtube.com' || host === 'youtube-nocookie.com' || host === 'youtu.be';

      if (isYouTube) {
        url.searchParams.set('origin', window.location.origin);
      }

      return url.toString();
    } catch {
      return remoteEntry;
    }
  }

  private getAllItems(): MfeItem[] {
    const items: MfeItem[] = [];
    for (const section of this.sections) {
      if (section.kind === 'flat') {
        items.push(...section.items);
        continue;
      }
      for (const tab of section.tabs) {
        items.push(...tab.items);
      }
    }
    return items;
  }

  private buildSections(layouts: PageSectionLayout[]): SectionView[] {
    return layouts.map((section, sectionIndex) => {
      const sectionOptions = this.createSectionOptions(section);

      if (this.isGroupedSection(section.sectionLayout)) {
        return {
          sectionName: section.sectionName,
          kind: 'grouped',
          tabs: section.sectionLayout.map((group, tabIndex) => ({
            tabName: group.tabName,
            items: this.mapContainersToItems(group.containers, sectionIndex, tabIndex),
          })),
          activeTab: 0,
          options: sectionOptions,
          gridApi: undefined,
        };
      }

      return {
        sectionName: section.sectionName,
        kind: 'flat',
        items: this.mapContainersToItems(section.sectionLayout, sectionIndex, null),
        options: sectionOptions,
        gridApi: undefined,
      };
    });
  }

  private createSectionOptions(section: PageSectionLayout): GridsterConfig {
    const maxCols = section.sectionCols ?? 12;
    const maxRows = section.sectionRows ?? 100;

    return {
      gridType: GridType.ScrollVertical,
      setGridSize: true,
      compactType: CompactType.None,
      displayGrid: DisplayGrid.None,
      margin: 10,
      minCols: 1,
      maxCols,
      minRows: 1,
      maxRows,
      pushItems: true,
      swap: false,
      draggable: { enabled: true, ignoreContent: true, dragHandleClass: 'card__head' },
      resizable: { enabled: true },
      disableWindowResize: false,
      disableScrollHorizontal: false,
      disableScrollVertical: true,
      swapWhileDragging: false,
      initCallback: (_, gridsterApi) => {
        const currentSection = this.sections.find((current) => current.sectionName === section.sectionName);
        if (!currentSection) return;
        currentSection.gridApi = {
          resize: gridsterApi.resize,
          calculateLayout: gridsterApi.calculateLayout,
        };
      },
      itemResizeCallback: () => this.validateLayout(this.getGridWidth()),
    };
  }

  private refreshGridOptions(): void {
    console.log('[grid-debug] refreshGridOptions:start', { sections: this.sections.length });
    for (const section of this.sections) {
      console.log('[grid-debug] refreshGridOptions:section', {
        section: section.sectionName,
        hasApi: !!section.gridApi,
      });
      section.gridApi?.resize();
      section.gridApi?.calculateLayout();
    }
    console.log('[grid-debug] refreshGridOptions:end');
  }

  private expandNeighborIntoGap(items: MfeItem[], removed: MfeItem): MfeItem[] {
    const gapX = removed.x;
    const gapY = removed.y;
    const gapCols = removed.cols;
    const gapRows = removed.rows;

    console.log('[grid-debug] gap:start', {
      removedId: removed.id,
      gapX,
      gapY,
      gapCols,
      gapRows,
      candidateCount: items.length,
    });

    if (gapX == null || gapY == null || gapCols == null || gapRows == null) {
      console.log('[grid-debug] gap:invalid-removed-rect', { removed });
      return items;
    }

    const left = items.find((item) =>
      item.x != null && item.y != null && item.cols != null && item.rows != null
      && item.y === gapY
      && item.rows === gapRows
      && item.x + item.cols === gapX
    );

    console.log('[grid-debug] gap:candidate-left', { candidateId: left?.id ?? null });

    if (left && this.canResizeItem(left, { x: left.x!, y: left.y!, cols: left.cols! + gapCols, rows: left.rows! }, items)) {
      console.log('[grid-debug] gap:apply-left', {
        id: left.id,
        from: { x: left.x, y: left.y, cols: left.cols, rows: left.rows },
        to: { x: left.x, y: left.y, cols: left.cols! + gapCols, rows: left.rows },
      });
      return items.map((item) => item.id === left.id ? { ...item, cols: item.cols! + gapCols } : item);
    }

    const leftGroup = items.filter((item) =>
      item.x != null && item.y != null && item.cols != null && item.rows != null
      && item.x + item.cols === gapX
      && item.y >= gapY
      && item.y + item.rows <= gapY + gapRows,
    );

    if (
      leftGroup.length > 1
      && this.coversRange(leftGroup, gapY, gapRows, 'vertical')
      && leftGroup.every((item) => this.canResizeItem(item, {
        x: item.x!,
        y: item.y!,
        cols: item.cols! + gapCols,
        rows: item.rows!,
      }, items))
    ) {
      console.log('[grid-debug] gap:apply-left-group', {
        ids: leftGroup.map((item) => item.id),
      });

      const leftIds = new Set(leftGroup.map((item) => item.id));
      return items.map((item) => leftIds.has(item.id) ? { ...item, cols: item.cols! + gapCols } : item);
    }

    const right = items.find((item) =>
      item.x != null && item.y != null && item.cols != null && item.rows != null
      && item.y === gapY
      && item.rows === gapRows
      && item.x === gapX + gapCols
    );

    console.log('[grid-debug] gap:candidate-right', { candidateId: right?.id ?? null });

    if (right && this.canResizeItem(right, { x: gapX, y: right.y!, cols: right.cols! + gapCols, rows: right.rows! }, items)) {
      console.log('[grid-debug] gap:apply-right', {
        id: right.id,
        from: { x: right.x, y: right.y, cols: right.cols, rows: right.rows },
        to: { x: gapX, y: right.y, cols: right.cols! + gapCols, rows: right.rows },
      });
      return items.map((item) => item.id === right.id ? { ...item, x: gapX, cols: item.cols! + gapCols } : item);
    }

    const rightGroup = items.filter((item) =>
      item.x != null && item.y != null && item.cols != null && item.rows != null
      && item.x === gapX + gapCols
      && item.y >= gapY
      && item.y + item.rows <= gapY + gapRows,
    );

    if (
      rightGroup.length > 1
      && this.coversRange(rightGroup, gapY, gapRows, 'vertical')
      && rightGroup.every((item) => this.canResizeItem(item, {
        x: gapX,
        y: item.y!,
        cols: item.cols! + gapCols,
        rows: item.rows!,
      }, items))
    ) {
      console.log('[grid-debug] gap:apply-right-group', {
        ids: rightGroup.map((item) => item.id),
      });

      const rightIds = new Set(rightGroup.map((item) => item.id));
      return items.map((item) => rightIds.has(item.id) ? { ...item, x: gapX, cols: item.cols! + gapCols } : item);
    }

    const top = items.find((item) =>
      item.x != null && item.y != null && item.cols != null && item.rows != null
      && item.x === gapX
      && item.cols === gapCols
      && item.y + item.rows === gapY
    );

    console.log('[grid-debug] gap:candidate-top', { candidateId: top?.id ?? null });

    if (top && this.canResizeItem(top, { x: top.x!, y: top.y!, cols: top.cols!, rows: top.rows! + gapRows }, items)) {
      console.log('[grid-debug] gap:apply-top', {
        id: top.id,
        from: { x: top.x, y: top.y, cols: top.cols, rows: top.rows },
        to: { x: top.x, y: top.y, cols: top.cols, rows: top.rows! + gapRows },
      });
      return items.map((item) => item.id === top.id ? { ...item, rows: item.rows! + gapRows } : item);
    }

    const topGroup = items.filter((item) =>
      item.x != null && item.y != null && item.cols != null && item.rows != null
      && item.y + item.rows === gapY
      && item.x >= gapX
      && item.x + item.cols <= gapX + gapCols,
    );

    if (
      topGroup.length > 1
      && this.coversRange(topGroup, gapX, gapCols, 'horizontal')
      && topGroup.every((item) => this.canResizeItem(item, {
        x: item.x!,
        y: item.y!,
        cols: item.cols!,
        rows: item.rows! + gapRows,
      }, items))
    ) {
      console.log('[grid-debug] gap:apply-top-group', {
        ids: topGroup.map((item) => item.id),
      });

      const topIds = new Set(topGroup.map((item) => item.id));
      return items.map((item) => topIds.has(item.id) ? { ...item, rows: item.rows! + gapRows } : item);
    }

    const bottom = items.find((item) =>
      item.x != null && item.y != null && item.cols != null && item.rows != null
      && item.x === gapX
      && item.cols === gapCols
      && item.y === gapY + gapRows
    );

    console.log('[grid-debug] gap:candidate-bottom', { candidateId: bottom?.id ?? null });

    if (bottom && this.canResizeItem(bottom, { x: bottom.x!, y: gapY, cols: bottom.cols!, rows: bottom.rows! + gapRows }, items)) {
      console.log('[grid-debug] gap:apply-bottom', {
        id: bottom.id,
        from: { x: bottom.x, y: bottom.y, cols: bottom.cols, rows: bottom.rows },
        to: { x: bottom.x, y: gapY, cols: bottom.cols, rows: bottom.rows! + gapRows },
      });
      return items.map((item) => item.id === bottom.id ? { ...item, y: gapY, rows: item.rows! + gapRows } : item);
    }

    const bottomGroup = items.filter((item) =>
      item.x != null && item.y != null && item.cols != null && item.rows != null
      && item.y === gapY + gapRows
      && item.x >= gapX
      && item.x + item.cols <= gapX + gapCols,
    );

    if (
      bottomGroup.length > 1
      && this.coversRange(bottomGroup, gapX, gapCols, 'horizontal')
      && bottomGroup.every((item) => this.canResizeItem(item, {
        x: item.x!,
        y: gapY,
        cols: item.cols!,
        rows: item.rows! + gapRows,
      }, items))
    ) {
      console.log('[grid-debug] gap:apply-bottom-group', {
        ids: bottomGroup.map((item) => item.id),
      });

      const bottomIds = new Set(bottomGroup.map((item) => item.id));
      return items.map((item) => bottomIds.has(item.id) ? { ...item, y: gapY, rows: item.rows! + gapRows } : item);
    }

    console.log('[grid-debug] gap:no-candidate-applied', {
      removedId: removed.id,
      remainingItems: items.map((item) => ({ id: item.id, x: item.x, y: item.y, cols: item.cols, rows: item.rows })),
    });

    return items;
  }

  private coversRange(
    candidates: MfeItem[],
    start: number,
    length: number,
    axis: 'horizontal' | 'vertical',
  ): boolean {
    const end = start + length;
    const segments = candidates
      .map((item) => {
        if (axis === 'vertical') {
          return { start: item.y!, end: item.y! + item.rows! };
        }

        return { start: item.x!, end: item.x! + item.cols! };
      })
      .sort((first, second) => first.start - second.start);

    let cursor = start;
    for (const segment of segments) {
      if (segment.start > cursor) {
        return false;
      }

      cursor = Math.max(cursor, segment.end);
      if (cursor >= end) {
        return true;
      }
    }

    return cursor >= end;
  }

  private canResizeItem(
    target: MfeItem,
    nextRect: { x: number; y: number; cols: number; rows: number },
    items: MfeItem[],
  ): boolean {
    if (nextRect.cols < 1 || nextRect.rows < 1) return false;

    const nextRight = nextRect.x + nextRect.cols;
    const nextBottom = nextRect.y + nextRect.rows;

    for (const item of items) {
      if (item.id === target.id) continue;
      if (item.x == null || item.y == null || item.cols == null || item.rows == null) continue;

      const right = item.x + item.cols;
      const bottom = item.y + item.rows;
      const overlap = nextRect.x < right && nextRight > item.x && nextRect.y < bottom && nextBottom > item.y;

      if (overlap) {
        console.log('[grid-debug] canResizeItem:collision', {
          targetId: target.id,
          nextRect,
          blockingItem: { id: item.id, x: item.x, y: item.y, cols: item.cols, rows: item.rows },
        });
        return false;
      }
    }

    console.log('[grid-debug] canResizeItem:ok', {
      targetId: target.id,
      nextRect,
    });

    return true;
  }

  private mapContainersToItems(containers: PageContainer[], sectionIndex: number, tabIndex: number | null): MfeItem[] {
    return containers
      .map((container, index) => {
        const source = container.elementToLoad;
        if (!this.isMfe(source)) return null;

        return {
          id: this.buildItemId(sectionIndex, tabIndex, container.id, index),
          title: source.title,
          remoteEntry: source.remoteEntry,
          cols: container.cols,
          rows: container.rows,
          x: container.x,
          y: container.y,
        };
      })
      .filter((item): item is MfeItem => !!item);
  }

  private isGroupedSection(layout: PageContainer[] | GroupedContainers[]): layout is GroupedContainers[] {
    return layout.length > 0 && 'tabName' in layout[0];
  }

  private isMfe(value: Mfe | { name: string } | null): value is Mfe {
    return !!value && 'remoteEntry' in value;
  }

  private buildItemId(sectionIndex: number, tabIndex: number | null, containerId: string, itemIndex: number): string {
    const tab = tabIndex === null ? 'flat' : `tab-${tabIndex}`;
    return `section-${sectionIndex}-${tab}-${containerId}-${itemIndex}`;
  }
}
