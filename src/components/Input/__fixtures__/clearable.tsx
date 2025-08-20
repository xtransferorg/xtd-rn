import React, { useState } from 'react';
import { Button, Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

const ClearableDemo = () => {
  const [value, setValue] = useState('');
  return (
    <Card>
      <Button onPress={() => setValue('1X986Y')}>设置订单编号为1X986Y</Button>
      <Field label="订单编号" requiredMark>
        <Input
          value={value}
          placeholder="请输入订单编号"
          clearTrigger="always"
          onChange={(value) => setValue(value)}
        />
      </Field>
      <Field label="请输入订单编号(禁用)" requiredMark>
        <Input value={value} defaultValue="1X986Y" disabled />
      </Field>
      <Field label="订单编号(自动获取焦点)" requiredMark showQuestionIcon>
        <Input
          value={value}
          placeholder="请输入订单编号"
          defaultValue="1X986Y"
          onChange={(value) => setValue(value)}
          autoFocus
        />
      </Field>
    </Card>
  );
};

export default ClearableDemo;
