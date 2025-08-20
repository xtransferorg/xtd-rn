import React, { useState } from 'react';
import { Field, Space, AmountInput, Values } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const controlOptions = [
  {
    label: 'USD',
    subLabel: '美元',
    value: 'USD',
    balance: '892000.123456',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'EUR',
    subLabel: '欧元',
    value: 'EUR',
    balance: '648000.987654',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
];

const InputControl: React.FC = () => {
  const [value1, setValue1] = useState<Values>({
    amount: '1234567.89',
    currency: 'USD',
    canUseAmount: 892000,
  });

  const [value2, setValue2] = useState<Values>({
    amount: '1000.12',
    currency: 'EUR',
    canUseAmount: 648000,
  });

  const [value3, setValue3] = useState<Values>({
    amount: '500.1234',
    currency: 'USD',
    canUseAmount: 892000,
  });

  return (
    <Space>
      <Card style={styles.section}>
        <Field label="自定义千分位和小数分隔符">
          <AmountInput
            options={controlOptions}
            onChange={setValue1}
            value={value1}
            inputProps={{
              thousandSeparator: '.',
              decimalSeparator: ',',
            }}
            showBalance
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="小数精度控制（2位）">
          <AmountInput
            options={controlOptions}
            onChange={setValue2}
            value={value2}
            precision={2}
            showBalance
            showSellAll
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="小数精度控制（4位）">
          <AmountInput
            options={controlOptions}
            onChange={setValue3}
            value={value3}
            precision={4}
            showBalance
            formatBalance={(balance) => `可用: ${balance}`}
          />
        </Field>
      </Card>
    </Space>
  );
};

export default InputControl;
