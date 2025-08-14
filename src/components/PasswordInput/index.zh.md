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
## 代码演示

<code src="./__fixtures__/basic.tsx" />

## 属性

继承于Input的属性[InputProps](input)，下面是 `PasswordInput` 特有的属性。

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showSecureControl | 是否显示眼睛控制按钮 | `boolean` | `true` |
| secureTextEntry | 安全输入框的状态 | `boolean` | - |
| defaultSecureTextEntry | 默认是否显示密码输入框 | `boolean` | `true` |
| eyeSize | 眼睛控制按钮的大小 | `number` | `24` |
| eyeColor | 眼睛控制按钮的颜色 | `string` | `#222222` |
| eyeStyle | 眼睛控制按钮的样式 | `React.CSSProperties` | - |
| onChangeSecureTextEntry | 状态（安全）变化时的回调 | `(secure: boolean) => void;` | - |

