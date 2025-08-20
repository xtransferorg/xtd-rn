import React, { useState } from 'react';
import { Field, Space, AmountInput, Values } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const advancedOptions = [
  {
    label: 'USD',
    subLabel: '美元',
    contentLabel: '892,000.00',
    value: 'USD',
    balance: '892000.123',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'EUR',
    subLabel: '欧元',
    contentLabel: '648,000.00',
    value: 'EUR',
    balance: '648000.456',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'CNY',
    subLabel: '人民币',
    contentLabel: '36,000.00',
    value: 'CNY',
    balance: '36000.789',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
];

const AdvancedFeatures: React.FC = () => {
  const [value1, setValue1] = useState<Values>({
    amount: '',
    currency: '',
    canUseAmount: 0,
  });

  const [value2, setValue2] = useState<Values>({
    amount: '1000.50',
    currency: 'USD',
    canUseAmount: 892000,
  });

  const [value3, setValue3] = useState<Values>({
    amount: '500',
    currency: 'EUR',
    canUseAmount: 648000,
  });

  const handleAmountChange = (val: Values) => {
    console.log('金额变化:', val);
    setValue1(val);
  };

  const handleCurrencySelect = (currency: string) => {
    console.log('货币选择:', currency);
  };

  const handleSelectAll = (amount: string) => {
    console.log('选择全部金额:', amount);
  };

  const formatBalance = (balance: string) => {
    return `${balance ? parseFloat(balance).toLocaleString() : 0}`;
  };

  return (
    <Space>
      <Card style={styles.section}>
        <Field label="完整功能演示">
          <AmountInput
            options={advancedOptions}
            onChange={handleAmountChange}
            value={value1}
            onChangeSelect={handleCurrencySelect}
            onSelectAll={handleSelectAll}
            showBalance
            showSellAll
            selectTitle="选择货币"
            placeholder="请输入转账金额"
            availableBalanceText="可用余额"
            availableBalanceColon="："
            allText="全部"
            formatBalance={formatBalance}
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="自定义Select属性">
          <AmountInput
            options={advancedOptions}
            onChange={setValue2}
            value={value2}
            selectProps={{
              searchInputProps: {
                placeholder: '请选择货币类型',
              },
              showSearch: true,
            }}
            showBalance
          />
        </Field>
      </Card>

      <Card style={styles.section}>
        <Field label="复杂输入控制">
          <AmountInput
            options={advancedOptions}
            onChange={setValue3}
            value={value3}
            inputProps={{
              size: 'large',
              maxLength: 10,
              autoFocus: false,
            }}
            precision={3}
            showBalance
            showSellAll
            autoClear={false}
          />
        </Field>
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
