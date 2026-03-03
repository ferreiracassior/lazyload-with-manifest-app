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

interface MfeItem extends GridsterItemConfig {
  id: string;
  title: string;
  remoteEntry: string;
}

const MFE_REMOTES: Array<{ id: string; title: string; remoteEntry: string }> = [
  { id: 'mfe-01', title: 'YouTube 01', remoteEntry: 'https://www.youtube.com/embed/2ePf9rue1Ao' },
  { id: 'mfe-02', title: 'YouTube 02', remoteEntry: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'mfe-03', title: 'YouTube 03', remoteEntry: 'https://www.youtube.com/embed/M7lc1UVf-VE' },
  { id: 'mfe-04', title: 'YouTube 04', remoteEntry: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { id: 'mfe-05', title: 'YouTube 05', remoteEntry: 'https://www.youtube.com/embed/3fumBcKC6RE' },
  { id: 'mfe-06', title: 'YouTube 06', remoteEntry: 'https://www.youtube.com/embed/ysz5S6PUM-U' },
  { id: 'mfe-07', title: 'YouTube 07', remoteEntry: 'https://www.youtube.com/embed/ScMzIvxBSi4' },
  { id: 'mfe-08', title: 'YouTube 08', remoteEntry: 'https://www.youtube.com/embed/Zi_XLOBDo_Y' },
  { id: 'mfe-09', title: 'YouTube 09', remoteEntry: 'https://www.youtube.com/embed/J---aiyznGQ' },
  { id: 'mfe-10', title: 'YouTube 10', remoteEntry: 'https://www.youtube.com/embed/9bZkp7q19f0' },

  { id: 'mfe-11', title: 'Vimeo 01', remoteEntry: 'https://player.vimeo.com/video/76979871' },
  { id: 'mfe-12', title: 'Vimeo 02', remoteEntry: 'https://player.vimeo.com/video/22439234' },
  { id: 'mfe-13', title: 'Vimeo 03', remoteEntry: 'https://player.vimeo.com/video/146022717' },
  { id: 'mfe-14', title: 'Vimeo 04', remoteEntry: 'https://player.vimeo.com/video/1084537' },
  { id: 'mfe-15', title: 'Vimeo 05', remoteEntry: 'https://player.vimeo.com/video/395212534' },
  { id: 'mfe-16', title: 'Vimeo 06', remoteEntry: 'https://player.vimeo.com/video/357274789' },
  { id: 'mfe-17', title: 'Vimeo 07', remoteEntry: 'https://player.vimeo.com/video/90509568' },
  { id: 'mfe-18', title: 'Vimeo 08', remoteEntry: 'https://player.vimeo.com/video/32756507' },
  { id: 'mfe-19', title: 'Vimeo 09', remoteEntry: 'https://player.vimeo.com/video/148751763' },
  { id: 'mfe-20', title: 'Vimeo 10', remoteEntry: 'https://player.vimeo.com/video/28066272' },

  { id: 'mfe-21', title: 'Spotify 01', remoteEntry: 'https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC' },
  { id: 'mfe-22', title: 'Spotify 02', remoteEntry: 'https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3' },
  { id: 'mfe-23', title: 'Spotify 03', remoteEntry: 'https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b' },
  { id: 'mfe-24', title: 'Spotify 04', remoteEntry: 'https://open.spotify.com/embed/track/1AhDOtG9vPSOmsWgNW0BEY' },
  { id: 'mfe-25', title: 'Spotify 05', remoteEntry: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M' },
  { id: 'mfe-26', title: 'Spotify 06', remoteEntry: 'https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5' },

  { id: 'mfe-27', title: 'OSM 01', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=-46.72%2C-23.65%2C-46.57%2C-23.52&layer=mapnik' },
  { id: 'mfe-28', title: 'OSM 02', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=-74.10%2C40.67%2C-73.87%2C40.84&layer=mapnik' },
  { id: 'mfe-29', title: 'OSM 03', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=-0.20%2C51.47%2C0.03%2C51.57&layer=mapnik' },
  { id: 'mfe-30', title: 'OSM 04', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=139.67%2C35.62%2C139.82%2C35.73&layer=mapnik' },
  { id: 'mfe-31', title: 'OSM 05', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=-43.31%2C-23.05%2C-43.14%2C-22.86&layer=mapnik' },
  { id: 'mfe-32', title: 'OSM 06', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=2.25%2C48.82%2C2.42%2C48.90&layer=mapnik' },

  { id: 'mfe-33', title: 'Dailymotion 01', remoteEntry: 'https://www.dailymotion.com/embed/video/x84sh87' },
  { id: 'mfe-34', title: 'Dailymotion 02', remoteEntry: 'https://www.dailymotion.com/embed/video/x7vo4f4' },

  { id: 'mfe-35', title: 'Giphy 01', remoteEntry: 'https://giphy.com/embed/ICOgUNjpvO0PC' },
  { id: 'mfe-36', title: 'Giphy 02', remoteEntry: 'https://giphy.com/embed/3oEjI6SIIHBdRxXI40' },

  { id: 'mfe-37', title: 'YouTube 11', remoteEntry: 'https://www.youtube.com/embed/t4H_Zoh7G5A' },
  { id: 'mfe-38', title: 'YouTube 12', remoteEntry: 'https://www.youtube.com/embed/ktvTqknDobU' },
  { id: 'mfe-39', title: 'YouTube 13', remoteEntry: 'https://www.youtube.com/embed/L_jWHffIx5E' },
  { id: 'mfe-40', title: 'YouTube 14', remoteEntry: 'https://www.youtube.com/embed/eVTXPUF4Oz4' },
];

@Component({
  selector: 'app-home-orchestrator',
  standalone: true,
  imports: [CommonModule, Gridster, GridsterItem],
  templateUrl: './home-orchestrator.component.html',
  styles: [`
    // filepath: /home/cassio/git/lazyload-with-manifest-app/src/app/home/home-orchestrator.component.ts
    :host {
      display: block;
      padding: 16px;
      overflow-x: hidden;
      box-sizing: border-box;
      width: 100%;
    }
    gridster {
      min-height: 100vh;
      width: 100%;
      box-sizing: border-box;
    }
    .card {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      border: 1px solid #2a3447;
      background: #111827;
      color: #e5e7eb;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .card__head {
      padding: 6px 8px;
      font-size: 12px;
      border-bottom: 1px solid #2a3447;
      cursor: grab;
      user-select: none;
    }
    .card__body { flex: 1; min-height: 0; }
    iframe { width: 100%; height: 100%; border: 0; }
    .skeleton { width: 100%; height: 100%; display: grid; place-items: center; opacity: .7; }
  `],
})
export class HomeOrchestratorComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('widgetHost', { read: ElementRef }) widgetHosts!: QueryList<ElementRef<HTMLElement>>;
  private sanitizer = inject(DomSanitizer);
  private observer?: IntersectionObserver;

  options: GridsterConfig = {
    gridType: GridType.ScrollVertical,
    compactType: CompactType.CompactUpAndLeft,
    displayGrid: DisplayGrid.None,
    margin: 10,
    minCols: 1,
    maxCols: 12,
    minRows: 1,
    maxRows: 100,
    pushItems: true,
    swap: false,
    draggable: { enabled: true, ignoreContent: true, dragHandleClass: 'card__head' },
    resizable: { enabled: true },
  };

  dashboard: MfeItem[] = MFE_REMOTES.map((mfe, i) => ({
    id: mfe.id,
    title: mfe.title,
    remoteEntry: mfe.remoteEntry,
    cols: (i % 3 === 0 ? 4 : 3),
    rows: (i % 4 === 0 ? 2 : 3),
    x: (i * 3) % 12,
    y: Math.floor(i / 4) * 2,
  }));

  loaded = signal<Record<string, boolean>>({});
  safeUrls = signal<Record<string, SafeResourceUrl>>({});

  ngAfterViewInit(): void {
    this.createObserver();
    this.widgetHosts.changes.subscribe(() => this.observeHosts());
    queueMicrotask(() => this.observeHosts());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  isLoaded(id: string): boolean {
    return !!this.loaded()[id];
  }

  getSafeUrl(id: string): SafeResourceUrl | null {
    return this.safeUrls()[id] ?? null;
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
    const item = this.dashboard.find((d) => d.id === id);
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
}
