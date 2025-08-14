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
<code src="./__fixtures__/basic.tsx" />

#### 注意
popover是基于react-native-popover-view实现的， 因此当设置closeOnClickOverlay为true时，在web端点击蒙层无反应是正常现象，因为拦截不到背景的点击事件。实际在app端是能点击蒙层关闭的

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
| text     | -      | T                    | 必选    |
| icon     | 图标     | ReactNode            | null  |
| color    | 选项文字颜色 | string               | ''    |
| style    | 点击区域样式 | StyleProp`<ViewStyle>`| -     |
| disabled | 是否禁用   | boolean              | false |


### 实例方法

> 通过ref获取到Popover实例并调用实例方法

| 方法名      | 描述        | 参数  | 返回值 |
|----------|-----------|-----|-----|
| show     | 显示popover | -   | -   |
| hide     | 关闭popover | -   | -   |



