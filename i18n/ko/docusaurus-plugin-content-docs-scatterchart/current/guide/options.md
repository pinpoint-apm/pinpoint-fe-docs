---
sidebar_position: 1
---

# Options

## Interface

```typescript
export interface ScatterChartOption {
  axis: { x: AxisOption; y: AxisOption };
  data: DataOption[];
  background?: BackgroundOption;
  grid?: GridOption;
  guide?: GuideOption;
  legend?: LegendOption;
  padding?: Padding;
  point?: PointOption;
  render?: RenderOption;
}
```

### `AxisOption`

| Props       | Type                      | Required | Default | Description      |
| ----------- | ------------------------- | -------- | ------- | ---------------- |
| min         | number                    | ✔️       |         | 축의 최소값      |
| max         | number                    | ✔️       |         | 축의 최대값      |
| padding     | number                    |          |         | 축의 tick 오프셋 |
| strokeColor | string                    |          |         | 각 축의 색상     |
| tick        | [TickOption](#tickoption) |          |         |                  |

#### `TickOption`

| Props       | Type                                   | Required | Default                                  | Description            |
| ----------- | -------------------------------------- | -------- | ---------------------------------------- | ---------------------- |
| count       | number                                 |          | 5                                        | 표시할 축의 tick 개수  |
| format      | `(value: number) => string`            |          |                                          | 표시할 tick의 형태     |
| color       | string                                 |          | `black`                                  | string(hex, rgb, rgba) |
| strokeColor | string                                 |          | black                                    | string(hex, rgb, rgba) |
| width       | number                                 |          | 5                                        | tick의 길이            |
| font        | string                                 |          | default font                             | 폰트                   |
| padding     | typeof [PaddingOption](#paddingoption) |          | { top: 2, bottom: 2, left: 2, right: 2 } | 패딩                   |

### `DataOption`

| Props    | Type   | Required | Default | Description                                                                              |
| -------- | ------ | -------- | ------- | ---------------------------------------------------------------------------------------- |
| type     | string | ✔️       |         | 데이터 타입 (범례에 표현됨)                                                              |
| color    | string |          |         | 해당 타입의 데이터 표현에 사용될 색상                                                    |
| priority | number |          | 99      | 데이터 간 위치가 겹칠 경우 렌더링 우선순위 결정에 사용. 숫자가 낮을 수록 우선순위가 높음 |
| radius   | number |          | 3       | 해당 데이터를 표현할 점의 반지름                                                         |
| opacity  | number |          | 1       | 해당 데이터 색상의 불투명도                                                              |

### `LegendOption`

| Props       | Type                        | Required | Default     | Description                   |
| ----------- | --------------------------- | -------- | ----------- | ----------------------------- |
| formatLabel | `(label: string) => string` |          | `data.type` | 범례 라벨 텍스트에 대한 포맷  |
| formatValue | `(value: number) => string` |          |             | 범례 데이터 count에 대한 포맷 |
| hidden      | boolean                     |          | false       | `true` 일 경우 범례를 숨김    |

### `PointOption`

| Props   | Type   | Required | Default | Description                 |
| ------- | ------ | -------- | ------- | --------------------------- |
| radius  | number |          | 3       | 데이터를 표현할 점의 반지름 |
| opacity | number |          | 3       | 데이터를 색상의 불투명도    |

### `BackgroundOption`

| Props | Type                   | Required | Default | Description |
| ----- | ---------------------- | -------- | ------- | ----------- |
| color | string(hex, rgb, rgba) |          | `white` | 배경색      |

### `GridOption`

| Props       | Type                   | Required | Default   | Description                  |
| ----------- | ---------------------- | -------- | --------- | ---------------------------- |
| hidden      | boolean                |          | `false`   | `true` 일 경우 그리드를 숨김 |
| strokeColor | string(hex, rgb, rgba) |          | `#d1d1d1` | 그리드 선의 색상             |

### `GuideOption`

| Props           | Type                                     | Required | Default            | Description                                                                                |
| --------------- | ---------------------------------------- | -------- | ------------------ | ------------------------------------------------------------------------------------------ |
| color           | string(hex, rgb, rgba)                   |          | `white`            | 가이드 텍스트의 색상                                                                       |
| strokeColor     | string(hex, rgb, rgba)                   |          | `black`            | 가이드라벨 선의 색상                                                                       |
| backgroundColor | string(hex, rgb, rgba)                   |          | `black`            | 가이드라벨의 배경색                                                                        |
| hidden          | boolean                                  |          | `false`            | `true` 일 경우 가이드를 숨깁니다. 더불어, `click` 과 `dragEnd` 이벤트는 동작하지 않습니다. |
| font            | CanvasTextDrawingStyles['font'] (string) |          | default font style | 가이드 폰트스타일                                                                          |
| drag            | [DragOption](#dragoption)                |          |                    |                                                                                            |

#### `DragOption`

| Props           | Type                   | Required | Default                 | Description             |
| --------------- | ---------------------- | -------- | ----------------------- | ----------------------- |
| strokeColor     | string(hex, rgb, rgba) |          | `#469ae4`               | 드래그 영역 둘레선 색상 |
| backgroundColor | string(hex, rgb, rgba) |          | `rgba(225,225,225,0.4)` | 드래그 영역의 배경색    |

### `RenderOption`

| Props          | Type    | Required | Default | Description                                                                   |
| -------------- | ------- | -------- | ------- | ----------------------------------------------------------------------------- |
| append         | boolean |          | false   | `render` api 호출 시 기존 data에 추가해서 그립니다.                           |
| drawOutOfRange | boolean |          | false   | axis y의 max값을 벗어나는 데이터도 그립니다. 이 데이터는 max 축에 그려집니다. |

### `PaddingOption`

| Props  | Type   | Required | Default | Description |
| ------ | ------ | -------- | ------- | ----------- |
| top    | number |          | 15      |             |
| bottom | number |          | 0       |             |
| left   | number |          | 0       |             |
| right  | number |          | 0       |             |
