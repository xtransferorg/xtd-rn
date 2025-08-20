---
title: OcrPicture OCR识别组件
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# OcrPicture OCR识别组件

用于图片文字识别的组件，支持相机拍照和相册选择，常用于身份证、护照等证件信息的自动识别。

## 何时使用

- 需要从证件照片中提取文字信息时
- 需要快速录入身份证、护照等证件号码时

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 扫描方向配置
<code src="./__fixtures__/directionUsage.tsx" />

### 静态方法调用
<code src="./__fixtures__/staticUsage.tsx" />

### 超时配置
<code src="./__fixtures__/timeoutUsage.tsx" />

### 错误处理
<code src="./__fixtures__/errorUsage.tsx" />

## API

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


