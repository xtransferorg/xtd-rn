---
title: Badge 徽标
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# Badge 徽标

图标右上角的圆形徽标数字。

## 何时使用

- 一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数
- 通过醒目视觉形式吸引用户处理
- 适用于需要突出显示数量或状态的场景

## 组件特性

- **多种类型**：支持数字、文字、小红点三种类型
- **状态标识**：提供 primary、success、warning、error 四种状态
- **自定义样式**：支持自定义颜色、位置、形状等
- **智能显示**：支持最大值限制、零值控制、加载状态
- **灵活布局**：可包裹子组件或独立使用

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" title="基础用法" />

### 状态类型
<code src="./__fixtures__/statusUsage.tsx" title="状态类型" />

### 自定义样式
<code src="./__fixtures__/customUsage.tsx" title="自定义样式" />

### 高级用法
<code src="./__fixtures__/advancedUsage.tsx" title="高级用法" />

## API

### Badge Props

<API src="./Badge.tsx" hideTitle></API>
