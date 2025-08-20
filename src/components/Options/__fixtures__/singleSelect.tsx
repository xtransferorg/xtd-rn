import React from 'react';
import { Text } from 'react-native';
import { Card, Options } from '@xrnjs/ui';
import styles from './style';

const SingleSelectExample = () => {
  return (
    <Card style={styles.section}>
      <Text style={styles.title}>单行文字(值不是V[])</Text>
      <Options<string, true>
        defaultValue={'1'}
        columns={2}
        single
        cancelable={false}
        onChange={(v) => console.log(v)}
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
            disabled: true,
            label: '易企结',
            value: '3',
          },
          {
            disabled: true,
            label: '4',
            value: '4',
          },
          {
            disabled: true,
            label: '5',
            value: '5',
          },
        ]}
      />
    </Card>
  );
};

export default SingleSelectExample;
