---
title: Card 卡片
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# Card 卡片

> 通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落。

- 列表使用 `size="s"`，并且通过 titleLeftExtra 展示分类信息，配合 footer 呈现更多内容
- 详情页采用默认尺寸 `size="m"`，配合 Space、Collapse 组件完成需求

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 带图片的卡片
<code src="./__fixtures__/imageCardDemo.tsx" />

### 带操作区域的卡片
<code src="./__fixtures__/actionCardDemo.tsx" />

### 不同尺寸
<code src="./__fixtures__/sizeDemo.tsx" />

### 自定义样式
<code src="./__fixtures__/customStyleDemo.tsx" />

### 加载状态
<code src="./__fixtures__/loadingDemo.tsx" />

### 复杂布局
<code src="./__fixtures__/complexLayoutDemo.tsx" />

## API

### Card 属性

<API src="./Card.tsx" hideTitle></API>

### Card.Body

| 属性名  | 描述   | 类型                       | 默认值 |
| :------ | ------ | -------------------------- | ------ | 
| padding | 内边距 | `CardProps['bodyPadding']` | -      | 
| size    | 内边距尺寸 | `s \| m \| l` | m      |

