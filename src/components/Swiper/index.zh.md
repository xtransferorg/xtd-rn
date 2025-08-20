---
title: Swiper 轮播
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# Swiper 轮播

一组轮播的区域，支持水平和垂直方向的轮播展示。

## 何时使用

- 当有一组平级的内容需要轮播展示时
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现
- 常用于一组图片或卡片轮播
- 适用于首页横幅、产品图片展示、引导页等场景

## 主要特性

- 🔄 **自动播放**：支持自动轮播，可自定义播放间隔
- 🔁 **循环播放**：支持首尾相连的循环播放
- 📱 **双向滚动**：支持水平和垂直两个方向的轮播
- 🎯 **指示器配置**：支持多种指示器样式和位置配置
- 🎮 **手动控制**：提供丰富的 API 进行手动控制
- 🎨 **高度定制**：支持自定义样式和指示器
- 📊 **计数显示**：可显示当前页数和总页数
- 🔧 **灵活配置**：支持禁用手势、后台播放等高级配置

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" title="基础轮播功能" description="展示基础轮播、自动播放、循环播放和计数器功能" />

### 垂直轮播
<code src="./__fixtures__/verticalSwiper.tsx" title="垂直方向轮播" description="展示垂直方向的轮播效果和指示器配置" />

### 指示器配置
<code src="./__fixtures__/indicatorConfig.tsx" title="指示器样式配置" description="展示不同位置和样式的指示器配置" />

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" title="高级功能演示" description="展示手动控制、禁用手势、后台播放等高级功能" />

### 实际应用场景
<code src="./__fixtures__/practicalScenarios.tsx" title="实际应用场景" description="展示在实际项目中的常见应用场景" />

## API

### Swiper Props
<API src="./Swiper.tsx" hideTitle></API>

## 注意事项

1. **循环播放**：开启 `loop` 时，组件会在首尾添加克隆节点以实现无缝循环
2. **垂直轮播**：使用 `vertical` 时，需要设置容器高度
3. **指示器位置**：垂直轮播时，`placement` 的 `left` 和 `right` 生效；水平轮播时，`top` 和 `bottom` 生效
4. **性能优化**：大量图片轮播时，建议使用图片懒加载和缓存策略
5. **手势冲突**：在嵌套滚动容器中使用时，注意手势冲突处理
6. **自动播放**：App 切换到后台时，默认会暂停自动播放，可通过 `loopBackground` 控制
