---
title: Descriptions 描述列表
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# Descriptions 描述列表

常用于详情页的信息展示。

## 何时使用

- 需要展示一组相关的信息时
- 需要以结构化的方式展示数据时
- 需要支持展开收起功能时

## 代码演示

### 基础用法
最基本的描述列表用法，展示基本信息。

<code src="./__fixtures__/basicUsage.tsx" />

### 展开收起
支持展开收起功能，可以控制内容的显示和隐藏。

<code src="./__fixtures__/expandDemo.tsx" />

### 无标题
不显示标题的描述列表，直接展示内容。

<code src="./__fixtures__/noHeaderDemo.tsx" />

### 长内容
展示包含长文本内容的描述列表，支持文本选择。

<code src="./__fixtures__/longContentDemo.tsx" />

### 边框样式
带边框的描述列表，更清晰地区分各个条目。

<code src="./__fixtures__/borderedDemo.tsx" />

### 水平布局
水平排列的描述列表，标题和内容在同一行显示。

<code src="./__fixtures__/horizontalDemo.tsx" />

### 扩展内容
在标题右侧添加额外的操作按钮或内容。

<code src="./__fixtures__/extraContentDemo.tsx" />

### 自定义样式
自定义标题、条目标题和内容的样式，以及支持 React 组件作为内容。

<code src="./__fixtures__/customStyleDemo.tsx" />

### 多个描述列表
在同一个页面中使用多个描述列表，以及在浮层中使用。

<code src="./__fixtures__/multipleDemo.tsx" />

## API

### Descriptions

<API src="./Desciptions.tsx" hideTitle></API>

### DescriptionsItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 列表项的标题 | `ReactNode` | - |
| content | 列表项的内容 | `ReactNode` | - |
