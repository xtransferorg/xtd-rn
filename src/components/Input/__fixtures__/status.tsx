import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

const StatusDemo = () => (
  <Card title="不同状态">
    <Field label="错误样式">
      <Input placeholder="请输入金额" status="error" />
    </Field>
    <Field label="禁用样式">
      <Input placeholder="请输入金额" disabled />
    </Field>
    <Field label="禁用样式&无提示">
      <Input disabled />
    </Field>
    <Field label="订单编号" requiredMark message="提示语">
      <Input placeholder="不可编辑不可编辑" value="只读" readOnly />
    </Field>
    <Field label="loading">
      <Input
        loading
        placeholder="loading状态placeholder不显示"
        value="loading状态value不显示"
      />
    </Field>
  </Card>
);

export default StatusDemo;
