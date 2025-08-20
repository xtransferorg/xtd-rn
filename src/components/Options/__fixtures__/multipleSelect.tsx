import React from 'react';
import { Text } from 'react-native';
import { Card, Options } from '@xrnjs/ui';
import styles from './style';

const MultipleSelectExample = () => {
  return (
    <Card style={styles.section}>
      <Text style={styles.title}>多选</Text>
      <Options
        multiple
        defaultValue={['1']}
        options={[
          {
            label: '结汇提现',
            value: '1',
          },
          {
            label: '普通体现',
            value: '2',
          },
          {
            label: '易企结',
            value: '3',
          },
        ]}
      />
    </Card>
  );
};

export default MultipleSelectExample;
