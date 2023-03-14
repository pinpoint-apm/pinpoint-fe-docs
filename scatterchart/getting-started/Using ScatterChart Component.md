---
sidebar_position: 1
---

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
        tick: {
          format: (value) => formatDate(value, 'HH:mm:ss'),
        }
      },
      y: {
        min: 0,
        max: 10000,
        tick: {
          format: (value) => value.toLocaleString(),
        }
      }
    },
    data: [
      {
        type: 'success',
        color: 'rgba(61, 207, 168, 0.5)',
        priority: 1,
      },
      {
        type: 'fail',
        color: 'rgba(235, 71, 71, 0.5)',
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
| wrapper | HTMLElement | ✔️ | Wrapper element where chart will be rendered |
| options | <a href="/scatterchart/guide/options">ScatterChartOption</a> | ✔️ | ScatterChart options |
