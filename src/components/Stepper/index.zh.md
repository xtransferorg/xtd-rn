---
title: Stepper 步进器
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---

# Stepper 步进器

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

## 代码演示

### 基础用法

可以设置 min、max、step 等属性来控制步进器的行为。

<code src="./__fixtures__/basic.tsx"></code>

### Ref 用法

在某些特殊场景可以主动调用步进器的 ref 来控制 input 框的行为。

<code src="./__fixtures__/ref.tsx"></code>

## 属性

<API src="./Stepper.tsx" hideTitle></API>

### Ref

| 属性名 | 描述             | 类型       |
| ------ | ---------------- | ---------- |
| focus  | 让输入框获得焦点 | `() => void` |
| blur   | 让输入框失去焦点 | `() => void`|

### Q&A

*为什么输入框为空时，`onChange`得到的值为`0`？*

当`allowEmpty`为`true`时，输入框为空时，`onChange`得到的值为`0`，因为`Number('')`为`0`.
