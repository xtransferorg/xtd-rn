---
title: Progress 进度条
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Progress 进度条

## 何时使用

展示操作的当前进度，告知用户当前状态和预期。

- 在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态
- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时
- 当需要显示一个操作完成的百分比时

---

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 状态
<code src="./__fixtures__/statusUsage.tsx" />

### 尺寸
<code src="./__fixtures__/sizeUsage.tsx" />

### 颜色
<code src="./__fixtures__/colorUsage.tsx" />

### 文字位置
<code src="./__fixtures__/positionUsage.tsx" />

### 自定义内容
<code src="./__fixtures__/customContentUsage.tsx" />

### 动画效果
<code src="./__fixtures__/animationUsage.tsx" />

### 组件方式调用
<code src="./__fixtures__/componentUsage.tsx" />

### 实际场景
<code src="./__fixtures__/scenarioUsage.tsx" />

---

## 注意事项

- 进度条的 `percent` 值会自动限制在 0-100 之间
- 圆形进度条不支持 `percentPosition` 属性
- 渐变色仅支持数组格式，如 `['#87d068', '#ffe58f']`
- 动画效果在性能较低的设备上可能会有卡顿，建议根据实际情况开启

## 属性

### Progress

<API hideTitle src="./Progress.tsx" />

### Progress.Line

<API hideTitle src="./Line.tsx" />

### Progress.Circle

<API hideTitle src="./Circle.tsx" />

## 类型定义

### ProgressType

```typescript
type ProgressType = 'line' | 'circle';
```

### ProgressStatus

```typescript
type ProgressStatus = 'normal' | 'exception' | 'success';
```

### PercentPositionType

```typescript
type PercentPositionType = 'top' | 'right' | 'bottom' | 'left';
```

### LineGradientColor

```typescript
type LineGradientColor = string[];
```
