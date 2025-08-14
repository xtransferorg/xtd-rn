import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

const ClearableDemo = () => (
  <Card>
    <Field label="订单编号" requiredMark>
      <Input placeholder="请输入订单编号" clearTrigger="always" />
    </Field>
    <Field label="请输入订单编号(禁用)" requiredMark>
      <Input defaultValue="1X986Y" disabled />
    </Field>
    <Field label="订单编号(自动获取焦点)" requiredMark showQuestionIcon>
      <Input placeholder="请输入订单编号" defaultValue="1X986Y" autoFocus />
    </Field>
  </Card>
);

export default ClearableDemo;
