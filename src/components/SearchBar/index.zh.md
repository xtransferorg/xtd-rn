---
title: SearchBar 搜索框
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---

# SearchBar 搜索框

带搜索的表头组件，支持多种配色主题和扩展内容。

## 何时使用

- 需要在页面顶部提供搜索功能时
- 需要结合导航栏使用的搜索场景
- 需要自定义搜索框样式和扩展功能时

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 配色主题
<code src="./__fixtures__/colorTheme.tsx" />

### 扩展内容
<code src="./__fixtures__/extraContent.tsx" />

### 样式自定义
<code src="./__fixtures__/customStyle.tsx" />

### 事件处理
<code src="./__fixtures__/eventHandling.tsx" />

## 属性

<API src="./SearchBar.tsx" hideTitle></API>

## 注意事项

1. SearchBar 基于 NavBar 组件实现，会自动处理顶部安全区域
2. 使用 `colorType="primary"` 时，建议扩展内容使用白色图标
3. 扩展内容建议使用 TouchableOpacity 包装以提供点击反馈
4. 自定义样式时注意与整体设计风格保持一致
