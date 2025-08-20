---
title: Popup 弹出层
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Popup 弹出层

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 何时使用

- 需要在当前页面上方展示临时内容时
- 需要用户进行确认或填写表单时
- 展示详细信息或操作选项时
- 需要模态交互，阻止用户操作背景内容时

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 弹出位置
<code src="./__fixtures__/positions.tsx" />

### Header 组件
<code src="./__fixtures__/headerExamples.tsx" />

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" />

### 配置选项
<code src="./__fixtures__/configOptions.tsx" />

## API

### Popup

<API hideTitle src="../../core/popup/popup.tsx" />

### Popup.Header

<API src="./PopupHeader.tsx" hideTitle />

## 注意事项

- 在使用 `enableSlidingClose` 时，需要确保内容区域支持手势操作
- 多个 Popup 叠加时，后打开的会覆盖先打开的
- `destroyOnClosed` 会影响性能，建议仅在必要时使用
- 在表单场景中，建议设置 `closeOnPressOverlay={false}` 防止误操作
