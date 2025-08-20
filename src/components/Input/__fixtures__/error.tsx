import React, { useState } from 'react';
import { Field, Input, Switch } from '@xrnjs/ui';
import Card from '_global/Card';

const ErrorDemo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Card>
      <Field
        label="错误提示"
        requiredMark
        error
        showErrorIcon={checked}
        message="报错提醒"
      >
        <Input placeholder="请输入订单编号" />
      </Field>
      <Switch
        value={checked}
        defaultValue={true}
        onChange={(v) => setChecked(v)}
      />
    </Card>
  );
};

export default ErrorDemo;
