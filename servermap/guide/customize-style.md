---
sidebar_position: 4
---

# Customize Style

## Description
You can customize Node and Edge styles.

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
Check out the [cytoscape document](https://js.cytoscape.org/#style/node-body) if you want more details.

## `Css.Edge`

Check out the [cytoscape document](https://js.cytoscape.org/#style/edge-line) if you want more details.
