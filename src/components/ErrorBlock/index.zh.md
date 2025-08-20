---
title: ErrorBlock 错误块
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# ErrorBlock 错误块

用于页面和区块的异常状态展示。

## 何时使用

- 当页面发生异常时，用于引导用户进行下一步操作
- 当区块内容为空时，用于提示用户
- 当网络异常时，用于提示用户检查网络
- 当用户权限不足时，用于引导用户获取权限

## 组件特性

- **多种状态**：支持空状态、网络异常、404、权限不足等多种状态
- **灵活交互**：支持主按钮、次按钮和描述链接
- **自定义内容**：支持自定义图片、标题、描述和额外内容
- **全屏模式**：支持全屏展示，适用于页面级错误
- **小场景模式**：支持紧凑布局，适用于空间有限的场景
- **主题适配**：支持主题定制和样式覆盖

## 代码演示

### 基础用法
<code src="./__fixtures__/basicUsage.tsx" title="基础用法" />

### 状态类型
<code src="./__fixtures__/statusUsage.tsx" title="状态类型" />

### 交互功能
<code src="./__fixtures__/interactiveUsage.tsx" title="交互功能" />

### 自定义样式
<code src="./__fixtures__/customUsage.tsx" title="自定义样式" />

### 全屏模式
<code src="./__fixtures__/fullPageUsage.tsx" title="全屏模式" />

## API

<API hideTitle src="./errorBlock.tsx" />

### 状态类型

组件支持以下状态类型：

- `empty` - 空状态（默认）
- `notFound` - 页面不存在
- `networkError` - 网络异常
- `noAuth` - 无权限
- `noLogin` - 未登录
- `noData` - 无数据/搜索无结果
- `finished` - 已完成
- `systemUpgrade` - 系统升级中
- `systemCompatibility` - 系统兼容性问题
