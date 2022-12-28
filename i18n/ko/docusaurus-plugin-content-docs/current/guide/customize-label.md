---
sidebar_position: 5
---

# Customize Label
## Description
Node와 Edge의 라벨을 커스텀 할 수 있습니다.

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


`renderNodeLabel`이 정의되지 않았거나 실행값이 `undefined`면 node의 label은 `node.label`을 그대로 나타냅니다.

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


`renderEdgeLabel`이 정의되지 않았거나 실행값이 `undefined`면 edge의 label은 빈 문자열 입니다.

:::