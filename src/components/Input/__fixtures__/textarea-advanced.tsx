import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

const TextAreaAdvancedDemo = () => (
  <Card title="高级多行输入">
    <Field label="TextArea&prefix&suffix" requiredMark>
      <Input.TextArea
        rows={6}
        maxLength={500}
        placeholder="提示语提示语提示语提示语提示语提示语提示语提示语提示语提示语提示语提示语"
        defaultValue="start 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 默认填写的内容 end"
        showCount
        prefix={'prefix'}
        // eslint-disable-next-line react-native/no-inline-styles
        prefixStyle={{
          padding: 16,
          backgroundColor: 'orange',
          alignSelf: 'flex-start',
        }}
        suffix={'suffix'}
        // eslint-disable-next-line react-native/no-inline-styles
        suffixStyle={{
          padding: 16,
          height: 'auto',
          backgroundColor: 'pink',
          alignSelf: 'flex-end',
        }}
      />
    </Field>
  </Card>
);

export default TextAreaAdvancedDemo;
