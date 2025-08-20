import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

function ErrorMessageDemo() {
  return (
    <Card title="错误和提示状态" gap={0}>
      <Field
        label="错误"
        requiredMark
        errorMessage="这是一个错误提示"
        showErrorIcon={true}
      >
        <Input placeholder="请输入" />
      </Field>
      <Field
        label="提示"
        requiredMark
        message="这是一个提示信息"
        showErrorIcon={true}
      >
        <Input placeholder="请输入" />
      </Field>
    </Card>
  );
}

export default ErrorMessageDemo;
