import React from 'react';
import { Result, Card, Space } from '@xrnjs/ui';
import styles from './style';

/**
 * 水平布局
 * 展示 Result 组件的水平布局模式
 */
const HorizontalLayoutExample = () => {
  return (
    <Space direction="vertical" gap={16}>
      <Card style={styles.wrapper}>
        <Result
          status="waiting"
          layout="horizontal"
          title="等待"
          subtitle="请关联该笔收款对应的订单资料，关联多笔订单时请填写每一笔订单对应的金额"
          titleTextStyle={{ marginVertical: 0 }}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="reject"
          layout="horizontal"
          title="已驳回"
          subtitle="用于表示驳回用于表示驳...."
          titleTextStyle={{ marginVertical: 0 }}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="success"
          layout="horizontal"
          title="操作成功"
          subtitle="您的操作已成功完成，系统正在处理中"
          titleTextStyle={{ marginVertical: 0 }}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="error"
          layout="horizontal"
          title="操作失败"
          subtitle="操作失败，请检查网络连接或稍后重试"
          titleTextStyle={{ marginVertical: 0 }}
        />
      </Card>
    </Space>
  );
};

export default HorizontalLayoutExample;
