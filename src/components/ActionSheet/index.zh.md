---
title: ActionSheet 动作面板 
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# ActionSheet 动作面板

在底部弹起的模态框，提供和当前场景相关的多个操作选项。

## 何时使用

- 需要用户在多个选项中进行选择时
- 替代原生的 Alert 选择框，提供更好的用户体验
- 需要展示操作选项的详细描述信息时
- 在移动端需要友好的选择交互时

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 选项状态
<code src="./__fixtures__/optionStates.tsx" />

### 回调处理
<code src="./__fixtures__/callbackHandling.tsx" />

### 布局配置
<code src="./__fixtures__/layoutConfig.tsx" />

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" />

## API

<API hideTitle src="../../core/action-sheet/index.tsx" />

### Action

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标题 | `string` | - |
| description | 选项描述信息 | `string` | - |
| color | 选项文字颜色 | `string` | - |
| loading | 是否为加载状态 | `boolean` | `false` |
| disabled | 是否为禁用状态 | `boolean` | `false` |
| callback | 点击时触发的回调函数 | `() => void` | - |
