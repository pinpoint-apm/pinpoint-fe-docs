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
| min | number | ✔️ |  | Min value for each axis |
| max | number | ✔️ |  | Max value for each axis |
| padding | number |  |  | Sets the offset of the tick labels from the axis |
| tick | [TickOption](#tickoption) |  |  |  |


#### `TickOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| count | number |  | 5 | Number of ticks to display |
| format | `(value: number) => string` |  |  | Display format for ticks |



### `DataOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| type | string | ✔️ |  | Data type (will be used in legend) |
| color | string |  |  | Color to use for this data type rendering |
| priority | number |  | 99 | Determine the rendering priority if there is overlap. Lower number takes the higher priority |


### `LegendOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| formatLabel | `(label: string) => string` |  | `data.type` | Legend label text format |
| formatValue | `(value: number) => string` |  |  | Legend data count format |


### `PointOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| radius | number |  | 3 | Radius of data circle |