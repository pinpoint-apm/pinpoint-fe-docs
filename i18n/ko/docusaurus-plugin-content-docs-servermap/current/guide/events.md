---
sidebar_position: 3
---

# Events
## Description
다음과 같은 이벤트 인터페이스들을 제공합니다; `onClickNode`, `onClickEdge`, `onClickBackground`, `onDataMerged`

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
  onDataMerged?: (mergeInfo: MergeInfo) => void;
  // highlight-end
  renderNodeLabel?: (node: MergedNode) => string | undefined;
  renderEdgeLabel?: (edge: MergedEdge) => string | undefined;
  cy?: (cy: cytoscape.Core) => void;
}

// highlight-next-line
type ClickEventHandler<T> = (param: {
  data?: T,
  eventType: 'right' | 'left' | 'programmatic';
  position: Partial<cytoscape.Position>;
}) => void;

```

## `onClickNode`

노드를 클릭했을 때 실행되는 콜백 함수.

### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| data | [MergedNode](/servermap/guide/merge#mergednode) : `{ nodes?: Node[] } & Node` | 타겟 node data |
| eventType | "right" or "left" or "programmatic" | 마우스 클릭 타입 또는 코드에 의해 실행된 이벤트 타입 |
| position | Partial<cytoscape.Position\> : <code>{ x: number &#124; undefined, y: number &#124; undefined }</code> |  해당 이벤트가 발생한 좌표. 이벤트가 코드에 의해 실행된 경우 x, y 값은 undefined로 세팅됩니다. |

## `onClickEdge`

Edge를 클릭했을 때 실행되는 콜백 함수.

### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| data | [MergedEdge](/servermap/guide/merge#mergededge) : `{ nodes?: Edge[] } & Edge` | 타겟 edge data |
| eventType | "right" or "left" or "programmatic" | 마우스 클릭 타입 또는 코드에 의해 실행된 이벤트 타입 |
| position | Partial<cytoscape.Position\> : <code>{ x: number &#124; undefined, y: number &#124; undefined }</code> |  해당 이벤트가 발생한 좌표. 이벤트가 코드에 의해 실행된 경우 x, y 값은 undefined로 세팅됩니다. |

## `onClickBackground`

배경을 클릭했을 때 실행되는 콜백 함수.

### Props of Callback Parameter

 Props | Type  | description  |
| --- | --- | --- |
| eventType | "right" or "left" or "programmatic" | 마우스 클릭 타입 또는 코드에 의해 실행된 이벤트 타입 |
| position | Partial<cytoscape.Position\> : <code>{ x: number &#124; undefined, y: number &#124; undefined }</code> |  해당 이벤트가 발생한 좌표. 이벤트가 코드에 의해 실행된 경우 x, y 값은 undefined로 세팅됩니다. |

## `onDataMerged`

병합로직이 수행되었을 때 실행할 콜백 함수.

### Props of Callback Parameter

 Props | Type  | description  |
| --- | --- | --- |
| mergeInfo | [MergeInfo](/servermap/guide/merge#mergeinfo): `{ types: string[] }` | 병합로직이 적용된 노드 타입 리스트 |
