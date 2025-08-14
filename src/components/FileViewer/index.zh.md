---
title: FileViewer 筛选组件
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# FileViewer 文件预览组件

## 何时使用
- 需要预览文件时


## 代码使用
<code src="./__fixtures__/index.tsx"/>

## 属性
## FileViewer

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `all \| image \| pdf (required)` | - |
| sources | 资源 | `Array<{uri: string \| number \| Source, type: 'image \| pdf'}>` | - |
| props | 资源 | `PdfProps \| ImageViewerProps` | - |


## &lt;FileViewer type="pdf" /&gt; => PdfViewer
| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| style | 样式 | `ReactNative.StyleProp<ReactNative.ViewStyle>` | - |
| source | 资源 | `Source \| number` | - |
| page | 页数 | `number` | - |
| scale | 缩放倍数 | `number` | - |
| minScale | 最小缩放倍数 | `number` | - |
| maxScale | 最大缩放倍数 | `number` | - |
| showsHorizontalScrollIndicator | 显示纵向指示器 | `boolean` | false |
| showsVerticalScrollIndicator | 显示横向指示器 | `boolean` | false |
| spacing | 间距 | `number` | - |
| password | 密码 | `string` | - |
| renderActivityIndicator | 自定义指示器 | `(progress: number) => React.ReactElement` | - |
| onLoadProgress | 监听加载进度 | `percent: number,) => void` | - |
| onLoadComplete | 加载完成 | `(numberOfPages: number, path: string, size: {height: number, width: number}, tableContents?: TableContent[]) => void` | - |
| onPageChanged | 页码切换 | `(page: number, numberOfPages: number) => void` | - |
| onError | 错误事件 | `(error: object) => void` | - |
| onPageSingleTap | 页面点击 | `(page: number, x: number, y: number) => void` | - |
| onScaleChanged | 缩放切换 | `(scale: number) => void` | - |
| onPressLink | 点击pdf内部链接 | `(url: string) => void` | - |

## &lt;FileViewer type="iamge" /&gt; => ImagePreview
<API src="./ImagePreview/index.tsx" hideTitle />

## FileViewer.ImageThumbnail

<API src="./thumbnails/ImageThumbnail.tsx" hideTitle />


## FileViewer.PdfThumbnail

<API src="./thumbnails/PdfThumbnail.tsx" hideTitle />
