---
title: Select 选择组件
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Select 选择组件

## 何时使用
- 需要从多个选项中选择一个或多个值时
- 选项较多，需要节省页面空间时
- 需要提供搜索功能快速定位选项时
- 需要对选项进行分组展示时

## 代码示例

### 基础用法
<code src="./__fixtures__/basicRadio.tsx" title="基础单选" description="最基本的单选功能，支持禁用选项和自定义显示内容" />

### 多选功能
<code src="./__fixtures__/multipleSelect.tsx" title="多选示例" description="支持多选，可配置标签关闭、禁用状态和错误状态" />

### 分组选择
<code src="./__fixtures__/groupSelect.tsx" title="分组选择" description="将选项按分组展示，支持跨分组多选" />

### 搜索功能
<code src="./__fixtures__/searchSelect.tsx" title="搜索功能" description="支持搜索过滤选项，可自定义搜索逻辑" />

### 跳转类型
<code src="./__fixtures__/redirectSelect.tsx" title="跳转类型" description="点击选项立即选中并关闭，适用于快速选择场景" />

### 自定义样式
<code src="./__fixtures__/customStyleSelect.tsx" title="自定义样式" description="自定义选项样式、底部区域和输入框样式" />

### 不同尺寸
<code src="./__fixtures__/sizeVariants.tsx" title="不同尺寸" description="提供大、中、小三种尺寸的输入框" />

### 空数据状态
<code src="./__fixtures__/emptyState.tsx" title="空数据状态" description="处理无数据和搜索无结果的状态" />

## API

### Select

<API hideTitle src="./Select.tsx"></API>

### Option

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项值 | `string` | - |
| label | 选项显示文本 | `ReactNode` | - |
| labelTextStyle | label样式 | `StyleProp<TextStyle>` | - |
| subLabel | 选项子文本 | `ReactNode` | - |
| subLabelTextStyle | subLabel样式 | `StyleProp<TextStyle>` | - |
| contentLabel | 选项内容文本 | `ReactNode` | - |
| contentLabelTextStyle | contentLabel样式 | `StyleProp<TextStyle>` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| labelPosition | 标签位置 | `'left' \| 'right'` | - |
| prefixIcon | 自定义图标（新增支持svg格式，需uri以svg结尾） | `string \| ReactNode` | - |

### SelectInput

<API hideTitle src="./SelectInput.tsx"></API>