import React from 'react';
import { Card, Field, Options, Space } from '@xrnjs/ui';
import { IconXBackside1, IconXFrontside1 } from '../../../icons/index';
import styles from './style';

const WithFieldExample = () => {
  return (
    <Card style={styles.section}>
      <Field layout="vertical" label="提现方式" labelStyle={styles.labelText}>
        <Space gap={20}>
          <Options
            defaultValue={['1']}
            showIcon
            mode="vertical"
            options={[
              {
                label: '结汇提现',
                value: '1',
                icon: <IconXFrontside1 />,
              },
              {
                label: '普通体现',
                value: '2',
                icon: <IconXBackside1 />,
              },
            ]}
          />
          <Options
            defaultValue={['1']}
            showIcon
            mode="horizontal"
            options={[
              {
                label: '结汇提现',
                value: '1',
                icon: <IconXFrontside1 />,
              },
              {
                label: '普通体现',
                value: '2',
                icon: <IconXBackside1 />,
              },
            ]}
          />
        </Space>
      </Field>
    </Card>
  );
};

export default WithFieldExample;
