---
sidebar_position: 6
---

# Merge
## Description
The more nodes you have, the more difficult it is to understand the graph, and you need more resources to draw it. Therefore, ServerMap component performs merge logic under several conditions, including the following prerequisites:
- It is a leaf node.
- It is a node of the same type.
- The parent node is the same.


## MergedNode

```typescript
interface MergedNode extends Node {
    nodes?: Node[];
}
```

## MergedEdge

```typescript
interface MergedEdge extends Edge {
    edges?: Edge[];
}
```