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
  </Card>
);

export default UnitDemo;
