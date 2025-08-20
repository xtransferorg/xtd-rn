import React, { useState } from 'react';
import { Field, Space, AmountInput, Values } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const basicOptions = [
  {
    label: 'USD',
    subLabel: '美元',
    contentLabel: '892,000.00',
    value: 'USD',
    balance: '892000',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'EUR',
    subLabel: '欧元',
    contentLabel: '648,000.00',
    value: 'EUR',
    balance: '648000.1',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'CNY',
    subLabel: '人民币',
    contentLabel: '36,000.00',
    value: 'CNY',
    balance: '36000.33',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
];

const BasicUsage: React.FC = () => {
  const [value, setValue] = useState<Values>({
    amount: '',
    currency: '',
    canUseAmount: 0,
  });

  const onChange = (val: Values) => {
    console.log('基础用法 onChange:', val);
    setValue(val);
  };

  return (
    <Space>
      <Card style={styles.section}>
        <Field label="基础金额输入" requiredMark>
          <AmountInput
            options={basicOptions}
            onChange={onChange}
            value={value}
            placeholder="请输入金额"
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="显示可用余额">
          <AmountInput
            options={basicOptions}
            onChange={onChange}
            value={value}
            showBalance
            showSellAll
            onSelectAll={(amount) => console.log('选择全部:', amount)}
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="禁用状态">
          <AmountInput
            options={basicOptions}
            onChange={onChange}
            value={value}
            disabled
          />
        </Field>
      </Card>
    </Space>
  );
};

export default BasicUsage;
