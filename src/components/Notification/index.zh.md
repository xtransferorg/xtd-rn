---
title: Notification 通知
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Notification 通知

全局展示通知提醒信息，在系统顶部显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 何时使用

- 系统主动推送重要的全局通知信息
- 需要告知用户某个操作的处理结果
- 需要显示不会打断用户操作的提示信息
- 需要在页面顶部显示临时性的反馈信息

## 设计原则

- **非阻断性**：不会阻断用户的当前操作流程
- **层次清晰**：通过不同的状态类型传达信息的重要程度
- **自动消失**：默认会自动消失，减少用户的操作负担
- **位置固定**：始终在页面顶部显示，保持一致的用户体验

---

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" />

### 静态方法调用
<code src="./__fixtures__/staticUsage.tsx" />

### 配置选项
<code src="./__fixtures__/configUsage.tsx" />

### 交互示例
<code src="./__fixtures__/interactiveUsage.tsx" />

### 样式自定义
<code src="./__fixtures__/styleUsage.tsx" />

## API
<API hideTitle src="./Notification.tsx" />
