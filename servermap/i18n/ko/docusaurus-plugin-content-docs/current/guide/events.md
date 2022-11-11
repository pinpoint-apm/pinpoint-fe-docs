---
sidebar_position: 3
---

# Events
## Description

다음과 같이 세 개의 클릭 이벤트 인터페이스들을 제공합니다; `onClickNode`, `onClickEdge`, `onClickBackground`

```ts
export interface ServerMapProps {
  data: {
    nodes: Node[],
    edges: Edge[],
  };
  baseNodeId: string;
  customTheme?: any;
  // highlight-start
  onClickNode?: ClickEventHandler<MergedNode>;
  onClickEdge?: ClickEventHandler<MergedEdge>;
  onClickBackground?: ClickEventHandler<{}>;
  // highlight-end
  renderNodeLabel?: (node: MergedNode) => string | undefined;
  renderEdgeLabel?: (edge: MergedEdge) => string | undefined;
}

// highlight-next-line
type ClickEventHandler<T> = (param: {
  data?: T,
  eventType: 'right' | 'left',
  position: cytoscape.Position,
}) => void;

```

## `onClickNode`

노드를 클릭했을 때 실행되는 콜백 함수.

### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| data | [MergedNode](/docs/guide/merge#mergednode) : `{ nodes?: Node[] } & Node` | 타겟 node data |
| eventType | "right" or "left" | 마우스 클릭 타입 |
| position | cytoscape.Position :  `{ x: number, y: number }` |  해당 이벤트가 발생한 좌표 |

## `onClickEdge`

Callback to execute when clicking edges.
Edge를 클릭했을 때 실행되는 콜백 함수.

### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| data | [MergedEdge](/docs/guide/merge#mergededge) : `{ nodes?: Edge[] } & Edge` | 타겟 edge data |
| eventType | "right" or "left" | 마우스 클릭 타입 |
| position | cytoscape.Position :  `{ x: number, y: number }` | 해당 이벤트가 발생한 좌표 |

## `onClickBackground`

배경을 클릭했을 때 실행되는 콜백 함수.

### Props of Callback Parameter

 Props | Type  | description  |
| --- | --- | --- |
| eventType | "right" or "left" | 마우스 클릭 타입 |
| position | cytoscape.Position :  `{ x: number, y: number }` | 해당 이벤트가 발생한 좌표 |