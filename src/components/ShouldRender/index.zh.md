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

`ShouldRender` 组件用于根据给定的条件，灵活地控制其子组件的渲染。当您需要根据数据状态、用户权限或其他业务逻辑来决定页面元素的可见性时，此组件非常有用。

**适用场景:**

*   **条件性UI展示:** 根据后端返回的数据，动态显示或隐藏某个模块。
*   **权限控制:** 根据用户角色，只展示其有权限操作的按钮或区域。
*   **性能优化:** 避免渲染不必要的组件，特别是在复杂列表或动态表单中，可以有效提升应用性能。

**边界情况:**

*   当 `condition` 为 `false` 时，`children` 将不会被渲染，也不会占用布局空间。
*   `children` 为 `ReactNode` 类型，可以是任何可渲染的 React 元素或组件。

## 代码演示

### 基础用法
展示 `ShouldRender` 组件的基本用法，通过设置 `condition` 属性控制文本的显示与隐藏。
<code src="./__fixtures__/basic.tsx" />

## API

| 必填属性  | 说明                     | 类型      | 默认值 |
| --------- | ------------------------ | --------- | ------ |
| condition | 渲染组件时应满足的条件   | boolean   | -      |
| children  | 根据条件判断要渲染的组件 | ReactNode | -      |
