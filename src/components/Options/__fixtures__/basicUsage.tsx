import React from 'react';
import { Text } from 'react-native';
import { Options, Card } from '@xrnjs/ui';
import styles from './style';

const BasicUsageExample = () => {
  return (
    <Card style={styles.section}>
      <Text style={[styles.title, { paddingHorizontal: 0 }]}>撑满整个容器</Text>
      <Options
        defaultValue={'1'}
        options={[
          {
            label: '结汇提现',
            value: '1',
          },
          {
            label: '普通提现',
            value: '2',
          },
          {
            label: '快速提现',
            value: '3',
          },
        ]}
      />
    </Card>
  );
};

export default BasicUsageExample;
