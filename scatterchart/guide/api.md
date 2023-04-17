---
sidebar_position: 2
---

# API

## `render`

### Description
Render data on the chart. You can determine whether to redraw the chart or append data to the exisiting chart with `append` property. You can also draw data that exceeds the maximum value of y-axis by using the `drawOutOfRange` property. In this case, it will be drawn on the y-axis maximum.

### Interface
```typescript
render(data: ScatterDataType[], { append = false, drawOutOfRange = false } = {}) => void;
```
#### `ScatterDataType`
```typescript
type ScatterDataType {
  x: number;
  y: number;
  type?: string;
  hidden?: boolean; // whether or not to render. If not given, it will be rendered.
}
```

### Usage
```typescript
SC.render(data);
SC.render(data, { append: true });
SC.render(data, { drawOutOfRange: true });
```

## `on`

### Description
Bind events and handler. We provide `click` | `dragEnd` | `clickLegend` | `resize` events.

### `click`
Occurs when clicking in the chart area.

#### Interface
```typescript
on('click', (event: MouseEvent, { x, y }))=> void;
```

#### Usage
```typescript
SC.on('click', (event, { x, y }) => {
  console.log('clicked! ', x, y);
});
```

### `dragEnd`
Occurs when dragging in the chart area.

#### Interface
```typescript
on('dragEnd', (event: MouseEvent, { x1, y1, x2, y2 }))=> void;
```

#### Usage
```typescript
SC.on('dragEnd', (event, { x1, y1, x2, y2 }) => {
  console.log('start ', x1, y1);
  console.log('end ', x2, y2);
})
```

### `clickLegend`
Occurs when clicking in the legend area.

#### Interface
```typescript
on('clickLegend', (event: MouseEvent, { checked: string[] }))=> void;
```

#### Usage
```typescript
SC.on('clickLegend', (event, { checked }) => {
  console.log('checked data types: ', checked);
  // checked data types: ['success', 'fail']
})
```

### `resize`
Occurs when `resize()` method called
#### Interface
```typescript
on('resize', (event: string, { width: number, height: number }))=> void;
```

#### Usage
```typescript
SC.on('resize', (event, { width, height }) => {
  console.log('resized width: ', width);
  console.log('resized height: ', height);
})
```

## `off`

### Description
Remove the event listener you added.

### Interface
```typescript
off(eventType: string) => void;
```

### Usage
```typescript
SC.off('click');
SC.off('dragEnd');
SC.off('resize');
```

## `resize`

### Description
Reset width and height.

### Interface
```typescript
resize(width?: number, height:? number) => void;
```

### Usage
```typescript
SC.resize();
SC.resize(900, 450);
```

## `setOption`

### Description
Reset the options.

### Interface
```typescript
setOption({
  axis?: { 
    x?: Partial<AxisOption>, 
    y?: Partial<AxisOption>,
  },
  render?: RenderOption
}) => void;
```

### Usage
```typescript
SC.setOption({
  axis: {
    x: { min: Number(min), max: Number(max) }
  },
  render: {
    drawOutOfRange: true,
  }
});
```

## `getOption`

### Description
Returns the [options](/scatterchart/guide/options).

### Interface
```typescript
getOption() => ScatterChartOption;
```

### Usage
```typescript
SC.getOption();
```

## `toBase64Image`

### Description
Convert canvas into `base64` data URL

### Interface
```typescript
toBase64Image() => Promise<string>
```

### Usage
```typescript
const imageSrc = SC.toBase64Image();
```

## `startRealtime`

### Description
Start reatltime mode

### Interface
```typescript
startRealtime(duration: number) => void
```

### Usage
```typescript
SC.startRealtime(to - from);
SC.startRealtime(60000);
```

## `stopRealtime`

### Description
Stop reatltime mode

### Interface
```typescript
stopRealtime() => void
```

### Usage
```typescript
SC.stopRealtime();
```

## `clear`

### Description
Clear all data

### Interface
```typescript
clear() => void
```

### Usage
```typescript
SC.clear();
```

## `destroy`

### Description
Unregisters all events that have been registered and removes the rendered elements.

### Interface
```typescript
destroy() => void
```

### Usage
```typescript
SC.destroy();
```