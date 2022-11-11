---
sidebar_position: 5
---

# Customize Label
## Description
You can customize Node and Edge lables.

## `renderNodeLabel`

```typescript title="Customize Node label"
import React from 'react';
import { ServerMap, MergedNode } from '@pinpoint-fe/server-map';

export default function MyServerMapPage() {
  const renderNodeLabel = (node: MergedNode) => {
    if (node.nodes?.length > 0) {
      return 'This Node is Merged!'
    } 
  }

  return (
    <ServerMap 
      data={data} 
      baseNodeId={'MY-APP'}
      renderNodeLabel={renderNodeLabel}
    />
  );
}
```

:::note

If `renderNodeLabel` is not defined or the execution value is `undefined`, the label on the node represents `node.label`.


:::

## `renderEdgeLabel`

```typescript title="Customize edge label"
import React from 'react';
import { ServerMap, MergedEdge } from '@pinpoint-fe/server-map';

export default function MyServerMapPage() {
  const renderEdgeLabel = (edge: MergedEdge) => {
    if (edge.edges?.length > 0) {
      return 'This Edge is Merged!';
    } 
    return 'This Edge is not merged';
  }

  return (
    <ServerMap 
      data={data} 
      baseNodeId={'MY-APP'}
      renderEdgeLabel={renderEdgeLabel}
    />
  );
}
```

:::note

If `renderEdgeLabel` is not defined or the execution value is `undefined`, the label on the edge is an empty string.


:::