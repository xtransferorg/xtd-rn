---
title: Filter 筛选组件
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Filter 筛选组件

## 何时使用

- 需要对列表数据进行筛选时
- 需要多个筛选条件组合使用时
- 需要在有限空间内展示复杂筛选选项时
- 需要支持搜索、多选、单选等多种筛选方式时

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" title="基础筛选功能，展示等分布局和等距布局"/>

### 样式和交互
<code src="./__fixtures__/styleAndInteraction.tsx" title="自定义样式、图标、交互控制等"/>

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" title="搜索、自定义面板、徽章、树形结构等高级功能"/>

### 弹窗筛选
<code src="./__fixtures__/popupFilter.tsx" title="复选框、单选等弹窗筛选类型"/>

### 弹窗筛选工具
<code src="./__fixtures__/use-popup-filter.tsx" title="使用 usePopupFilter Hook 实现弹窗筛选"/>

## API

### Filter

Filter 组件必须搭配 Filter.Item 使用，用于提供筛选容器和布局控制。

| 属性名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| filterLayoutType | 布局类型 | `FilterLayoutType.EquallyDivide` \| `FilterLayoutType.Equidistance` | `FilterLayoutType.EquallyDivide` |
| numberOfLines | 文本行数限制 | number | 1 |
| activeColor | 激活状态颜色 | string | -- |
| direction | 箭头默认朝向 | `'up'` \| `'down'` | `'down'` |
| duration | 动画时长（秒） | number | -- |
| zIndex | 菜单栏 z-index 层级 | number | 10 |
| closeOnPressOutside | 是否在点击外部元素后关闭菜单 | boolean | true |
| iconStyle | 图标样式 | StyleProp\<ViewStyle\> | -- |
| titleStyle | 标题样式 | StyleProp\<ViewStyle\> | -- |
| titleTextStyle | 标题文案样式 | StyleProp\<TextStyle\> | -- |
| style | 容器样式 | StyleProp\<ViewStyle\> | -- |

### Filter.Item

Filter.Item 是筛选项组件，提供具体的筛选功能。

| 属性名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| placeholder | 筛选项提示文案 | string | -- |
| itemLabel | 筛选激活时文案 | string | -- |
| options | 选项数组 | DropdownItemOption\<T\>[] | -- |
| value | 当前选中的选项值 | T | -- |
| defaultValue | 默认值 | T | -- |
| onChange | 点击选项导致 value 变化时触发 | (v: T, d: DropdownItemOption\<T\>) => void | -- |
| loading | 候选项加载中 | boolean | false |
| search | 是否支持搜索 | boolean | false |
| onSearch | 搜索回调 | (keyword: string) => void | -- |
| disabled | 是否禁用菜单 | boolean | false |
| customPanelContent | 自定义展开面板内容 | ReactNode | -- |
| onPanelOpen | 当打开面板时触发 | () => void | -- |
| onPanelClosed | 当关闭面板后触发 | () => void | -- |
| icon | 自定义图标 | (active: boolean) => ReactNode | -- |
| arrowIconColor | 图标未选中态颜色 | string | -- |
| arrowIconActiveColor | 图标激活态颜色 | string | -- |
| iconSize | 图标大小 | number | -- |
| numberOfLines | 标题行数 | number | -- |
| cusTextStyle | 标题样式 | StyleProp\<TextStyle\> | -- |
| textStyle | 标题文案样式 | StyleProp\<TextStyle\> | -- |
| textActiveStyle | 激活标题文案样式 | StyleProp\<TextStyle\> | -- |
| useNative | 是否使用原生弹窗 | boolean | false |
| overlay | 遮罩配置 | object | -- |
| cancellable | 是否可取消 | boolean | -- |
| duration | 动画时长（秒） | number | -- |
| zIndex | 菜单栏 z-index 层级 | number | 10 |
| closeOnPressOutside | 是否在点击外部元素后关闭菜单 | boolean | true |
| ref | 可使用 ref.current.close() 关闭浮层 | Ref\<ItemRef\> | -- |

### DropdownItemOption

| 属性名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| label | 文字 | string | -- |
| value | 标识符 | T | -- |
| badge | 徽章 | number \| string \| boolean | -- |
| children | 子选项（树形结构） | DropdownItemOption\<T\>[] | -- |


### ItemRef

| 方法名 | 描述 | 类型 |
|--------|------|------|
| close | 关闭面板 | () => void |

## 注意事项

1. **组件配套使用**：Filter 组件必须搭配 Filter.Item 使用，不能单独使用
2. **布局选择**：等分布局适合筛选项数量固定的场景，等距布局适合筛选项数量不固定的场景
3. **性能优化**：当选项数量较多时，建议使用搜索功能或分页加载
4. **交互体验**：建议为重要的筛选操作提供重置和确定按钮
5. **样式一致性**：建议在同一页面中保持筛选组件的样式风格一致
6. **无障碍访问**：确保筛选项有合适的 placeholder 和 itemLabel
7. **移动端适配**：在移动端使用时注意面板内容的高度和滚动体验
