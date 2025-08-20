---
title: Radio 单选框
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---

# Radio 单选框

> 用于在多个备选项中选中单个状态。

## 何时使用

- 用于在多个备选项中选中单个状态
- 和 Checkbox 的区别是，Radio 只能选中一个
- Radio 基于 Checkbox.Group 实现，继承其所有属性

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx"></code>

### 布局样式
<code src="./__fixtures__/layoutStyles.tsx"></code>

### 数据类型
<code src="./__fixtures__/dataTypes.tsx"></code>

### 事件处理
<code src="./__fixtures__/eventHandling.tsx"></code>

### 自定义样式
<code src="./__fixtures__/customStyles.tsx"></code>

## API

### RadioProps

Radio 组件继承了 Checkbox.Group 的所有属性，但强制设置 `multiple={false}`，确保只能单选。

<API src="./Radio.tsx" hideTitle />
