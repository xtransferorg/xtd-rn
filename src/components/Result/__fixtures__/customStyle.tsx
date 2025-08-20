import React from 'react';
import { Result, Card, Space } from '@xrnjs/ui';
import styles from './style';

/**
 * 自定义样式
 * 展示 Result 组件的自定义样式配置
 */
const CustomStyleExample = () => {
  return (
    <Space direction="vertical" gap={16}>
      <Card style={styles.wrapper}>
        <Result
          status="success"
          title="自定义标题样式"
          subtitle="自定义副标题样式"
          titleTextStyle={{
            fontSize: 24,
            color: '#1890ff',
            fontWeight: 'bold',
          }}
          subtitleTextStyle={{
            fontSize: 16,
            color: '#666',
            fontStyle: 'italic',
          }}
          iconStyle={{
            backgroundColor: '#f0f9ff',
            borderRadius: 50,
            padding: 10,
          }}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="warning"
          title="警告信息"
          subtitle="这是一个带有自定义样式的警告信息"
          titleTextStyle={{
            fontSize: 18,
            color: '#fa8c16',
            textAlign: 'left',
          }}
          subtitleTextStyle={{
            fontSize: 14,
            color: '#8c8c8c',
            textAlign: 'left',
            marginTop: 8,
          }}
          style={{
            backgroundColor: '#fff7e6',
            padding: 20,
            borderRadius: 8,
            borderLeftWidth: 4,
            borderLeftColor: '#fa8c16',
          }}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="error"
          title="错误提示"
          subtitle="操作失败，请重试"
          titleTextStyle={{
            fontSize: 20,
            color: '#ff4d4f',
            fontWeight: '600',
          }}
          subtitleTextStyle={{
            fontSize: 14,
            color: '#999',
            marginTop: 12,
          }}
          iconStyle={{
            transform: [{ scale: 1.2 }],
          }}
        />
      </Card>
    </Space>
  );
};

export default CustomStyleExample;
