---
sidebar_position: 1
---

# Node
## Description
Node는 서버(애플리케이션)을 표현합니다.

## Props
| Props | Type  | Required  | Default | Description  |
| --- | --- | --- | --- | --- |
| id | string | ✔️ |  | Node 아이디 |
| label | string | ✔️ |  | Node 라벨 |
| type | string |  |  | Node 타입 - ex) "tomcat" or "mongoDB"  |
| imgPath | string |  |  | Node에 나타낼 이미지 - ex) "/publick/assets/SPRING.png" |
| transactionInfo | `{ good: number, slow: number, bad: number}` |  |  | 서버(애플리케이션)의 상태를 시각화하기 위한 트랜젝션 정보  |
| shouldNotMerge | `() => boolean` |  | `false` | Node를 병합할지 말지 결정 |