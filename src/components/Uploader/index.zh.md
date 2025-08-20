---
title: Uploader 文件上传
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---

# Uploader 文件上传

支持拍照上传、相册上传、PDF上传等多种文件类型。使用时可以直接使用 `Uploader` 组件，也可以按需使用 `Uploader.UploaderBody`。

## 何时使用

- 需要上传图片、文档等文件时
- 需要支持多种文件格式上传时
- 需要自定义上传样式和交互时
- 需要控制上传流程和状态时

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" title="基础用法"></code>

### 文件类型
<code src="./__fixtures__/fileTypes.tsx" title="不同文件类型"></code>

### 自定义样式
<code src="./__fixtures__/customStyles.tsx" title="自定义样式"></code>

### 交互功能
<code src="./__fixtures__/interactiveFeatures.tsx" title="交互功能"></code>

### 状态控制
<code src="./__fixtures__/stateControl.tsx" title="状态控制"></code>

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" title="高级功能"></code>

## API

### Uploader
<API hideTitle src="./Uploader.tsx"></API>

### UploaderBody
<API hideTitle src="./UploaderBody.tsx"></API>

### ImageInfo (文件信息 历史原因命名)
| 属性      | 描述                                | 类型          | 默认值 |
| ----------- | ------------------------------------- | --------------- | ------ |
| uri    | 显示的图片地址                          | string         | -  |
| fileName    |图片名字                          | string         | -  |
| fileSize    | 图片大小                          | number         | -  |
| height    | 图片高度                          | number         | -  |
| width    | 图片宽度                          | number         | -  |
| type    | 图片类型                          | string         | -  |
| status    | 图片状态                          | `'isUploading' \| 'done'`         | -  |
| hideDeleteIcon    | 是否隐藏删除按钮                          | boolean         | false  |
| attachmentType    | 文件类型                          | string         | -  |
| attachmentName    | 文件名字                          | string         | -  |

### UploaderRef
| 属性      | 描述                                | 类型          | 默认值 |
| ----------- | ------------------------------------- | --------------- | ------ |
| upload    | 上传        | `() => void`         | -  |
| choose    | 指定类型文件上传      | `(way: UploadWays) => void`         | -  |
| remove    | 删除指定文件      | `(index: number) => void`         | -  |

### UploadFileTypes
```typescript
enum UploadFileTypes {
  AllFile = 'allFiles',
  Image = 'images',
  Pdf = 'pdf',
  Audio = 'audio',
  Csv = 'csv',
  PlainText = 'plainText',
  Video = 'video',
  Zip = 'zip',
}
```
