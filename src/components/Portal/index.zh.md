---
title: Portal 传送门
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 2
---

# Portal 传送门

## 组件使用方式

```tsx | pure
import React from 'react'
import { Text } from 'react-native'
import { Portal } from '@xrnjs/ui'

const SomeView = () => {
  // SomeView 组件销毁时自动移除动态渲染绑定
  // Portal 内部的组件在根节点渲染
  return (
    <Portal>
      <Text>在 Provider 组件渲染</Text>
    </Portal>
  )
}
```

## 函数使用方式

```tsx | pure
import React from 'react'
import { Text } from 'react-native'
import { Portal } from '@xrnjs/ui'

// 业务这边设置当前“moduleName”即可
const tag = 'current_moudule_name'
// 添加到根节点渲染
// tag 为可选参数 主要解决同一bundle中多Moudle同时响应的情况ModuleA => ModuleB ，ModuleB中Portal.add的事件被ModuleA也监听到，导致加载多次，
// 通过tag来告知谁来处理
// Provider中新增portalTag设置，在我们core包中设置Provider的portalTag为当前MouduleName，顾不用业务特别设置，
// 非我们Moudle需外部手动设置Provider的portalTag，正常我们业务无需考虑
const key = Portal.add(<Text>在 Provider 组件渲染</Text>, tag)

// 移除渲染结果
Portal.remove(key, tag)
```
## 属性

<API hideTitle src="./index.ts"></API>
