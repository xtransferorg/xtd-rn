import React from 'react';
import { Steps, Space, Card } from '@xrnjs/ui';
import { IconXMarksmall1 } from '../../../icons/index';
import styles from './style';

const VerticalSteps = () => {
  return (
    <Card>
      <Space>
        <Steps
          style={styles.wrapper}
          direction="vertical"
          current={1}
          data={[
            {
              title: '订单提交',
              description: '您的订单已成功提交',
              time: '2024-7-1 10:30',
            },
            {
              title: '支付确认',
              description: '订单支付已确认，正在处理中',
              time: '2024-7-1 10:35',
            },
            {
              title: '商品发货',
              description: '商品已从仓库发出',
            },
            {
              title: '确认收货',
              description: '请确认收到商品',
            },
          ]}
        />

        <Steps
          direction="vertical"
          current={2}
          data={[
            {
              title: '项目启动',
              description: '项目正式启动，团队成员已确认',
              dot: <IconXMarksmall1 size={16} fillColor="#0DA554" />,
              time: '2024-7-1',
            },
            {
              title: '需求分析',
              description: '完成需求调研和分析，输出需求文档',
              dot: <IconXMarksmall1 size={16} fillColor="#0DA554" />,
              time: '2024-7-5',
            },
            {
              title: '设计阶段',
              description: 'UI设计和技术架构设计进行中',
              time: '2024-7-10',
            },
            {
              title: '开发阶段',
              description: '功能开发和测试',
            },
          ]}
        />
      </Space>
    </Card>
  );
};

export default VerticalSteps;
