---
title: Toast 轻提示
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 2
---

# Toast 轻提示

## 何时使用

1. 对用户的操作做出及时反馈
2. 提供成功、警告、错误、加载中等反馈信息
3. 可以顶部、中部、底部居中，不打断用户操作

---

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## 属性

| 属性名                 | 描述                                                                                  | 类型                      | 默认值        |
|---------------------|-------------------------------------------------------------------------------------|-------------------------|------------|
| type                | 提示类型，可选值为`'text'&#124;'loading'&#124;'success'&#124;'fail'&#124;'warn'&#124;'icon'` | string &#124; ReactNode | 'text'     |
| position            | 位置，可选值为`'top'&#124;'middle'&#124;'bottom'`                                          | string                  | middle     |
| message             | 文本内容(支持模版字符串\n换行)                                                                   | string                  | ''         |
| overlay             | 是否显示遮罩层                                                                             | boolean                 | false      |
| forbidPress         | 是否禁止背景点击                                                                            | boolean                 | false      |
| closeOnPress        | 是否在点击后关闭                                                                            | boolean                 | false      |
| closeOnPressOverlay | 是否在点击遮罩层后关闭                                                                         | boolean                 | false      |
| loadingType         | 加载图标类型, 可选值为 `'circular'&#124;'spinner'`                                            | string                  | 'circular' |
| duration            | 展示时长(ms)，值为0时，不会消失                                                                  | number                  | 2000       |
| icon                | 自定义图标                                                                               | ReactNode               | -          |
| onPressOverlay      | 点击遮罩层时触发,以下方法具体看popup组件                                                             | `() => void`            | -          |
| onOpen              | 打开弹出层时触发                                                                            | `() => void`            | -          |
| onOpened            | 打开弹出层且动画结束后触发                                                                       | `() => void`            | -          |
| onClose             | 关闭弹出层时触发                                                                            | `() => void`            | -          |
| onClosed            | 关闭弹出层且动画结束后触发                                                                       | `() => void`            | -          |
| onRequestClose      | 当点击返回按钮时触发 @support Android                                                         | `() => boolean`         | -          |

## 指令式API

- Toast.loading

- Toast.success

- Toast.fail

- Toast.warn

- Toast.remove(key)
需要获取到实例的key,才能通过key去关闭实例
```js
  const { key, close, setMessage } = Toast.loading({
    message: buildMsg(),
    forbidPress: true,
    duration: 0,
  });

  setTimeout(() => {
    Toast.remove(key);
  }, 0)
```

- Toast.removeAll

- Toast.setDefaultOptions(config)

- Toast.resetDefaultOptions

- toastInstance.close()
如果是同步关闭提示，使用 setTimeout 做一下延迟。
也可以通过 `Toast.remove(key) `关闭提示。

```js
const doCheck = () => {
  const { close } = Toast.loading({
    message: '检测中...',
    duration: 0,
    forbidPress: true,
  })

  // 遍历数据、非异步

  // ❎ 此时直接关闭不会有作用
  close()

  // ✅ loading 元素可能还没有创建，做一个延迟保障能移除对应的元素
  setTimeout(() => {
    close()
  }, 0)
}
```

