import React from 'react';
import { Text } from 'react-native';
import { Field, Input } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const UnitDemo = () => (
  <Card>
    <Field label="订单编号">
      <Input
        placeholder="请输入订单编号"
        suffix={<Text style={styles.unitSuffix}>USD</Text>}
      />
    </Field>
    <Field label="类型为 number">
      <Input placeholder="请输入数字" onChange={console.log} type="number" />
    </Field>
    <Field label="手机号">
      <Input placeholder="请输入手机号" type="tel" onChange={console.log} />
    </Field>
  </Card>
);

export default UnitDemo;
