import React from 'react';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';

const AmountDemo = () => (
  <Card title="输入格式">
    <Field
      label="余额 (自定义 thousandSeparators)"
      message="币种/余额 823.00 CNY"
      showDividerLine
    >
      <Input
        formatter="thousandSeparators"
        placeholder="请输入金额(小数点后3位)"
        type="number"
        precision={3}
        onChange={(a) => console.log(a)}
      />
    </Field>
    <Field label="千分符">
      <Input
        type="number"
        formatter="thousandSeparators"
        bizInputType="amount"
        placeholder="请输入"
      />
    </Field>
    <Field label="最大长度11">
      <Input type="number" maxLength={11} placeholder="请输入" />
    </Field>
    <Field label="文字大小自适应">
      <Input
        type="number"
        bizInputType="amount"
        textInputLengthRange={[5, 10]}
        fontSizeRange={[24, 12]}
        placeholder="请输入"
      />
    </Field>
  </Card>
);

export default AmountDemo;
