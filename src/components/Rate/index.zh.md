---
title: Rate 评分
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
---

# Rate 评分

评分打星组件。

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 受控模式
<code src="./__fixtures__/controlledUsage.tsx" />

### 描述信息
<code src="./__fixtures__/descriptionUsage.tsx" />

### 自定义字符
<code src="./__fixtures__/customCharacterUsage.tsx" />

### 单选模式
<code src="./__fixtures__/singleModeUsage.tsx" />

### 背景效果
<code src="./__fixtures__/backgroundUsage.tsx" />

### 尺寸设置
<code src="./__fixtures__/sizeUsage.tsx" />

### 禁用状态
<code src="./__fixtures__/disabledUsage.tsx" />

## 属性

<API hideTitle src="./Rate.tsx" />

## 注意事项

- `useContainerWidth` 属性启用后，会根据容器宽度自动计算每项宽度，此时 `size.width` 设置无效，但 `size.height` 仍然有效
- `single` 模式下，只能选择一个评分项，适用于表情评分等场景
- `background` 属性可以为评分项添加背景效果，通常与 `single` 模式配合使用
- `description` 数组长度应与 `count` 或 `character` 数组长度保持一致，否则描述信息可能不会正确显示
