---
title: Popover 气泡提示
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Popover 气泡提示(点击空白消失请在APP上验证)

## 何时使用

适用于功能的导航，只可由导航栏上图标唤起，通常用于收纳低频使用的功能。

---

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 主题模式
<code src="./__fixtures__/themeUsage.tsx" />

### 位置控制
<code src="./__fixtures__/placementUsage.tsx" />

### 箭头和阴影
<code src="./__fixtures__/arrowShadowUsage.tsx" />

### 菜单用法
<code src="./__fixtures__/menuUsage.tsx" />

### 关闭控制
<code src="./__fixtures__/closeControlUsage.tsx" />

### 自定义内容
<code src="./__fixtures__/customContentUsage.tsx" />

### 导航栏集成
<code src="./__fixtures__/navBarUsage.tsx" />

---

## 注意事项

- Popover 是基于 react-native-popover-view 实现的
- 当设置 `closeOnClickOverlay` 为 `true` 时，在 Web 端点击蒙层无反应是正常现象，因为拦截不到背景的点击事件
- 实际在 App 端是能点击蒙层关闭的
- 在 Android 平台上，`statusBarTranslucent` 属性控制状态栏是否半透明

## 属性

### Popover

<API src="./popover.tsx" hideTitle></API>

### Popover.Item

<API src="./popover-item.tsx" hideTitle></API>

### Popover.Text

<API src="./popover-text.tsx" hideTitle></API>

### `Action` 数据结构

| 属性名      | 描述     | 类型                   | 默认值   |
|----------|--------|----------------------|-------|
| text     | 选项文字   | string               | 必选    |
| icon     | 图标     | ReactNode            | -     |
| color    | 选项文字颜色 | string               | -     |
| style    | 点击区域样式 | StyleProp`<ViewStyle>`| -     |
| disabled | 是否禁用   | boolean              | false |
| divider  | 是否显示分割线 | boolean            | false |

### 实例方法

> 通过 ref 获取到 Popover 实例并调用实例方法

| 方法名      | 描述        | 参数  | 返回值 |
|----------|-----------|-----|-----|
| show     | 显示 popover | -   | -   |
| hide     | 关闭 popover | -   | -   |



