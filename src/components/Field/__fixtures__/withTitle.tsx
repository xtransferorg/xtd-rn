import React from 'react';
import { Field, Input, Toast } from '@xrnjs/ui';
import Card from '_global/Card';

function WithTitleDemo() {
  const { Title } = Field;

  return (
    <Card title="带分组标题" gap={0}>
      <Title label="分组标题" />
      <Field
        label="标题"
        requiredMark
        showQuestionIcon
        onClickQuestionIcon={() => {
          Toast({
            position: 'top',
            message: 'Hi~ ',
          });
        }}
      >
        <Input placeholder="请输入" />
      </Field>
      <Field
        label="标题过长问题验证 标题过长问题验证 标题过长问题验证 标题过长问题验证 标题过长问题验证 标题过长问题验证"
        showQuestionIcon
      >
        <Input placeholder="请输入" />
      </Field>

      <Title label="分组标题" style={{ marginTop: 32 }} />
      <Field label="标题" requiredMark>
        <Input placeholder="请输入" />
      </Field>
    </Card>
  );
}

export default WithTitleDemo;
