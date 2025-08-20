import React, { useState } from 'react';
import { Field, Space, AmountInput, Values } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { IconPPBrazil1 } from '../../../icons/index';

const currencyOptions = [
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
    label: 'GBP',
    subLabel: '英镑',
    contentLabel: '7,000.00',
    value: 'GBP',
    balance: '7000',
    disabled: true,
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'BRL',
    subLabel: '巴西雷亚尔',
    contentLabel: '9,000.00',
    value: 'BRL',
    balance: '9000',
    prefixIcon: (
      <IconPPBrazil1 size={32} style={{ borderRadius: 16, marginRight: 10 }} />
    ),
  },
];

const groupOptions = [
  {
    label: '主要货币',
    children: currencyOptions.slice(0, 2),
  },
  {
    label: '其他货币',
    children: currencyOptions.slice(2),
  },
];

const CurrencySelection: React.FC = () => {
  const [value1, setValue1] = useState<Values>({
    amount: '1000',
    currency: 'USD',
    canUseAmount: 892000,
  });

  const [value2, setValue2] = useState<Values>({
    amount: '',
    currency: '',
    canUseAmount: 0,
  });

  const [value3, setValue3] = useState<Values>({
    amount: '500',
    currency: '',
    canUseAmount: 0,
  });

  return (
    <Space>
      <Card style={styles.section}>
        <Field label="分组货币选择" requiredMark>
          <AmountInput
            options={groupOptions}
            onChange={setValue1}
            value={value1}
            onChangeSelect={(currency) => console.log('选择货币:', currency)}
            selectTitle="选择货币类型"
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="隐藏货币选择">
          <AmountInput
            options={currencyOptions}
            onChange={setValue2}
            value={value2}
            showSelectCurrency={false}
            showBalance
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="切换选项不清空数值">
          <AmountInput
            options={currencyOptions}
            onChange={setValue3}
            value={value3}
            autoClear={false}
            onChangeSelect={(currency) => console.log('货币切换:', currency)}
          />
        </Field>
      </Card>
    </Space>
  );
};

export default CurrencySelection;
