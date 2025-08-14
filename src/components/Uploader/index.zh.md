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

支持拍照上传、相册上传、PDF上传
使用时可以直接使用“ Uploader ”组件，也可以按需使用“ Uploader.UploaderBody ”


## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

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
