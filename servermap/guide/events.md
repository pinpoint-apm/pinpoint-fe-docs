---
sidebar_position: 3
---

# Events
## Description
We provide these event interfaces; `onClickNode`, `onClickEdge`, `onClickBackground`, `onDataMerged`


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

Callback to execute when clicking nodes.


### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| data | [MergedNode](/servermap/guide/merge#mergednode) : `{ nodes?: Node[] } & Node` | Target node data |
| eventType | "right" or "left" or "programmatic" | Mouse click type or programmatically triggered event type |
| position | Partial<cytoscape.Position\> : <code>{ x: number &#124; undefined, y: number &#124; undefined }</code> | Coordinates where the event occurred. x, y would be undefined if the event is triggered programmatically |

## `onClickEdge`

Callback to execute when clicking edges.

### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| data | [MergedEdge](/servermap/guide/merge#mergededge) : `{ nodes?: Edge[] } & Edge` | Targe edge data |
| eventType | "right" or "left" or "programmatic" | Mouse click type or programmatically triggered event type |
| position | Partial<cytoscape.Position\> : <code>{ x: number &#124; undefined, y: number &#124; undefined }</code> | Coordinates where the event occurred. x, y would be undefined if the event is triggered programmatically |

## `onClickBackground`

Callback to execute when clicking background.

### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| eventType | "right" or "left" or "programmatic" | Mouse click type or programmatically triggered event type |
| position | Partial<cytoscape.Position\> : <code>{ x: number &#124; undefined, y: number &#124; undefined }</code> | Coordinates where the event occurred. x, y would be undefined if the event is triggered programmatically |

## `onDataMerged`

Callback to execute when merge logic has been applied.

### Props of Callback Parameter

 Props | Type  | description  |
| --- | --- | --- |
| mergeInfo | [MergeInfo](/servermap/guide/merge#mergeinfo): `{ types: string[] }` | Type list of merged nodes |