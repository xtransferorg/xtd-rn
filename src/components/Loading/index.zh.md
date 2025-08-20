---
title: Loading 加载中
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---
# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

- 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
- 网络较慢，需要长时间等待加载处理的情况下。
- 图片或文件上传时的等待提示。
- 页面切换时的过渡效果。
- 按钮点击后的处理状态。
- 需要在内容加载时显示遮罩效果。

## 代码演示

### 基础用法

<code src="./__fixtures__/basicUsage.tsx" title="基础用法" description="最简单的用法，支持不同尺寸和自定义颜色。" />

### Lottie 动画

<code src="./__fixtures__/lottieAnimations.tsx" title="Lottie 动画" description="使用 Lottie 动画，支持多种预设动画类型和自定义颜色过滤器。" />

### 带文案

<code src="./__fixtures__/withText.tsx" title="带文案" description="可以自定义加载文案，支持进度条等复杂内容。" />

### 主题样式

<code src="./__fixtures__/themeStyles.tsx" title="主题样式" description="适配不同主题背景，提供最佳视觉效果。" />

### 容器加载

<code src="./__fixtures__/loadingWithChildren.tsx" title="容器加载" description="包裹子元素，通过 loading 属性控制内容的加载状态，支持遮罩效果。" />

### 场景应用

<code src="./__fixtures__/scenarios.tsx" title="场景应用" description="在实际业务场景中的应用示例。" />

## API

### Loading

<code src="./__fixtures__/basic.tsx" />

## 注意事项

1. **性能考虑**：Lottie 动画相比 SVG 动画消耗更多资源，在性能敏感场景下建议使用 SVG 动画。

2. **尺寸选择**：
   - `mini`(12px)：适用于按钮内部、表格单元格等小空间
   - `small`(16px)：适用于列表项、卡片等中等空间
   - `middle`(32px)：适用于内容区域、表单等
   - `large`(48px)：适用于页面级加载、重要操作反馈

3. **文案使用**：
   - 简短明了，避免过长文案
   - 根据加载时长提供合适的提示信息
   - 长时间加载建议提供进度指示或取消操作
