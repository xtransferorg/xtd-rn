---
title: ShouldRender 是否应该渲染
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# ShouldRender 是否应该渲染

## 何时使用

根据条件去渲染对应的组件时使用

## 代码演示
<code src="./__fixtures__/basic.tsx" />

## 属性

| 必填属性  | 说明                     | 类型      | 默认值 |
| --------- | ------------------------ | --------- | ------ |
| condition | 渲染组件时应满足的条件   | boolean   | -      |
| children  | 根据条件判断要渲染的组件 | ReactNode | -      |
