---
title: Collapse 折叠面板
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---
# Collapse 折叠面板

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

### 基础用法

展示普通折叠面板和手风琴模式的基本使用方法。

<code src="./__fixtures__/basicUsage.tsx" />

### 默认展开

通过 defaultActiveKey 设置默认展开的面板。

<code src="./__fixtures__/defaultActiveDemo.tsx" />

### 禁用状态

通过 disabled 属性禁用面板的展开/收起功能。

<code src="./__fixtures__/disabledDemo.tsx" />

### 图标和描述

为面板添加图标装饰和详细描述信息。

<code src="./__fixtures__/iconDescriptionDemo.tsx" />

### 自定义样式

自定义面板标题样式、边框等外观。

<code src="./__fixtures__/customStyleDemo.tsx" />

### 箭头配置

配置展开/收起箭头的显示、位置和提示文案。

<code src="./__fixtures__/arrowDemo.tsx" />

### 高级功能

常驻节点、复杂布局等高级使用场景。

<code src="./__fixtures__/advancedDemo.tsx" />

## `API`

### `Collapse`

<API src="./Collapse.tsx" hideTitle></API>

### `Collapse.Item`

<API src="./CollapseItem.tsx" hideTitle></API>
