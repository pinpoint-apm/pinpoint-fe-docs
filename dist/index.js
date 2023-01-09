"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ScatterChart: () => ScatterChart
});
module.exports = __toCommonJS(src_exports);

// src/ui/ScatterChart.ts
var import_lodash2 = __toESM(require("lodash.merge"));
var import_html2canvas = __toESM(require("html2canvas"));

// src/constants/ui.ts
var SCATTER_CHART_IDENTIFIER = "__scatter_chart__";
var PIXEL_RATIO = window && window.devicePixelRatio || 1;
var CONTAINER_WIDTH = 518;
var CONTAINER_HEIGHT = 320;
var CONTAINER_PADDING = {
  top: 15,
  bottom: 20,
  left: 0,
  right: 0
};
var AXIS_INNER_PADDING = 5;
var AXIS_TICK_LENGTH = 4;
var AXIS_DEFAULT_TICK_COUNT = 5;
var TEXT_MARGIN_TOP = 1;
var TEXT_MARGIN_BOTTOM = 1;
var TEXT_MARGIN_LEFT = 2;
var TEXT_MARGIN_RIGHT = 2;
var POINT_RADIUS = 3;
var LAYER_DEFAULT_PRIORITY = 99;

// src/utils/helper.ts
var getDevicePicelRatio = () => {
  const dpr = (window == null ? void 0 : window.devicePixelRatio) || 2;
  return dpr;
};
var getTickTexts = ({ min, max, tick }) => {
  const tickCount = (tick == null ? void 0 : tick.count) || AXIS_DEFAULT_TICK_COUNT;
  const gap = (max - min) / (tickCount - 1);
  return [...Array(tickCount)].map((_, i) => {
    var _a;
    const value = min + gap * i;
    const result = ((_a = tick == null ? void 0 : tick.format) == null ? void 0 : _a.call(tick, value)) || value;
    return `${result}`;
  });
};
var getLongestTextWidth = (texts, measurer) => {
  const text = texts.reduce((prev, curr) => {
    const prevWidth = measurer(prev);
    const currWidth = measurer(curr);
    return prevWidth > currWidth ? prev : curr;
  }, "0");
  return measurer(text);
};

// src/ui/Layer.ts
var Layer = class {
  constructor({
    width = 0,
    height = 0,
    display = true,
    fixed = false,
    priority = LAYER_DEFAULT_PRIORITY
  } = {}) {
    this.identifier = "";
    this.displayPixcelRatio = getDevicePicelRatio();
    this.display = display;
    this.fixed = fixed;
    this.priorityOrder = priority;
    this.cvs = document.createElement("canvas");
    this.ctx = this.cvs.getContext("2d");
    this.cvs.style.width = `${width}px`;
    this.cvs.style.height = `${height}px`;
    this.cvs.width = width * this.dpr;
    this.cvs.height = height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }
  resetDpr() {
    this.displayPixcelRatio = getDevicePicelRatio();
  }
  setSize(width, height) {
    this.clear();
    this.resetDpr();
    this.cvs.style.width = `${width}px`;
    this.cvs.style.height = `${height}px`;
    this.cvs.width = width * this.dpr;
    this.cvs.height = height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }
  show() {
    this.display = true;
  }
  hide() {
    this.display = false;
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  get dpr() {
    return this.displayPixcelRatio;
  }
  get priority() {
    return this.priorityOrder;
  }
  set priority(priority) {
    this.priorityOrder = priority;
  }
  get id() {
    return this.identifier;
  }
  set id(id) {
    this.identifier = id;
  }
  get isFixed() {
    return this.fixed;
  }
  set isFixed(fixed) {
    this.fixed = fixed;
  }
  get canvas() {
    return this.cvs;
  }
  get context() {
    return this.ctx;
  }
  get isDisplay() {
    return this.display;
  }
  swapCanvasImage() {
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    const rightImage = this.getCroppedImage(this.ctx, { x: width, y: 0 }, { x: width * 2, y: height });
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.putImageData(rightImage, 0, 0);
  }
  getCroppedImage(ctx, lCoord, rCoord) {
    return ctx.getImageData(lCoord.x, lCoord.y, rCoord.x, rCoord.y);
  }
  getTextWidth(text) {
    return this.context.measureText(`${text}`).width;
  }
  getTextHeight(text) {
    const metrics = this.context.measureText(`${text}`);
    let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    return fontHeight;
  }
};

// src/ui/Viewport.ts
var Viewport = class {
  constructor(wrapper, {
    width = 0,
    height = 0
  }) {
    this.width = width;
    this.height = height;
    this.layers = [];
    this.view = new Layer({
      width,
      height
    });
    this.view.canvas.style.display = "block";
    wrapper.append(this.view.canvas);
  }
  get viewLayer() {
    return this.view;
  }
  get canvas() {
    return this.view.canvas;
  }
  get context() {
    return this.view.context;
  }
  get styleWidth() {
    return this.width;
  }
  get styleHeight() {
    return this.height;
  }
  render(x, y) {
    this.layers.forEach((layer) => {
      const layerCanvas = layer.canvas;
      const dpr = layer.dpr;
      if (layer.isDisplay) {
        if (layer.isFixed) {
          this.view.context.drawImage(
            layerCanvas,
            0,
            0,
            layerCanvas.width,
            layerCanvas.height,
            0,
            0,
            layerCanvas.width / dpr,
            layerCanvas.height / dpr
          );
        } else {
          this.view.context.drawImage(
            layerCanvas,
            -x * dpr,
            y * dpr,
            layerCanvas.width,
            layerCanvas.height,
            0,
            y,
            layerCanvas.width / dpr,
            layerCanvas.height / dpr
          );
        }
      }
    });
  }
  hideLayer(id) {
    this.layers.filter((layer) => layer.id === id)[0].hide();
  }
  showLayer(id) {
    this.layers.filter((layer) => layer.id === id)[0].show();
  }
  addLayer(layer) {
    if (Array.isArray(layer)) {
      this.layers = [
        ...this.layers,
        ...layer
      ];
    } else {
      this.layers.push(layer);
    }
    this.layers.sort((a, b) => {
      if (a.priority > b.priority) {
        return -1;
      } else
        return 1;
    });
    return this;
  }
  setSize(width, height) {
    this.view.setSize(width, height);
    return this;
  }
  setLayersSize(width, height) {
    this.layers.forEach((layer) => {
      layer.setSize(width, height);
    });
    return this;
  }
  clear() {
    this.view.context.clearRect(0, 0, this.view.canvas.width, this.view.canvas.height);
  }
};

// src/constants/options.ts
var AXIS_DEFAULT_FORMAT = (value) => value;
var defaultDataOption = [];
var defaultLegendOption = {
  formatLabel: (label) => label,
  formatValue: (value) => value
};
var defaultAxisOption = {
  x: {
    min: 0,
    max: 1,
    tick: {
      count: AXIS_DEFAULT_TICK_COUNT,
      format: AXIS_DEFAULT_FORMAT
    }
  },
  y: {
    min: 0,
    max: 1,
    tick: {
      count: AXIS_DEFAULT_TICK_COUNT,
      format: AXIS_DEFAULT_FORMAT
    }
  }
};
var defaultPointOption = {
  radius: POINT_RADIUS
};

// src/utils/draw.ts
var drawCircle = (ctx, x, y, {
  radius = defaultPointOption.radius,
  fillColor = "black"
} = {}) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, radius * Math.PI);
  ctx.fillStyle = fillColor;
  ctx.fill();
};
var drawLine = (ctx, fromX, fromY, toX, toY, {
  color = "black"
} = {}) => {
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.strokeStyle = color;
  ctx.stroke();
};
var drawText = (ctx, text, x, y, {
  color = "black",
  textAlign = "center",
  textBaseline = "alphabetic"
} = {}) => {
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};
var drawRect = (ctx, x, y, width, height, {
  color = "white",
  strokeColor
} = {}) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  if (strokeColor) {
    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x, y, width, height);
  }
};

// src/ui/Axis.ts
var Axis = class extends Layer {
  constructor({
    axisOption,
    padding,
    ...props
  }) {
    super(props);
    this.min = (axisOption == null ? void 0 : axisOption.min) || 0;
    this.max = (axisOption == null ? void 0 : axisOption.max) || 1;
    this.padding = { ...CONTAINER_PADDING, ...padding };
    this.tickOption = { ...{ count: AXIS_DEFAULT_TICK_COUNT, format: AXIS_DEFAULT_FORMAT }, ...axisOption == null ? void 0 : axisOption.tick };
  }
  setOptions(options) {
    const { min, max, padding, tick } = options;
    this.min = min || this.min;
    this.max = max || this.max;
    this.padding = { ...this.padding, ...padding };
    this.tickOption = { ...this.tickOption, ...tick };
    return this;
  }
  setSize(...args) {
    super.setSize(...args);
    return this;
  }
};

// src/ui/YAxis.ts
var YAxis = class extends Axis {
  constructor({
    ...props
  } = {}) {
    super(props);
    this.render();
  }
  setSize(width, height) {
    super.setSize(width, height);
    this.render();
    return this;
  }
  render() {
    this.clear();
    const { count, format } = this.tickOption;
    const padding = this.padding;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    const startX = padding.left;
    const startY = padding.top + AXIS_INNER_PADDING;
    const endY = height - padding.bottom - AXIS_INNER_PADDING;
    const hGap = (endY - startY) / (count - 1);
    const yTickGap = (this.max - this.min) / (count - 1);
    drawRect(this.context, 0, 0, padding.left, endY + AXIS_INNER_PADDING + AXIS_TICK_LENGTH);
    drawRect(this.context, width - padding.right, 0, width, endY + AXIS_INNER_PADDING + AXIS_TICK_LENGTH);
    drawRect(this.context, 0, 0, width, padding.top);
    [...Array(count)].forEach((_, i) => {
      const y = hGap * i + startY;
      const label = format(yTickGap * (count - 1 - i) + this.min);
      drawLine(this.context, startX - AXIS_TICK_LENGTH, y, startX, y);
      drawText(this.context, `${label}`, startX - TEXT_MARGIN_RIGHT - AXIS_TICK_LENGTH, y + 3, { textAlign: "end" });
    });
    drawLine(this.context, startX, startY - AXIS_INNER_PADDING, startX, endY + AXIS_INNER_PADDING);
  }
};

// src/ui/XAxis.ts
var XAxis = class extends Axis {
  constructor({
    ...props
  } = {}) {
    super(props);
    this.render();
  }
  setSize(width, height) {
    super.setSize(width, height);
    this.render();
    return this;
  }
  render() {
    this.clear();
    const { format, count } = this.tickOption;
    const padding = this.padding;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    const startX = padding.left + AXIS_INNER_PADDING;
    const endX = width - padding.right - AXIS_INNER_PADDING;
    const endY = height - padding.bottom;
    const wGap = (endX - startX) / (count - 1);
    const xTickGap = (this.max - this.min) / (count - 1);
    [...Array(count)].forEach((_, i) => {
      const x = wGap * i + startX;
      const label = format(xTickGap * i + this.min);
      drawText(this.context, `${label}`, x, height - TEXT_MARGIN_BOTTOM, { textAlign: "center", textBaseline: "bottom" });
      drawLine(this.context, x, endY, x, endY + AXIS_TICK_LENGTH);
    });
    drawLine(this.context, startX - AXIS_INNER_PADDING, endY, endX + AXIS_INNER_PADDING, endY);
  }
};

// src/ui/GridAxis.ts
var GridAxis = class extends Axis {
  constructor({
    xTickCount,
    yTickCount,
    ...props
  } = {}) {
    super(props);
    this.xTickCount = xTickCount || AXIS_DEFAULT_TICK_COUNT;
    this.yTickCount = yTickCount || AXIS_DEFAULT_TICK_COUNT;
    this.render();
  }
  renderXGrid() {
    const tickCount = this.xTickCount;
    const padding = this.padding;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    const startX = padding.left + AXIS_INNER_PADDING;
    const startY = padding.top;
    const endX = width - padding.right - AXIS_INNER_PADDING;
    const endY = height - padding.bottom;
    const wGap = (endX - startX) / (tickCount - 1);
    [...Array(tickCount)].forEach((_, i) => {
      const x = wGap * i + startX;
      drawLine(this.context, x, startY, x, endY + AXIS_TICK_LENGTH, { color: "#d1d1d1" });
    });
  }
  renderYGrid() {
    const tickCount = this.yTickCount;
    const padding = this.padding;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    const startX = padding.left;
    const startY = padding.top + AXIS_INNER_PADDING;
    const endX = width - padding.right + AXIS_INNER_PADDING;
    const endY = height - padding.bottom - AXIS_INNER_PADDING;
    const hGap = (endY - startY) / (tickCount - 1);
    [...Array(tickCount)].forEach((_, i) => {
      const y = hGap * i + startY;
      drawLine(this.context, startX - AXIS_TICK_LENGTH, y, endX, y, { color: "#d1d1d1" });
    });
  }
  render() {
    this.clear();
    this.renderXGrid();
    this.renderYGrid();
  }
  setSize(width, height) {
    super.setSize(width, height);
    this.render();
    return this;
  }
  setXTickCount(tick) {
    this.xTickCount = tick;
    return this;
  }
  setYickCount(tick) {
    this.yTickCount = tick;
    return this;
  }
};

// src/ui/Legend.ts
var _Legend = class {
  constructor(rootWrapper, { types, legendOptions, dataColorMap, width }) {
    this.legendElements = {};
    this.rootWrapper = rootWrapper;
    this.types = types;
    this.options = legendOptions;
    this.dataColorMap = dataColorMap;
    this.containerElement = document.createElement("div");
    this.containerElement.className = _Legend.LEGEND_CONTAINER_CLASS;
    this.setSize(width);
  }
  get container() {
    return this.containerElement;
  }
  setSize(width) {
    this.containerElement.style.width = `${width}px` || `${this.rootWrapper.clientWidth}px`;
  }
  addEvents(callback) {
    this.containerElement.addEventListener("click", (event) => {
      const isInputNode = event.target.nodeName === "INPUT";
      const wrapper = event.target.closest("div");
      const checkbox = wrapper.querySelector("input");
      if (isInputNode) {
        callback == null ? void 0 : callback({ type: wrapper.dataset.name, checked: checkbox.checked });
      }
    });
    return this;
  }
  render() {
    const options = this.options;
    const dataTypes = this.types;
    dataTypes.forEach((type) => {
      var _a;
      const legendWrapper = document.createElement("div");
      legendWrapper.dataset.name = type;
      legendWrapper.className = `${_Legend.LEGEND_CLASS} ${type}`;
      const markElement = document.createElement("span");
      markElement.style.background = this.dataColorMap[type];
      markElement.className = _Legend.MARK_CLASS;
      const countElement = document.createElement("span");
      countElement.className = _Legend.COUNT_CLASS;
      const labelElement = document.createElement("label");
      const formattedLabel = ((_a = options == null ? void 0 : options.formatLabel) == null ? void 0 : _a.call(options, type)) || type;
      labelElement.htmlFor = `${_Legend.LEGEND_CLASS}_${type}_input`;
      labelElement.append(`${formattedLabel}`, countElement);
      const inputElement = document.createElement("input");
      inputElement.id = `${_Legend.LEGEND_CLASS}_${type}_input`;
      inputElement.type = "checkbox";
      inputElement.checked = true;
      this.legendElements[type] = legendWrapper;
      legendWrapper.append(markElement, labelElement, inputElement);
      this.containerElement.append(legendWrapper);
    });
    this.rootWrapper.append(this.containerElement);
  }
  setLegendCount(type, value) {
    var _a, _b;
    const legendElement = this.legendElements[type];
    const countElement = legendElement.getElementsByClassName(_Legend.COUNT_CLASS)[0];
    countElement.innerHTML = `${(_b = (_a = this.options).formatValue) == null ? void 0 : _b.call(_a, value)}`;
  }
};
var Legend = _Legend;
Legend.LEGEND_CLASS = `${SCATTER_CHART_IDENTIFIER}legend`;
Legend.LEGEND_CONTAINER_CLASS = `${_Legend.LEGEND_CLASS}_container`;
Legend.MARK_CLASS = `${_Legend.LEGEND_CLASS}_mark`;
Legend.COUNT_CLASS = `${_Legend.LEGEND_CLASS}_count`;

// src/ui/Guide.ts
var import_lodash = __toESM(require("lodash.merge"));
var Guide = class extends Layer {
  constructor(wrapper, {
    width,
    height,
    padding,
    ratio,
    axisOption
  }) {
    super({ width, height });
    this.isMouseDown = false;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.eventHandlers = {};
    this.canvas.style.position = "absolute";
    this.canvas.style.zIndex = "999";
    this.canvas.style.top = "0px";
    this.canvas.style.left = "0px";
    this.canvas.style.background = "transparent";
    this.padding = { ...CONTAINER_PADDING, ...padding };
    this.ratio = ratio;
    this.axisOption = axisOption;
    this.wrapper = wrapper;
    this.wrapper.append(this.canvas);
    this.addEventListener();
  }
  isMouseInValidArea(x, y) {
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    const padding = this.padding;
    return x >= padding.left + AXIS_INNER_PADDING && x <= width - padding.right - AXIS_INNER_PADDING && y >= padding.top + AXIS_INNER_PADDING && y <= height - padding.bottom - AXIS_INNER_PADDING;
  }
  addEventListener() {
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    this.canvas.addEventListener("mousedown", ({ offsetX, offsetY }) => {
      this.isMouseDown = true;
      this.dragStartX = offsetX;
      this.dragStartY = offsetY;
    });
    this.canvas.addEventListener("mousemove", ({ offsetX, offsetY }) => {
      this.context.clearRect(0, 0, width, height);
      const x = offsetX;
      const y = offsetY;
      if (this.isMouseInValidArea(x, y)) {
        this.drawGuideText(x, y);
      }
      if (this.isMouseDown) {
        this.isDragging = true;
        drawRect(
          this.context,
          this.dragStartX,
          this.dragStartY,
          offsetX - this.dragStartX,
          offsetY - this.dragStartY,
          {
            color: "rgba(225,225,225,0.5)",
            strokeColor: "blue"
          }
        );
      }
    });
    this.canvas.addEventListener("mouseout", (event) => {
      this.isMouseDown = false;
      this.isDragging = false;
      this.context.clearRect(0, 0, width, height);
    });
    this.canvas.addEventListener("mouseup", (event) => {
      var _a, _b;
      const { offsetX, offsetY } = event;
      this.context.clearRect(0, 0, width, height);
      if (this.isDragging) {
        this.isMouseInValidArea(offsetX, offsetY) && this.drawGuideText(offsetX, offsetY);
        (_b = (_a = this.eventHandlers)["dragEnd"]) == null ? void 0 : _b.call(_a, {
          x1: this.dragStartX / this.ratio.x + this.axisOption.x.min,
          y1: this.axisOption.y.max - (this.dragStartY - this.padding.top - AXIS_INNER_PADDING) / this.ratio.y,
          x2: this.axisOption.y.max - (offsetX - this.padding.top - AXIS_INNER_PADDING) / this.ratio.x + this.axisOption.x.min,
          y2: this.axisOption.y.max - (offsetY - this.padding.top - AXIS_INNER_PADDING) / this.ratio.y
        });
      }
      this.isMouseDown = false;
    });
    this.canvas.addEventListener("click", (event) => {
      var _a, _b;
      const { offsetX, offsetY } = event;
      if (!this.isDragging) {
        (_b = (_a = this.eventHandlers)["click"]) == null ? void 0 : _b.call(_a, {
          x: offsetX / this.ratio.x + this.axisOption.x.min,
          y: this.axisOption.y.max - (offsetY - this.padding.top - AXIS_INNER_PADDING) / this.ratio.y
        });
      }
      this.isDragging = false;
    });
  }
  removeEventListener() {
  }
  drawGuideText(x, y) {
    var _a, _b;
    const { padding, context, canvas, ratio, axisOption } = this;
    const height = canvas.height / this.dpr;
    const xText = `${(_a = axisOption.x.tick) == null ? void 0 : _a.format((x - padding.left - AXIS_INNER_PADDING) / ratio.x + axisOption.x.min)}`;
    const yText = `${(_b = axisOption.y.tick) == null ? void 0 : _b.format(Math.floor(Math.abs((height - padding.bottom - AXIS_INNER_PADDING - y) / ratio.y + axisOption.y.min)))}`;
    const xTextWidth = this.getTextWidth(xText) + TEXT_MARGIN_LEFT + TEXT_MARGIN_RIGHT;
    const xTextHeight = this.getTextHeight(xText) + TEXT_MARGIN_TOP + TEXT_MARGIN_BOTTOM;
    const yTextWidth = this.getTextWidth(yText) + TEXT_MARGIN_LEFT + TEXT_MARGIN_RIGHT;
    const yTextHeight = this.getTextHeight(yText) + TEXT_MARGIN_TOP + TEXT_MARGIN_BOTTOM;
    drawRect(context, x - xTextWidth / 2, height - padding.bottom + AXIS_TICK_LENGTH, xTextWidth, xTextHeight, { color: "black" });
    drawLine(context, padding.left - AXIS_TICK_LENGTH, y, padding.left, y);
    drawText(context, xText, x, height - TEXT_MARGIN_BOTTOM, { color: "white", textAlign: "center", textBaseline: "bottom" });
    drawRect(context, padding.left - AXIS_TICK_LENGTH - yTextWidth, y - yTextHeight / 2, yTextWidth, yTextHeight, { color: "black" });
    drawLine(context, x, height - padding.bottom, x, height - padding.bottom + AXIS_TICK_LENGTH);
    drawText(context, yText, padding.left - AXIS_TICK_LENGTH - TEXT_MARGIN_RIGHT, y + 3, { color: "white", textAlign: "end" });
  }
  setOptions({
    width = this.canvas.width / this.dpr,
    height = this.canvas.height / this.dpr,
    ratio = this.ratio,
    padding = this.padding,
    axisOption = this.axisOption
  }) {
    this.removeEventListener();
    super.setSize(width, height);
    this.axisOption = (0, import_lodash.default)(this.axisOption, axisOption);
    this.padding = { ...CONTAINER_PADDING, ...padding };
    this.ratio = ratio;
    this.addEventListener();
  }
  updateXAxis(x) {
    this.axisOption = { ...this.axisOption, ...{ x: { ...this.axisOption.x, ...x } } };
  }
  on(evetntType, callback) {
    this.eventHandlers[evetntType] = callback;
  }
};

// src/ui/ScatterChart.ts
var _ScatterChart = class {
  constructor(wrapper, options) {
    this.dataLayers = {};
    this.data = [];
    this.datas = {};
    this.xRatio = 1;
    this.yRatio = 1;
    this.coordX = 0;
    this.coordY = 0;
    this.realtimeAxisMinX = 0;
    this.realtimeAxisMaxX = 0;
    this.width = 0;
    this.height = 0;
    this.padding = CONTAINER_PADDING;
    this.t0 = 0;
    this.reqAnimation = 0;
    this.wrapper = wrapper;
    this.canvasWrapper = document.createElement("div");
    this.canvasWrapper.className = _ScatterChart.SCATTER_CHART_CONTAINER_CLASS;
    this.canvasWrapper.style.position = "relative";
    this.wrapper.append(this.canvasWrapper);
    this.setOptions(options);
    this.setWidthAndHeight();
    this.setViewPort();
    this.setPadding();
    this.setRatio();
    this.setAxis();
    this.setGuide();
    this.setLayers();
    this.setLegends();
    this.shoot();
    this.animate = this.animate.bind(this);
  }
  setOptions(options) {
    this.options = {
      axis: (0, import_lodash2.default)(defaultAxisOption, options.axis),
      data: [...defaultDataOption, ...options.data],
      legend: (0, import_lodash2.default)(defaultLegendOption, options.legend)
    };
    this.dataColorMap = this.options.data.reduce((prev, curr) => {
      return {
        [curr.type]: curr.color,
        ...prev
      };
    }, {});
  }
  setWidthAndHeight() {
    this.width = this.canvasWrapper.clientWidth || CONTAINER_WIDTH;
    this.height = this.canvasWrapper.clientHeight || CONTAINER_HEIGHT;
  }
  setPadding() {
    var _a;
    const xformatter = (_a = this.options.axis.x.tick) == null ? void 0 : _a.format;
    const xTicks = getTickTexts(this.options.axis.x);
    const yTicks = getTickTexts(this.options.axis.y);
    const maxXTickTextWidth = getLongestTextWidth(xTicks, (t) => this.viewport.viewLayer.getTextWidth(t));
    const maxYTickTextWidth = getLongestTextWidth(yTicks, (t) => this.viewport.viewLayer.getTextWidth(t));
    const formattedXSample = xformatter ? xformatter(this.options.axis.x.max) : this.options.axis.x.max;
    this.padding.left = (maxXTickTextWidth / 2 > maxYTickTextWidth ? maxXTickTextWidth / 2 : maxYTickTextWidth) + TEXT_MARGIN_LEFT + TEXT_MARGIN_RIGHT + AXIS_TICK_LENGTH;
    this.padding.right = maxXTickTextWidth / 2 + TEXT_MARGIN_RIGHT;
    this.padding.bottom = this.viewport.viewLayer.getTextHeight(formattedXSample) + TEXT_MARGIN_TOP + TEXT_MARGIN_BOTTOM + AXIS_TICK_LENGTH;
  }
  setViewPort() {
    this.viewport = new Viewport(
      this.canvasWrapper,
      { width: this.width, height: this.height }
    );
  }
  setGuide() {
    this.guide = new Guide(
      this.canvasWrapper,
      {
        width: this.width,
        height: this.height,
        padding: this.padding,
        axisOption: this.options.axis,
        ratio: {
          x: this.xRatio,
          y: this.yRatio
        }
      }
    );
  }
  setAxis() {
    var _a, _b;
    const options = this.options;
    this.yAxis = new YAxis({
      axisOption: options.axis.y,
      width: this.width,
      height: this.height,
      padding: this.padding,
      priority: -2,
      fixed: true
    });
    this.xAxis = new XAxis({
      axisOption: options.axis.x,
      width: this.width,
      height: this.height,
      padding: this.padding,
      priority: -1
    });
    this.gridAxis = new GridAxis({
      width: this.width,
      height: this.height,
      padding: this.padding,
      priority: 9999,
      xTickCount: (_a = options.axis.x.tick) == null ? void 0 : _a.count,
      yTickCount: (_b = options.axis.y.tick) == null ? void 0 : _b.count
    });
    this.viewport.addLayer(this.yAxis);
    this.viewport.addLayer(this.xAxis);
    this.viewport.addLayer(this.gridAxis);
  }
  setLayers() {
    const width = this.viewport.styleWidth;
    const height = this.viewport.styleHeight;
    const dataOptions = this.options.data;
    dataOptions.forEach(({ type, priority = LAYER_DEFAULT_PRIORITY }) => {
      this.setLayer(type, width, height, priority);
    });
  }
  setLayer(legend, width, height, priority) {
    const layer = new Layer({ width, height });
    layer.id = legend;
    layer.priority = priority;
    this.dataLayers[legend] = layer;
    this.viewport.addLayer(layer);
  }
  setLegends() {
    var _a;
    this.legend = new Legend(this.wrapper, {
      types: Object.keys(this.dataLayers),
      dataColorMap: this.dataColorMap,
      legendOptions: (_a = this.options) == null ? void 0 : _a.legend
    });
    this.legend.addEvents(({ type, checked }) => {
      if (type) {
        if (checked) {
          this.viewport.showLayer(type);
        } else {
          this.viewport.hideLayer(type);
        }
      }
      this.shoot();
    }).render();
  }
  setRatio() {
    var _a;
    const axis = (_a = this.options) == null ? void 0 : _a.axis;
    const padding = this.padding;
    const width = this.viewport.canvas.width / this.viewport.viewLayer.dpr;
    const height = this.viewport.canvas.height / this.viewport.viewLayer.dpr;
    const minX = axis.x.min;
    const maxX = axis.x.max;
    const minY = axis.y.min;
    const maxY = axis.y.max;
    this.xRatio = (width - padding.left - padding.right - AXIS_INNER_PADDING * 2) / (maxX - minX);
    this.yRatio = (height - padding.bottom - padding.top - AXIS_INNER_PADDING * 2) / (maxY - minY);
  }
  shoot() {
    this.viewport.clear();
    drawRect(this.viewport.context, 0, 0, this.width, this.height);
    this.viewport.render(this.coordX, this.coordY);
    Object.keys(this.datas).forEach((key) => {
      this.legend.setLegendCount(key, this.datas[key].length);
    });
  }
  animate(duration, now) {
    this.shoot();
    if (!this.t0)
      this.t0 = now;
    const dt = now - this.t0;
    const pixcelPerFrame = (this.viewport.styleWidth - this.padding.left - this.padding.right - AXIS_INNER_PADDING * 2) / duration * dt;
    const pixcelPerSecond = pixcelPerFrame * 60;
    this.t0 = now;
    this.coordX = this.coordX - pixcelPerFrame;
    if (Math.abs(Math.floor(this.coordX)) % Math.floor(pixcelPerSecond / 5) === 0) {
      const x = Math.abs(this.coordX) / this.xRatio;
      Object.keys(this.datas).forEach((key) => {
        this.datas[key] = this.datas[key].filter((d) => d > x);
      });
      this.guide.updateXAxis({ min: x + this.xAxis.min });
    }
    if (this.coordX > -(this.viewport.styleWidth - this.padding.left - this.padding.right - AXIS_INNER_PADDING * 2)) {
      this.reqAnimation = requestAnimationFrame((t) => this.animate(duration, t));
    } else {
      const nextAxisMinX = this.realtimeAxisMinX + (this.realtimeAxisMaxX - this.realtimeAxisMinX) / 2;
      const nextAxisMaxX = this.realtimeAxisMaxX + (this.realtimeAxisMaxX - this.realtimeAxisMinX) / 2;
      this.realtimeAxisMinX = nextAxisMinX;
      this.realtimeAxisMaxX = nextAxisMaxX;
      this.coordX = 0;
      this.xAxis.setMinMax(this.realtimeAxisMinX, this.realtimeAxisMaxX).render();
      Object.values(this.dataLayers).filter((layer) => !layer.isFixed).forEach((layer) => layer.swapCanvasImage());
      this.reqAnimation = requestAnimationFrame((t) => this.animate(duration, t));
    }
  }
  render(data, { append = false } = {}) {
    const { styleWidth, styleHeight } = this.viewport;
    const { x: xAxisOptoin, y: yAxisOption } = this.options.axis;
    const padding = this.padding;
    if (append) {
      this.data = [...this.data, ...data];
    } else {
      this.data = data;
      this.datas = {};
      Object.values(this.dataLayers).forEach((layer) => layer.clear());
    }
    data.forEach(({ x, y, type, hidden }) => {
      const legend = type ? type : "unknown";
      if (!this.dataLayers[legend]) {
        this.setLayer(legend, styleWidth, styleHeight, LAYER_DEFAULT_PRIORITY);
      }
      if (this.datas[legend]) {
        this.datas[legend].push(x);
      } else {
        this.datas[legend] = [x];
      }
      !hidden && drawCircle(
        this.dataLayers[legend].context,
        this.xRatio * (x - this.xAxis.min) + padding.left + AXIS_INNER_PADDING,
        this.viewport.canvas.height / this.viewport.viewLayer.dpr - this.yRatio * y - padding.bottom - AXIS_INNER_PADDING,
        {
          fillColor: this.dataColorMap[legend]
        }
      );
    });
    this.shoot();
  }
  on(evetntType, callback) {
    this.guide.on(evetntType, callback);
  }
  resize(width, height) {
    const w = width || this.canvasWrapper.clientWidth;
    const h = height || this.canvasWrapper.clientHeight;
    this.viewport.setSize(w, h);
    this.setRatio();
    this.xAxis.setSize(w, h);
    this.yAxis.setSize(w, h);
    this.gridAxis.setSize(w, h);
    this.guide.setOptions({
      width: w,
      height: h,
      ratio: { x: this.xRatio, y: this.yRatio }
    });
    Object.values(this.dataLayers).forEach((layer) => layer.setSize(w, h));
    this.legend.setSize(w);
    this.render(this.data);
  }
  setAxisOption(axisOption) {
    this.setOptions((0, import_lodash2.default)(this.options, { axis: axisOption }));
    this.setPadding();
    this.setRatio();
    this.guide.setOptions({
      padding: this.padding,
      ratio: { x: this.xRatio, y: this.yRatio }
    });
    this.xAxis.setOptions({
      ...this.options.axis.x,
      padding: this.padding
    }).render();
    this.yAxis.setOptions({
      ...this.options.axis.y,
      padding: this.padding
    }).render();
    this.gridAxis.setOptions({ padding: this.padding }).render();
    this.render(this.data);
  }
  async toBase64Image() {
    const layer = new Layer({ width: this.width, height: this.height });
    const containerCanvas = await (0, import_html2canvas.default)(document.querySelector(`.${_ScatterChart.SCATTER_CHART_CONTAINER_CLASS}`)).then((canvas) => canvas);
    const legendCanvas = await (0, import_html2canvas.default)(document.querySelector(`.${Legend.LEGEND_CONTAINER_CLASS}`)).then((canvas) => canvas);
    layer.setSize(containerCanvas.width, containerCanvas.height + legendCanvas.height);
    layer.context.drawImage(containerCanvas, 0, 0);
    layer.context.drawImage(legendCanvas, 0, containerCanvas.height);
    const image = layer.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    return image;
  }
};
var ScatterChart = _ScatterChart;
ScatterChart.SCATTER_CHART_CONTAINER_CLASS = `${SCATTER_CHART_IDENTIFIER}container`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ScatterChart
});
