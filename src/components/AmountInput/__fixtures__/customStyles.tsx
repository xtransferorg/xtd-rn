import React, { useState } from 'react';
import { Field, Space, AmountInput, Values } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const styleOptions = [
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

const CustomStyles: React.FC = () => {
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

  return (
    <Space>
      <Card style={styles.section}>
        <Field label="自定义输入框样式">
          <AmountInput
            options={styleOptions}
            onChange={setValue1}
            value={value1}
            inputProps={{
              size: 'large',
              inputStyle: {
                fontSize: 18,
                color: '#1890ff',
                fontWeight: 'bold',
              },
            }}
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="自定义货币显示样式">
          <AmountInput
            options={styleOptions}
            onChange={setValue2}
            value={value2}
            currencyInputProps={{
              imageStyle: { width: 20, height: 20, borderRadius: 10 },
              textStyle: { fontSize: 16, color: '#52c41a', fontWeight: '600' },
              arrowProps: { fillColor: '#52c41a', size: 16 },
              placeholdStyle: { fontSize: 14, color: '#999' },
            }}
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="自定义容器样式">
          <AmountInput
            options={styleOptions}
            onChange={setValue3}
            value={value3}
            style={styles.customContainer}
            showBalance
            availableBalanceText="自定义余额文案"
            availableBalanceColon=": "
          />
        </Field>
      </Card>
    </Space>
  );
};

export default CustomStyles;
