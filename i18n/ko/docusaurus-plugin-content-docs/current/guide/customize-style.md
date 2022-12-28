---
sidebar_position: 4
---

# Customize Style

## Description
Node와 Edge의 스타일을 커스텀 할 수 있습니다. 

```ts title="Custom Theme Type"
type ServerMapTheme = {
  transactionStatus?: {
    default?: {
      stroke?: string,
      strokeWidth?: number,
    }, 
    good?: {
      stroke?: string,
      strokeWidth?: number,
    },
    slow?: {
      stroke?: string,
      strokeWidth?: number,
    },
    bad?: {
      stroke?: string,
      strokeWidth?: number,
    },
  },
  node?: {
    default?: Css.Node,
    highlight?: Css.Node,
    main?: Css.Node,
  },
  edge?: {
    default?: Css.Edge,
    highlight?: Css.Edge,
    loop?: Css.Edge,
  }
} 
```

## `Css.Node`

보다 더 구체적인 스타일링 항목은 [cytoscape 문서](https://js.cytoscape.org/#style/node-body)에서 참고하실 수 있습니다.

## `Css.Edge`

보다 더 구체적인 스타일링 항목은 [cytoscape 문서](https://js.cytoscape.org/#style/node-body)에서 참고하실 수 있습니다.
