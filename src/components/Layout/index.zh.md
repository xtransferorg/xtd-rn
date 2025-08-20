---
title: Layout 布局
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# Layout 布局

页面级布局容器，提供统一的页面结构和安全区域处理。

## 何时使用

- 作为页面的根容器使用
- 需要统一的侧边距和背景色
- 需要处理不同平台的安全区域
- 构建响应式布局结构

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" title="基础用法" description="展示 Layout 组件的基本使用方式，包括默认配置和自定义背景色" />

### 侧边距配置
<code src="./__fixtures__/paddingUsage.tsx" title="侧边距配置" description="通过 sidePadding 属性控制布局容器的左右内边距" />

### 安全区域配置
<code src="./__fixtures__/safeAreaUsage.tsx" title="安全区域配置" description="配置不同的底部安全区域处理方式，适配不同平台" />

## API

<API hideTitle src="./Layout.tsx" />

