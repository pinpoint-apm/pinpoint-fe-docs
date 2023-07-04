---
sidebar_position: 2
---

# API

## `render`

### Description
데이터를 전달해 차트를 그리는 메서드입니다. 옵션 파라미터의 `append` 프로퍼티를 통해 전체를 다시 그리거나, 기존 차트 위에 그릴 수 있습니다. `drawOutOfRange` 프로퍼티를 통해 y의 max값을 벗어나는 데이터들도 그릴 수 있습니다. 이 경우엔 y축 max에 그려집니다.

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
이벤트 바인딩을 하는 메서드입니다. `click` | `dragEnd` | `clickLegend` | `resize` 이벤트를 제공합니다.

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

### `clickLegend`
범례 체크박스를 클릭했을 때 발생합니다.

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
`resize()`가 호출되었을 때 발생합니다.
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
추가한 이벤트 리스너를 제거합니다.

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

## `setOption`

### Description
[옵션](/scatterchart/guide/options)을 재 설정합니다.

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
[옵션](/scatterchart/guide/options)을 반환합니다.

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
Canvas 를 `base64` data URL 로 변환합니다.

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
reatltime 모드를 시작합니다.

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
reatltime 모드를 중지합니다.

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
모든 데이터를 삭제합니다.

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
등록된 모든 이벤트 핸들러들과 렌더링된 엘리먼트들을 제거합니다.

### Interface
```typescript
destroy() => void
```

### Usage
```typescript
SC.destroy();
```

## `isRealtime`

### Description
현재 차트가 realtime 모드인지 아닌지를 나타내는 Boolean 값을 반환하는 Getter입니다.

### Interface
```typescript
(getter) ScatterChart.isRealtime: boolean
```

### Usage
```typescript
SC.isRealtime;