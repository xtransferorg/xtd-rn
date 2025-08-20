import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';
import { IconCPEmail1 } from '../../../icons/index';
import { Text } from 'react-native';

function CustomStyleDemo() {
  return (
    <Card title="样式自定义" gap={0} style={{ paddingBottom: 100 }}>
      <Field
        label="电子邮件"
        requiredMark
        showQuestionIcon
        prefix={<Text>[</Text>}
        suffix={<Text>]</Text>}
        icon={<IconCPEmail1 />}
      >
        <Input placeholder="请输入" />
      </Field>
      <Field
        label="错误和提示过长情况"
        containerStyle={{ paddingTop: 24 }}
        requiredMark
        errorMessage="错误提示 错误提示信息过长问题验证 错误提示信息过长问题验证 错误提示信息过长问题验证"
        message="提示 提示信息过长问题验证 提示信息过长问题验证 提示信息过长问题验证"
        messageWrapperStyle={{ paddingTop: 4 }}
        showErrorIcon={true}
      >
        <Input placeholder="请输入" />
      </Field>
    </Card>
  );
}

export default CustomStyleDemo;
