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
| data | <code>{ nodes: <a href="/servermap/guide/node">Node</a>[], edges: <a href="/servermap/guide/edge">Edge</a>[] }</code> | ✔️ | 서버맵으로 표현할 data |
| baseNodeId | string | ✔️ | 서버맵의 중심이 되는 노드 id             |
| customTheme | ThemeType | | 	 사용자 정의 스타일 객체 |
| onClickNode       | `ClickEventHandler<MergedNode>`    |  |  Node를 마우스로 클릭했을 때 실행할 콜백 함수   |
| onClickEdge       | `ClickEventHandler<MergedEdge>`    |  |   Edge를 마우스로 클릭했을 때 실행할 콜백 함수   |
| onClickBackground | `ClickEventHandler<{}>`             |  | 	 배경을 클릭했을 때 실행할 콜백 함수 |
| onDataMerged | `(mergeInfo: MergeInfo) => void`             |  | 병합로직이 수행되었을 때 실행할 콜백 함수 |
| renderNodeLabel   | `(node: MergedNode) => string ㅣ undefined` |  |  사용자 정의 노드 라벨                                        |
| renderEdgeLabel   | `(node: MergedEdge) => string ㅣ undefined` |  |  사용자 정의 엣지 라벨                                        |
| cy   | `(cy: cytoscape.Core) => void` |  | Cytoscape cy 레퍼런스를 활용할 콜백 함수 |
