import {
  NgStyle
} from "./chunk-YTOZPRAQ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  computed,
  debounceTime,
  effect,
  forwardRef,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  timer,
  untracked,
  viewChild,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵviewQuerySignal
} from "./chunk-ALPM7QOK.js";

// node_modules/angular-gridster2/fesm2022/angular-gridster2.mjs
var _c0 = ["*"];
function Gridster_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 0);
  }
  if (rf & 2) {
    const ɵ$index_1_r1 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.gridRenderer.getGridColumnStyle(ɵ$index_1_r1));
  }
}
function Gridster_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ɵ$index_4_r3 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.gridRenderer.getGridRowStyle(ɵ$index_4_r3));
  }
}
function GridsterItem_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 8);
    ɵɵdomListener("mousedown", function GridsterItem_Conditional_1_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    })("touchstart", function GridsterItem_Conditional_1_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    });
    ɵɵdomElementEnd();
  }
}
function GridsterItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 9);
    ɵɵdomListener("mousedown", function GridsterItem_Conditional_2_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    })("touchstart", function GridsterItem_Conditional_2_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    });
    ɵɵdomElementEnd();
  }
}
function GridsterItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 10);
    ɵɵdomListener("mousedown", function GridsterItem_Conditional_3_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    })("touchstart", function GridsterItem_Conditional_3_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    });
    ɵɵdomElementEnd();
  }
}
function GridsterItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 11);
    ɵɵdomListener("mousedown", function GridsterItem_Conditional_4_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    })("touchstart", function GridsterItem_Conditional_4_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    });
    ɵɵdomElementEnd();
  }
}
function GridsterItem_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 12);
    ɵɵdomListener("mousedown", function GridsterItem_Conditional_5_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    })("touchstart", function GridsterItem_Conditional_5_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    });
    ɵɵdomElementEnd();
  }
}
function GridsterItem_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 13);
    ɵɵdomListener("mousedown", function GridsterItem_Conditional_6_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    })("touchstart", function GridsterItem_Conditional_6_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    });
    ɵɵdomElementEnd();
  }
}
function GridsterItem_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 14);
    ɵɵdomListener("mousedown", function GridsterItem_Conditional_7_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    })("touchstart", function GridsterItem_Conditional_7_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    });
    ɵɵdomElementEnd();
  }
}
function GridsterItem_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 15);
    ɵɵdomListener("mousedown", function GridsterItem_Conditional_8_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    })("touchstart", function GridsterItem_Conditional_8_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resize.dragStartDelay($event));
    });
    ɵɵdomElementEnd();
  }
}
var GridType;
(function(GridType2) {
  GridType2["Fit"] = "fit";
  GridType2["ScrollVertical"] = "scrollVertical";
  GridType2["ScrollHorizontal"] = "scrollHorizontal";
  GridType2["Fixed"] = "fixed";
  GridType2["VerticalFixed"] = "verticalFixed";
  GridType2["HorizontalFixed"] = "horizontalFixed";
})(GridType || (GridType = {}));
var DisplayGrid;
(function(DisplayGrid2) {
  DisplayGrid2["Always"] = "always";
  DisplayGrid2["OnDragAndResize"] = "onDrag&Resize";
  DisplayGrid2["None"] = "none";
})(DisplayGrid || (DisplayGrid = {}));
var CompactType;
(function(CompactType2) {
  CompactType2["None"] = "none";
  CompactType2["CompactUp"] = "compactUp";
  CompactType2["CompactLeft"] = "compactLeft";
  CompactType2["CompactUpAndLeft"] = "compactUp&Left";
  CompactType2["CompactLeftAndUp"] = "compactLeft&Up";
  CompactType2["CompactRight"] = "compactRight";
  CompactType2["CompactUpAndRight"] = "compactUp&Right";
  CompactType2["CompactRightAndUp"] = "compactRight&Up";
  CompactType2["CompactDown"] = "compactDown";
  CompactType2["CompactDownAndLeft"] = "compactDown&Left";
  CompactType2["CompactLeftAndDown"] = "compactLeft&Down";
  CompactType2["CompactDownAndRight"] = "compactDown&Right";
  CompactType2["CompactRightAndDown"] = "compactRight&Down";
  CompactType2["CompactGrid"] = "compactGrid";
})(CompactType || (CompactType = {}));
var DirTypes;
(function(DirTypes2) {
  DirTypes2["LTR"] = "ltr";
  DirTypes2["RTL"] = "rtl";
})(DirTypes || (DirTypes = {}));
var GridsterCompact = class {
  gridster;
  constructor(gridster) {
    this.gridster = gridster;
  }
  destroy() {
    this.gridster = null;
  }
  checkCompact() {
    const $options = this.gridster.$options();
    if ($options.compactType !== CompactType.None) {
      if ($options.compactType === CompactType.CompactUp) {
        this.checkCompactMovement("y", -1);
      } else if ($options.compactType === CompactType.CompactLeft) {
        this.checkCompactMovement("x", -1);
      } else if ($options.compactType === CompactType.CompactUpAndLeft) {
        this.checkCompactMovement("y", -1);
        this.checkCompactMovement("x", -1);
      } else if ($options.compactType === CompactType.CompactLeftAndUp) {
        this.checkCompactMovement("x", -1);
        this.checkCompactMovement("y", -1);
      } else if ($options.compactType === CompactType.CompactRight) {
        this.checkCompactMovement("x", 1);
      } else if ($options.compactType === CompactType.CompactUpAndRight) {
        this.checkCompactMovement("y", -1);
        this.checkCompactMovement("x", 1);
      } else if ($options.compactType === CompactType.CompactRightAndUp) {
        this.checkCompactMovement("x", 1);
        this.checkCompactMovement("y", -1);
      } else if ($options.compactType === CompactType.CompactDown) {
        this.checkCompactMovement("y", 1);
      } else if ($options.compactType === CompactType.CompactDownAndLeft) {
        this.checkCompactMovement("y", 1);
        this.checkCompactMovement("x", -1);
      } else if ($options.compactType === CompactType.CompactDownAndRight) {
        this.checkCompactMovement("y", 1);
        this.checkCompactMovement("x", 1);
      } else if ($options.compactType === CompactType.CompactLeftAndDown) {
        this.checkCompactMovement("x", -1);
        this.checkCompactMovement("y", 1);
      } else if ($options.compactType === CompactType.CompactRightAndDown) {
        this.checkCompactMovement("x", 1);
        this.checkCompactMovement("y", 1);
      } else if ($options.compactType === CompactType.CompactGrid) {
        this.checkCompactGrid();
      }
    }
  }
  checkCompactItem(item) {
    const $options = this.gridster.$options();
    if ($options.compactType !== CompactType.None) {
      if ($options.compactType === CompactType.CompactUp) {
        this.moveTillCollision(item, "y", -1);
      } else if ($options.compactType === CompactType.CompactLeft) {
        this.moveTillCollision(item, "x", -1);
      } else if ($options.compactType === CompactType.CompactUpAndLeft) {
        this.moveTillCollision(item, "y", -1);
        this.moveTillCollision(item, "x", -1);
      } else if ($options.compactType === CompactType.CompactLeftAndUp) {
        this.moveTillCollision(item, "x", -1);
        this.moveTillCollision(item, "y", -1);
      } else if ($options.compactType === CompactType.CompactUpAndRight) {
        this.moveTillCollision(item, "y", -1);
        this.moveTillCollision(item, "x", 1);
      } else if ($options.compactType === CompactType.CompactDown) {
        this.moveTillCollision(item, "y", 1);
      } else if ($options.compactType === CompactType.CompactDownAndLeft) {
        this.moveTillCollision(item, "y", 1);
        this.moveTillCollision(item, "x", -1);
      } else if ($options.compactType === CompactType.CompactLeftAndDown) {
        this.moveTillCollision(item, "x", -1);
        this.moveTillCollision(item, "y", 1);
      } else if ($options.compactType === CompactType.CompactDownAndRight) {
        this.moveTillCollision(item, "y", 1);
        this.moveTillCollision(item, "x", 1);
      } else if ($options.compactType === CompactType.CompactRightAndDown) {
        this.moveTillCollision(item, "x", 1);
        this.moveTillCollision(item, "y", 1);
      } else if ($options.compactType === CompactType.CompactGrid) {
        this.moveToGridPosition(item);
      }
    }
  }
  checkCompactMovement(direction, delta) {
    let widgetMoved = false;
    this.gridster.grid.forEach((widget) => {
      if (widget.$item().compactEnabled !== false) {
        const moved = this.moveTillCollision(widget.$item(), direction, delta);
        if (moved) {
          widgetMoved = true;
          widget.item()[direction] = widget.$item()[direction];
          widget.itemChanged();
        }
      }
    });
    if (widgetMoved) {
      this.checkCompact();
    }
  }
  moveTillCollision(item, direction, delta) {
    item[direction] += delta;
    if (this.gridster.checkCollision(item)) {
      item[direction] -= delta;
      return false;
    } else {
      this.moveTillCollision(item, direction, delta);
      return true;
    }
  }
  checkCompactGrid() {
    const sortedItems = this.gridster.grid.filter((widget) => widget.$item().compactEnabled !== false).sort((a, b) => {
      if (a.$item().y !== b.$item().y) {
        return a.$item().y - b.$item().y;
      }
      return a.$item().x - b.$item().x;
    });
    let currentY = 0;
    let currentX = 0;
    let maxYInRow = 0;
    sortedItems.forEach((widget) => {
      const item = widget.$item();
      if (currentX + item.cols > this.gridster.columns) {
        currentY = maxYInRow;
        currentX = 0;
        maxYInRow = currentY;
      }
      const oldX = item.x;
      const oldY = item.y;
      item.x = currentX;
      item.y = currentY;
      if (oldX !== item.x || oldY !== item.y) {
        widget.item().x = item.x;
        widget.item().y = item.y;
        widget.itemChanged();
      }
      currentX += item.cols;
      maxYInRow = Math.max(maxYInRow, currentY + item.rows);
    });
  }
  moveToGridPosition(item) {
    let currentY = 0;
    let currentX = 0;
    let maxYInRow = 0;
    const sortedItems = this.gridster.grid.filter((widget) => widget.$item() !== item).sort((a, b) => {
      if (a.$item().y !== b.$item().y) {
        return a.$item().y - b.$item().y;
      }
      return a.$item().x - b.$item().x;
    });
    for (const widget of sortedItems) {
      const existingItem = widget.$item();
      if (currentX + existingItem.cols > this.gridster.columns) {
        currentY = maxYInRow;
        currentX = 0;
        maxYInRow = currentY;
      }
      if (currentY < existingItem.y + existingItem.rows && currentY + item.rows > existingItem.y && currentX < existingItem.x + existingItem.cols && currentX + item.cols > existingItem.x) {
        currentX = existingItem.x + existingItem.cols;
        currentY = existingItem.y;
        maxYInRow = Math.max(maxYInRow, currentY + existingItem.rows);
      } else {
        currentX += existingItem.cols;
        maxYInRow = Math.max(maxYInRow, currentY + existingItem.rows);
      }
    }
    if (currentX + item.cols > this.gridster.columns) {
      currentY = maxYInRow;
      currentX = 0;
    }
    item.x = currentX;
    item.y = currentY;
  }
};
var GridsterConfigService = {
  gridType: GridType.Fit,
  // 'fit' will fit the items in the container without scroll;
  scale: 1,
  // scale param to zoom in/zoom out
  // 'scrollVertical' will fit on width and height of the items will be the same as the width
  // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
  // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
  // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
  // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
  fixedColWidth: 250,
  // fixed col width for gridType: 'fixed'
  fixedRowHeight: 250,
  // fixed row height for gridType: 'fixed'
  keepFixedHeightInMobile: false,
  // keep the height from fixed gridType in mobile layout
  keepFixedWidthInMobile: false,
  // keep the width from fixed gridType in mobile layout
  setGridSize: false,
  // sets grid size depending on content
  compactType: CompactType.None,
  // compact items: 'none' | 'compactUp' | 'compactLeft' | 'compactUp&Left' | 'compactLeft&Up'
  mobileBreakpoint: 640,
  // if the screen is not wider that this, remove the grid layout and stack the items
  useBodyForBreakpoint: false,
  // whether to use the body width to determine the mobile breakpoint. Uses the element width when false.
  allowMultiLayer: false,
  defaultLayerIndex: 0,
  maxLayerIndex: 2,
  baseLayerIndex: 1,
  minCols: 1,
  // minimum amount of columns in the grid
  maxCols: 100,
  // maximum amount of columns in the grid
  minRows: 1,
  // minimum amount of rows in the grid
  maxRows: 100,
  // maximum amount of rows in the grid
  defaultItemCols: 1,
  // default width of an item in columns
  defaultItemRows: 1,
  // default height of an item in rows
  itemAspectRatio: null,
  // set a fixed aspect ratio for an item to have in cols/rows e.g. 1/1 or 4/3 or 16/9
  maxItemCols: 50,
  // max item number of cols
  maxItemRows: 50,
  // max item number of rows
  minItemCols: 1,
  // min item number of columns
  minItemRows: 1,
  // min item number of rows
  minItemArea: 1,
  // min item area: cols * rows
  maxItemArea: 2500,
  // max item area: cols * rows
  addEmptyRowsCount: 0,
  // add a number of extra empty rows at the end
  rowHeightRatio: 1,
  // row height ratio from column width
  margin: 10,
  // margin between grid items
  outerMargin: true,
  // if margins will apply to the sides of the container
  outerMarginTop: null,
  // override outer margin for grid
  outerMarginRight: null,
  // override outer margin for grid
  outerMarginBottom: null,
  // override outer margin for grid
  outerMarginLeft: null,
  // override outer margin for grid
  useTransformPositioning: true,
  // toggle between transform or top/left positioning of items
  scrollSensitivity: 10,
  // margin of the dashboard where to start scrolling
  scrollSpeed: 20,
  // how much to scroll each mouse move when in the scrollSensitivity zone
  initCallback: void 0,
  // callback to call after grid has initialized. Arguments: gridsterComponent
  destroyCallback: void 0,
  // callback to call after grid has destroyed. Arguments: gridsterComponent
  gridSizeChangedCallback: void 0,
  // callback to call after grid has changed size. Arguments: gridsterComponent
  itemChangeCallback: void 0,
  // callback to call for each item when is changes x, y, rows, cols.
  // Arguments: gridsterItem, gridsterItemComponent
  itemResizeCallback: void 0,
  // callback to call for each item when width/height changes.
  // Arguments: gridsterItem, gridsterItemComponent
  itemInitCallback: void 0,
  // callback to call for each item when is initialized.
  // Arguments: gridsterItem, gridsterItemComponent
  itemRemovedCallback: void 0,
  // callback to call for each item when is initialized.
  // Arguments: gridsterItem, gridsterItemComponent
  itemValidateCallback: void 0,
  // callback to call to validate item position/size. Return true if valid.
  // Arguments: gridsterItem
  enableEmptyCellClick: false,
  // enable empty cell click events
  enableEmptyCellContextMenu: false,
  // enable empty cell context menu (right click) events
  enableEmptyCellDrop: false,
  // enable empty cell drop events
  enableEmptyCellDrag: false,
  // enable empty cell drag events
  enableOccupiedCellDrop: false,
  // enable occupied cell drop events
  emptyCellClickCallback: void 0,
  // empty cell click callback
  emptyCellContextMenuCallback: void 0,
  // empty cell context menu (right click) callback
  emptyCellDropCallback: void 0,
  // empty cell drag drop callback. HTML5 Drag & Drop
  emptyCellDragCallback: void 0,
  // empty cell drag and create item like excel cell selection
  emptyCellDragMaxCols: 50,
  // limit empty cell drag max cols
  emptyCellDragMaxRows: 50,
  // limit empty cell drag max rows
  // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
  ignoreMarginInRow: false,
  // ignore the gap between rows for items which span multiple rows (see #162, #224)
  draggable: {
    delayStart: 0,
    // milliseconds to delay the start of drag, useful for touch interaction
    enabled: false,
    // enable/disable draggable items
    ignoreContentClass: "gridster-item-content",
    // default content class to ignore the drag event from
    ignoreContent: false,
    // if true drag will start only from elements from `dragHandleClass`
    dragHandleClass: "drag-handler",
    // drag event only from this class. If `ignoreContent` is true.
    stop: void 0,
    // callback when dragging an item stops.  Accepts Promise return to cancel/approve drag.
    start: void 0,
    // callback when dragging an item starts.
    // Arguments: item, gridsterItem, event
    dropOverItems: false,
    // enable drop items on top other item
    dropOverItemsCallback: void 0
    // callback on drop over another item
    // Arguments: source, target, gridComponent
  },
  resizable: {
    delayStart: 0,
    // milliseconds to delay the start of resize, useful for touch interaction
    enabled: false,
    // enable/disable resizable items
    handles: {
      s: true,
      e: true,
      n: true,
      w: true,
      se: true,
      ne: true,
      sw: true,
      nw: true
    },
    // resizable edges of an item
    stop: void 0,
    // callback when resizing an item stops. Accepts Promise return to cancel/approve resize.
    start: void 0
    // callback when resizing an item starts.
    // Arguments: item, gridsterItem, event
  },
  swap: true,
  // allow items to switch position if drop on top of another
  swapWhileDragging: false,
  // allow items to switch position while dragging
  pushItems: false,
  // push items when resizing and dragging
  disablePushOnDrag: false,
  // disable push on drag
  disablePushOnResize: false,
  // disable push on resize
  pushDirections: {
    north: true,
    east: true,
    south: true,
    west: true
  },
  // control the directions items are pushed
  pushResizeItems: false,
  // on resize of item will shrink adjacent items
  displayGrid: DisplayGrid.OnDragAndResize,
  // display background grid of rows and columns
  disableWindowResize: false,
  // disable the window on resize listener. This will stop grid to recalculate on window resize.
  disableWarnings: false,
  // disable console log warnings about misplacement of grid items
  scrollToNewItems: false,
  // scroll to new items placed in a scrollable view
  disableScrollHorizontal: false,
  // disable horizontal scrolling
  disableScrollVertical: false,
  // disable vertical scrolling
  enableBoundaryControl: false,
  // enable boundary control while dragging items
  disableAutoPositionOnConflict: false,
  // disable auto-position of items on conflict state,
  dirType: DirTypes.LTR
  // page direction, rtl=right to left ltr= left to right, if you use rtl language set dirType to rtl
};
var GridsterUtils = class _GridsterUtils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static merge(obj1, obj2, properties) {
    for (const p in obj2) {
      if (obj2[p] !== void 0 && properties.hasOwnProperty(p)) {
        if (typeof obj2[p] === "object") {
          if (!(p in obj1)) {
            obj1[p] = {};
          }
          obj1[p] = _GridsterUtils.merge(obj1[p], obj2[p], properties[p]);
        } else {
          obj1[p] = obj2[p];
        }
      }
    }
    return obj1;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static checkTouchEvent(e) {
    if (e.clientX === void 0 && e.touches) {
      if (e.touches && e.touches.length) {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length) {
        e.clientX = e.changedTouches[0].clientX;
        e.clientY = e.changedTouches[0].clientY;
      }
    }
  }
  static checkContentClassForEvent(gridster, e) {
    const $options = gridster.$options();
    if ($options.draggable.ignoreContent) {
      if (!_GridsterUtils.checkDragHandleClass(e.target, e.currentTarget, $options.draggable.dragHandleClass, $options.draggable.ignoreContentClass)) {
        return true;
      }
    } else {
      if (_GridsterUtils.checkContentClass(e.target, e.currentTarget, $options.draggable.ignoreContentClass)) {
        return true;
      }
    }
    return false;
  }
  static checkContentClassForEmptyCellClickEvent(gridster, e) {
    const $options = gridster.$options();
    return _GridsterUtils.checkContentClass(e.target, e.currentTarget, $options.draggable.ignoreContentClass) || _GridsterUtils.checkContentClass(e.target, e.currentTarget, $options.draggable.dragHandleClass);
  }
  static checkDragHandleClass(target, current, dragHandleClass, ignoreContentClass) {
    if (!target || target === current) {
      return false;
    }
    if (target.hasAttribute("class")) {
      const classnames = target.getAttribute("class").split(" ");
      if (classnames.indexOf(dragHandleClass) > -1) {
        return true;
      }
      if (classnames.indexOf(ignoreContentClass) > -1) {
        return false;
      }
    }
    return _GridsterUtils.checkDragHandleClass(target.parentNode, current, dragHandleClass, ignoreContentClass);
  }
  static checkContentClass(target, current, contentClass) {
    if (!target || target === current) {
      return false;
    }
    if (target.hasAttribute("class") && target.getAttribute("class").split(" ").indexOf(contentClass) > -1) {
      return true;
    } else {
      return _GridsterUtils.checkContentClass(target.parentNode, current, contentClass);
    }
  }
  static compareItems(a, b) {
    if (a.y > b.y) {
      return -1;
    } else if (a.y < b.y) {
      return 1;
    } else if (a.x > b.x) {
      return -1;
    } else {
      return 1;
    }
  }
};
var GridsterEmptyCell = class {
  gridster;
  initialItem;
  removeEmptyCellClickListenerFn;
  removeEmptyCellTouchendListenerFn;
  removeEmptyCellContextMenuListenerFn;
  removeEmptyCellDropListenerFn;
  removeEmptyCellMousedownListenerFn;
  removeEmptyCellTouchstartListenerFn;
  removeWindowMousemoveListenerFn;
  removeWindowTouchmoveListenerFn;
  removeWindowMouseupListenerFn;
  removeWindowTouchendListenerFn;
  removeEmptyCellDragoverListenerFn;
  removeDocumentDragendListenerFn;
  constructor(gridster) {
    this.gridster = gridster;
  }
  destroy() {
    if (this.gridster.previewStyle) {
      this.gridster.previewStyle();
    }
    this.gridster.movingItem = null;
    this.initialItem = this.gridster = null;
    if (this.removeDocumentDragendListenerFn) {
      this.removeDocumentDragendListenerFn();
      this.removeDocumentDragendListenerFn = null;
    }
  }
  updateOptions() {
    const options = this.gridster.options();
    const $options = this.gridster.$options();
    if ($options.enableEmptyCellClick && !this.removeEmptyCellClickListenerFn && options.emptyCellClickCallback) {
      this.removeEmptyCellClickListenerFn = this.gridster.renderer.listen(this.gridster.el, "click", this.emptyCellClickCb);
      this.removeEmptyCellTouchendListenerFn = this.gridster.renderer.listen(this.gridster.el, "touchend", this.emptyCellClickCb);
    } else if (!$options.enableEmptyCellClick && this.removeEmptyCellClickListenerFn && this.removeEmptyCellTouchendListenerFn) {
      this.removeEmptyCellClickListenerFn();
      this.removeEmptyCellTouchendListenerFn();
      this.removeEmptyCellClickListenerFn = null;
      this.removeEmptyCellTouchendListenerFn = null;
    }
    if ($options.enableEmptyCellContextMenu && !this.removeEmptyCellContextMenuListenerFn && options.emptyCellContextMenuCallback) {
      this.removeEmptyCellContextMenuListenerFn = this.gridster.renderer.listen(this.gridster.el, "contextmenu", this.emptyCellContextMenuCb);
    } else if (!$options.enableEmptyCellContextMenu && this.removeEmptyCellContextMenuListenerFn) {
      this.removeEmptyCellContextMenuListenerFn();
      this.removeEmptyCellContextMenuListenerFn = null;
    }
    if ($options.enableEmptyCellDrop && !this.removeEmptyCellDropListenerFn && options.emptyCellDropCallback) {
      this.removeEmptyCellDropListenerFn = this.gridster.renderer.listen(this.gridster.el, "drop", this.emptyCellDragDrop);
      this.gridster.zone.runOutsideAngular(() => {
        this.removeEmptyCellDragoverListenerFn = this.gridster.renderer.listen(this.gridster.el, "dragover", this.emptyCellDragOver);
      });
      this.removeDocumentDragendListenerFn = this.gridster.renderer.listen("document", "dragend", () => {
        this.gridster.movingItem = null;
        this.gridster.previewStyle();
      });
    } else if (!$options.enableEmptyCellDrop && this.removeEmptyCellDropListenerFn && this.removeEmptyCellDragoverListenerFn && this.removeDocumentDragendListenerFn) {
      this.removeEmptyCellDropListenerFn();
      this.removeEmptyCellDragoverListenerFn();
      this.removeDocumentDragendListenerFn();
      this.removeEmptyCellDragoverListenerFn = null;
      this.removeEmptyCellDropListenerFn = null;
      this.removeDocumentDragendListenerFn = null;
    }
    if ($options.enableEmptyCellDrag && !this.removeEmptyCellMousedownListenerFn && options.emptyCellDragCallback) {
      this.removeEmptyCellMousedownListenerFn = this.gridster.renderer.listen(this.gridster.el, "mousedown", this.emptyCellMouseDown);
      this.removeEmptyCellTouchstartListenerFn = this.gridster.renderer.listen(this.gridster.el, "touchstart", this.emptyCellMouseDown);
    } else if (!$options.enableEmptyCellDrag && this.removeEmptyCellMousedownListenerFn && this.removeEmptyCellTouchstartListenerFn) {
      this.removeEmptyCellMousedownListenerFn();
      this.removeEmptyCellTouchstartListenerFn();
      this.removeEmptyCellMousedownListenerFn = null;
      this.removeEmptyCellTouchstartListenerFn = null;
    }
  }
  emptyCellClickCb = (e) => {
    if (!this.gridster || this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
      return;
    }
    const item = this.getValidItemFromEvent(e);
    if (!item) {
      return;
    }
    const options = this.gridster.options();
    if (options.emptyCellClickCallback) {
      options.emptyCellClickCallback(e, item);
    }
    this.gridster.cdRef.markForCheck();
  };
  emptyCellContextMenuCb = (e) => {
    if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const item = this.getValidItemFromEvent(e);
    if (!item) {
      return;
    }
    const options = this.gridster.options();
    if (options.emptyCellContextMenuCallback) {
      options.emptyCellContextMenuCallback(e, item);
    }
    this.gridster.cdRef.markForCheck();
  };
  emptyCellDragDrop = (e) => {
    const item = this.getValidItemFromEvent(e);
    if (!item) {
      return;
    }
    const options = this.gridster.options();
    if (options.emptyCellDropCallback) {
      options.emptyCellDropCallback(e, item);
    }
    this.gridster.cdRef.markForCheck();
  };
  emptyCellDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const item = this.getValidItemFromEvent(e);
    if (item) {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
      }
      this.gridster.movingItem = item;
    } else {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "none";
      }
      this.gridster.movingItem = null;
    }
    this.gridster.previewStyle();
  };
  emptyCellMouseDown = (e) => {
    if (GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const item = this.getValidItemFromEvent(e);
    const leftMouseButtonCode = 1;
    if (!item || e.buttons !== leftMouseButtonCode && !(e instanceof TouchEvent)) {
      return;
    }
    this.initialItem = item;
    this.gridster.movingItem = item;
    this.gridster.previewStyle();
    this.gridster.zone.runOutsideAngular(() => {
      this.removeWindowMousemoveListenerFn = this.gridster.renderer.listen("window", "mousemove", this.emptyCellMouseMove);
      this.removeWindowTouchmoveListenerFn = this.gridster.renderer.listen("window", "touchmove", this.emptyCellMouseMove);
    });
    this.removeWindowMouseupListenerFn = this.gridster.renderer.listen("window", "mouseup", this.emptyCellMouseUp);
    this.removeWindowTouchendListenerFn = this.gridster.renderer.listen("window", "touchend", this.emptyCellMouseUp);
  };
  emptyCellMouseMove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const item = this.getValidItemFromEvent(e, this.initialItem);
    if (!item) {
      return;
    }
    this.gridster.movingItem = item;
    this.gridster.previewStyle();
  };
  emptyCellMouseUp = (e) => {
    this.removeWindowMousemoveListenerFn();
    this.removeWindowTouchmoveListenerFn();
    this.removeWindowMouseupListenerFn();
    this.removeWindowTouchendListenerFn();
    const item = this.getValidItemFromEvent(e, this.initialItem);
    if (item) {
      this.gridster.movingItem = item;
    }
    const options = this.gridster.options();
    if (options.emptyCellDragCallback && this.gridster.movingItem) {
      options.emptyCellDragCallback(e, this.gridster.movingItem);
    }
    setTimeout(() => {
      this.initialItem = null;
      if (this.gridster) {
        this.gridster.movingItem = null;
        this.gridster.previewStyle();
      }
    });
    this.gridster.cdRef.markForCheck();
  };
  getPixelsX(e, rect) {
    const scale = this.gridster.options().scale;
    if (scale) {
      return (e.clientX - rect.left) / scale + this.gridster.el.scrollLeft - this.gridster.gridRenderer.getLeftMargin();
    }
    return e.clientX + this.gridster.el.scrollLeft - rect.left - this.gridster.gridRenderer.getLeftMargin();
  }
  getPixelsY(e, rect) {
    const scale = this.gridster.options().scale;
    if (scale) {
      return (e.clientY - rect.top) / scale + this.gridster.el.scrollTop - this.gridster.gridRenderer.getTopMargin();
    }
    return e.clientY + this.gridster.el.scrollTop - rect.top - this.gridster.gridRenderer.getTopMargin();
  }
  getValidItemFromEvent(e, oldItem) {
    e.preventDefault();
    e.stopPropagation();
    GridsterUtils.checkTouchEvent(e);
    const rect = this.gridster.el.getBoundingClientRect();
    const x = this.getPixelsX(e, rect);
    const y = this.getPixelsY(e, rect);
    const $options = this.gridster.$options();
    const item = {
      x: this.gridster.pixelsToPositionX(x, Math.floor, true),
      y: this.gridster.pixelsToPositionY(y, Math.floor, true),
      cols: $options.defaultItemCols,
      rows: $options.defaultItemRows
    };
    if (oldItem) {
      item.cols = Math.min(Math.abs(oldItem.x - item.x) + 1, $options.emptyCellDragMaxCols);
      item.rows = Math.min(Math.abs(oldItem.y - item.y) + 1, $options.emptyCellDragMaxRows);
      if (oldItem.x < item.x) {
        item.x = oldItem.x;
      } else if (oldItem.x - item.x > $options.emptyCellDragMaxCols - 1) {
        item.x = this.gridster.movingItem ? this.gridster.movingItem.x : 0;
      }
      if (oldItem.y < item.y) {
        item.y = oldItem.y;
      } else if (oldItem.y - item.y > $options.emptyCellDragMaxRows - 1) {
        item.y = this.gridster.movingItem ? this.gridster.movingItem.y : 0;
      }
    }
    if (!$options.enableOccupiedCellDrop && this.gridster.checkCollision(item)) {
      return;
    }
    return item;
  }
};
var GridsterPreview = class _GridsterPreview {
  el = inject(ElementRef).nativeElement;
  gridster = inject(Gridster);
  renderer = inject(Renderer2);
  previewStyle(item) {
    if (item) {
      this.renderer.setStyle(this.el, "display", "block");
      this.gridster.gridRenderer.updateItem(this.el, item, this.renderer);
    } else {
      this.renderer.setStyle(this.el, "display", "");
    }
  }
  static ɵfac = function GridsterPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridsterPreview)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _GridsterPreview,
    selectors: [["gridster-preview"]],
    decls: 0,
    vars: 0,
    template: function GridsterPreview_Template(rf, ctx) {
    },
    styles: ["gridster-preview{position:absolute;display:none;background:#00000026}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridsterPreview, [{
    type: Component,
    args: [{
      selector: "gridster-preview",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      styles: ["gridster-preview{position:absolute;display:none;background:#00000026}\n"]
    }]
  }], null, null);
})();
var GridsterRenderer = class {
  gridster;
  /**
   * Caches the last grid column styles.
   * This improves the grid responsiveness by caching and reusing the last style object instead of creating a new one.
   */
  lastGridColumnStyles = {};
  /**
   * Caches the last grid column styles.
   * This improves the grid responsiveness by caching and reusing the last style object instead of creating a new one.
   */
  lastGridRowStyles = {};
  constructor(gridster) {
    this.gridster = gridster;
  }
  updateItem(el, item, renderer) {
    const $options = this.gridster.$options();
    if (this.gridster.mobile) {
      this.clearCellPosition(renderer, el);
      if ($options.keepFixedHeightInMobile) {
        renderer.setStyle(el, "height", (item.rows - 1) * $options.margin + item.rows * $options.fixedRowHeight + "px");
      } else {
        renderer.setStyle(el, "height", item.rows * this.gridster.curWidth / item.cols + "px");
      }
      if ($options.keepFixedWidthInMobile) {
        renderer.setStyle(el, "width", $options.fixedColWidth + "px");
      } else {
        renderer.setStyle(el, "width", "");
      }
      renderer.setStyle(el, "margin-bottom", $options.margin + "px");
      renderer.setStyle(el, DirTypes.LTR ? "margin-right" : "margin-left", "");
    } else {
      const x = Math.round(this.gridster.curColWidth * item.x);
      const y = Math.round(this.gridster.curRowHeight * item.y);
      const width = this.gridster.curColWidth * item.cols - $options.margin;
      const height = this.gridster.curRowHeight * item.rows - $options.margin;
      this.setCellPosition(renderer, el, x, y);
      renderer.setStyle(el, "width", width + "px");
      renderer.setStyle(el, "height", height + "px");
      let marginBottom = null;
      let marginRight = null;
      if ($options.outerMargin) {
        if (this.gridster.rows === item.rows + item.y) {
          if ($options.outerMarginBottom !== null) {
            marginBottom = $options.outerMarginBottom + "px";
          } else {
            marginBottom = $options.margin + "px";
          }
        }
        if (this.gridster.columns === item.cols + item.x) {
          if ($options.outerMarginBottom !== null) {
            marginRight = $options.outerMarginRight + "px";
          } else {
            marginRight = $options.margin + "px";
          }
        }
      }
      renderer.setStyle(el, "margin-bottom", marginBottom);
      renderer.setStyle(el, $options.dirType === DirTypes.LTR ? "margin-right" : "margin-left", marginRight);
    }
  }
  updateGridster() {
    const $options = this.gridster.$options();
    let addClass = "";
    let removeClass1 = "";
    let removeClass2 = "";
    let removeClass3 = "";
    if ($options.gridType === GridType.Fit) {
      addClass = GridType.Fit;
      removeClass1 = GridType.ScrollVertical;
      removeClass2 = GridType.ScrollHorizontal;
      removeClass3 = GridType.Fixed;
    } else if ($options.gridType === GridType.ScrollVertical) {
      this.gridster.curRowHeight = this.gridster.curColWidth * $options.rowHeightRatio;
      addClass = GridType.ScrollVertical;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollHorizontal;
      removeClass3 = GridType.Fixed;
    } else if ($options.gridType === GridType.ScrollHorizontal) {
      const widthRatio = $options.rowHeightRatio;
      const calWidthRatio = widthRatio >= 1 ? widthRatio : widthRatio + 1;
      this.gridster.curColWidth = this.gridster.curRowHeight * calWidthRatio;
      addClass = GridType.ScrollHorizontal;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollVertical;
      removeClass3 = GridType.Fixed;
    } else if ($options.gridType === GridType.Fixed) {
      this.gridster.curColWidth = $options.fixedColWidth + ($options.ignoreMarginInRow ? 0 : $options.margin);
      this.gridster.curRowHeight = $options.fixedRowHeight + ($options.ignoreMarginInRow ? 0 : $options.margin);
      addClass = GridType.Fixed;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollVertical;
      removeClass3 = GridType.ScrollHorizontal;
    } else if ($options.gridType === GridType.VerticalFixed) {
      this.gridster.curRowHeight = $options.fixedRowHeight + ($options.ignoreMarginInRow ? 0 : $options.margin);
      addClass = GridType.ScrollVertical;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollHorizontal;
      removeClass3 = GridType.Fixed;
    } else if ($options.gridType === GridType.HorizontalFixed) {
      this.gridster.curColWidth = $options.fixedColWidth + ($options.ignoreMarginInRow ? 0 : $options.margin);
      addClass = GridType.ScrollHorizontal;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollVertical;
      removeClass3 = GridType.Fixed;
    }
    if (this.gridster.mobile || $options.setGridSize && $options.gridType !== GridType.Fit) {
      this.gridster.renderer.removeClass(this.gridster.el, addClass);
    } else {
      this.gridster.renderer.addClass(this.gridster.el, addClass);
    }
    this.gridster.renderer.removeClass(this.gridster.el, removeClass1);
    this.gridster.renderer.removeClass(this.gridster.el, removeClass2);
    this.gridster.renderer.removeClass(this.gridster.el, removeClass3);
  }
  getGridColumnStyle(i) {
    const margin = this.gridster.$options().margin;
    const newPos = {
      left: this.gridster.curColWidth * i,
      width: this.gridster.curColWidth - margin,
      height: this.gridster.gridRows.length * this.gridster.curRowHeight - margin,
      style: {}
    };
    newPos.style = __spreadProps(__spreadValues({}, this.getLeftPosition(newPos.left)), {
      width: newPos.width + "px",
      height: newPos.height + "px"
    });
    const last = this.lastGridColumnStyles[i];
    if (last && last.left === newPos.left && last.width === newPos.width && last.height === newPos.height) {
      return last.style;
    }
    this.lastGridColumnStyles[i] = newPos;
    return newPos.style;
  }
  getGridRowStyle(i) {
    const margin = this.gridster.$options().margin;
    const newPos = {
      top: this.gridster.curRowHeight * i,
      width: this.gridster.gridColumns.length * this.gridster.curColWidth + margin,
      height: this.gridster.curRowHeight - margin,
      style: {}
    };
    newPos.style = __spreadProps(__spreadValues({}, this.getTopPosition(newPos.top)), {
      width: newPos.width + "px",
      height: newPos.height + "px"
    });
    const last = this.lastGridRowStyles[i];
    if (last && last.top === newPos.top && last.width === newPos.width && last.height === newPos.height) {
      return last.style;
    }
    this.lastGridRowStyles[i] = newPos;
    return newPos.style;
  }
  getLeftPosition(d) {
    const $options = this.gridster.$options();
    const dPosition = $options.dirType === DirTypes.RTL ? -d : d;
    if ($options.useTransformPositioning) {
      return {
        transform: "translateX(" + dPosition + "px)"
      };
    } else {
      return {
        left: this.getLeftMargin() + dPosition + "px"
      };
    }
  }
  getTopPosition(d) {
    if (this.gridster.$options().useTransformPositioning) {
      return {
        transform: "translateY(" + d + "px)"
      };
    } else {
      return {
        top: this.getTopMargin() + d + "px"
      };
    }
  }
  clearCellPosition(renderer, el) {
    if (this.gridster.$options().useTransformPositioning) {
      renderer.setStyle(el, "transform", "");
    } else {
      renderer.setStyle(el, "top", "");
      renderer.setStyle(el, "left", "");
    }
  }
  setCellPosition(renderer, el, x, y) {
    const $options = this.gridster.$options();
    const xPosition = $options.dirType === DirTypes.RTL ? -x : x;
    if ($options.useTransformPositioning) {
      const transform = "translate3d(" + xPosition + "px, " + y + "px, 0)";
      renderer.setStyle(el, "transform", transform);
    } else {
      renderer.setStyle(el, "left", this.getLeftMargin() + xPosition + "px");
      renderer.setStyle(el, "top", this.getTopMargin() + y + "px");
    }
  }
  getLeftMargin() {
    const $options = this.gridster.$options();
    if ($options.outerMargin) {
      if ($options.outerMarginLeft !== null) {
        return $options.outerMarginLeft;
      } else {
        return $options.margin;
      }
    } else {
      return 0;
    }
  }
  getTopMargin() {
    const $options = this.gridster.$options();
    if ($options.outerMargin) {
      if ($options.outerMarginTop !== null) {
        return $options.outerMarginTop;
      } else {
        return $options.margin;
      }
    } else {
      return 0;
    }
  }
};
var Gridster = class _Gridster {
  renderer = inject(Renderer2);
  cdRef = inject(ChangeDetectorRef);
  zone = inject(NgZone);
  elRef = inject(ElementRef);
  api = {
    calculateLayout: () => this.calculateLayout(),
    resize: () => this.onResize(),
    getNextPossiblePosition: (newItem, startingFrom) => this.getNextPossiblePosition(newItem, startingFrom),
    getFirstPossiblePosition: (item) => this.getFirstPossiblePosition(item),
    getLastPossiblePosition: (item) => this.getLastPossiblePosition(item),
    getItemComponent: (item) => this.getItemComponent(item)
  };
  gridsterPreview = viewChild.required(GridsterPreview);
  options = input.required(...ngDevMode ? [{
    debugName: "options"
  }] : []);
  $options = computed(() => GridsterUtils.merge(JSON.parse(JSON.stringify(GridsterConfigService)), this.options(), GridsterConfigService), ...ngDevMode ? [{
    debugName: "$options"
  }] : []);
  movingItem;
  el = this.elRef.nativeElement;
  mobile = false;
  curWidth = 0;
  curHeight = 0;
  grid = [];
  columns = 0;
  rows = 0;
  curColWidth = 0;
  curRowHeight = 0;
  gridColumns = [];
  gridRows = [];
  windowResize;
  dragInProgress = false;
  emptyCell = new GridsterEmptyCell(this);
  compact = new GridsterCompact(this);
  gridRenderer = new GridsterRenderer(this);
  calculateLayout$ = new Subject();
  resize$ = new Subject();
  destroy$ = new Subject();
  constructor() {
    effect(() => {
      const $options = this.$options();
      if (!$options.disableWindowResize && !this.windowResize) {
        this.windowResize = this.renderer.listen("window", "resize", this.onResize);
      } else if ($options.disableWindowResize && this.windowResize) {
        this.windowResize();
        this.windowResize = null;
      }
      this.emptyCell.updateOptions();
      this.columns = $options.minCols;
      this.rows = $options.minRows + $options.addEmptyRowsCount;
      this.setGridSize();
      this.calculateLayout();
    });
  }
  // ------ Function for swapWhileDragging option
  // identical to checkCollision() except that here we add boundaries.
  static checkCollisionTwoItemsForSwaping(item, item2) {
    const horizontalBoundaryItem1 = item.cols === 1 ? 0 : 1;
    const horizontalBoundaryItem2 = item2.cols === 1 ? 0 : 1;
    const verticalBoundaryItem1 = item.rows === 1 ? 0 : 1;
    const verticalBoundaryItem2 = item2.rows === 1 ? 0 : 1;
    return item.x + horizontalBoundaryItem1 < item2.x + item2.cols && item.x + item.cols > item2.x + horizontalBoundaryItem2 && item.y + verticalBoundaryItem1 < item2.y + item2.rows && item.y + item.rows > item2.y + verticalBoundaryItem2;
  }
  checkCollisionTwoItems(item, item2) {
    const collision = item.x < item2.x + item2.cols && item.x + item.cols > item2.x && item.y < item2.y + item2.rows && item.y + item.rows > item2.y;
    if (!collision) {
      return false;
    }
    if (!this.$options().allowMultiLayer) {
      return true;
    }
    const defaultLayerIndex = this.$options().defaultLayerIndex;
    const layerIndex = item.layerIndex === void 0 ? defaultLayerIndex : item.layerIndex;
    const layerIndex2 = item2.layerIndex === void 0 ? defaultLayerIndex : item2.layerIndex;
    return layerIndex === layerIndex2;
  }
  ngOnInit() {
    const options = this.options();
    if (options.initCallback) {
      options.initCallback(this, this.api);
    }
    this.calculateLayout$.pipe(debounceTime(0), takeUntil(this.destroy$)).subscribe(() => this.calculateLayout());
    this.resize$.pipe(
      // Cancel previously scheduled DOM timer if `calculateLayout()` has been called
      // within this time range.
      switchMap(() => timer(100)),
      takeUntil(this.destroy$)
    ).subscribe(() => this.resize());
  }
  resize() {
    let height;
    let width;
    if (this.$options().gridType === "fit" && !this.mobile) {
      width = this.el.offsetWidth;
      height = this.el.offsetHeight;
    } else {
      width = this.el.clientWidth;
      height = this.el.clientHeight;
    }
    if ((width !== this.curWidth || height !== this.curHeight) && this.checkIfToResize()) {
      this.onResize();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    if (this.windowResize) {
      this.windowResize();
    }
    const options = this.options();
    if (options && options.destroyCallback) {
      options.destroyCallback(this);
    }
    this.emptyCell.destroy();
    this.emptyCell = null;
    this.compact.destroy();
    this.compact = null;
  }
  onResize = () => {
    if (this.el.clientWidth) {
      const $options = this.$options();
      if ($options.setGridSize) {
        this.renderer.setStyle(this.el, "width", "");
        this.renderer.setStyle(this.el, "height", "");
      }
      this.setGridSize();
      this.calculateLayout();
    }
  };
  checkIfToResize() {
    const clientWidth = this.el.clientWidth;
    const offsetWidth = this.el.offsetWidth;
    const scrollWidth = this.el.scrollWidth;
    const clientHeight = this.el.clientHeight;
    const offsetHeight = this.el.offsetHeight;
    const scrollHeight = this.el.scrollHeight;
    const verticalScrollPresent = clientWidth < offsetWidth && scrollHeight > offsetHeight && scrollHeight - offsetHeight < offsetWidth - clientWidth;
    const horizontalScrollPresent = clientHeight < offsetHeight && scrollWidth > offsetWidth && scrollWidth - offsetWidth < offsetHeight - clientHeight;
    if (verticalScrollPresent) {
      return false;
    }
    return !horizontalScrollPresent;
  }
  checkIfMobile() {
    const $options = this.$options();
    if ($options.useBodyForBreakpoint) {
      return $options.mobileBreakpoint > document.body.clientWidth;
    } else {
      return $options.mobileBreakpoint > this.curWidth;
    }
  }
  setGridSize() {
    const el = this.el;
    let width;
    let height;
    const $options = this.$options();
    if ($options.setGridSize || $options.gridType === GridType.Fit && !this.mobile) {
      width = el.offsetWidth;
      height = el.offsetHeight;
    } else {
      width = el.clientWidth;
      height = el.clientHeight;
    }
    this.curWidth = width;
    this.curHeight = height;
  }
  setGridDimensions() {
    this.setGridSize();
    if (!this.mobile && this.checkIfMobile()) {
      this.mobile = !this.mobile;
      this.renderer.addClass(this.el, "mobile");
    } else if (this.mobile && !this.checkIfMobile()) {
      this.mobile = !this.mobile;
      this.renderer.removeClass(this.el, "mobile");
    }
    const $options = this.$options();
    let rows = $options.minRows;
    let columns = $options.minCols;
    for (let i = this.grid.length - 1; i >= 0; i--) {
      const widget = this.grid[i];
      if (!widget.notPlaced) {
        const $item = widget.$item();
        rows = Math.max(rows, $item.y + $item.rows);
        columns = Math.max(columns, $item.x + $item.cols);
      }
    }
    rows += $options.addEmptyRowsCount;
    if (this.columns !== columns || this.rows !== rows) {
      this.columns = columns;
      this.rows = rows;
      const options = this.options();
      if (options.gridSizeChangedCallback) {
        options.gridSizeChangedCallback(this);
      }
    }
  }
  calculateLayout() {
    if (this.compact) {
      this.compact.checkCompact();
    }
    this.setGridDimensions();
    const $options = this.$options();
    if ($options.outerMargin) {
      let marginWidth = -$options.margin;
      if ($options.outerMarginLeft !== null) {
        marginWidth += $options.outerMarginLeft;
        this.renderer.setStyle(this.el, "padding-left", $options.outerMarginLeft + "px");
      } else {
        marginWidth += $options.margin;
        this.renderer.setStyle(this.el, "padding-left", $options.margin + "px");
      }
      if ($options.outerMarginRight !== null) {
        marginWidth += $options.outerMarginRight;
        this.renderer.setStyle(this.el, "padding-right", $options.outerMarginRight + "px");
      } else {
        marginWidth += $options.margin;
        this.renderer.setStyle(this.el, "padding-right", $options.margin + "px");
      }
      this.curColWidth = (this.curWidth - marginWidth) / this.columns;
      let marginHeight = -$options.margin;
      if ($options.outerMarginTop !== null) {
        marginHeight += $options.outerMarginTop;
        this.renderer.setStyle(this.el, "padding-top", $options.outerMarginTop + "px");
      } else {
        marginHeight += $options.margin;
        this.renderer.setStyle(this.el, "padding-top", $options.margin + "px");
      }
      if ($options.outerMarginBottom !== null) {
        marginHeight += $options.outerMarginBottom;
        this.renderer.setStyle(this.el, "padding-bottom", $options.outerMarginBottom + "px");
      } else {
        marginHeight += $options.margin;
        this.renderer.setStyle(this.el, "padding-bottom", $options.margin + "px");
      }
      this.curRowHeight = (this.curHeight - marginHeight) / this.rows * $options.rowHeightRatio;
    } else {
      this.curColWidth = (this.curWidth + $options.margin) / this.columns;
      this.curRowHeight = (this.curHeight + $options.margin) / this.rows * $options.rowHeightRatio;
      this.renderer.setStyle(this.el, "padding-left", "0px");
      this.renderer.setStyle(this.el, "padding-right", "0px");
      this.renderer.setStyle(this.el, "padding-top", "0px");
      this.renderer.setStyle(this.el, "padding-bottom", "0px");
    }
    this.gridRenderer.updateGridster();
    if ($options.setGridSize) {
      this.renderer.addClass(this.el, "gridSize");
      if (!this.mobile) {
        this.renderer.setStyle(this.el, "width", this.columns * this.curColWidth + $options.margin + "px");
        this.renderer.setStyle(this.el, "height", this.rows * this.curRowHeight + $options.margin + "px");
      }
    } else {
      this.renderer.removeClass(this.el, "gridSize");
      this.renderer.setStyle(this.el, "width", "");
      this.renderer.setStyle(this.el, "height", "");
    }
    this.updateGrid();
    for (let i = this.grid.length - 1; i >= 0; i--) {
      const widget = this.grid[i];
      widget.setSize();
      widget.drag.toggle();
      widget.resize.toggle();
    }
    this.resize$.next();
  }
  updateGrid() {
    const $options = this.$options();
    if ($options.displayGrid === "always" && !this.mobile) {
      this.renderer.addClass(this.el, "display-grid");
    } else if ($options.displayGrid === "onDrag&Resize" && this.dragInProgress) {
      this.renderer.addClass(this.el, "display-grid");
    } else if ($options.displayGrid === "none" || !this.dragInProgress || this.mobile) {
      this.renderer.removeClass(this.el, "display-grid");
    }
    this.setGridDimensions();
    this.gridColumns.length = _Gridster.getNewArrayLength(this.columns, this.curWidth, this.curColWidth);
    this.gridRows.length = _Gridster.getNewArrayLength(this.rows, this.curHeight, this.curRowHeight);
    this.cdRef.markForCheck();
  }
  addItem(itemComponent) {
    const $item = itemComponent.$item();
    const item = itemComponent.item();
    const $options = this.$options();
    if ($item.cols === void 0) {
      $item.cols = $options.defaultItemCols;
      item.cols = $item.cols;
      itemComponent.itemChanged();
    }
    if ($item.rows === void 0) {
      $item.rows = $options.defaultItemRows;
      item.rows = $item.rows;
      itemComponent.itemChanged();
    }
    if ($item.x === -1 || $item.y === -1) {
      this.autoPositionItem(itemComponent);
    } else if (this.checkCollision($item)) {
      if (!$options.disableWarnings) {
        itemComponent.notPlaced = true;
        console.warn("Can't be placed in the bounds of the dashboard, trying to auto position!/n" + JSON.stringify(itemComponent.item, ["cols", "rows", "x", "y"]));
      }
      if (!$options.disableAutoPositionOnConflict) {
        this.autoPositionItem(itemComponent);
      } else {
        itemComponent.notPlaced = true;
      }
    }
    this.grid.push(itemComponent);
    this.calculateLayout$.next();
  }
  removeItem(itemComponent) {
    this.grid.splice(this.grid.indexOf(itemComponent), 1);
    this.calculateLayout$.next();
    const options = this.options();
    if (options.itemRemovedCallback) {
      options.itemRemovedCallback(itemComponent.item(), itemComponent);
    }
    if (this.movingItem && this.movingItem === itemComponent.$item()) {
      this.movingItem = null;
      this.previewStyle();
    }
  }
  checkCollision(item, checkRatio) {
    let collision = false;
    const options = this.options();
    if (options.itemValidateCallback) {
      collision = !options.itemValidateCallback(item);
    }
    if (!collision && this.checkGridCollision(item, checkRatio)) {
      collision = true;
    }
    if (!collision) {
      const c = this.findItemWithItem(item);
      if (c) {
        collision = c;
      }
    }
    return collision;
  }
  checkGridCollision(item, checkRatio = false) {
    const $options = this.$options();
    const noNegativePosition = item.y > -1 && item.x > -1;
    const maxGridCols = item.cols + item.x <= $options.maxCols;
    const maxGridRows = item.rows + item.y <= $options.maxRows;
    const maxItemCols = item.maxItemCols === void 0 ? $options.maxItemCols : item.maxItemCols;
    const minItemCols = item.minItemCols === void 0 ? $options.minItemCols : item.minItemCols;
    const maxItemRows = item.maxItemRows === void 0 ? $options.maxItemRows : item.maxItemRows;
    const minItemRows = item.minItemRows === void 0 ? $options.minItemRows : item.minItemRows;
    const inColsLimits = item.cols <= maxItemCols && item.cols >= minItemCols;
    const inRowsLimits = item.rows <= maxItemRows && item.rows >= minItemRows;
    let inRatio = true;
    if (checkRatio) {
      const itemAspectRatio = item.itemAspectRatio || $options.itemAspectRatio;
      if (itemAspectRatio) {
        inRatio = item.cols / item.rows === itemAspectRatio;
      }
    }
    const minAreaLimit = item.minItemArea === void 0 ? $options.minItemArea : item.minItemArea;
    const maxAreaLimit = item.maxItemArea === void 0 ? $options.maxItemArea : item.maxItemArea;
    const area = item.cols * item.rows;
    const inMinArea = minAreaLimit <= area;
    const inMaxArea = maxAreaLimit >= area;
    return !(noNegativePosition && maxGridCols && maxGridRows && inRatio && inColsLimits && inRowsLimits && inMinArea && inMaxArea);
  }
  findItemWithItem(item) {
    for (let i = 0; i < this.grid.length; i++) {
      const widget = this.grid[i];
      if (widget.$item() !== item && this.checkCollisionTwoItems(widget.$item(), item)) {
        return widget;
      }
    }
    return false;
  }
  findItemsWithItem(item) {
    const a = [];
    for (let i = 0; i < this.grid.length; i++) {
      const widget = this.grid[i];
      if (widget.$item() !== item && this.checkCollisionTwoItems(widget.$item(), item)) {
        a.push(widget);
      }
    }
    return a;
  }
  autoPositionItem(itemComponent) {
    if (this.getNextPossiblePosition(itemComponent.$item())) {
      itemComponent.notPlaced = false;
      itemComponent.item().x = itemComponent.$item().x;
      itemComponent.item().y = itemComponent.$item().y;
      itemComponent.itemChanged();
    } else {
      itemComponent.notPlaced = true;
      if (!this.$options().disableWarnings) {
        console.warn("Can't be placed in the bounds of the dashboard!/n" + JSON.stringify(itemComponent.item, ["cols", "rows", "x", "y"]));
      }
    }
  }
  getNextPossiblePosition = (newItem, startingFrom = {}) => {
    const $options = this.$options();
    if (newItem.cols === -1) {
      newItem.cols = $options.defaultItemCols;
    }
    if (newItem.rows === -1) {
      newItem.rows = $options.defaultItemRows;
    }
    this.setGridDimensions();
    for (let y = startingFrom.y || 0; y < this.rows; y++) {
      newItem.y = y;
      for (let x = startingFrom.x || 0; x < this.columns; x++) {
        newItem.x = x;
        if (!this.checkCollision(newItem)) {
          return true;
        }
      }
    }
    const canAddToRows = $options.maxRows >= this.rows + newItem.rows;
    const canAddToColumns = $options.maxCols >= this.columns + newItem.cols;
    const addToRows = this.rows <= this.columns && canAddToRows;
    if (!addToRows && canAddToColumns) {
      newItem.x = this.columns;
      newItem.y = 0;
      return true;
    } else if (canAddToRows) {
      newItem.y = this.rows;
      newItem.x = 0;
      return true;
    }
    return false;
  };
  getFirstPossiblePosition = (item) => {
    const tmpItem = Object.assign({}, item);
    this.getNextPossiblePosition(tmpItem);
    return tmpItem;
  };
  getLastPossiblePosition = (item) => {
    let farthestItem = {
      y: 0,
      x: 0
    };
    farthestItem = this.grid.reduce((prev, curr) => {
      const $item = curr.$item();
      const currCoords = {
        y: $item.y + $item.rows - 1,
        x: $item.x + $item.cols - 1
      };
      if (GridsterUtils.compareItems(prev, currCoords) === 1) {
        return currCoords;
      } else {
        return prev;
      }
    }, farthestItem);
    const tmpItem = Object.assign({}, item);
    this.getNextPossiblePosition(tmpItem, farthestItem);
    return tmpItem;
  };
  pixelsToPositionX(x, roundingMethod, noLimit) {
    const position = roundingMethod(x / this.curColWidth);
    if (noLimit) {
      return position;
    } else {
      return Math.max(position, 0);
    }
  }
  pixelsToPositionY(y, roundingMethod, noLimit) {
    const position = roundingMethod(y / this.curRowHeight);
    if (noLimit) {
      return position;
    } else {
      return Math.max(position, 0);
    }
  }
  positionXToPixels(x) {
    return x * this.curColWidth;
  }
  positionYToPixels(y) {
    return y * this.curRowHeight;
  }
  getItemComponent(item) {
    return this.grid.find((c) => c.item() === item);
  }
  // ------ Functions for swapWhileDragging option
  // identical to checkCollision() except that this function calls findItemWithItemForSwaping() instead of findItemWithItem()
  checkCollisionForSwaping(item) {
    let collision = false;
    const options = this.options();
    if (options.itemValidateCallback) {
      collision = !options.itemValidateCallback(item);
    }
    if (!collision && this.checkGridCollision(item)) {
      collision = true;
    }
    if (!collision) {
      const c = this.findItemWithItemForSwapping(item);
      if (c) {
        collision = c;
      }
    }
    return collision;
  }
  // identical to findItemWithItem() except that this function calls checkCollisionTwoItemsForSwaping() instead of checkCollisionTwoItems()
  findItemWithItemForSwapping(item) {
    for (let i = this.grid.length - 1; i > -1; i--) {
      const widget = this.grid[i];
      if (widget.$item() !== item && _Gridster.checkCollisionTwoItemsForSwaping(widget.$item(), item)) {
        return widget;
      }
    }
    return false;
  }
  previewStyle(drag = false) {
    const preview = this.gridsterPreview();
    if (this.movingItem) {
      if (this.compact && drag) {
        this.compact.checkCompactItem(this.movingItem);
      }
      preview.previewStyle(this.movingItem);
    } else {
      preview.previewStyle(null);
    }
  }
  // ------ End of functions for swapWhileDragging option
  // eslint-disable-next-line @typescript-eslint/member-ordering
  static getNewArrayLength(length, overallSize, size) {
    const newLength = Math.max(length, Math.floor(overallSize / size));
    if (newLength < 0) {
      return 0;
    }
    if (Number.isFinite(newLength)) {
      return Math.floor(newLength);
    }
    return 0;
  }
  static ɵfac = function Gridster_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Gridster)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Gridster,
    selectors: [["gridster"]],
    viewQuery: function Gridster_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuerySignal(ctx.gridsterPreview, GridsterPreview, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    inputs: {
      options: [1, "options"]
    },
    ngContentSelectors: _c0,
    decls: 6,
    vars: 0,
    consts: [[1, "gridster-column", 3, "ngStyle"], [1, "gridster-row", 3, "ngStyle"], [1, "gridster-preview"]],
    template: function Gridster_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵrepeaterCreate(0, Gridster_For_1_Template, 1, 1, "div", 0, ɵɵrepeaterTrackByIndex);
        ɵɵrepeaterCreate(2, Gridster_For_3_Template, 1, 1, "div", 1, ɵɵrepeaterTrackByIndex);
        ɵɵprojection(4);
        ɵɵelement(5, "gridster-preview", 2);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.gridColumns);
        ɵɵadvance(2);
        ɵɵrepeater(ctx.gridRows);
      }
    },
    dependencies: [NgStyle, GridsterPreview],
    styles: ["gridster{position:relative;box-sizing:border-box;background:gray;width:100%;height:100%;-webkit-user-select:none;user-select:none;display:block}gridster.fit{overflow-x:hidden;overflow-y:hidden}gridster.scrollVertical{overflow-x:hidden;overflow-y:auto}gridster.scrollHorizontal{overflow-x:auto;overflow-y:hidden}gridster.fixed{overflow:auto}gridster.mobile{overflow-x:hidden;overflow-y:auto}gridster.mobile gridster-item{position:relative}gridster.gridSize{height:initial;width:initial}gridster.gridSize.fit{height:100%;width:100%}gridster .gridster-column,gridster .gridster-row{position:absolute;display:none;transition:transform .3s;box-sizing:border-box}gridster.display-grid .gridster-column,gridster.display-grid .gridster-row{display:block}gridster .gridster-column{border-left:1px solid white;border-right:1px solid white}gridster .gridster-row{border-top:1px solid white;border-bottom:1px solid white}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Gridster, [{
    type: Component,
    args: [{
      selector: "gridster",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [NgStyle, GridsterPreview],
      template: '@for (_ of gridColumns; track i; let i = $index) {\n  <div class="gridster-column" [ngStyle]="gridRenderer.getGridColumnStyle(i)"></div>\n}\n@for (_ of gridRows; track i; let i = $index) {\n  <div class="gridster-row" [ngStyle]="gridRenderer.getGridRowStyle(i)"></div>\n}\n<ng-content />\n\n<gridster-preview class="gridster-preview" />\n',
      styles: ["gridster{position:relative;box-sizing:border-box;background:gray;width:100%;height:100%;-webkit-user-select:none;user-select:none;display:block}gridster.fit{overflow-x:hidden;overflow-y:hidden}gridster.scrollVertical{overflow-x:hidden;overflow-y:auto}gridster.scrollHorizontal{overflow-x:auto;overflow-y:hidden}gridster.fixed{overflow:auto}gridster.mobile{overflow-x:hidden;overflow-y:auto}gridster.mobile gridster-item{position:relative}gridster.gridSize{height:initial;width:initial}gridster.gridSize.fit{height:100%;width:100%}gridster .gridster-column,gridster .gridster-row{position:absolute;display:none;transition:transform .3s;box-sizing:border-box}gridster.display-grid .gridster-column,gridster.display-grid .gridster-row{display:block}gridster .gridster-column{border-left:1px solid white;border-right:1px solid white}gridster .gridster-row{border-top:1px solid white;border-bottom:1px solid white}\n"]
    }]
  }], () => [], {
    gridsterPreview: [{
      type: ViewChild,
      args: [forwardRef(() => GridsterPreview), {
        isSignal: true
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: true
      }]
    }]
  });
})();
var GridsterPush = class {
  gridsterItem;
  fromSouth = "fromSouth";
  fromNorth = "fromNorth";
  fromEast = "fromEast";
  fromWest = "fromWest";
  pushedItems = [];
  pushedItemsTemp = [];
  pushedItemsTempPath = [];
  pushedItemsPath = [];
  gridster;
  pushedItemsOrder;
  tryPattern = {
    fromEast: [this.tryWest, this.trySouth, this.tryNorth, this.tryEast],
    fromWest: [this.tryEast, this.trySouth, this.tryNorth, this.tryWest],
    fromNorth: [this.trySouth, this.tryEast, this.tryWest, this.tryNorth],
    fromSouth: [this.tryNorth, this.tryEast, this.tryWest, this.trySouth]
  };
  iteration = 0;
  constructor(gridsterItem) {
    this.gridsterItem = gridsterItem;
    this.gridster = gridsterItem.gridster;
  }
  destroy() {
    this.gridster = this.gridsterItem = null;
  }
  pushItems(direction, disable) {
    if (this.gridster.$options().pushItems && !disable) {
      this.pushedItemsOrder = [];
      this.iteration = 0;
      const pushed = this.push(this.gridsterItem, direction);
      if (!pushed) {
        this.restoreTempItems();
      }
      this.pushedItemsOrder = [];
      this.pushedItemsTemp = [];
      this.pushedItemsTempPath = [];
      return pushed;
    } else {
      return false;
    }
  }
  restoreTempItems() {
    let i = this.pushedItemsTemp.length - 1;
    for (; i > -1; i--) {
      this.removeFromTempPushed(this.pushedItemsTemp[i]);
    }
  }
  restoreItems() {
    let i = 0;
    const l = this.pushedItems.length;
    let pushedItem;
    for (; i < l; i++) {
      pushedItem = this.pushedItems[i];
      pushedItem.$item().x = pushedItem.item().x || 0;
      pushedItem.$item().y = pushedItem.item().y || 0;
      pushedItem.setSize();
    }
    this.pushedItems = [];
    this.pushedItemsPath = [];
  }
  setPushedItems() {
    let i = 0;
    const l = this.pushedItems.length;
    let pushedItem;
    for (; i < l; i++) {
      pushedItem = this.pushedItems[i];
      pushedItem.checkItemChanges(pushedItem.$item(), pushedItem.item());
    }
    this.pushedItems = [];
    this.pushedItemsPath = [];
  }
  checkPushBack() {
    let i = this.pushedItems.length - 1;
    let change = false;
    for (; i > -1; i--) {
      if (this.checkPushedItem(this.pushedItems[i], i)) {
        change = true;
      }
    }
    if (change) {
      this.checkPushBack();
    }
  }
  push(gridsterItem, direction) {
    if (this.iteration > 100) {
      console.warn("max iteration reached");
      return false;
    }
    if (this.gridster.checkGridCollision(gridsterItem.$item())) {
      return false;
    }
    if (direction === "") {
      return false;
    }
    const conflicts = this.gridster.findItemsWithItem(gridsterItem.$item());
    const invert = direction === this.fromNorth || direction === this.fromWest;
    conflicts.sort((a, b) => {
      if (invert) {
        return b.$item().y - a.$item().y || b.$item().x - a.$item().x;
      } else {
        return a.$item().y - b.$item().y || a.$item().x - b.$item().x;
      }
    });
    let i = 0;
    let itemCollision;
    let makePush = true;
    const pushedItems = [];
    for (; i < conflicts.length; i++) {
      itemCollision = conflicts[i];
      if (itemCollision === this.gridsterItem) {
        continue;
      }
      if (!itemCollision.canBeDragged()) {
        makePush = false;
        break;
      }
      const p = this.pushedItemsTemp.indexOf(itemCollision);
      if (p > -1 && this.pushedItemsTempPath[p].length > 10) {
        makePush = false;
        break;
      }
      if (this.tryPattern[direction][0].call(this, itemCollision, gridsterItem)) {
        this.pushedItemsOrder.push(itemCollision);
        pushedItems.push(itemCollision);
      } else if (this.tryPattern[direction][1].call(this, itemCollision, gridsterItem)) {
        this.pushedItemsOrder.push(itemCollision);
        pushedItems.push(itemCollision);
      } else if (this.tryPattern[direction][2].call(this, itemCollision, gridsterItem)) {
        this.pushedItemsOrder.push(itemCollision);
        pushedItems.push(itemCollision);
      } else if (this.tryPattern[direction][3].call(this, itemCollision, gridsterItem)) {
        this.pushedItemsOrder.push(itemCollision);
        pushedItems.push(itemCollision);
      } else {
        makePush = false;
        break;
      }
    }
    if (!makePush) {
      i = this.pushedItemsOrder.lastIndexOf(pushedItems[0]);
      if (i > -1) {
        let j = this.pushedItemsOrder.length - 1;
        for (; j >= i; j--) {
          itemCollision = this.pushedItemsOrder[j];
          this.pushedItemsOrder.pop();
          this.removeFromTempPushed(itemCollision);
          this.removeFromPushedItem(itemCollision);
        }
      }
    }
    this.iteration++;
    return makePush;
  }
  trySouth(gridsterItemCollide, gridsterItem) {
    if (!this.gridster.$options().pushDirections.south) {
      return false;
    }
    this.addToTempPushed(gridsterItemCollide);
    gridsterItemCollide.$item().y = gridsterItem.$item().y + gridsterItem.$item().rows;
    if (this.push(gridsterItemCollide, this.fromNorth)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      return true;
    } else {
      this.removeFromTempPushed(gridsterItemCollide);
    }
    return false;
  }
  tryNorth(gridsterItemCollide, gridsterItem) {
    if (!this.gridster.$options().pushDirections.north) {
      return false;
    }
    this.addToTempPushed(gridsterItemCollide);
    gridsterItemCollide.$item().y = gridsterItem.$item().y - gridsterItemCollide.$item().rows;
    if (this.push(gridsterItemCollide, this.fromSouth)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      return true;
    } else {
      this.removeFromTempPushed(gridsterItemCollide);
    }
    return false;
  }
  tryEast(gridsterItemCollide, gridsterItem) {
    if (!this.gridster.$options().pushDirections.east) {
      return false;
    }
    this.addToTempPushed(gridsterItemCollide);
    gridsterItemCollide.$item().x = gridsterItem.$item().x + gridsterItem.$item().cols;
    if (this.push(gridsterItemCollide, this.fromWest)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      return true;
    } else {
      this.removeFromTempPushed(gridsterItemCollide);
    }
    return false;
  }
  tryWest(gridsterItemCollide, gridsterItem) {
    if (!this.gridster.$options().pushDirections.west) {
      return false;
    }
    this.addToTempPushed(gridsterItemCollide);
    gridsterItemCollide.$item().x = gridsterItem.$item().x - gridsterItemCollide.$item().cols;
    if (this.push(gridsterItemCollide, this.fromEast)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      return true;
    } else {
      this.removeFromTempPushed(gridsterItemCollide);
    }
    return false;
  }
  addToTempPushed(gridsterItem) {
    let i = this.pushedItemsTemp.indexOf(gridsterItem);
    if (i === -1) {
      i = this.pushedItemsTemp.push(gridsterItem) - 1;
      this.pushedItemsTempPath[i] = [];
    }
    this.pushedItemsTempPath[i].push({
      x: gridsterItem.$item().x,
      y: gridsterItem.$item().y
    });
  }
  removeFromTempPushed(gridsterItem) {
    const i = this.pushedItemsTemp.indexOf(gridsterItem);
    const tempPosition = this.pushedItemsTempPath[i].pop();
    if (!tempPosition) {
      return;
    }
    gridsterItem.$item().x = tempPosition.x;
    gridsterItem.$item().y = tempPosition.y;
    gridsterItem.setSize();
    if (!this.pushedItemsTempPath[i].length) {
      this.pushedItemsTemp.splice(i, 1);
      this.pushedItemsTempPath.splice(i, 1);
    }
  }
  addToPushed(gridsterItem) {
    if (this.pushedItems.indexOf(gridsterItem) < 0) {
      this.pushedItems.push(gridsterItem);
      this.pushedItemsPath.push([{
        x: gridsterItem.item().x || 0,
        y: gridsterItem.item().y || 0
      }, {
        x: gridsterItem.$item().x,
        y: gridsterItem.$item().y
      }]);
    } else {
      const i = this.pushedItems.indexOf(gridsterItem);
      this.pushedItemsPath[i].push({
        x: gridsterItem.$item().x,
        y: gridsterItem.$item().y
      });
    }
  }
  removeFromPushed(i) {
    if (i > -1) {
      this.pushedItems.splice(i, 1);
      this.pushedItemsPath.splice(i, 1);
    }
  }
  removeFromPushedItem(gridsterItem) {
    const i = this.pushedItems.indexOf(gridsterItem);
    if (i > -1) {
      this.pushedItemsPath[i].pop();
      if (!this.pushedItemsPath.length) {
        this.pushedItems.splice(i, 1);
        this.pushedItemsPath.splice(i, 1);
      }
    }
  }
  checkPushedItem(pushedItem, i) {
    const path = this.pushedItemsPath[i];
    let j = path.length - 2;
    let lastPosition;
    let x;
    let y;
    let change = false;
    for (; j > -1; j--) {
      lastPosition = path[j];
      x = pushedItem.$item().x;
      y = pushedItem.$item().y;
      pushedItem.$item().x = lastPosition.x;
      pushedItem.$item().y = lastPosition.y;
      if (!this.gridster.findItemWithItem(pushedItem.$item())) {
        pushedItem.setSize();
        path.splice(j + 1, path.length - j - 1);
        change = true;
      } else {
        pushedItem.$item().x = x;
        pushedItem.$item().y = y;
      }
    }
    if (path.length < 2) {
      this.removeFromPushed(i);
    }
    return change;
  }
};
var scrollSensitivity;
var scrollSpeed;
var intervalDuration = 40;
var gridsterElement;
var resizeEvent;
var resizeEventType;
var scrollE = false;
var scrollW = false;
var scrollN = false;
var scrollS = false;
var animationH;
var animationV = null;
var lastMouseX = 0;
var lastMouseY = 0;
var maxScrollX = Infinity;
var maxScrollY = Infinity;
var requestAnimation;
var cancelAnimation;
if (window.requestAnimationFrame && window.cancelAnimationFrame) {
  requestAnimation = window.requestAnimationFrame;
  cancelAnimation = window.cancelAnimationFrame;
} else {
  requestAnimation = (callback) => setTimeout(() => callback(Date.now()), 50);
  cancelAnimation = (id) => clearTimeout(id);
}
function scroll(gridster, left, top, width, height, event, lastMouse, calculateItemPosition, resize, resizeEventScrollType) {
  const $options = gridster.$options();
  scrollSensitivity = $options.scrollSensitivity;
  scrollSpeed = $options.scrollSpeed;
  gridsterElement = gridster.el;
  resizeEvent = resize;
  resizeEventType = resizeEventScrollType;
  const offsetWidth = gridsterElement.offsetWidth;
  const offsetHeight = gridsterElement.offsetHeight;
  const offsetLeft = gridsterElement.scrollLeft;
  const offsetTop = gridsterElement.scrollTop;
  const {
    clientX,
    clientY
  } = event;
  lastMouseX = clientX;
  lastMouseY = clientY;
  if (!$options.disableScrollVertical) {
    const elemTopOffset = top - offsetTop;
    const elemBottomOffset = offsetHeight + offsetTop - top - height;
    if (elemBottomOffset < scrollSensitivity) {
      cancelN();
      if (!(resizeEvent && resizeEventType && !resizeEventType.south) && !scrollS) {
        startVerticalScroll(1, calculateItemPosition, gridster);
      }
    } else if (offsetTop > 0 && elemTopOffset < scrollSensitivity) {
      cancelS();
      if (!(resizeEvent && resizeEventType && !resizeEventType.north) && !scrollN) {
        startVerticalScroll(-1, calculateItemPosition, gridster);
      }
    } else if (lastMouse.clientY !== clientY) {
      cancelVerticalScroll();
    }
  }
  if (!$options.disableScrollHorizontal) {
    const elemRightOffset = offsetLeft + offsetWidth - left - width;
    const elemLeftOffset = left - offsetLeft;
    const isRTL = $options.dirType === DirTypes.RTL;
    if (elemRightOffset <= scrollSensitivity) {
      cancelW();
      if (!(resizeEvent && resizeEventType && !resizeEventType.east) && !scrollE) {
        startHorizontalScroll(1, calculateItemPosition, gridster, isRTL);
      }
    } else if (offsetLeft > 0 && elemLeftOffset < scrollSensitivity) {
      cancelE();
      if (!(resizeEvent && resizeEventType && !resizeEventType.west) && !scrollW) {
        startHorizontalScroll(-1, calculateItemPosition, gridster, isRTL);
      }
    } else if (lastMouse.clientX !== clientX) {
      cancelHorizontalScroll();
    }
  }
}
function startVerticalScroll(sign, calculateItemPosition, gridster) {
  if (sign > 0) {
    scrollS = true;
    const $options = gridster.$options();
    maxScrollY = $options.maxRows * gridster.curRowHeight + $options.margin - gridster.el.offsetHeight;
  } else {
    scrollN = true;
  }
  let lastUpdate;
  const callback = (timestamp) => {
    if (lastUpdate === void 0) {
      lastUpdate = timestamp;
      animationV = requestAnimation(callback);
      return;
    }
    if (!gridsterElement || sign === -1 && gridsterElement.scrollTop - scrollSpeed < 0) {
      cancelVerticalScroll();
      return;
    }
    const delta = (timestamp - lastUpdate) / intervalDuration;
    lastUpdate = timestamp;
    const top = sign * Math.round(scrollSpeed * delta);
    if (scrollS && gridsterElement.scrollTop + top > maxScrollY) {
      cancelVerticalScroll();
      return;
    }
    gridsterElement.scrollTop += top;
    lastMouseY += top;
    calculateItemPosition({
      clientX: lastMouseX,
      clientY: lastMouseY
    });
    animationV = requestAnimation(callback);
  };
  animationV = requestAnimation(callback);
}
function startHorizontalScroll(sign, calculateItemPosition, gridster, isRTL) {
  if (sign > 0) {
    scrollE = true;
    const $options = gridster.$options();
    maxScrollX = $options.maxCols * gridster.curColWidth + $options.margin - gridster.el.offsetWidth;
  } else {
    scrollW = true;
  }
  let lastUpdate;
  const callback = (timestamp) => {
    if (lastUpdate === void 0) {
      lastUpdate = timestamp;
      animationH = requestAnimation(callback);
      return;
    }
    if (!gridsterElement) {
      cancelHorizontalScroll();
      return;
    }
    const delta = (timestamp - lastUpdate) / intervalDuration;
    lastUpdate = timestamp;
    const scrollAmount = sign * Math.round(scrollSpeed * delta);
    const left = isRTL ? -scrollAmount : scrollAmount;
    if (scrollE && gridsterElement.scrollLeft + left > maxScrollX) {
      cancelHorizontalScroll();
      return;
    }
    gridsterElement.scrollLeft += left;
    lastMouseX += left;
    calculateItemPosition({
      clientX: lastMouseX,
      clientY: lastMouseY
    });
    animationH = requestAnimation(callback);
  };
  animationH = requestAnimation(callback);
}
function cancelScroll() {
  cancelHorizontalScroll();
  cancelVerticalScroll();
  gridsterElement = null;
}
function cancelHorizontalScroll() {
  if (animationH !== null) {
    cancelAnimation(animationH);
  }
  scrollE = false;
  scrollW = false;
}
function cancelVerticalScroll() {
  if (animationV !== null) {
    cancelAnimation(animationV);
  }
  scrollN = false;
  scrollS = false;
}
function cancelE() {
  if (scrollE) {
    cancelHorizontalScroll();
  }
}
function cancelW() {
  if (scrollW) {
    cancelHorizontalScroll();
  }
}
function cancelS() {
  if (scrollS) {
    cancelVerticalScroll();
  }
}
function cancelN() {
  if (scrollN) {
    cancelVerticalScroll();
  }
}
var GridsterSwap = class {
  gridsterItem;
  swapedItem;
  gridster;
  constructor(gridsterItem) {
    this.gridsterItem = gridsterItem;
    this.gridster = gridsterItem.gridster;
  }
  destroy() {
    this.gridster = this.gridsterItem = this.swapedItem = null;
  }
  swapItems() {
    if (this.gridster.$options().swap) {
      this.checkSwapBack();
      this.checkSwap(this.gridsterItem);
    }
  }
  checkSwapBack() {
    if (this.swapedItem) {
      const $item = this.swapedItem.$item();
      const item = this.swapedItem.item();
      const x = $item.x;
      const y = $item.y;
      $item.x = item.x || 0;
      $item.y = item.y || 0;
      if (this.gridster.checkCollision($item)) {
        $item.x = x;
        $item.y = y;
      } else {
        this.swapedItem.setSize();
        this.gridsterItem.$item().x = this.gridsterItem.item().x || 0;
        this.gridsterItem.$item().y = this.gridsterItem.item().y || 0;
        this.swapedItem = void 0;
      }
    }
  }
  restoreSwapItem() {
    if (this.swapedItem) {
      const $item = this.swapedItem.$item();
      const item = this.swapedItem.item();
      $item.x = item.x || 0;
      $item.y = item.y || 0;
      this.swapedItem.setSize();
      this.swapedItem = void 0;
    }
  }
  setSwapItem() {
    if (this.swapedItem) {
      this.swapedItem.checkItemChanges(this.swapedItem.$item(), this.swapedItem.item());
      this.swapedItem = void 0;
    }
  }
  checkSwap(pushedBy) {
    const $item = pushedBy.$item();
    const item = pushedBy.item();
    let gridsterItemCollision;
    if (this.gridster.$options().swapWhileDragging) {
      gridsterItemCollision = this.gridster.checkCollisionForSwaping($item);
    } else {
      gridsterItemCollision = this.gridster.checkCollision($item);
    }
    if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
      const gridsterItemCollide = gridsterItemCollision;
      const collide$item = gridsterItemCollide.$item();
      const copyX = $item.x;
      const copyCollisionX = collide$item.x;
      const copyCollisionY = collide$item.y;
      const copyY = $item.y;
      const diffX = copyX - copyCollisionX;
      const diffY = copyY - copyCollisionY;
      collide$item.x = item.x - diffX;
      collide$item.y = item.y - diffY;
      $item.x = gridsterItemCollide.item().x + diffX;
      $item.y = gridsterItemCollide.item().y + diffY;
      if (this.gridster.checkCollision(collide$item) || this.gridster.checkCollision($item)) {
        $item.x = copyX;
        $item.y = copyY;
        collide$item.x = copyCollisionX;
        collide$item.y = copyCollisionY;
      } else {
        gridsterItemCollide.setSize();
        this.swapedItem = gridsterItemCollide;
        if (this.gridster.$options().swapWhileDragging) {
          this.gridsterItem.checkItemChanges(this.gridsterItem.$item(), this.gridsterItem.item());
          this.setSwapItem();
        }
      }
    }
  }
};
var GRIDSTER_ITEM_RESIZABLE_HANDLER_CLASS = "gridster-item-resizable-handler";
var Direction;
(function(Direction2) {
  Direction2["UP"] = "UP";
  Direction2["DOWN"] = "DOWN";
  Direction2["LEFT"] = "LEFT";
  Direction2["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
var GridsterDraggable = class {
  gridsterItem;
  gridster;
  zone;
  cdRef;
  lastMouse = {
    clientX: 0,
    clientY: 0
  };
  offsetLeft;
  offsetTop;
  margin;
  outerMarginTop;
  outerMarginRight;
  outerMarginBottom;
  outerMarginLeft;
  diffTop;
  diffLeft;
  originalClientX;
  originalClientY;
  top;
  left;
  height;
  width;
  positionX;
  positionY;
  positionXBackup;
  positionYBackup;
  enabled;
  mousemove;
  mouseup;
  mouseleave;
  cancelOnBlur;
  touchmove;
  touchend;
  touchcancel;
  mousedown;
  touchstart;
  push;
  swap;
  path = [];
  collision = false;
  constructor(gridsterItem, gridster, zone, cdRef) {
    this.gridsterItem = gridsterItem;
    this.gridster = gridster;
    this.zone = zone;
    this.cdRef = cdRef;
  }
  destroy() {
    if (this.gridster.previewStyle) {
      this.gridster.previewStyle(true);
    }
    this.gridsterItem = this.gridster = this.collision = null;
    if (this.mousedown) {
      this.mousedown();
      this.touchstart();
    }
  }
  dragStart(e) {
    if (e.which && e.which !== 1 || this.gridster.dragInProgress) {
      return;
    }
    const options = this.gridster.options();
    const $options = this.gridster.$options();
    if (options.draggable && options.draggable.start) {
      options.draggable.start(this.gridsterItem.item(), this.gridsterItem, e);
    }
    e.stopPropagation();
    e.preventDefault();
    this.zone.runOutsideAngular(() => {
      this.mousemove = this.gridsterItem.renderer.listen("document", "mousemove", this.dragMove);
      this.touchmove = this.gridster.renderer.listen(this.gridster.el, "touchmove", this.dragMove);
    });
    this.mouseup = this.gridsterItem.renderer.listen("document", "mouseup", this.dragStop);
    this.mouseleave = this.gridsterItem.renderer.listen("document", "mouseleave", this.dragStop);
    this.cancelOnBlur = this.gridsterItem.renderer.listen("window", "blur", this.dragStop);
    this.touchend = this.gridsterItem.renderer.listen("document", "touchend", this.dragStop);
    this.touchcancel = this.gridsterItem.renderer.listen("document", "touchcancel", this.dragStop);
    this.gridsterItem.renderer.addClass(this.gridsterItem.el, "gridster-item-moving");
    this.margin = $options.margin;
    this.outerMarginTop = $options.outerMarginTop;
    this.outerMarginRight = $options.outerMarginRight;
    this.outerMarginBottom = $options.outerMarginBottom;
    this.outerMarginLeft = $options.outerMarginLeft;
    this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
    this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
    this.left = this.gridsterItem.left - this.margin;
    this.top = this.gridsterItem.top - this.margin;
    this.originalClientX = e.clientX;
    this.originalClientY = e.clientY;
    this.width = this.gridsterItem.width;
    this.height = this.gridsterItem.height;
    if ($options.dirType === DirTypes.RTL) {
      this.diffLeft = e.clientX - this.gridster.el.scrollWidth + this.gridsterItem.left;
    } else {
      this.diffLeft = e.clientX + this.offsetLeft - this.margin - this.left;
    }
    this.diffTop = e.clientY + this.offsetTop - this.margin - this.top;
    this.gridster.movingItem = this.gridsterItem.$item();
    this.gridster.previewStyle(true);
    this.push = new GridsterPush(this.gridsterItem);
    this.swap = new GridsterSwap(this.gridsterItem);
    this.gridster.dragInProgress = true;
    this.gridster.updateGrid();
    this.path.push({
      x: this.gridsterItem.item().x || 0,
      y: this.gridsterItem.item().y || 0
    });
  }
  dragMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    GridsterUtils.checkTouchEvent(e);
    let directions = this.getDirections(e);
    const $options = this.gridster.$options();
    if ($options.enableBoundaryControl) {
      if (directions.includes(Direction.UP) && this.gridsterItem.el.getBoundingClientRect().top < this.gridster.el.getBoundingClientRect().top + (this.outerMarginTop ?? this.margin)) {
        directions = directions.filter((direction) => direction != Direction.UP);
        e = new MouseEvent(e.type, {
          clientX: e.clientX,
          clientY: this.lastMouse.clientY
        });
      }
      if (directions.includes(Direction.LEFT) && this.gridsterItem.el.getBoundingClientRect().left < this.gridster.el.getBoundingClientRect().left + (this.outerMarginLeft ?? this.margin)) {
        directions = directions.filter((direction) => direction != Direction.LEFT);
        e = new MouseEvent(e.type, {
          clientX: this.lastMouse.clientX,
          clientY: e.clientY
        });
      }
      if (directions.includes(Direction.RIGHT) && this.gridsterItem.el.getBoundingClientRect().right > this.gridster.el.getBoundingClientRect().right - (this.outerMarginRight ?? this.margin)) {
        directions = directions.filter((direction) => direction != Direction.RIGHT);
        e = new MouseEvent(e.type, {
          clientX: this.lastMouse.clientX,
          clientY: e.clientY
        });
      }
      if (directions.includes(Direction.DOWN) && this.gridsterItem.el.getBoundingClientRect().bottom > this.gridster.el.getBoundingClientRect().bottom - (this.outerMarginBottom ?? this.margin)) {
        directions = directions.filter((direction) => direction != Direction.DOWN);
        e = new MouseEvent(e.type, {
          clientX: e.clientX,
          clientY: this.lastMouse.clientY
        });
      }
    }
    if (directions.length) {
      this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
      this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
      scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.calculateItemPositionFromMousePosition);
      this.calculateItemPositionFromMousePosition(e);
    }
  };
  calculateItemPositionFromMousePosition = (e) => {
    const options = this.gridster.options();
    if (options.scale) {
      this.calculateItemPositionWithScale(e, options.scale);
    } else {
      this.calculateItemPositionWithoutScale(e);
    }
    this.calculateItemPosition();
    this.lastMouse.clientX = e.clientX;
    this.lastMouse.clientY = e.clientY;
    this.zone.run(() => this.gridster.updateGrid());
  };
  calculateItemPositionWithScale(e, scale) {
    if (this.gridster.$options().dirType === DirTypes.RTL) {
      this.left = this.gridster.el.scrollWidth - this.originalClientX + (e.clientX - this.originalClientX) / scale + this.diffLeft;
    } else {
      this.left = this.originalClientX + (e.clientX - this.originalClientX) / scale + this.offsetLeft - this.diffLeft;
    }
    this.top = this.originalClientY + (e.clientY - this.originalClientY) / scale + this.offsetTop - this.diffTop;
  }
  calculateItemPositionWithoutScale(e) {
    const isRTL = this.gridster.$options().dirType === DirTypes.RTL;
    if (isRTL) {
      this.left = this.gridster.el.offsetWidth - (e.clientX + this.offsetLeft - this.diffLeft);
    } else {
      this.left = e.clientX + this.offsetLeft - this.diffLeft;
    }
    this.top = e.clientY + this.offsetTop - this.diffTop;
  }
  dragStop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    cancelScroll();
    this.cancelOnBlur();
    this.mousemove();
    this.mouseup();
    this.mouseleave();
    this.touchmove();
    this.touchend();
    this.touchcancel();
    this.gridsterItem.renderer.removeClass(this.gridsterItem.el, "gridster-item-moving");
    this.gridster.dragInProgress = false;
    this.gridster.updateGrid();
    this.path = [];
    const options = this.gridster.options();
    if (options.draggable && options.draggable.stop) {
      Promise.resolve(options.draggable.stop(this.gridsterItem.item(), this.gridsterItem, e)).then(this.makeDrag, this.cancelDrag);
    } else {
      this.makeDrag();
    }
    setTimeout(() => {
      if (this.gridster) {
        this.gridster.movingItem = null;
        this.gridster.previewStyle(true);
        this.cdRef.markForCheck();
      }
    });
  };
  cancelDrag = () => {
    this.gridsterItem.$item().x = this.gridsterItem.item().x || 0;
    this.gridsterItem.$item().y = this.gridsterItem.item().y || 0;
    this.gridsterItem.setSize();
    if (this.push) {
      this.push.restoreItems();
    }
    if (this.swap) {
      this.swap.restoreSwapItem();
    }
    if (this.push) {
      this.push.destroy();
      this.push = null;
    }
    if (this.swap) {
      this.swap.destroy();
      this.swap = null;
    }
  };
  makeDrag = () => {
    const options = this.gridster.options();
    if (this.gridster.$options().draggable.dropOverItems && options.draggable && options.draggable.dropOverItemsCallback && this.collision && this.collision !== true && this.collision.$item()) {
      options.draggable.dropOverItemsCallback(this.gridsterItem.item(), this.collision.item(), this.gridster);
    }
    this.collision = false;
    this.gridsterItem.setSize();
    this.gridsterItem.checkItemChanges(this.gridsterItem.$item(), this.gridsterItem.item());
    if (this.push) {
      this.push.setPushedItems();
    }
    if (this.swap) {
      this.swap.setSwapItem();
    }
    if (this.push) {
      this.push.destroy();
      this.push = null;
    }
    if (this.swap) {
      this.swap.destroy();
      this.swap = null;
    }
  };
  calculateItemPosition() {
    const $item = this.gridster.movingItem = this.gridsterItem.$item();
    this.positionX = this.gridster.pixelsToPositionX(this.left, Math.round);
    this.positionY = this.gridster.pixelsToPositionY(this.top, Math.round);
    this.positionXBackup = $item.x;
    this.positionYBackup = $item.y;
    $item.x = this.positionX;
    if (this.gridster.checkGridCollision($item)) {
      $item.x = this.positionXBackup;
    }
    $item.y = this.positionY;
    if (this.gridster.checkGridCollision($item)) {
      $item.y = this.positionYBackup;
    }
    this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, this.left, this.top);
    if (this.positionXBackup !== $item.x || this.positionYBackup !== $item.y) {
      const lastPosition = this.path[this.path.length - 1];
      let direction = "";
      if (lastPosition.x < $item.x) {
        direction = this.push.fromWest;
      } else if (lastPosition.x > $item.x) {
        direction = this.push.fromEast;
      } else if (lastPosition.y < $item.y) {
        direction = this.push.fromNorth;
      } else if (lastPosition.y > $item.y) {
        direction = this.push.fromSouth;
      }
      const $options = this.gridster.$options();
      this.push.pushItems(direction, $options.disablePushOnDrag);
      this.swap.swapItems();
      this.collision = this.gridster.checkCollision($item);
      if (this.collision) {
        $item.x = this.positionXBackup;
        $item.y = this.positionYBackup;
        if ($options.draggable.dropOverItems && this.collision !== true && this.collision.$item()) {
          this.gridster.movingItem = null;
        }
      } else {
        this.path.push({
          x: $item.x,
          y: $item.y
        });
      }
      this.push.checkPushBack();
    } else {
      this.collision = false;
    }
    this.gridster.previewStyle(true);
  }
  toggle() {
    const enableDrag = this.gridsterItem.canBeDragged();
    if (!this.enabled && enableDrag) {
      this.enabled = !this.enabled;
      this.mousedown = this.gridsterItem.renderer.listen(this.gridsterItem.el, "mousedown", this.dragStartDelay);
      this.touchstart = this.gridsterItem.renderer.listen(this.gridsterItem.el, "touchstart", this.dragStartDelay);
    } else if (this.enabled && !enableDrag) {
      this.enabled = !this.enabled;
      this.mousedown();
      this.touchstart();
    }
  }
  dragStartDelay = (e) => {
    const target = e.target;
    if (target.classList.contains(GRIDSTER_ITEM_RESIZABLE_HANDLER_CLASS)) {
      return;
    }
    if (GridsterUtils.checkContentClassForEvent(this.gridster, e)) {
      return;
    }
    GridsterUtils.checkTouchEvent(e);
    const $options = this.gridster.$options();
    if (!$options.draggable.delayStart) {
      this.dragStart(e);
      return;
    }
    const timeout = setTimeout(() => {
      this.dragStart(e);
      cancelDrag();
      this.cdRef.markForCheck();
    }, $options.draggable.delayStart);
    const cancelMouse = this.gridsterItem.renderer.listen("document", "mouseup", cancelDrag);
    const cancelMouseLeave = this.gridsterItem.renderer.listen("document", "mouseleave", cancelDrag);
    const cancelOnBlur = this.gridsterItem.renderer.listen("window", "blur", cancelDrag);
    const cancelTouchMove = this.gridsterItem.renderer.listen("document", "touchmove", cancelMove);
    const cancelTouchEnd = this.gridsterItem.renderer.listen("document", "touchend", cancelDrag);
    const cancelTouchCancel = this.gridsterItem.renderer.listen("document", "touchcancel", cancelDrag);
    function cancelMove(eventMove) {
      GridsterUtils.checkTouchEvent(eventMove);
      if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
        cancelDrag();
      }
    }
    function cancelDrag() {
      clearTimeout(timeout);
      cancelOnBlur();
      cancelMouse();
      cancelMouseLeave();
      cancelTouchMove();
      cancelTouchEnd();
      cancelTouchCancel();
    }
  };
  /**
   * Returns the list of directions for given mouse event
   * @param e Mouse event
   * */
  getDirections(e) {
    const directions = [];
    if (this.lastMouse.clientX === 0 && this.lastMouse.clientY === 0) {
      this.lastMouse.clientY = e.clientY;
      this.lastMouse.clientX = e.clientX;
    }
    if (this.lastMouse.clientY > e.clientY) {
      directions.push(Direction.UP);
    }
    if (this.lastMouse.clientY < e.clientY) {
      directions.push(Direction.DOWN);
    }
    if (this.lastMouse.clientX < e.clientX) {
      directions.push(Direction.RIGHT);
    }
    if (this.lastMouse.clientX > e.clientX) {
      directions.push(Direction.LEFT);
    }
    return directions;
  }
};
var GridsterPushResize = class {
  gridsterItem;
  fromSouth = "fromSouth";
  fromNorth = "fromNorth";
  fromEast = "fromEast";
  fromWest = "fromWest";
  pushedItems = [];
  pushedItemsPath = [];
  gridster;
  tryPattern = {
    fromEast: this.tryWest,
    fromWest: this.tryEast,
    fromNorth: this.trySouth,
    fromSouth: this.tryNorth
  };
  constructor(gridsterItem) {
    this.gridsterItem = gridsterItem;
    this.gridster = gridsterItem.gridster;
  }
  destroy() {
    this.gridster = this.gridsterItem = null;
  }
  pushItems(direction) {
    if (this.gridster.$options().pushResizeItems) {
      return this.push(this.gridsterItem, direction);
    } else {
      return false;
    }
  }
  restoreItems() {
    let i = 0;
    const l = this.pushedItems.length;
    let pushedItem;
    for (; i < l; i++) {
      pushedItem = this.pushedItems[i];
      const $item = pushedItem.$item();
      const item = pushedItem.item();
      $item.x = item.x || 0;
      $item.y = item.y || 0;
      $item.cols = item.cols || 1;
      $item.row = item.row || 1;
      pushedItem.setSize();
    }
    this.pushedItems = [];
    this.pushedItemsPath = [];
  }
  setPushedItems() {
    let i = 0;
    const l = this.pushedItems.length;
    let pushedItem;
    for (; i < l; i++) {
      pushedItem = this.pushedItems[i];
      pushedItem.checkItemChanges(pushedItem.$item(), pushedItem.item());
    }
    this.pushedItems = [];
    this.pushedItemsPath = [];
  }
  checkPushBack() {
    let i = this.pushedItems.length - 1;
    let change = false;
    for (; i > -1; i--) {
      if (this.checkPushedItem(this.pushedItems[i], i)) {
        change = true;
      }
    }
    if (change) {
      this.checkPushBack();
    }
  }
  push(gridsterItem, direction) {
    const gridsterItemCollision = this.gridster.checkCollision(gridsterItem.$item());
    if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision !== this.gridsterItem && gridsterItemCollision.canBeResized()) {
      if (this.tryPattern[direction].call(this, gridsterItemCollision, gridsterItem, direction)) {
        return true;
      }
    } else if (gridsterItemCollision === false) {
      return true;
    }
    return false;
  }
  trySouth(gridsterItemCollide, gridsterItem, direction) {
    const $item = gridsterItemCollide.$item();
    const backUpY = $item.y;
    const backUpRows = $item.rows;
    $item.y = gridsterItem.$item().y + gridsterItem.$item().rows;
    $item.rows = backUpRows + backUpY - $item.y;
    if (!this.gridster.checkCollisionTwoItems($item, gridsterItem.$item()) && !this.gridster.checkGridCollision($item)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      this.push(gridsterItem, direction);
      return true;
    } else {
      $item.y = backUpY;
      $item.rows = backUpRows;
    }
    return false;
  }
  tryNorth(gridsterItemCollide, gridsterItem, direction) {
    const $item = gridsterItemCollide.$item();
    const backUpRows = $item.rows;
    $item.rows = gridsterItem.$item().y - $item.y;
    if (!this.gridster.checkCollisionTwoItems($item, gridsterItem.$item()) && !this.gridster.checkGridCollision($item)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      this.push(gridsterItem, direction);
      return true;
    } else {
      $item.rows = backUpRows;
    }
    return false;
  }
  tryEast(gridsterItemCollide, gridsterItem, direction) {
    const $item = gridsterItemCollide.$item();
    const backUpX = $item.x;
    const backUpCols = $item.cols;
    $item.x = gridsterItem.$item().x + gridsterItem.$item().cols;
    $item.cols = backUpCols + backUpX - $item.x;
    if (!this.gridster.checkCollisionTwoItems($item, gridsterItem.$item()) && !this.gridster.checkGridCollision($item)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      this.push(gridsterItem, direction);
      return true;
    } else {
      $item.x = backUpX;
      $item.cols = backUpCols;
    }
    return false;
  }
  tryWest(gridsterItemCollide, gridsterItem, direction) {
    const $item = gridsterItemCollide.$item();
    const backUpCols = $item.cols;
    $item.cols = gridsterItem.$item().x - $item.x;
    if (!this.gridster.checkCollisionTwoItems($item, gridsterItem.$item()) && !this.gridster.checkGridCollision($item)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      this.push(gridsterItem, direction);
      return true;
    } else {
      $item.cols = backUpCols;
    }
    return false;
  }
  addToPushed(gridsterItem) {
    const item = gridsterItem.item();
    const $item = gridsterItem.$item();
    if (this.pushedItems.indexOf(gridsterItem) < 0) {
      this.pushedItems.push(gridsterItem);
      this.pushedItemsPath.push([{
        x: item.x || 0,
        y: item.y || 0,
        cols: item.cols || 0,
        rows: item.rows || 0
      }, {
        x: $item.x,
        y: $item.y,
        cols: $item.cols,
        rows: $item.rows
      }]);
    } else {
      const i = this.pushedItems.indexOf(gridsterItem);
      this.pushedItemsPath[i].push({
        x: $item.x,
        y: $item.y,
        cols: $item.cols,
        rows: $item.rows
      });
    }
  }
  removeFromPushed(i) {
    if (i > -1) {
      this.pushedItems.splice(i, 1);
      this.pushedItemsPath.splice(i, 1);
    }
  }
  checkPushedItem(pushedItem, i) {
    const path = this.pushedItemsPath[i];
    const $item = pushedItem.$item();
    for (let j = path.length - 2; j > -1; j--) {
      const lastPosition = path[j];
      const x = $item.x;
      const y = $item.y;
      const cols = $item.cols;
      const rows = $item.rows;
      $item.x = lastPosition.x;
      $item.y = lastPosition.y;
      $item.cols = lastPosition.cols;
      $item.rows = lastPosition.rows;
      if (!this.gridster.findItemWithItem($item)) {
        pushedItem.setSize();
        path.splice(j + 1, path.length - 1 - j);
      } else {
        $item.x = x;
        $item.y = y;
        $item.cols = cols;
        $item.rows = rows;
      }
    }
    if (path.length < 2) {
      this.removeFromPushed(i);
      return true;
    }
    return false;
  }
};
var GridsterResizable = class {
  gridsterItem;
  gridster;
  zone;
  lastMouse = {
    clientX: 0,
    clientY: 0
  };
  itemBackup = {
    x: 0,
    y: 0,
    cols: 0,
    rows: 0
  };
  resizeEventScrollType = {
    west: false,
    east: false,
    north: false,
    south: false
  };
  /**
   * The direction function may reference any of the `GridsterResizable` class methods, that are
   * responsible for gridster resize when the `dragmove` event is being handled. E.g. it may reference
   * the `handleNorth` method when the north handle is pressed and moved by a mouse.
   */
  directionFunction = null;
  resizeEnabled = signal(false, ...ngDevMode ? [{
    debugName: "resizeEnabled"
  }] : []);
  resizableHandles = signal({
    s: false,
    e: false,
    n: false,
    w: false,
    se: false,
    ne: false,
    sw: false,
    nw: false
  }, ...ngDevMode ? [{
    debugName: "resizableHandles"
  }] : []);
  mousemove;
  mouseup;
  mouseleave;
  cancelOnBlur;
  touchmove;
  touchend;
  touchcancel;
  push;
  pushResize;
  minHeight;
  minWidth;
  offsetTop;
  offsetLeft;
  diffTop;
  diffLeft;
  diffRight;
  diffBottom;
  margin;
  outerMarginTop;
  outerMarginRight;
  outerMarginBottom;
  outerMarginLeft;
  originalClientX;
  originalClientY;
  top;
  left;
  bottom;
  right;
  width;
  height;
  hasRatio;
  constructor(gridsterItem, gridster, zone) {
    this.gridsterItem = gridsterItem;
    this.gridster = gridster;
    this.zone = zone;
  }
  destroy() {
    this.gridster?.previewStyle();
    this.gridster = this.gridsterItem = null;
  }
  dragStart(e) {
    if (e.which && e.which !== 1 || this.gridster.dragInProgress) {
      return;
    }
    const options = this.gridster.options();
    const $options = this.gridster.$options();
    if (options.resizable && options.resizable.start) {
      options.resizable.start(this.gridsterItem.item(), this.gridsterItem, e);
    }
    e.stopPropagation();
    e.preventDefault();
    this.zone.runOutsideAngular(() => {
      this.mousemove = this.gridsterItem.renderer.listen("document", "mousemove", this.dragMove);
      this.touchmove = this.gridster.renderer.listen(this.gridster.el, "touchmove", this.dragMove);
    });
    this.mouseup = this.gridsterItem.renderer.listen("document", "mouseup", this.dragStop);
    this.mouseleave = this.gridsterItem.renderer.listen("document", "mouseleave", this.dragStop);
    this.cancelOnBlur = this.gridsterItem.renderer.listen("window", "blur", this.dragStop);
    this.touchend = this.gridsterItem.renderer.listen("document", "touchend", this.dragStop);
    this.touchcancel = this.gridsterItem.renderer.listen("document", "touchcancel", this.dragStop);
    this.gridsterItem.renderer.addClass(this.gridsterItem.el, "gridster-item-resizing");
    this.lastMouse.clientX = e.clientX;
    this.lastMouse.clientY = e.clientY;
    this.left = this.gridsterItem.left;
    this.top = this.gridsterItem.top;
    this.originalClientX = e.clientX;
    this.originalClientY = e.clientY;
    this.width = this.gridsterItem.width;
    this.height = this.gridsterItem.height;
    this.bottom = this.gridsterItem.top + this.gridsterItem.height;
    this.right = this.gridsterItem.left + this.gridsterItem.width;
    this.margin = $options.margin;
    this.outerMarginTop = $options.outerMarginTop;
    this.outerMarginRight = $options.outerMarginRight;
    this.outerMarginBottom = $options.outerMarginBottom;
    this.outerMarginLeft = $options.outerMarginLeft;
    this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
    this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
    this.diffLeft = e.clientX + this.offsetLeft - this.left;
    this.diffRight = e.clientX + this.offsetLeft - this.right;
    this.diffTop = e.clientY + this.offsetTop - this.top;
    this.diffBottom = e.clientY + this.offsetTop - this.bottom;
    this.minHeight = this.gridster.positionYToPixels(this.gridsterItem.$item().minItemRows || $options.minItemRows) - this.margin;
    this.minWidth = this.gridster.positionXToPixels(this.gridsterItem.$item().minItemCols || $options.minItemCols) - this.margin;
    this.gridster.movingItem = this.gridsterItem.$item();
    this.gridster.previewStyle();
    this.push = new GridsterPush(this.gridsterItem);
    this.pushResize = new GridsterPushResize(this.gridsterItem);
    this.gridster.dragInProgress = true;
    this.hasRatio = !!($options.itemAspectRatio || this.gridsterItem.$item().itemAspectRatio);
    this.itemBackup = {
      x: 0,
      y: 0,
      cols: 0,
      rows: 0
    };
    this.gridster.updateGrid();
    const {
      classList
    } = e.target;
    if (classList.contains("handle-n")) {
      this.resizeEventScrollType.north = true;
      this.directionFunction = this.handleNorth;
    } else if (classList.contains("handle-w")) {
      if ($options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleEast;
      } else {
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleWest;
      }
    } else if (classList.contains("handle-s")) {
      this.resizeEventScrollType.south = true;
      this.directionFunction = this.handleSouth;
    } else if (classList.contains("handle-e")) {
      if ($options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleWest;
      } else {
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleEast;
      }
    } else if (classList.contains("handle-nw")) {
      if ($options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.north = true;
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleNorthEast;
      } else {
        this.resizeEventScrollType.north = true;
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleNorthWest;
      }
    } else if (classList.contains("handle-ne")) {
      if ($options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.north = true;
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleNorthWest;
      } else {
        this.resizeEventScrollType.north = true;
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleNorthEast;
      }
    } else if (classList.contains("handle-sw")) {
      if ($options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.south = true;
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleSouthEast;
      } else {
        this.resizeEventScrollType.south = true;
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleSouthWest;
      }
    } else if (classList.contains("handle-se")) {
      if ($options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.south = true;
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleSouthWest;
      } else {
        this.resizeEventScrollType.south = true;
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleSouthEast;
      }
    }
  }
  dragMove = (e) => {
    if (this.directionFunction === null) {
      throw new Error("The `directionFunction` has not been set before calling `dragMove`.");
    }
    e.stopPropagation();
    e.preventDefault();
    GridsterUtils.checkTouchEvent(e);
    this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
    this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
    scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.directionFunction, true, this.resizeEventScrollType);
    const scale = this.gridster.$options().scale;
    this.directionFunction({
      clientX: this.originalClientX + (e.clientX - this.originalClientX) / scale,
      clientY: this.originalClientY + (e.clientY - this.originalClientY) / scale
    });
    this.lastMouse.clientX = e.clientX;
    this.lastMouse.clientY = e.clientY;
    this.zone.run(() => {
      this.gridster.updateGrid();
    });
  };
  dragStop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    cancelScroll();
    this.mousemove();
    this.mouseup();
    this.mouseleave();
    this.cancelOnBlur();
    this.touchmove();
    this.touchend();
    this.touchcancel();
    this.gridster.dragInProgress = false;
    this.resizeEventScrollType = {
      west: false,
      east: false,
      north: false,
      south: false
    };
    this.gridster.updateGrid();
    const options = this.gridster.options();
    if (options.resizable && options.resizable.stop) {
      Promise.resolve(options.resizable.stop(this.gridsterItem.item(), this.gridsterItem, e)).then(this.makeResize, this.cancelResize);
    } else {
      this.makeResize();
    }
    setTimeout(() => {
      this.gridsterItem.renderer.removeClass(this.gridsterItem.el, "gridster-item-resizing");
      if (this.gridster) {
        this.gridster.movingItem = null;
        this.gridster.previewStyle();
      }
    });
  };
  cancelResize = () => {
    const $item = this.gridsterItem.$item();
    const item = this.gridsterItem.item();
    $item.cols = item.cols || 1;
    $item.rows = item.rows || 1;
    $item.x = item.x || 0;
    $item.y = item.y || 0;
    this.gridsterItem.setSize();
    this.push.restoreItems();
    this.pushResize.restoreItems();
    this.push.destroy();
    this.push = null;
    this.pushResize.destroy();
    this.pushResize = null;
  };
  makeResize = () => {
    this.gridsterItem.setSize();
    this.gridsterItem.checkItemChanges(this.gridsterItem.$item(), this.gridsterItem.item());
    this.push.setPushedItems();
    this.pushResize.setPushedItems();
    this.push.destroy();
    this.push = null;
    this.pushResize.destroy();
    this.pushResize = null;
  };
  check = (direction) => {
    this.hasRatio && this.enforceAspectRatio();
    this.pushResize.pushItems(direction);
    this.push.pushItems(direction, this.gridster.$options().disablePushOnResize);
    if (this.gridster.checkCollision(this.gridsterItem.$item(), true)) {
      this.resetItem(this.hasRatio);
      return false;
    }
    this.gridster.previewStyle();
    this.pushResize.checkPushBack();
    this.push.checkPushBack();
    return true;
  };
  getNewNorthPosition = (e) => {
    this.top = e.clientY + this.offsetTop - this.diffTop;
    this.height = this.bottom - this.top;
    if (this.minHeight > this.height) {
      this.height = this.minHeight;
      this.top = this.bottom - this.minHeight;
    } else if (this.gridster.$options().enableBoundaryControl) {
      this.top = Math.max(0, this.top);
      this.height = this.bottom - this.top;
    }
    const marginTop = this.gridster.$options().pushItems ? this.margin : 0;
    return this.gridster.pixelsToPositionY(this.top + marginTop, Math.floor);
  };
  handleNorth = (e) => {
    const newPosition = this.getNewNorthPosition(e);
    const $item = this.gridsterItem.$item();
    if ($item.y !== newPosition) {
      this.makeItemBackup();
      $item.rows += $item.y - newPosition;
      $item.y = newPosition;
      if (!this.check(this.pushResize.fromSouth)) {
        return;
      }
    }
    this.setItemTop(this.top);
    this.setItemHeight(this.height);
  };
  getNewWestPosition = (e) => {
    const $options = this.gridster.$options();
    const clientX = $options.dirType === DirTypes.RTL ? this.originalClientX + (this.originalClientX - e.clientX) : e.clientX;
    this.left = clientX + this.offsetLeft - this.diffLeft;
    this.width = this.right - this.left;
    if (this.minWidth > this.width) {
      this.width = this.minWidth;
      this.left = this.right - this.minWidth;
    } else if ($options.enableBoundaryControl) {
      this.left = Math.max(0, this.left);
      this.width = this.right - this.left;
    }
    const marginLeft = $options.pushItems ? this.margin : 0;
    return this.gridster.pixelsToPositionX(this.left + marginLeft, Math.floor);
  };
  handleWest = (e) => {
    const newPosition = this.getNewWestPosition(e);
    const $item = this.gridsterItem.$item();
    if ($item.x !== newPosition) {
      this.makeItemBackup();
      $item.cols += $item.x - newPosition;
      $item.x = newPosition;
      if (!this.check(this.pushResize.fromEast)) {
        return;
      }
    }
    this.setItemLeft(this.left);
    this.setItemWidth(this.width);
  };
  getNewSouthPosition = (e) => {
    this.height = e.clientY + this.offsetTop - this.diffBottom - this.top;
    if (this.minHeight > this.height) {
      this.height = this.minHeight;
    }
    this.bottom = this.top + this.height;
    const $options = this.gridster.$options();
    if ($options.enableBoundaryControl) {
      const margin = this.outerMarginBottom ?? this.margin;
      const box = this.gridster.el.getBoundingClientRect();
      this.bottom = Math.min(this.bottom, box.bottom - box.top - 2 * margin);
      this.height = this.bottom - this.top;
    }
    const marginBottom = $options.pushItems ? 0 : this.margin;
    return this.gridster.pixelsToPositionY(this.bottom + marginBottom, Math.ceil);
  };
  handleSouth = (e) => {
    const newPosition = this.getNewSouthPosition(e);
    const $item = this.gridsterItem.$item();
    if ($item.y + $item.rows !== newPosition) {
      this.makeItemBackup();
      $item.rows = newPosition - $item.y;
      if (!this.check(this.pushResize.fromNorth)) {
        return;
      }
    }
    this.setItemHeight(this.height);
  };
  getNewEastPosition = (e) => {
    const $options = this.gridster.$options();
    const clientX = $options.dirType === DirTypes.RTL ? this.originalClientX + (this.originalClientX - e.clientX) : e.clientX;
    this.width = clientX + this.offsetLeft - this.diffRight - this.left;
    if (this.minWidth > this.width) {
      this.width = this.minWidth;
    }
    this.right = this.left + this.width;
    if ($options.enableBoundaryControl) {
      const margin = this.outerMarginRight ?? this.margin;
      const box = this.gridster.el.getBoundingClientRect();
      this.right = Math.min(this.right, box.right - box.left - 2 * margin);
      this.width = this.right - this.left;
    }
    const marginRight = $options.pushItems ? 0 : this.margin;
    return this.gridster.pixelsToPositionX(this.right + marginRight, Math.ceil);
  };
  handleEast = (e) => {
    const newPosition = this.getNewEastPosition(e);
    const $item = this.gridsterItem.$item();
    if ($item.x + $item.cols !== newPosition) {
      this.makeItemBackup();
      $item.cols = newPosition - $item.x;
      if (!this.check(this.pushResize.fromWest)) {
        return;
      }
    }
    this.setItemWidth(this.width);
  };
  handleNorthWest = (e) => {
    const newNorth = this.getNewNorthPosition(e);
    const newWest = this.getNewWestPosition(e);
    const $item = this.gridsterItem.$item();
    if ($item.y !== newNorth || $item.x !== newWest) {
      this.makeItemBackup();
      $item.rows += $item.y - newNorth;
      $item.y = newNorth;
      $item.cols += $item.x - newWest;
      $item.x = newWest;
      if (!this.check(this.pushResize.fromSouth)) {
        return;
      }
    }
    this.setItemTop(this.top);
    this.setItemHeight(this.height);
    this.setItemLeft(this.left);
    this.setItemWidth(this.width);
  };
  handleNorthEast = (e) => {
    const newNorth = this.getNewNorthPosition(e);
    const newEast = this.getNewEastPosition(e);
    const $item = this.gridsterItem.$item();
    if ($item.y !== newNorth || $item.x + $item.cols !== newEast) {
      this.makeItemBackup();
      $item.rows += $item.y - newNorth;
      $item.y = newNorth;
      $item.cols = newEast - $item.x;
      if (!this.check(this.pushResize.fromSouth)) {
        return;
      }
    }
    this.setItemTop(this.top);
    this.setItemHeight(this.height);
    this.setItemWidth(this.width);
  };
  handleSouthWest = (e) => {
    const newSouth = this.getNewSouthPosition(e);
    const newWest = this.getNewWestPosition(e);
    const $item = this.gridsterItem.$item();
    if ($item.y + $item.rows !== newSouth || $item.x !== newWest) {
      this.makeItemBackup();
      $item.rows = newSouth - $item.y;
      $item.cols += $item.x - newWest;
      $item.x = newWest;
      if (!this.check(this.pushResize.fromNorth)) {
        return;
      }
    }
    this.setItemLeft(this.left);
    this.setItemHeight(this.height);
    this.setItemWidth(this.width);
  };
  handleSouthEast = (e) => {
    const newSouth = this.getNewSouthPosition(e);
    const newEast = this.getNewEastPosition(e);
    const $item = this.gridsterItem.$item();
    if ($item.y + $item.rows !== newSouth || $item.x + $item.cols !== newEast) {
      this.makeItemBackup();
      $item.rows = newSouth - $item.y;
      $item.cols = newEast - $item.x;
      if (!this.check(this.pushResize.fromNorth)) {
        return;
      }
    }
    this.setItemHeight(this.height);
    this.setItemWidth(this.width);
  };
  makeItemBackup() {
    const $item = this.gridsterItem.$item();
    this.itemBackup.x = $item.x;
    this.itemBackup.y = $item.y;
    this.itemBackup.cols = $item.cols;
    this.itemBackup.rows = $item.rows;
  }
  resetItem(soft = false) {
    const $item = this.gridsterItem.$item();
    if ($item.x !== this.itemBackup.x) {
      $item.x = this.itemBackup.x;
      if (!soft) {
        this.left = this.gridster.positionXToPixels($item.x);
        this.setItemLeft(this.left);
      }
    }
    if ($item.y !== this.itemBackup.y) {
      $item.y = this.itemBackup.y;
      if (!soft) {
        this.top = this.gridster.positionYToPixels($item.y);
        this.setItemTop(this.top);
      }
    }
    if ($item.cols !== this.itemBackup.cols) {
      $item.cols = this.itemBackup.cols;
      if (!soft) {
        this.setItemWidth(this.gridster.positionXToPixels($item.cols) - this.margin);
      }
    }
    if ($item.rows !== this.itemBackup.rows) {
      $item.rows = this.itemBackup.rows;
      if (!soft) {
        this.setItemHeight(this.gridster.positionYToPixels($item.rows) - this.margin);
      }
    }
  }
  toggle() {
    this.resizeEnabled.set(this.gridsterItem.canBeResized());
    this.resizableHandles.set(this.gridsterItem.getResizableHandles());
  }
  dragStartDelay(e) {
    GridsterUtils.checkTouchEvent(e);
    if (!this.gridster.$options().resizable.delayStart) {
      this.dragStart(e);
      return;
    }
    const timeout = setTimeout(() => {
      this.dragStart(e);
      cancelDrag();
    }, this.gridster.$options().resizable.delayStart);
    const {
      cancelMouse,
      cancelMouseLeave,
      cancelOnBlur,
      cancelTouchMove,
      cancelTouchEnd,
      cancelTouchCancel
    } = this.zone.runOutsideAngular(() => {
      const cancelMouse2 = this.gridsterItem.renderer.listen("document", "mouseup", cancelDrag);
      const cancelMouseLeave2 = this.gridsterItem.renderer.listen("document", "mouseleave", cancelDrag);
      const cancelOnBlur2 = this.gridsterItem.renderer.listen("window", "blur", cancelDrag);
      const cancelTouchMove2 = this.gridsterItem.renderer.listen("document", "touchmove", cancelMove);
      const cancelTouchEnd2 = this.gridsterItem.renderer.listen("document", "touchend", cancelDrag);
      const cancelTouchCancel2 = this.gridsterItem.renderer.listen("document", "touchcancel", cancelDrag);
      return {
        cancelMouse: cancelMouse2,
        cancelMouseLeave: cancelMouseLeave2,
        cancelOnBlur: cancelOnBlur2,
        cancelTouchMove: cancelTouchMove2,
        cancelTouchEnd: cancelTouchEnd2,
        cancelTouchCancel: cancelTouchCancel2
      };
    });
    function cancelMove(eventMove) {
      GridsterUtils.checkTouchEvent(eventMove);
      if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
        cancelDrag();
      }
    }
    function cancelDrag() {
      clearTimeout(timeout);
      cancelOnBlur();
      cancelMouse();
      cancelMouseLeave();
      cancelTouchMove();
      cancelTouchEnd();
      cancelTouchCancel();
    }
  }
  setItemTop(top) {
    this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, this.left, top);
  }
  setItemLeft(left) {
    this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, left, this.top);
  }
  setItemHeight(height) {
    this.gridsterItem.renderer.setStyle(this.gridsterItem.el, "height", height + "px");
  }
  setItemWidth(width) {
    this.gridsterItem.renderer.setStyle(this.gridsterItem.el, "width", width + "px");
  }
  /**
   * Enforces the aspect ratio by recalculating grid positions based on current pixel dimensions
   */
  enforceAspectRatio() {
    const $options = this.gridster.$options();
    const $item = this.gridsterItem.$item();
    const aspectRatio = $item.itemAspectRatio || $options.itemAspectRatio;
    if (!aspectRatio) {
      return;
    }
    const targetRatio = aspectRatio * (this.gridster.curColWidth / this.gridster.curRowHeight);
    const minCols = $item.minItemCols || $options.minItemCols;
    const minRows = $item.minItemRows || $options.minItemRows;
    const minWidth = this.gridster.positionXToPixels(minCols) - this.margin;
    const minHeight = this.gridster.positionYToPixels(minRows) - this.margin;
    const maxCols = $item.maxItemCols || $options.maxItemCols || 0;
    const maxRows = $item.maxItemRows || $options.maxItemRows || 0;
    const maxWidth = maxCols ? this.gridster.positionXToPixels(maxCols) - this.margin : Number.MAX_VALUE;
    const maxHeight = maxRows ? this.gridster.positionYToPixels(maxRows) - this.margin : Number.MAX_VALUE;
    let newWidth = this.width;
    let newHeight = this.height;
    if (this.resizeEventScrollType.north || this.resizeEventScrollType.south) {
      newWidth = this.height * targetRatio;
      if (newWidth < minWidth) {
        newWidth = minWidth;
        newHeight = minWidth / targetRatio;
      } else if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newHeight = maxWidth / targetRatio;
      }
    } else if (this.resizeEventScrollType.east || this.resizeEventScrollType.west) {
      newHeight = this.width / targetRatio;
      if (newHeight < minHeight) {
        newHeight = minHeight;
        newWidth = minHeight * targetRatio;
      } else if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = maxHeight * targetRatio;
      }
    }
    if ($options.enableBoundaryControl) {
      const box = this.gridster.el.getBoundingClientRect();
      const margin = Math.max(this.outerMarginTop || this.margin, this.outerMarginRight || this.margin, this.outerMarginBottom || this.margin, this.outerMarginLeft || this.margin);
      const maxRight = box.width - 2 * margin;
      const maxBottom = box.height - 2 * margin;
      if (this.resizeEventScrollType.west) {
        if (this.right - newWidth < 0) {
          newWidth = this.right;
          newHeight = newWidth / targetRatio;
        }
      } else if (this.resizeEventScrollType.east) {
        if (this.left + newWidth > maxRight) {
          newWidth = maxRight - this.left;
          newHeight = newWidth / targetRatio;
        }
      }
      if (this.resizeEventScrollType.north) {
        if (this.bottom - newHeight < 0) {
          newHeight = this.bottom;
          newWidth = newHeight * targetRatio;
        }
      } else if (this.resizeEventScrollType.south) {
        if (this.top + newHeight > maxBottom) {
          newHeight = maxBottom - this.top;
          newWidth = newHeight * targetRatio;
        }
      }
    }
    this.width = newWidth;
    this.height = newHeight;
    if (this.resizeEventScrollType.west) {
      this.left = this.right - this.width;
    }
    if (this.resizeEventScrollType.north) {
      this.top = this.bottom - this.height;
    }
    const marginLeft = $options.pushItems ? 0 : this.margin;
    const marginTop = $options.pushItems ? 0 : this.margin;
    const marginRight = $options.pushItems ? this.margin : 0;
    const marginBottom = $options.pushItems ? this.margin : 0;
    $item.x = this.gridster.pixelsToPositionX(this.left + marginLeft, Math.floor);
    $item.y = this.gridster.pixelsToPositionY(this.top + marginTop, Math.floor);
    $item.cols = this.gridster.pixelsToPositionX(this.width + marginRight, Math.ceil);
    $item.rows = this.gridster.pixelsToPositionY(this.height + marginBottom, Math.ceil);
    this.setItemTop(this.top);
    this.setItemLeft(this.left);
    this.setItemWidth(this.width);
    this.setItemHeight(this.height);
  }
};
var GridsterItem = class _GridsterItem {
  item = input.required(...ngDevMode ? [{
    debugName: "item"
  }] : []);
  itemInit = output();
  itemChange = output();
  itemResize = output();
  cdRef = inject(ChangeDetectorRef);
  el = inject(ElementRef).nativeElement;
  gridster = inject(Gridster);
  renderer = inject(Renderer2);
  zone = inject(NgZone);
  $item = computed(() => {
    return GridsterUtils.merge({}, this.item(), {
      cols: void 0,
      rows: void 0,
      x: void 0,
      y: void 0,
      layerIndex: void 0,
      dragEnabled: void 0,
      resizeEnabled: void 0,
      compactEnabled: void 0,
      itemAspectRatio: void 0,
      maxItemRows: void 0,
      minItemRows: void 0,
      maxItemCols: void 0,
      minItemCols: void 0,
      maxItemArea: void 0,
      minItemArea: void 0,
      resizableHandles: {
        s: void 0,
        e: void 0,
        n: void 0,
        w: void 0,
        se: void 0,
        ne: void 0,
        sw: void 0,
        nw: void 0
      }
    });
  }, ...ngDevMode ? [{
    debugName: "$item"
  }] : []);
  top;
  left;
  width;
  height;
  drag = new GridsterDraggable(this, this.gridster, this.zone, this.cdRef);
  resize = new GridsterResizable(this, this.gridster, this.zone);
  notPlaced;
  init;
  zIndex() {
    return this.getLayerIndex() + this.gridster.$options().baseLayerIndex;
  }
  constructor() {
    effect(() => {
      this.$item();
      if (this.init) {
        untracked(() => this.setSize());
      } else {
        this.gridster.calculateLayout$.next();
      }
    });
  }
  ngOnInit() {
    this.gridster.addItem(this);
  }
  ngOnDestroy() {
    this.gridster.removeItem(this);
    this.drag.destroy();
    this.resize.destroy();
    this.drag = this.resize = null;
  }
  setSize() {
    this.renderer.setStyle(this.el, "display", this.notPlaced ? "" : "block");
    this.gridster.gridRenderer.updateItem(this.el, this.$item(), this.renderer);
    this.updateItemSize();
  }
  updateItemSize() {
    const options = this.gridster.options();
    const $options = this.gridster.$options();
    const $item = this.$item();
    const top = $item.y * this.gridster.curRowHeight;
    const left = $item.x * this.gridster.curColWidth;
    const width = $item.cols * this.gridster.curColWidth - $options.margin;
    const height = $item.rows * this.gridster.curRowHeight - $options.margin;
    this.top = top;
    this.left = left;
    const item = this.item();
    if (!this.init && width > 0 && height > 0) {
      this.init = true;
      if (item.initCallback) {
        item.initCallback(item, this);
      }
      if (options.itemInitCallback) {
        options.itemInitCallback(item, this);
      }
      this.itemInit.emit({
        item,
        itemComponent: this
      });
      if ($options.scrollToNewItems) {
        this.el.scrollIntoView({
          block: "end",
          inline: "nearest",
          behavior: "smooth"
        });
      }
    }
    if (width !== this.width || height !== this.height) {
      this.width = width;
      this.height = height;
      if (options.itemResizeCallback) {
        options.itemResizeCallback(item, this);
      }
      this.itemResize.emit({
        item,
        itemComponent: this
      });
    }
  }
  itemChanged() {
    const options = this.gridster.options();
    const item = this.item();
    if (options.itemChangeCallback) {
      options.itemChangeCallback(item, this);
    }
    this.itemChange.emit({
      item,
      itemComponent: this
    });
  }
  checkItemChanges(newValue, oldValue) {
    if (newValue.rows === oldValue.rows && newValue.cols === oldValue.cols && newValue.x === oldValue.x && newValue.y === oldValue.y) {
      return;
    }
    const $item = this.$item();
    if (this.gridster.checkCollision($item)) {
      $item.x = oldValue.x || 0;
      $item.y = oldValue.y || 0;
      $item.cols = oldValue.cols || 1;
      $item.rows = oldValue.rows || 1;
      this.setSize();
    } else {
      const item = this.item();
      item.cols = $item.cols;
      item.rows = $item.rows;
      item.x = $item.x;
      item.y = $item.y;
      this.gridster.calculateLayout$.next();
      this.itemChanged();
    }
  }
  canBeDragged() {
    const gridDragEnabled = this.gridster.$options().draggable.enabled;
    const $item = this.$item();
    const itemDragEnabled = $item.dragEnabled === void 0 ? gridDragEnabled : $item.dragEnabled;
    return !this.gridster.mobile && gridDragEnabled && itemDragEnabled;
  }
  canBeResized() {
    const gridResizable = this.gridster.$options().resizable.enabled;
    const $item = this.$item();
    const itemResizable = $item.resizeEnabled === void 0 ? gridResizable : $item.resizeEnabled;
    return !this.gridster.mobile && gridResizable && itemResizable;
  }
  getResizableHandles() {
    const gridResizableHandles = this.gridster.$options().resizable.handles;
    const itemResizableHandles = this.$item().resizableHandles;
    if (itemResizableHandles === void 0) {
      return gridResizableHandles;
    }
    return __spreadValues(__spreadValues({}, gridResizableHandles), itemResizableHandles);
  }
  bringToFront(offset) {
    if (offset && offset <= 0) {
      return;
    }
    const layerIndex = this.getLayerIndex();
    const topIndex = this.gridster.$options().maxLayerIndex;
    if (layerIndex < topIndex) {
      const targetIndex = offset ? layerIndex + offset : topIndex;
      this.item().layerIndex = this.$item().layerIndex = targetIndex > topIndex ? topIndex : targetIndex;
    }
  }
  sendToBack(offset) {
    if (offset && offset <= 0) {
      return;
    }
    const layerIndex = this.getLayerIndex();
    if (layerIndex > 0) {
      const targetIndex = offset ? layerIndex - offset : 0;
      this.item().layerIndex = this.$item().layerIndex = targetIndex < 0 ? 0 : targetIndex;
    }
  }
  getLayerIndex() {
    const item = this.item();
    if (item.layerIndex !== void 0) {
      return item.layerIndex;
    }
    if (this.gridster.$options().defaultLayerIndex !== void 0) {
      return this.gridster.$options().defaultLayerIndex;
    }
    return 0;
  }
  JSON = JSON;
  static ɵfac = function GridsterItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridsterItem)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _GridsterItem,
    selectors: [["gridster-item"]],
    hostVars: 2,
    hostBindings: function GridsterItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("z-index", ctx.zIndex());
      }
    },
    inputs: {
      item: [1, "item"]
    },
    outputs: {
      itemInit: "itemInit",
      itemChange: "itemChange",
      itemResize: "itemResize"
    },
    ngContentSelectors: _c0,
    decls: 9,
    vars: 8,
    consts: [[1, "gridster-item-resizable-handler", "handle-s"], [1, "gridster-item-resizable-handler", "handle-e"], [1, "gridster-item-resizable-handler", "handle-n"], [1, "gridster-item-resizable-handler", "handle-w"], [1, "gridster-item-resizable-handler", "handle-se"], [1, "gridster-item-resizable-handler", "handle-ne"], [1, "gridster-item-resizable-handler", "handle-sw"], [1, "gridster-item-resizable-handler", "handle-nw"], [1, "gridster-item-resizable-handler", "handle-s", 3, "mousedown", "touchstart"], [1, "gridster-item-resizable-handler", "handle-e", 3, "mousedown", "touchstart"], [1, "gridster-item-resizable-handler", "handle-n", 3, "mousedown", "touchstart"], [1, "gridster-item-resizable-handler", "handle-w", 3, "mousedown", "touchstart"], [1, "gridster-item-resizable-handler", "handle-se", 3, "mousedown", "touchstart"], [1, "gridster-item-resizable-handler", "handle-ne", 3, "mousedown", "touchstart"], [1, "gridster-item-resizable-handler", "handle-sw", 3, "mousedown", "touchstart"], [1, "gridster-item-resizable-handler", "handle-nw", 3, "mousedown", "touchstart"]],
    template: function GridsterItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵconditionalCreate(1, GridsterItem_Conditional_1_Template, 1, 0, "div", 0);
        ɵɵconditionalCreate(2, GridsterItem_Conditional_2_Template, 1, 0, "div", 1);
        ɵɵconditionalCreate(3, GridsterItem_Conditional_3_Template, 1, 0, "div", 2);
        ɵɵconditionalCreate(4, GridsterItem_Conditional_4_Template, 1, 0, "div", 3);
        ɵɵconditionalCreate(5, GridsterItem_Conditional_5_Template, 1, 0, "div", 4);
        ɵɵconditionalCreate(6, GridsterItem_Conditional_6_Template, 1, 0, "div", 5);
        ɵɵconditionalCreate(7, GridsterItem_Conditional_7_Template, 1, 0, "div", 6);
        ɵɵconditionalCreate(8, GridsterItem_Conditional_8_Template, 1, 0, "div", 7);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.resize.resizableHandles().s && ctx.resize.resizeEnabled() ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.resize.resizableHandles().e && ctx.resize.resizeEnabled() ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.resize.resizableHandles().n && ctx.resize.resizeEnabled() ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.resize.resizableHandles().w && ctx.resize.resizeEnabled() ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.resize.resizableHandles().se && ctx.resize.resizeEnabled() ? 5 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.resize.resizableHandles().ne && ctx.resize.resizeEnabled() ? 6 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.resize.resizableHandles().sw && ctx.resize.resizeEnabled() ? 7 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.resize.resizableHandles().nw && ctx.resize.resizeEnabled() ? 8 : -1);
      }
    },
    styles: ["gridster-item{box-sizing:border-box;z-index:1;position:absolute;overflow:hidden;transition:.3s;display:none;background:#fff;-webkit-user-select:text;user-select:text}gridster-item.gridster-item-moving{cursor:move}gridster-item.gridster-item-resizing,gridster-item.gridster-item-moving{transition:0s;z-index:2;box-shadow:0 0 5px 5px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.gridster-item-resizable-handler{position:absolute;z-index:2}.gridster-item-resizable-handler.handle-n{cursor:ns-resize;height:10px;right:0;top:0;left:0}.gridster-item-resizable-handler.handle-e{cursor:ew-resize;width:10px;bottom:0;right:0;top:0}.gridster-item-resizable-handler.handle-s{cursor:ns-resize;height:10px;right:0;bottom:0;left:0}.gridster-item-resizable-handler.handle-w{cursor:ew-resize;width:10px;left:0;top:0;bottom:0}.gridster-item-resizable-handler.handle-ne{cursor:ne-resize;width:10px;height:10px;right:0;top:0}.gridster-item-resizable-handler.handle-nw{cursor:nw-resize;width:10px;height:10px;left:0;top:0}.gridster-item-resizable-handler.handle-se{cursor:se-resize;width:0;height:0;right:0;bottom:0;border-style:solid;border-width:0 0 10px 10px;border-color:transparent}.gridster-item-resizable-handler.handle-sw{cursor:sw-resize;width:10px;height:10px;left:0;bottom:0}gridster-item:hover .gridster-item-resizable-handler.handle-se{border-color:transparent transparent #ccc}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridsterItem, [{
    type: Component,
    args: [{
      selector: "gridster-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[style.z-index]": `zIndex()`
      },
      template: '<ng-content />\n@if (resize.resizableHandles().s && resize.resizeEnabled()) {\n  <div\n    (mousedown)="resize.dragStartDelay($event)"\n    (touchstart)="resize.dragStartDelay($event)"\n    class="gridster-item-resizable-handler handle-s"\n  ></div>\n}\n@if (resize.resizableHandles().e && resize.resizeEnabled()) {\n  <div\n    (mousedown)="resize.dragStartDelay($event)"\n    (touchstart)="resize.dragStartDelay($event)"\n    class="gridster-item-resizable-handler handle-e"\n  ></div>\n}\n@if (resize.resizableHandles().n && resize.resizeEnabled()) {\n  <div\n    (mousedown)="resize.dragStartDelay($event)"\n    (touchstart)="resize.dragStartDelay($event)"\n    class="gridster-item-resizable-handler handle-n"\n  ></div>\n}\n@if (resize.resizableHandles().w && resize.resizeEnabled()) {\n  <div\n    (mousedown)="resize.dragStartDelay($event)"\n    (touchstart)="resize.dragStartDelay($event)"\n    class="gridster-item-resizable-handler handle-w"\n  ></div>\n}\n@if (resize.resizableHandles().se && resize.resizeEnabled()) {\n  <div\n    (mousedown)="resize.dragStartDelay($event)"\n    (touchstart)="resize.dragStartDelay($event)"\n    class="gridster-item-resizable-handler handle-se"\n  ></div>\n}\n@if (resize.resizableHandles().ne && resize.resizeEnabled()) {\n  <div\n    (mousedown)="resize.dragStartDelay($event)"\n    (touchstart)="resize.dragStartDelay($event)"\n    class="gridster-item-resizable-handler handle-ne"\n  ></div>\n}\n@if (resize.resizableHandles().sw && resize.resizeEnabled()) {\n  <div\n    (mousedown)="resize.dragStartDelay($event)"\n    (touchstart)="resize.dragStartDelay($event)"\n    class="gridster-item-resizable-handler handle-sw"\n  ></div>\n}\n@if (resize.resizableHandles().nw && resize.resizeEnabled()) {\n  <div\n    (mousedown)="resize.dragStartDelay($event)"\n    (touchstart)="resize.dragStartDelay($event)"\n    class="gridster-item-resizable-handler handle-nw"\n  ></div>\n}\n',
      styles: ["gridster-item{box-sizing:border-box;z-index:1;position:absolute;overflow:hidden;transition:.3s;display:none;background:#fff;-webkit-user-select:text;user-select:text}gridster-item.gridster-item-moving{cursor:move}gridster-item.gridster-item-resizing,gridster-item.gridster-item-moving{transition:0s;z-index:2;box-shadow:0 0 5px 5px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.gridster-item-resizable-handler{position:absolute;z-index:2}.gridster-item-resizable-handler.handle-n{cursor:ns-resize;height:10px;right:0;top:0;left:0}.gridster-item-resizable-handler.handle-e{cursor:ew-resize;width:10px;bottom:0;right:0;top:0}.gridster-item-resizable-handler.handle-s{cursor:ns-resize;height:10px;right:0;bottom:0;left:0}.gridster-item-resizable-handler.handle-w{cursor:ew-resize;width:10px;left:0;top:0;bottom:0}.gridster-item-resizable-handler.handle-ne{cursor:ne-resize;width:10px;height:10px;right:0;top:0}.gridster-item-resizable-handler.handle-nw{cursor:nw-resize;width:10px;height:10px;left:0;top:0}.gridster-item-resizable-handler.handle-se{cursor:se-resize;width:0;height:0;right:0;bottom:0;border-style:solid;border-width:0 0 10px 10px;border-color:transparent}.gridster-item-resizable-handler.handle-sw{cursor:sw-resize;width:10px;height:10px;left:0;bottom:0}gridster-item:hover .gridster-item-resizable-handler.handle-se{border-color:transparent transparent #ccc}\n"]
    }]
  }], () => [], {
    item: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "item",
        required: true
      }]
    }],
    itemInit: [{
      type: Output,
      args: ["itemInit"]
    }],
    itemChange: [{
      type: Output,
      args: ["itemChange"]
    }],
    itemResize: [{
      type: Output,
      args: ["itemResize"]
    }]
  });
})();
export {
  CompactType,
  DirTypes,
  DisplayGrid,
  GridType,
  Gridster,
  GridsterConfigService,
  GridsterItem,
  GridsterPush,
  GridsterPushResize,
  GridsterSwap
};
//# sourceMappingURL=angular-gridster2.js.map
