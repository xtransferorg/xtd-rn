---
title: FileViewer 文件预览组件
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

- 需要预览图片文件时
- 需要预览 PDF 文件时
- 需要同时预览多种类型文件时
- 需要显示文件缩略图时
- 需要支持文件下载功能时

## 代码演示

### 基础用法

<code src="./__fixtures__/basicUsage.tsx" title="基础用法" description="支持图片预览，可以自定义缩略图大小和排列方式。"></code>

### PDF 预览

<code src="./__fixtures__/pdfPreview.tsx" title="PDF 预览" description="支持 PDF 文件预览，包括缩略图显示和内嵌预览器。"></code>

### 混合文件预览

<code src="./__fixtures__/mixedFiles.tsx" title="混合文件预览" description="支持图片和 PDF 文件混合显示，自动识别文件类型。"></code>

### 缩略图组件

<code src="./__fixtures__/thumbnails.tsx" title="缩略图组件" description="独立的缩略图组件，支持图片和 PDF 文件。"></code>

## API

### FileViewer

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `all \| image \| pdf (required)` | - |
| sources | 资源 | `Array<{uri: string \| number \| Source, type: 'image \| pdf'}>` | - |
| props | 资源 | `PdfProps \| ImageViewerProps` | - |

### FileViewer type="pdf" (PDF 预览)

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | PDF 资源 | `{uri: string} \| number` | - |
| style | 样式 | `StyleProp<ViewStyle>` | - |
| page | 当前页数 | `number` | - |
| scale | 缩放倍数 | `number` | - |
| minScale | 最小缩放倍数 | `number` | - |
| maxScale | 最大缩放倍数 | `number` | - |
| showsHorizontalScrollIndicator | 显示水平滚动指示器 | `boolean` | `false` |
| showsVerticalScrollIndicator | 显示垂直滚动指示器 | `boolean` | `false` |
| spacing | 页面间距 | `number` | - |
| password | PDF 密码 | `string` | - |
| renderActivityIndicator | 自定义加载指示器 | `(progress: number) => ReactElement` | - |
| onLoadProgress | 加载进度回调 | `(percent: number) => void` | - |
| onLoadComplete | 加载完成回调 | `(numberOfPages: number, path: string, size: {height: number, width: number}) => void` | - |
| onPageChanged | 页码变化回调 | `(page: number, numberOfPages: number) => void` | - |
| onError | 错误回调 | `(error: object) => void` | - |
| onPageSingleTap | 页面点击回调 | `(page: number, x: number, y: number) => void` | - |
| onScaleChanged | 缩放变化回调 | `(scale: number) => void` | - |
| onPressLink | 链接点击回调 | `(url: string) => void` | - |

### FileViewer type="image" (图片预览)

<API src="./ImagePreview/index.tsx" hideTitle />

### FileViewer.ImageThumbnail

<API src="./thumbnails/ImageThumbnail.tsx" hideTitle />

### FileViewer.PdfThumbnail

<API src="./thumbnails/PdfThumbnail.tsx" hideTitle />
