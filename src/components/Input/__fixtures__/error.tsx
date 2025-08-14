import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

const ErrorDemo = () => (
  <Card>
    <Field
      label="订单编号"
      requiredMark
      error
      showErrorIcon={false}
      message="报错提醒"
    >
      <Input placeholder="请输入订单编号" />
    </Field>
  </Card>
);

export default ErrorDemo;
