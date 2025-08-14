---
title: OcrPicture ocr识别组件
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# OcrPicture ocr识别组件

## 何时使用

常用于身份证和护照照片的识别。


---

## 代码演示

<code src="./__fixtures__/basic.tsx" />

## 属性

### OcrPicture
<API hideTitle src="./OcrPicture.tsx" />

#### OcrPictureOption
| 名字| 描述| 类型| 备注|
|------------|-----------------------|----------|-----------|
| height   | 高度  | number   |  |
| uri   | 文件本地地址  | string   |          |
| width   | 宽度  | number  |      |
| fileSize   | 文件大小  | number    |         |
| type   | 文件类型  | string    |是通过文件地址提取的类型，目前支持的类型有jpg,jpeg,png,gif,webp,bmp。<br/>没有匹配到为''，使用时注意！|


