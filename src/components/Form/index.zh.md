---
title: Form 表单
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 2
---

基于 react-hook-form 的表单组件体系，提供统一的表单验证、错误提示和布局能力。

## 何时使用

- 用于数据录入、校验，支持输入框、选择器、单选框、多选框等类型
- 需要对输入的数据类型进行校验时

## API

### Form

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 表单实例，通过 Form.useForm() 创建 | `UseFormReturn` | - |

### Form.useForm

创建表单实例的 Hook，基于 react-hook-form 的 useForm。

```tsx | pure
const form = Form.useForm({
  defaultValues: { username: '' },
  resolver: yupResolver(schema),
  ruleSchema: schema,
});
```

### Form.Item

表单项容器，基于 Field 组件实现。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | `string` | - |
| label | 标签文本 | `React.ReactNode` | - |
| rules | 校验规则 | `RegisterOptions` | - |
| requiredMark | 是否显示必填标记，不传时自动从 ruleSchema 推断 | `boolean` | - |
| customError | 自定义错误信息 | `string` | - |

更多属性请参考 [Field 组件](field)。

### Form.Input

表单输入框，是 Form.Item 和 Input 的组合。

继承 Form.Item 和 Input 的所有属性。

## 基本用法

### 组合用法（推荐）

```tsx | pure
import React from 'react';
import { View, Button, Form, Input } from 'react-native';

const { yupResolver, yup } = Form.validators

const schema = yup.object({
  username: yup.string().required('用户名是必填项'),
  email: yup.string().email('请输入有效邮箱').required('邮箱是必填项'),
});

const Demo = () => {
  const form = Form.useForm({
    defaultValues: { username: '', email: '' },
    resolver: yupResolver(schema),
    ruleSchema: schema,
  });

  const onSubmit = (data) => {
    console.log('表单数据:', data);
  };

  return (
    <View>
      <Form.FormProvider {...form}>
        <Form.Item name="username" label="用户名">
          <Input placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item name="email" label="邮箱">
          <Input placeholder="请输入邮箱" />
        </Form.Item>

        <Button
          title="提交"
          onPress={form.handleSubmit(onSubmit)}
        />
      </Form.FormProvider>
    </View>
  );
};
```

### 快捷用法

```tsx | pure
import React from 'react';
import { View, Button } from 'react-native';
import Form from '@xrnjs/ui';

const Demo = () => {
  const form = Form.useForm({
    defaultValues: { username: '', email: '' },
  });

  return (
    <View>
      <Form.FormProvider {...form}>
        <Form.Input
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          rules={{ required: '用户名是必填项' }}
        />

        <Form.Input
          name="email"
          label="邮箱"
          placeholder="请输入邮箱"
          rules={{
            required: '邮箱是必填项',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '请输入有效邮箱'
            }
          }}
        />

        <Button
          title="提交"
          onPress={form.handleSubmit((data) => console.log(data))}
        />
      </Form.FormProvider>
    </View>
  );
};
```

## 表单验证

### 使用 yup 验证

```tsx | pure
import { Form } from 'react-native';

const { yupResolver, yup } = Form.validators

const schema = yup.object({
  username: yup.string()
    .min(3, '用户名至少3位')
    .required('用户名是必填项'),
  age: yup.number()
    .min(18, '年龄不能小于18岁')
    .required('年龄是必填项'),
});

const form = Form.useForm({
  resolver: yupResolver(schema),
  ruleSchema: schema, // 用于自动推断必填状态
});
```

### 使用内置验证规则

```tsx | pure
<Form.Input
  name="email"
  label="邮箱"
  rules={{
    required: '邮箱是必填项',
    pattern: {
      value: /^\S+@\S+$/i,
      message: '请输入有效邮箱'
    }
  }}
/>
```

## 自动必填推断

当使用 `ruleSchema` 时，Form.Item 会自动推断字段是否为必填：

```tsx | pure
const schema = yup.object({
  username: yup.string().required('必填项'),
  nickname: yup.string(), // 可选项
});

const form = Form.useForm({
  resolver: yupResolver(schema),
  ruleSchema: schema,
});

// username 会自动显示必填标记，nickname 显示"选填"
<Form.Item name="username" label="用户名">
  <Input />
</Form.Item>
<Form.Item name="nickname" label="昵称">
  <Input />
</Form.Item>
```

## 主要方法

### Form.useForm

基于 react-hook-form 的 useForm，额外支持 ruleSchema 参数。

### Form.useFormContext

获取表单上下文，可访问表单状态和方法。

### Form.Controller

暴露 react-hook-form 的 Controller 组件，用于自定义表单组件。

### Form.FormProvider

表单上下文提供者，等同于 react-hook-form 的 FormProvider。

## 扩展其他组件

其他表单组件（如 Select、DatePicker 等）可以按照相同方式挂载到 Form 上：

## 高阶组件

Form 提供了高阶组件工具，可以快速将任意组件转换为表单组件。

### withFormItem

将任意组件包装为表单组件：

```tsx | pure
import { Form, Select } from '@xrnjs/ui';

const { withFormItem } = Form;

// 创建表单选择器
const FormSelect = withFormItem(Select, 'FormSelect');

// 使用
<FormSelect
  name="category"
  label="分类"
  options={[
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
  ]}
  rules={{ required: '请选择分类' }}
/>
```

### createFormComponent

便捷的创建函数：

```tsx | pure
import { Form, DatePicker } from '@xrnjs/ui';

const { createFormComponent } = Form;

const FormDatePicker = createFormComponent(DatePicker, 'FormDatePicker');
```

### createFormComponents

批量创建表单组件：

```tsx | pure
import { Form, Select, DatePicker, Switch } from '@xrnjs/ui';
const { createFormComponent } = Form;

const {
  Select: FormSelect,
  DatePicker: FormDatePicker,
  Switch: FormSwitch,
} = createFormComponents({
  Select,
  DatePicker,
  Switch,
});
```

## 验证器

Form 集成了常用的验证库：

### 使用 yup

```tsx | pure
import { Form } from '@xrnjs/ui';

const { validators } = Form;
const { yup, yupResolver } = validators;

const schema = yup.object({
  username: yup.string().required('用户名必填'),
  age: yup.number().min(18, '年龄不能小于18岁'),
});

const form = Form.useForm({
  resolver: yupResolver(schema),
  ruleSchema: schema,
});
```
