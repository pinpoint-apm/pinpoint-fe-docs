---
sidebar_position: 6
---

# Merge
## Description

노드의 개수가 많아질수록 그래프를 파악하기 어려워지고 이것을 그리는데에 리소스가 많이 필요합니다. 그렇기 때문에 ServerMap 컴포넌트는 아래와 같은 필수 조건을 포함한 여러 조건에 의해 병합로직을 수행합니다.
- 종단 노드이다.
- 같은 type의 노드이다.
- 부모노드가 같다.


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

## MergeInfo

```typescript
interface MergeInfo {
  types: string[];
}
```