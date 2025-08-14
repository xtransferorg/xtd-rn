---
title: FloatingLayer 遮罩层
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---
# FloatingLayer 遮罩层

## 何时使用

- 唤起底部浮层弹窗

## 代码使用

<code src="./__fixtures__/index.tsx" />

## 属性

<API src="./FloatingLayer.tsx" hideTitle></API>

## 注意事项
### 1. FloatingLayer开启useNative后，需处理android的侧滑/点击底部返回关闭特殊情况，添加onClose或者onClosed设置visible, 如下：
```tsx | pure
<FloatingLayer
  visible={visible}
  useNative
  onClose={() => {
    // useNative开启 处理android的返回关闭时候改变状态
    setVisible(false);
  }}
>
</FloatingLayer>
```

