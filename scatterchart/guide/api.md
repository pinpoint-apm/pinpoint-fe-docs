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

## `off`

### Description
Remove the event listener you added.

### Interface
```typescript
off(eventType: string) => void;
```

### Usage
```typescript
SC.off('click')
SC.off('dragEnd');
```