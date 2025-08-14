import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Field, Space, AmountInput, Values } from '@xrnjs/ui';
import styles from './style';
import { IconPPBrazil1 } from '../../../icons/index';
import Card from '_global/Card';

const options = [
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
    contentLabel: '648,000,00',
    value: 'EUR',
    balance: '648000.1',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'HKD',
    subLabel: '港币',
    contentLabel: '648,000,00',
    value: 'HKD',
    balance: '648000.22',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  },
  {
    label: 'CNY',
    subLabel: '人民币',
    contentLabel: '36,000.00',
    value: 'CNY',
    balance: '36000.3333',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  },
  {
    label: '7,000.00 GBP 不可选中',
    value: 'GBP',
    balance: '7000',
    disabled: true,
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  },
  {
    label: '9,000.00 HHH自定义图标大小',
    value: 'HHH',
    balance: '9000',
    prefixIcon: (
      <IconPPBrazil1 size={32} style={{ borderRadius: 16, marginRight: 10 }} />
    ),
  },
];

const options2 = [
  {
    label: '892,000.00 USD2',
    value: 'USD2',
    balance: '892000',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  },
  {
    label: '648,000,00 EUR2',
    value: 'EUR2',
    balance: '648000.1',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  },
];

const groups = [
  {
    label: 'group1',
    children: options,
  },
  {
    label: 'group2',
    children: options2,
  },
];

const AmountInputScreen: React.FC = () => {
  const [value, setValue] = useState<Values>({
    amount: '1000.231',
    currency: '',
    canUseAmount: 892000,
  });
  const [value2, setValue2] = useState<Values>({
    amount: '1000',
    currency: '',
    canUseAmount: 892000,
  });
  const [value3, setValue3] = useState<Values>({
    amount: '1000.231',
    currency: '',
    canUseAmount: 89200000000,
  });
  const onChange = (val: Values) => {
    console.log('onChange==', val);
    setValue(val);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Space>
        <Card style={styles.section}>
          <Field label="订单编号(groups)" requiredMark>
            <AmountInput
              showSelectCurrency
              showSellAll={false}
              options={groups}
              onChange={(v) => setValue2(v)}
              value={value2}
            />
          </Field>
        </Card>

        <Card style={styles.section}>
          <Field label="订单编号(自定义样式)" requiredMark>
            <AmountInput
              inputProps={{
                size: 'large',
                inputStyle: { fontSize: 16, color: 'red' },
              }}
              currencyInputProps={{
                imageStyle: { width: 16, height: 16 },
                imageProps: { width: 16, height: 16 },
                textStyle: { fontSize: 16, color: 'red' },
                arrowProps: { fillColor: 'red' },
                placeholdStyle: { fontSize: 14 },
              }}
              showSelectCurrency
              showSellAll={false}
              options={groups}
              onChange={(v) => setValue2(v)}
              value={value2}
            />
          </Field>
        </Card>

        <Card style={styles.section}>
          <Field label="不可选择" requiredMark>
            <AmountInput
              showBalance
              showSelectCurrency={false}
              options={options}
              onChange={onChange}
              onChangeSelect={console.log}
              value={value}
            />
          </Field>
        </Card>

        <Card style={styles.section}>
          <Field label="订单编号(disabled)" requiredMark>
            <AmountInput
              showSelectCurrency
              showSellAll={false}
              options={options}
              onChange={onChange}
              value={value}
              disabled
            />
          </Field>
        </Card>
        <Card style={styles.section}>
          <Field label="订单编号(loading & suffix)" requiredMark>
            <AmountInput
              showSelectCurrency
              showSellAll={false}
              options={options}
              onChange={onChange}
              selectPosition={'suffix'}
              value={value}
              inputProps={{
                loading: true,
                placeholder: 'loading 状态placeholder不显示',
              }}
            />
          </Field>
          <Field label="订单编号(loading)" requiredMark>
            <AmountInput
              showSelectCurrency
              showSellAll={false}
              options={options}
              onChange={onChange}
              value={value}
              inputProps={{
                loading: true,
                placeholder: 'loading 状态placeholder不显示',
              }}
            />
          </Field>
        </Card>
        <Card style={styles.section}>
          <Field label="状态(error)" requiredMark>
            <AmountInput
              showSelectCurrency
              showSellAll={false}
              options={options}
              onChange={onChange}
              value={value}
              inputProps={{ status: 'error' }}
            />
          </Field>
        </Card>
        <Card style={styles.section}>
          <Field label="选择框位置(suffix)" requiredMark>
            <AmountInput
              showSelectCurrency
              showSellAll={false}
              options={options}
              onChange={onChange}
              value={value}
              selectPosition={'suffix'}
            />
          </Field>
        </Card>
        <Card style={styles.section}>
          <Field label="select切换选项不清空数值" requiredMark>
            <AmountInput
              showSelectCurrency
              showSellAll={false}
              options={options}
              onChange={onChange}
              value={value}
              autoClear={false}
            />
          </Field>
        </Card>
        <Card style={styles.section}>
          <Field label="去掉默认的下边距" requiredMark>
            <AmountInput
              style={{ paddingBottom: 0 }}
              showSelectCurrency
              options={options}
              onChange={onChange}
              value={value}
              showSellAll={false}
            />
          </Field>
        </Card>

        <Card style={styles.section}>
          <Field label="自定义底部文案" requiredMark>
            <AmountInput
              style={{ paddingBottom: 0 }}
              showSelectCurrency
              options={options}
              onChange={onChange}
              showBalance
              availableBalanceText="自定义可退余额"
              value={value}
              showSellAll={false}
            />
          </Field>
        </Card>

        <Card style={styles.section}>
          <Field label="自定义输入框行为(请将键盘模式调整为 1.234.567,89)">
            <AmountInput
              options={options}
              onChange={(v) => {
                setValue3(v);
                console.log(v);
              }}
              value={value3}
              inputProps={{
                thousandSeparator: '.',
                decimalSeparator: ',',
              }}
              showSellAll={false}
              showBalance
            />
          </Field>
          <Field label="小数点精度(请将键盘模式调整为 1.234.567,89)">
            <AmountInput
              options={options}
              onChange={(v) => {
                setValue3(v);
                console.log(v);
              }}
              value={value3}
              inputProps={{
                thousandSeparator: '.',
                decimalSeparator: ',',
              }}
              showSellAll={false}
              showBalance
              precision={3} // 设置小数点精度为3
            />
          </Field>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default AmountInputScreen;
