---
sidebar_position: 2
---

# API

## `render`

### Description
데이터를 전달해 차트를 그리는 메서드입니다. 옵션 파라미터의 `append` 프로퍼티를 통해 전체를 다시 그리거나, 기존 차트 위에 그릴 수 있습니다.

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
이벤트 바인딩을 하는 메서드입니다. `click` | `dragEnd` 이벤트를 제공합니다.

### `click`
차트 영역에서 클릭했을 때 발생합니다.

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
차트 영역에서 드래그를 했을 때 발생합니다.

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
추가한 이벤트 리스너를 제거합니다.

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
width, height을 재설정합니다.

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
x, y axis를 재설정합니다.

### Interface
```typescript
seAxisOption({x?: Partial<AxisOption>, y?: Partial<AxisOption>}) => void;
```

### Usage
```typescript
SC.setAxisOption({x:{ min: Number(min), max: Number(max) }});
```

## `toBase64Image`

### Description
Canvas 를 `base64` data URL 로 변환합니다.

### Interface
```typescript
toBase64Image() => Promise<string>
```

### Usage
```typescript
const imageSrc = SC.toBase64Image();
```