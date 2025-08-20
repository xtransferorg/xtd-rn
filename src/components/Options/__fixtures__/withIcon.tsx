import React from 'react';
import { Text } from 'react-native';
import { Card, Options, Toast } from '@xrnjs/ui';
import styles from './style';

const WithIconExample = () => {
  return (
    <Card style={styles.section}>
      <Text style={[styles.title]}>带图标</Text>
      <Options
        defaultValue={'1'}
        columns={2}
        showIcon
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
            description: '点击给出提示',
            value: '3',
            disabled: true,
          },
          {
            label: '标题内容过长情况----标题内容过长情况',
            description: '描述正常描述正常描述正常描述正常描述正常',
            value: '4',
          },
          {
            label: '标题内容正常',
            description:
              '描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况',
            value: '5',
          },
          {
            label: '标题内容过长情况----标题内容过长情况',
            description: '描述内容过长情况描述内容过长情况',
            value: '6',
          },
        ]}
        onDisabledPress={(opt) => {
          console.log('opt=', opt.label);
          Toast({
            position: 'middle',
            message: `${opt.label} 不可操作提示`,
            forbidPress: true,
          });
        }}
      />
    </Card>
  );
};

export default WithIconExample;
