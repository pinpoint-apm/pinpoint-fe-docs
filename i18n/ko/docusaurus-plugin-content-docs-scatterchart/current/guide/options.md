---
sidebar_position: 1
---

# Options
## Interface
```typescript
export interface ScatterChartOption {
  axis: {x: AxisOption, y: AxisOption};
  data: DataOption[];
  legend?: LegendOption;
  point?: PointOption;
}
```
### `AxisOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| min | number | ✔️ |  | 각 축의 최소값 |
| max | number | ✔️ |  | 각 축의 최대값 |
| padding | number |  |  | 각 축의 tick 오프셋 |
| tick | [TickOption](#tickoption) |  |  |  |


#### `TickOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| count | number |  | 5 | 표시할 각 축의 tick 개수 |
| format | `(value: number) => string` |  |  | 표시할 tick의 형태 |



### `DataOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| type | string | ✔️ |  | 데이터 타입 (범례에 표현됨) |
| color | string |  |  | 해당 타입의 데이터 표현에 사용될 색상 |
| priority | number |  | 99 | 데이터 간 위치가 겹칠 경우 렌더링 우선순위 결정에 사용. 숫자가 낮을 수록 우선순위가 높음 |


### `LegendOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| formatLabel | `(label: string) => string` |  | `data.type` | 범례 라벨 텍스트에 대한 포맷 |
| formatValue | `(value: number) => string` |  |  | 범례 데이터 count에 대한 포맷 |


### `PointOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| radius | number |  | 3 | 데이터를 표현할 원의 반지름 |
