# Using ServerMap Component

## Create your first ServerMap

```typescript title="Create ServerMap"
import React from 'react';
import { ServerMap } from '@pinpoint-fe/server-map';

export default function MyServerMapPage() {
  return (
    <ServerMap 
      data={data}
      baseNodeId={'MY-APP'} 
    />
  );
}
```

## Props

| Props | Type | Required | Description |
| --- | --- | --- | --- |
| data | <code>{ nodes: <a href="/servermap/guide/node">Node</a>[], edges: <a href="/servermap/guide/edge">Edge</a>[] }</code> | ✔️ | Data to render |
| baseNodeId | string | ✔️ | Central node id in the server-map              |
| customTheme | ThemeType | | 	Custom style object  |
| onClickNode       | `ClickEventHandler<MergedNode>`    |  | Callback to execute when clicking nodes   |
| onClickEdge       | `ClickEventHandler<MergedEdge>`    |  | Callback to execute when clicking edges    |
| onClickBackground | `ClickEventHandler<{}>`             |  | 	Callback to execute when clicking background  |
| onDataMerged | `(mergeInfo: MergeInfo) => void`             |  | 	Callback to execute when merge logic has been applied  |
| renderNodeLabel   | `(node: MergedNode) => string ㅣ undefined` |  | Custom node label                                         |
| renderEdgeLabel   | `(node: MergedEdge) => string ㅣ undefined` |  | Custom edge label                                 |
| cy   | `(cy: cytoscape.Core) => void` |  | Callback to access Cytoscape cy reference |
