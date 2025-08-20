import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

const TextAreaDemo = () => (
  <Card title="多行文本输入">
    <Field label="订单编号" requiredMark>
      <Input.TextArea
        maxLength={100}
        placeholder="提示语 提示语信息过长提示语信息过长提示语信息过长提示语信息过长提示语信息过长提示语信息过长提示语信息过长提示语信息过长"
        showCount
      />
    </Field>
    <Field label="自动撑开高度" requiredMark>
      <Input.TextArea rows={1} autoSize placeholder="提示语提示语提" />
    </Field>
  </Card>
);

export default TextAreaDemo;
