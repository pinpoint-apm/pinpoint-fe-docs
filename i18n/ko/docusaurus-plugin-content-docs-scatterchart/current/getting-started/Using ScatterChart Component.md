# Using ScatterChart Component

## Create your first ScatterChart

```typescript title="Create ScatterChart"
import { ScatterChart } from '@pinpoint-fe/scatter-chart';

const SC = new ScatterChart(
  document.getElementById('scatterWrapper'), 
  {
    axis: {
      x: {
        min: 1669103462000,
        max: 1669103509335,
        format: (value) => format(value, 'HH:mm:ss'),
      },
      y: {
        min: 0,
        max: 10000,
        format: (value) => value.toLocaleString(),
      }
    },
    data: [
      {
        type: 'success',
        color: 'green',
        priority: 1,
      },
      {
        type: 'fail',
        color: 'red',
        priority: 2,
      },
    ],
    legend: {
      formatLabel: (label) => label.toUpperCase(),
    }
  }
);

SC.render(data);
```

## Parameters

| Params | Type | Required | Description |
| --- | --- | --- | --- |
| wrapper | HTMLElement | ✔️ | 차트가 렌더링 될 Wrapper 엘리먼트 |
| options | <a href="/scatterchart/guide/options">ScatterChartOption</a> | ✔️ | ScatterChart 옵션 |
