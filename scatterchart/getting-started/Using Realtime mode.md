---
sidebar_position: 2
---

# Using Realtime Mode


```typescript title="Create ScatterChart"
import { ScatterChart } from '@pinpoint-fe/scatter-chart';

// Set current date if necessary
const from = new Date().getTime();
const to = new Date().getTime() + 1000 * 60 * 5;

SC.setOption({
  axis: {
    x: {
      min: from,
      max: to,
    }
  }
})

// Start realtime 
SC.startRealtime(from - to);

// Render whenever you want. such as receiving a response from the server, etc.
// `append` option must be `true`
SC.render(data, { append: true })
// Or you can do this. 
SC.setOption({ 
  render: { 
    append: true 
  }
});
SC.render(data)
```