import React from 'react';
import { Platform } from 'react-native';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

function addThousandSeparators(num: number | string) {
  if (Number(num) === 0) return '0';
  if (!num) return '';
  return num
    .toString()
    .replace(/^0*/, '')
    .replace(/\d+/, function (n) {
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ',';
      });
    });
}

const AmountDemo = () => (
  <>
    <Card title="金额输入">
      <Field
        label="余额 (自定义 thousandSeparators)"
        message="币种/余额 823.00 CNY"
        showDividerLine
      >
        <Input
          placeholderStyle={styles.placeholderStyleNoPrefix}
          type="number"
          formatter={addThousandSeparators}
          bizInputType="amount"
          inputStyle={Platform.select({
            ios: styles.amount,
            android: styles.amountRightAndroid,
          })}
          placeholder="请输入"
        />
      </Field>
    </Card>
    <Card title="默认行为">
      <Input
        formatter="thousandSeparators"
        placeholder="请输入金额(小数点后3位)"
        type="number"
        precision={3}
        onChange={(a) => console.log(a)}
      />
      <Input
        formatter="thousandSeparators"
        placeholder="整数"
        type="number"
        precision={0}
        onChange={(a) => console.log(a)}
      />
    </Card>
  </>
);

export default AmountDemo;
