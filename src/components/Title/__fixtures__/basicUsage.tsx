import React from 'react';
import { Title, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsageDemo = () => {
  return (
    <Space>
      <Card style={styles.cardWrapper}>
        <Title>主标题</Title>
      </Card>

      <Card style={styles.cardWrapper}>
        <Title description="副标题">主标题</Title>
      </Card>
    </Space>
  );
};

export default BasicUsageDemo;
