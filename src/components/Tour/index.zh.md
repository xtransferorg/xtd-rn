---
title: Tour 漫游式引导组件
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Tour 漫游式引导组件

用于引导用户了解产品功能的漫游式组件，支持多步骤引导、自定义样式和丰富的交互功能。

## 何时使用

- 需要引导新用户了解产品功能时
- 产品功能更新，需要向用户介绍新特性时
- 复杂界面需要分步骤说明操作流程时
- 需要突出显示特定功能或区域时

## 代码演示

### 基础用法
展示多步骤引导的基本功能，包含标题、封面图片和描述信息。

<code src="./__fixtures__/basicUsage.tsx" />

### 自定义样式
自定义引导步骤的样式，包括背景色、按钮和指示器。

<code src="./__fixtures__/customUsage.tsx" />

### 蒙层配置
不同的蒙层配置选项，包括无蒙层、透明蒙层和自定义蒙层。

<code src="./__fixtures__/maskUsage.tsx" />

### 高级功能
受控模式和自定义内容等高级功能。

<code src="./__fixtures__/advancedUsage.tsx" />

### 交互事件
各种交互事件的回调处理。

<code src="./__fixtures__/eventUsage.tsx" />

## API

### Tour

<API hideTitle src="./Tour.tsx" />

### TourStep

<API hideTitle src="./TourStep.tsx" />
