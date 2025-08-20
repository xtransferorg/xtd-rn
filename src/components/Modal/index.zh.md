---
title: Modal 遮罩
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Modal 遮罩

模态对话框，在浮层中显示，引导用户进行相关操作。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作
- 需要向用户展示重要信息或获取用户确认时
- 表单提交、状态提示、图文展示等场景

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 状态对话框
<code src="./__fixtures__/statusDialogs.tsx" />

### 表单对话框
<code src="./__fixtures__/formDialogs.tsx" />

### 图文对话框
<code src="./__fixtures__/imageDialogs.tsx" />

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" />

## API

### Modal

<API hideTitle src="./Modal.tsx" />

### Modal 方法

Modal 提供了一些静态方法，使用方式如下：

- `Modal.info(options)`
- `Modal.success(options)`
- `Modal.error(options)`
- `Modal.warning(options)`
- `Modal.confirm(options)`

#### options 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | - |
| message | 内容 | `ReactNode` | - |
| confirmButtonText | 确认按钮文字 | `string` | `'确定'` |
| cancelButtonText | 取消按钮文字 | `string` | `'取消'` |
| solidButton | 是否使用实心按钮样式 | `boolean` | `false` |
| buttonsDirection | 按钮排列方向 | `'row' \| 'column'` | `'row'` |
| beforeClose | 关闭前的回调函数 | `(action: string) => boolean \| Promise<boolean>` | - |
| onResponse | 操作完成后的回调 | `(action: string) => void` | - |

## 注意事项

- Modal 组件基于 Popup 组件实现，继承了 Popup 的所有属性
- 使用静态方法时，弹窗会自动管理显示状态
- 在表单场景中，建议设置 `closeOnPressOverlay={false}` 防止误操作
- 多个 Modal 可以嵌套使用，后打开的会覆盖先打开的
- `solidButton` 为 `true` 时，按钮样式会变为实心样式，适用于图文弹窗
- `marketingHeight` 用于营销类弹窗，会根据宽高比 3:4 计算高度
