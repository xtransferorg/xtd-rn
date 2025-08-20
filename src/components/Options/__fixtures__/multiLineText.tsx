import React from 'react';
import { Text } from 'react-native';
import { Card, Options } from '@xrnjs/ui';
import styles from './style';

const MultiLineTextExample = () => {
  return (
    <Card style={styles.section}>
      <Text style={styles.title}>双行文字选项</Text>
      <Options
        defaultValue={['1']}
        options={[
          {
            label: '法人代表/实际控制人占股10%及以上',
            value: '1',
          },
          {
            label: '法人代表/实际控制人占股20%及以上',
            value: '2',
          },
        ]}
      />
    </Card>
  );
};

export default MultiLineTextExample;
