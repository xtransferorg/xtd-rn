---
title: Tag 标签
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# Tag 标签

用于标记关键词和概括主要内容。

## 特性

- 🎨 **多种类型**：支持 primary、ghost、hazy 三种基础类型
- 🔧 **扩展功能**：支持 solid（面标签）和 outline（线标签）
- 💪 **功能分级**：强调、普通、弱化、半透明四种功能样式
- 📏 **多种尺寸**：大、中、小三种尺寸规格
- 🏷️ **状态标签**：内置流程状态标签，支持状态点显示
- 🎯 **图标支持**：支持前置图标，丰富标签表达
- ❌ **可关闭**：支持关闭功能，可自定义关闭图标
- 🎨 **自定义样式**：支持自定义颜色、边框等样式
- 📱 **响应式**：自适应内容长度，支持长文本显示

## 代码演示

<!-- ### 基础用法
<code src="./__fixtures__/basicUsage.tsx"></code> -->

### 标签类型和功能
<code src="./__fixtures__/typesAndFunctions.tsx"></code>

### 尺寸规格
<code src="./__fixtures__/sizes.tsx"></code>

### 状态标签
<code src="./__fixtures__/statusTags.tsx"></code>

### 图标标签
<code src="./__fixtures__/iconTags.tsx"></code>

### 可关闭标签
<code src="./__fixtures__/closableTags.tsx"></code>

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx"></code>

## API

### Tag Props
<API hideTitle src="./Tag.tsx"></API>

### TagType

```ts
enum TagType {
  solid = 'solid',    // 面标签（默认）
  outline = 'outline', // 线标签
}
```

### TagFunc

```ts
enum TagFunc {
  strengthen = 'strengthen',   // 强调标签
  normal = 'normal',          // 普通标签（默认）
  weaken = 'weaken',          // 弱化标签
  translucent = 'translucent', // 半透明标签
}
```

### TagSize

```ts
type TagSize = 'l' | 'm' | 's';  // 大 | 中（默认） | 小
```


### TagStatus

```ts
type TagStatus = 'processing' | 'interrupt' | 'terminate' | 'error' | 'success';
```

## 静态方法

Tag 组件提供了便捷的状态标签静态方法：

```tsx | pure
// 流程中
Tag.processing({ children: '流程中' })

// 流程中断  
Tag.interrupt({ children: '流程中断' })

// 流程终止
Tag.terminate({ children: '流程终止' })

// 流程失败
Tag.error({ children: '流程失败' })

// 流程成功
Tag.success({ children: '流程成功' })
```
