---
title: Filter 筛选组件
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Filter 筛选组件

## 何时使用
- 需要一组复杂筛选弹窗时


## 代码使用
<code src="./__fixtures__/index.tsx"/>

## 属性
## Filter

<API src="./Filter.tsx" hideTitle />

## Filter.Item

<!-- <API src="./FilterItem.tsx" hideTitle /> dumi bug -->
| 属性名               | 描述                             | 类型                    | 默认值        |
|---------------------|---------------------------------|-------------------------|------------|
| placeholder         | 筛选项提示文案                     | string                  |        -- |
| itemLabel           | 筛选激活时文案                     | string                  |        -- |
| ref                 | 可使用ref.current.close()关闭浮层  | ReactRef               |        -- |
| children            |  浮层内容                         | ReactNode             | --         |
