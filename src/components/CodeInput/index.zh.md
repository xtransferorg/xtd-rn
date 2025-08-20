---
title: CodeInput 验证码
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# CodeInput 验证码

请在真机上查看实际效果，web端有差异

## 何时使用

常用于短信验证码、邮箱验证码等场景。

---

## 代码演示

### 基础用法

展示不同位数的验证码输入框。

<code src="./__fixtures__/basicUsage.tsx" />

### 掩码功能

输入内容会被掩码符号替代，保护隐私。

<code src="./__fixtures__/maskDemo.tsx" />

### 错误状态

验证失败时的错误显示效果。

<code src="./__fixtures__/errorStateDemo.tsx" />

### 交互功能

手动填充验证码和实时监听变化。

<code src="./__fixtures__/interactiveDemo.tsx" />

### 自定义样式

自定义边框颜色、文本样式等。

<code src="./__fixtures__/customStyleDemo.tsx" />

### 扩展功能

在验证码输入框下方显示额外操作按钮或提示信息。

<code src="./__fixtures__/extraDemo.tsx" />

## 属性

### CodeInput
<API hideTitle src="./CodeInput.tsx" />
