---
title: DatePicker 选择器
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---

# DatePicker 选择器

日期选择器，支持单个日期选择和日期范围选择，提供多种选择模式和自定义配置选项。

## 何时使用

- 需要选择日期或时间时
- 需要限制日期选择范围时
- 需要选择日期范围时
- 需要自定义日期显示格式时

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 不同选择模式
<code src="./__fixtures__/differentModes.tsx" />

### 日期范围限制
<code src="./__fixtures__/dateRangeLimit.tsx" />

### 范围选择
<code src="./__fixtures__/rangeSelection.tsx" />

### 自定义配置
<code src="./__fixtures__/customConfiguration.tsx" />

## 属性

### DatePicker 单选方法

<API hideTitle src="../../core/date-picker/date-picker-single-method.tsx" />

### DatePicker.range 范围选择方法

<API hideTitle src="../../core/date-picker/date-picker-range-method.tsx" />

## 方法

### DatePicker(options)

显示日期选择器，返回 Promise。

### DatePicker.range(options)

显示日期范围选择器，返回 Promise。

## 选择模式

| 模式 | 说明 | 示例 |
| --- | --- | --- |
| Y | 年份 | 2024 |
| Y-M | 年月 | 2024-01 |
| Y-D | 年月日 | 2024-01-01 |
| M-D | 月日 | 01-01 |
| Y-h | 年份小时 | 2024年 12时 |
| D-m | 日期分钟 | 01日 30分 |
| h-m | 时分 | 12:30 |

## 注意事项

- 在不同语言环境下，日期选择器的显示顺序会有所不同
- 最小值和最大值的设置会影响可选择的日期范围
- 自定义标签渲染函数可以改变日期的显示格式
- 范围选择时，开始日期不能大于结束日期
