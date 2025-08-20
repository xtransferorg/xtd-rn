---
title: AutoComplete 自动补全
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---
# AutoComplete 自动补全

## 何时使用

- 需要一个输入框且需要输入建议/辅助提示。

## 代码演示

### 基础使用
<code src="./__fixtures__/basicUsage.tsx" />

### 状态演示
<code src="./__fixtures__/statusDemo.tsx" />

### 高亮匹配
<code src="./__fixtures__/highlightDemo.tsx" />

### 弹出位置
<code src="./__fixtures__/placementDemo.tsx" />

### 受控组件
<code src="./__fixtures__/controlledDemo.tsx" />

### Ref 使用
<code src="./__fixtures__/refDemo.tsx" />

### 高级功能
<code src="./__fixtures__/advancedDemo.tsx" />

## `API`

### `AutoComplete 属性`

<API src="./AutoComplete.tsx" hideTitle></API>

### `AutoCompleteOption 属性`

| 属性名  | 描述   | 类型                       | 默认值 |
| :------ | ------ | -------------------------- | - |
| value | 自动补全某一选项的值，必须有值且唯一 | `string` | `--` |
| label    | 自动补全某一选项显示的内容，不配置值时候显示value | `string \| ReactElement` | `--` |

### `ref 属性`

| 属性名  | 描述   | 类型                       |
| :------ | ------ | -------------------------- |
| blur | 失去焦点 | `() => void` |
| focus    | 获得焦点 | `() => void` |
| clear    | 清空输入内容 | `() => void` |
