---
sidebar_position: 1
---

# Options
## Interface
```typescript
export interface ScatterChartOption {
  axis: {x: AxisOption, y: AxisOption};
  data: DataOption[];
  background?: BackgroundOption;
  grid?: GridOption;
  guide?: GuideOption;
  legend?: LegendOption;
  padding?: Padding;
  point?: PointOption;
}
```
### `AxisOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| min | number | ✔️ |  | Min value for the axis |
| max | number | ✔️ |  | Max value for the axis |
| padding | number |  |  | Sets the offset of the tick labels from the axis |
| strokeColor | string |  |  | Set the color of the axis  |
| tick | [TickOption](#tickoption) |  |  |  |


#### `TickOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| count | number |  | 5 | Number of ticks to display |
| format | `(value: number) => string` |  |  | Display format for ticks |
| color | string |  | `black` | string(hex, rgb, rgba) |
| strokeColor | string |  | black | string(hex, rgb, rgba) |
| width | number |  | 5 | width of tick |
| font | string |  | default font | font of tick |



### `DataOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| type | string | ✔️ |  | Data type (will be used in legend) |
| color | string |  |  | Color to use for this data type rendering |
| priority | number |  | 99 | Determine the rendering priority if there is overlap. Lower number takes the higher priority |
| radius | number |  | 3 | Radius of data point  |
| opacity | number |  | 1 | Opacity of data point's color   |


### `LegendOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| formatLabel | `(label: string) => string` |  | `data.type` | Legend label text format |
| formatValue | `(value: number) => string` |  |  | Legend data count format |


### `PointOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| radius | number |  | 3 | Radius of the data point |
| opacity | number |  | 3 | Opacity of the data point |


### `BackgroundOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| color | string(hex, rgb, rgba) |  | `white` | Color of background |


### `GridOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| hidden | boolean |  | `false` | Hide grid when hidden is `true` |
| strokeColor | string(hex, rgb, rgba) |  | `#d1d1d1` | Color of grid strokes |


### `GuideOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| color | string(hex, rgb, rgba) |  | `white` | Color of guide text |
| strokeColor | string(hex, rgb, rgba) |  | `black` | Color of guide storke |
| backgroundColor | string(hex, rgb, rgba) |  | `black` |  Color of guide background |
| drag | [DragOption](#dragoption) |  |  |  |

#### `DragOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| strokeColor | string(hex, rgb, rgba) |  | `#469ae4` | Color of drag area storke |
| backgroundColor | string(hex, rgb, rgba) |  | `rgba(225,225,225,0.4)` | Color of drag area background |

### `PaddingOption`
| Props | Type  | Required  | Default | Description |
| --- | --- | --- | --- | --- |
| top | number |  | 15 |  |
| bottom | number |  | 0 |  |
| left | number |  | 0 |  |
| right | number |  | 0 |  |