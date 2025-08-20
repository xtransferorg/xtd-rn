---
title: Grid 栅格
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 2
---

# Grid 栅格

24 栅格系统，通过基础的 24 分栏，迅速简便地创建布局。

## 何时使用

- 需要一套统一的栅格系统进行页面布局
- 需要响应式的栅格布局
- 需要灵活的列间距和对齐方式

## 组件特性

- **24 栅格系统**：基于 24 分栏的栅格系统，灵活划分布局
- **响应式布局**：支持不同屏幕尺寸的自适应布局
- **灵活间距**：支持自定义列间距
- **多种对齐**：支持水平和垂直方向的多种对齐方式
- **偏移支持**：支持列的左右偏移
- **嵌套布局**：支持栅格的嵌套使用

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 区块间隔
<code src="./__fixtures__/gapUsage.tsx" />

### 左右偏移
<code src="./__fixtures__/offsetUsage.tsx" />

### 对齐方式
<code src="./__fixtures__/alignmentUsage.tsx" />

### 响应式布局
<code src="./__fixtures__/responsiveUsage.tsx" />

## API

### Row Props

<API hideTitle src="../../core/grid/row.tsx"></API>

### Col Props

<API hideTitle src="../../core/grid/col.tsx"></API>
