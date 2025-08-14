---
title: IndexBar 索引栏
nav:
  title: 组件
  path: /component
group:
  title: 导航组件
  path: /nav
  order: 2
---

# IndexBar 索引栏


## 代码演示

<code src="./__fixtures__/basic.tsx" />

## 属性

<API hideTitle src="./IndexBar.tsx" />

## `IndexBarBaseData`

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 列表选项的value | `string` | - |
| label | 标题 | `ReactNode` | - |
| prefix | 标题前面的icon | `ReactNode` | - |
| description | 描述 | `ReactNode` | - |

## `IndexBarGroupItem`

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | IndexBarGroup对应的唯一索引 | `string` | - |
| label | IndexBarGroup对应的标题 | `ReactNode` | - |
| data | IndexBarGroup中要渲染的列表数据 | `IndexBarBaseData[]` | - |


