---
title: Portal 传送门
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 2
---

# Portal 传送门

## 组件使用方式

### 常规用法
<code src="./__fixtures__/api.tsx" />

> 在使用这种方式时，需要注意当前组件会渲染到Provider中，这样会导致Context获取不到，详情见 [钉钉文档](https://alidocs.dingtalk.com/i/nodes/mExel2BLV542xqERsQYpL1ezWgk9rpMq?cid=1691091476%3A1840382954&corpId=dingb2f1ebc44ec0627135c2f4657eb6378f&iframeQuery=utm_medium%3Dim_card%26utm_source%3Dim&utm_medium=im_card&utm_scene=team_space&utm_source=im# 「Popup 组件 Context 分析」)

### 组件用法
<code src="./__fixtures__/basic.tsx" />


## 属性

<API hideTitle src="./index.ts"></API>

## 指令式API

- Portal.add: (e: React.ReactNode, tag?: string) => number

- Portal.remove: (key: number, tag?: string) => void

- Portal.update:  (key: number, children: React.ReactNode, tag?: string) => void

需要获取到实例的key,才能通过key去关闭实例
