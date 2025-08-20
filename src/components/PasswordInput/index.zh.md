---
title: PasswordInput 密码输入框
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---

# PasswordInput 密码输入框

基于 Input 组件封装的密码输入框，提供密码显示/隐藏切换功能，支持自定义样式和受控状态。

## 何时使用

- 需要输入密码或其他敏感信息时
- 需要提供密码显示/隐藏切换功能时
- 需要实现密码强度验证时

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 控制配置
<code src="./__fixtures__/controlUsage.tsx" />

### 自定义样式
<code src="./__fixtures__/styleUsage.tsx" />

### 受控状态
<code src="./__fixtures__/controlledUsage.tsx" />

### 密码验证
<code src="./__fixtures__/validationUsage.tsx" />

## API

### PasswordInput

继承 Input 组件的所有属性，以下是 PasswordInput 特有的属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showSecureControl | 是否显示眼睛控制按钮 | `boolean` | `true` |
| secureTextEntry | 是否为安全文本输入（受控） | `boolean` | - |
| defaultSecureTextEntry | 默认是否为安全文本输入 | `boolean` | `true` |
| eyeSize | 眼睛图标的大小 | `number` | `24` |
| eyeColor | 眼睛图标的颜色 | `string` | `#666666` |
| eyeStyle | 眼睛图标的自定义样式 | `ViewStyle` | - |
| onChangeSecureTextEntry | 安全状态变化时的回调 | `(secure: boolean) => void` | - |

### 继承属性

PasswordInput 继承了 Input 组件的所有属性，包括但不限于：

- `value` / `defaultValue` - 输入框的值
- `placeholder` - 占位符文本
- `disabled` - 是否禁用
- `allowClear` - 是否显示清除按钮
- `onChange` - 值变化时的回调
- `onFocus` / `onBlur` - 焦点事件回调
- 更多属性请参考 [InputProps](input#属性)
