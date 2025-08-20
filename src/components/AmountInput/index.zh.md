---
title: AmountInput 金额输入组件
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---

# AmountInput 金额输入组件

金额输入组件，支持货币选择、余额显示、精度控制等功能。

## 何时使用

- 需要输入金额时
- 需要选择不同货币类型时
- 需要显示可用余额时
- 需要控制小数精度时

## 代码演示

### 基础用法

<code src="./__fixtures__/basicUsage.tsx" />

### 货币选择功能

<code src="./__fixtures__/currencySelection.tsx" />

### 样式自定义

<code src="./__fixtures__/customStyles.tsx" />

### 输入控制

<code src="./__fixtures__/inputControl.tsx" />

### 布局位置

<code src="./__fixtures__/layoutPosition.tsx" />

### 高级功能

<code src="./__fixtures__/advancedFeatures.tsx" />

## API

### AmountInput

<API hideTitle src="./AmountInput.tsx"></API>

### Values

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| amount | 金额 | `string` | - |
| currency | 币种 | `string` | - |
| canUseAmount | 可用金额 | `number` | - |

## 注意事项

1. 请在APP上查看实际效果，web效果略有不同
2. 货币选项支持分组显示
3. 支持自定义图标，可以是URL字符串或React元素
4. 小数精度控制会影响输入和显示格式
5. 千分位分隔符和小数分隔符可以自定义
