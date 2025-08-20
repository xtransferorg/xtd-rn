---
title: Skeleton 骨架屏
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合，提升用户体验。

## 主要特性

- **多种布局**: 支持头像、标题、段落的灵活组合
- **预设页面**: 提供列表页、详情页等常用页面骨架屏
- **动画效果**: 支持开启/关闭动画效果
- **自定义配置**: 可自定义尺寸、形状、宽度等属性
- **条件渲染**: 根据loading状态自动切换显示内容
- **性能优化**: 支持大量骨架屏的性能优化

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下
- 只在第一次加载数据的时候使用
- 图文信息内容较多的列表/卡片中
- 需要提升用户感知性能的场景

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 段落和标题
<code src="./__fixtures__/paragraphAndTitle.tsx" />

### 预设页面
<code src="./__fixtures__/presetPages.tsx" />

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" />

## 属性

### Skeleton

<API hideTitle src="./index.tsx"></API>

### SkeletonAvatarProps

<API hideTitle src="../../core/skeleton/skeleton-avatar.tsx"></API>

### SkeletonParagraphProps

<API hideTitle src="../../core/skeleton/skeleton-paragraph.tsx"></API>
