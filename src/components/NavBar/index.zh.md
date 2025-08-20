---
title: NavBar 导航栏组件
nav:
  title: 组件
  path: /component
group:
  title: 导航组件
  path: /nav
  order: 2
---

# NavBar 导航栏组件

## 何时使用

自定义页面导航栏时使用

---

## 代码演示

### 基本用法
<code src="./__fixtures__/basicUsage.tsx" />

### 多个右侧按钮
<code src="./__fixtures__/multipleRightButtons.tsx" />

### 自定义内容
<code src="./__fixtures__/customContent.tsx" />

### 自定义样式
<code src="./__fixtures__/customStyle.tsx" />

### 无返回按钮和自定义导航栏
<code src="./__fixtures__/noBackArrowAndCustom.tsx" />

## 属性

<API hideTitle src="./NavBar.tsx" />

## `RightIcon`

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | Icon图标组件 | `Icon` | - |
| onPress | 图标点击事件 | `function` | - |
| label | 图标功能说明文本 | `string` | - |

## `Icon`

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | Icon颜色 | `string` | - |
| size | Icon尺寸 | `string` | - |
| fillColor | Icon填充颜色 | `string` | - |

