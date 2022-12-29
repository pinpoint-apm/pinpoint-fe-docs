---
sidebar_position: 3
---

# Events
## Description
We provide three of click event interfaces; `onClickNode`, `onClickEdge`, `onClickBackground`.


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

Callback to execute when clicking nodes.


### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| data | [MergedNode](/servermap/guide/merge#mergednode) : `{ nodes?: Node[] } & Node` | Target node data |
| eventType | "right" or "left" | Mouse click type |
| position | cytoscape.Position :  `{ x: number, y: number }` | Coordinates where the event occurred  |

## `onClickEdge`

Callback to execute when clicking edges.

### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| data | [MergedEdge](/servermap/guide/merge#mergededge) : `{ nodes?: Edge[] } & Edge` | Targe edge data |
| eventType | "right" or "left" | Mouse click type |
| position | cytoscape.Position :  `{ x: number, y: number }` | Coordinates where the event occurred |

## `onClickBackground`

Callback to execute when clicking background.

### Props of Callback Parameter

| Props | Type  | description  |
| --- | --- | --- |
| eventType | "right" or "left" | Mouse click type |
| position | cytoscape.Position :  `{ x: number, y: number }` | Coordinates where the event occurred |