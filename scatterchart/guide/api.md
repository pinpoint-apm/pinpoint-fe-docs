---
sidebar_position: 2
---

# API

## `render`

### Description
Render data on the chart. You can determine whether to redraw the chart or append data to the exisiting chart with `append` property.

### Interface
```typescript
render(data: ScatterDataType[], { append = false } = {}) => void;
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
```

## `on`

### Description
Bind events and handler. We provide `click` | `dragEnd` events.

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

## `setAxisOption`

### Description
Reset axis of x, y

### Interface
```typescript
setAxisOption({x?: Partial<AxisOption>, y?: Partial<AxisOption>}) => void;
```

### Usage
```typescript
SC.setAxisOption({x:{ min: Number(min), max: Number(max) }});
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


## `clear`

### Description
clear all data

### Interface
```typescript
clear() => void
```

### Usage
```typescript
SC.clear();
```