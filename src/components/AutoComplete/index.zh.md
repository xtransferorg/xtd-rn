---
title: AutoComplete
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

<code src="./__fixtures__/index.tsx" />

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
