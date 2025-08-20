import React, { useState } from 'react';
import {
  Field,
  Input,
  Uploader,
  AutoComplete,
  AutoCompleteOption,
} from '@xrnjs/ui';
import { IconMARobot1 } from '../../../icons/index';
import Card from '_global/Card';

function BasicUsageDemo() {
  const [options1, setOptions1] = useState<AutoCompleteOption[]>([]);
  return (
    <Card title="基本用法" gap={0} style={{ zIndex: 1 }} noSpace>
      <Field label="标题" showQuestionIcon>
        <Input placeholder="请输入" />
      </Field>
      <Field label="标题" requiredMark showQuestionIcon>
        <Input placeholder="请输入" />
      </Field>
      <Field
        label={<IconMARobot1 size={26} style={{ marginRight: 4 }} />}
        labelContainerStyle={{ alignItems: 'center' }}
      >
        <Input placeholder="请输入(label支持自定义node)" />
      </Field>
      <Field
        label="标题"
        requiredMark
        errorMessage="错误提示内容"
        showErrorIcon
        style={{ zIndex: 10 }}
      >
        <AutoComplete
          allowClear
          // open
          options={options1}
          onChange={(v) => {
            console.log('v===', v); // 最后一次就是最终结果值
            if (!v) {
              return setOptions1([]);
            }
            const arr: string[] = [];
            arr.length = 9;
            arr.fill('1');
            const ops = arr.map((_, i) => {
              return { value: v.repeat(i + 1) };
            });
            setOptions1(ops);
          }}
          onSelect={(value, option) => {
            console.log('onSelect===', { value, option });
          }}
          onVisibleChange={(isOpen) => {
            console.log('onVisibleChange~', isOpen);
          }}
          onFocus={() => {
            console.log('onFocus~');
          }}
          onBlur={() => {
            console.log('onBlur~');
          }}
          onClear={() => console.log('onClear~')}
        />
      </Field>
      <Field label="样例标签1" showDividerLine message="请输入信息">
        <Input placeholder="请输入" />
      </Field>
      <Field label="样例标签2" requiredMark layout="horizontal">
        <Input placeholder="请输入" />
      </Field>
      <Field label="请上传证件" requiredMark>
        <Uploader useContainerWidth />
      </Field>
    </Card>
  );
}

export default BasicUsageDemo;
