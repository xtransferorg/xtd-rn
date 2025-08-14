import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

const SizeDemo = () => (
  <Card title="大小">
    <Field label="Small">
      <Input
        placeholder="请输入订单编号 提示信息过长提示信息过长提示信息过长提示信息过长"
        size="small"
        selectionColor={'red'}
      />
    </Field>
    <Field label="Default">
      <Input placeholder="请输入订单编号" size="default" />
    </Field>
    <Field label="Large">
      <Input placeholder="请输入订单编号" size="large" />
    </Field>
    <Field label="Max">
      <Input placeholder="请输入订单编号" size="max" />
    </Field>
  </Card>
);

export default SizeDemo;
