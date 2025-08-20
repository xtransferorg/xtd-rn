---
title: Toast 轻提示
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 2
---

# Toast 轻提示

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果反馈等场景。

## 特性

- 🎯 **多种类型**：支持文字、加载、成功、失败、警告、自定义图标等类型
- 📍 **灵活定位**：支持顶部、中部、底部三种位置显示
- ⏱️ **时长控制**：可自定义显示时长，支持不自动消失
- 🎨 **自定义图标**：支持自定义图标，丰富视觉表达
- 🔄 **加载状态**：内置两种加载图标样式
- 🎭 **遮罩控制**：可选择是否显示背景遮罩
- 👆 **交互控制**：支持点击关闭、禁止背景点击等交互
- 🔧 **实例管理**：支持实例控制、批量管理、全局配置
- 📱 **原生支持**：支持原生 Modal，避免被其他组件覆盖

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx"></code>

### 状态提示
<code src="./__fixtures__/statusToasts.tsx"></code>

### 加载提示
<code src="./__fixtures__/loadingToasts.tsx"></code>

### 交互功能
<code src="./__fixtures__/interactiveFeatures.tsx"></code>

### 自定义样式
<code src="./__fixtures__/customStyles.tsx"></code>

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx"></code>

## API

### Toast Props
<API hideTitle src="./Toast.tsx"></API>

### ToastType

```ts
type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'warn' | 'icon';
```

### ToastMethods

```ts
type ToastMethods = {
  close: () => void;           // 关闭 Toast
  setMessage: (s: string) => void;  // 更新消息内容
};
```