import React from 'react';
import { Text } from 'react-native';
import { Card, Options } from '@xrnjs/ui';
import styles from './style';

const VerticalLayoutExample = () => {
  return (
    <Card style={styles.section}>
      <Text
        style={[styles.title, { paddingHorizontal: 0 }]}
      >{`带图标(垂直布局)`}</Text>
      <Options
        defaultValue={'1'}
        columns={2}
        showIcon
        mode="vertical"
        style={{ paddingHorizontal: 0 }}
        fullColumn
        options={[
          {
            label: '结汇提现',
            description: '立即到账',
            value: '1',
          },
          {
            label: '普通提现',
            description: '三天到账',
            value: '2',
          },
          {
            label: '禁止提现',
            description: '当前渠道不可用',
            value: '3',
            disabled: true,
          },
        ]}
      />
    </Card>
  );
};

export default VerticalLayoutExample;
