import React, { useState } from 'react';
import { Field, Space, AmountInput, Values } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const layoutOptions = [
  {
    label: 'USD',
    subLabel: '美元',
    value: 'USD',
    balance: '892000',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'EUR',
    subLabel: '欧元',
    value: 'EUR',
    balance: '648000',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
];

const LayoutPosition: React.FC = () => {
  const [value1, setValue1] = useState<Values>({
    amount: '1000',
    currency: 'USD',
    canUseAmount: 892000,
  });

  const [value2, setValue2] = useState<Values>({
    amount: '500',
    currency: 'EUR',
    canUseAmount: 648000,
  });

  const [value3, setValue3] = useState<Values>({
    amount: '',
    currency: '',
    canUseAmount: 0,
  });

  const [value4, setValue4] = useState<Values>({
    amount: '2000',
    currency: 'USD',
    canUseAmount: 892000,
  });

  return (
    <Space>
      <Card style={styles.section}>
        <Field label="货币选择在前缀位置（默认）">
          <AmountInput
            options={layoutOptions}
            onChange={setValue1}
            value={value1}
            selectPosition="prefix"
            showBalance
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="货币选择在后缀位置">
          <AmountInput
            options={layoutOptions}
            onChange={setValue2}
            value={value2}
            selectPosition="suffix"
            showBalance
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="后缀位置 + 加载状态">
          <AmountInput
            options={layoutOptions}
            onChange={setValue3}
            value={value3}
            selectPosition="suffix"
            inputProps={{
              loading: true,
              placeholder: '加载中...',
            }}
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="后缀位置 + 错误状态">
          <AmountInput
            options={layoutOptions}
            onChange={setValue4}
            value={value4}
            selectPosition="suffix"
            inputProps={{
              status: 'error',
            }}
            showBalance
          />
        </Field>
      </Card>
    </Space>
  );
};

export default LayoutPosition;
