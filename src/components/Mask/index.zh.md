---
title: Mask 背景蒙层
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Mask 背景蒙层

背景蒙层组件，用于创建模态层，阻止用户与底层内容交互。

## 何时使用

- 需要用户专注于某个任务，而不希望跳转页面时
- 需要在当前页面上方显示内容时
- 需要创建模态对话框、图片预览等场景时
- 需要显示加载状态或临时信息时

## 设计原则

- **专注性**：通过蒙层将用户注意力集中到特定内容上
- **层次感**：通过背景遮罩营造层次感，突出前景内容
- **可控性**：提供明确的关闭方式，用户可以轻松退出
- **适应性**：支持不同的背景样式和动画效果

---

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 背景样式
<code src="./__fixtures__/backdropUsage.tsx" />

### 动画效果
<code src="./__fixtures__/animationUsage.tsx" />


## API
<API hideTitle src="./Mask.tsx" />
