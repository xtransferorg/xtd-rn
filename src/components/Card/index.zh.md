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




## 代码使用
<code src='./__fixtures__/index.tsx'></code>

### Card 属性

<API src="./Card.tsx" hideTitle></API>


### Card.Body

| 属性名  | 描述   | 类型                       | 默认值 |
| :------ | ------ | -------------------------- | ------ | 
| padding | 内边距 | `CardProps['bodyPadding']` | -      | 
| size    | 内边距尺寸 | `s  m  l` | -         | m      |

