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

用于快速定位和选择列表中的内容，支持单选、多选、搜索、热门选项等功能。

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 搜索和热门选项
<code src="./__fixtures__/searchAndHot.tsx" />

### 布局和样式
<code src="./__fixtures__/layoutAndStyle.tsx" />

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" />

## 属性

<API hideTitle src="./IndexBar.tsx" />

## 类型定义

### `IndexBarBaseData`

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 列表选项的value | `string` | - |
| label | 标题 | `ReactNode` | - |
| prefix | 标题前面的icon | `ReactElement` | - |
| description | 描述 | `ReactNode` | - |

### `IndexBarGroupItem`

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | IndexBarGroup对应的唯一索引 | `string` | - |
| label | IndexBarGroup对应的标题 | `ReactNode` | - |
| data | IndexBarGroup中要渲染的列表数据 | `IndexBarBaseData[]` | - |
