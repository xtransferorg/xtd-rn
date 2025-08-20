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

- 需要在页面上方显示浮层内容时
- 分享功能，展示分享选项
- 表单输入，特别是需要键盘交互的场景
- 需要用户确认或选择的操作
- 展示详细信息或设置选项

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### API 调用方式
<code src="./__fixtures__/apiUsage.tsx" />

### 分享类浮层
<code src="./__fixtures__/shareLayer.tsx" />

### 表单浮层
<code src="./__fixtures__/formLayer.tsx" />

### 高级功能
<code src="./__fixtures__/advancedFeatures.tsx" />

### 键盘处理
<code src="./__fixtures__/keyboardHandling.tsx" />

## API

### 组件属性

<API src="./FloatingLayer.tsx" hideTitle></API>

### 静态方法

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| FloatingLayer.open | 打开浮层 | `(props: FloatingLayerProps) => { close: () => void }` | - |
| FloatingLayer.close | 关闭指定浮层 | `(key?: string) => void` | - |
| FloatingLayer.closeAll | 关闭所有浮层 | `() => void` | - |

## 注意事项

### 1. 原生模式下的返回处理
FloatingLayer开启useNative后，需处理android的侧滑/点击底部返回关闭特殊情况，添加onClose或者onClosed设置visible：

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

### 2. API 调用方式的限制

由于 API 调用方式基于 Portal 实现，存在以下限制：

- **不建议使用复杂输入组件**：如 `Input`、`TextInput` 等复杂表单组件可能存在无法获取Context的问题
- **适用场景**：更适合展示信息、简单交互、确认对话框等场景
- **状态管理**：API 调用的浮层状态由组件内部管理，无法直接访问外部状态
