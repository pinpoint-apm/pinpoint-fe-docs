---
sidebar_position: 1
---

# Node
## Description
Nodes represent servers(applications).

## Props
| Props | Type  | Required  | Default | Description  |
| --- | --- | --- | --- | --- |
| id | string | ✔️ |  | Id of the node |
| label | string | ✔️ |  | Label of the node |
| type | string |  |  | Type of the node - ex) "tomcat" or "mongoDB"  |
| imgPath | string |  |  | Image which represents the node - ex) "/publick/assets/SPRING.png" |
| transactionInfo | `{ good: number, slow: number, bad: number}` |  |  | Transaction information for visualizing server(application) status on the node  |
| shouldNotMerge | `() => boolean` |  | `false` | Decide whether to merge nodes |