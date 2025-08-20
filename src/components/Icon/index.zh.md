---
title: Icon 图标
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# React Icon 图标

## 改变颜色

改变颜色可以前往app查看，文档暂时不支持修改

<code src="./__fixtures__/color.tsx" />

下面展示的是图标的默认状态，因为背后使用的原生能力，所以浏览器无法预览修改颜色后的效果，可以前往手机app查看真实效果（点击即可拷贝）

```tsx | pure
/**
 * inline: true
 */
const React = require('react')
const { View, Text } = require('react-native')
const { devDependencies } = require('../../../package.json')
export default () => {
  return <View>
    <Text style={{fontSize: 24, fontWeight: 500}}>图标列表 <Badge>v{devDependencies['@xt/react-icon']}</Badge></Text>
  </View>
}
```

## 预览
<code src="./__fixtures__/preview.tsx" />

## 属性

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 大小 | `number` | - |
| fillColor | 填充色 | `string` | - |

