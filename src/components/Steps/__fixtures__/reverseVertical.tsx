import React from 'react';
import { Steps, Space, Card } from '@xrnjs/ui';
import styles from './style';

const ReverseVertical = () => {
  return (
    <Card>
      <Space>
        <Steps
          style={styles.wrapper}
          direction="vertical"
          reverse
          current={3}
          data={[
            {
              title: '项目完成',
              description: '项目已成功交付上线',
            },
            {
              title: '测试验收',
              description: '功能测试和用户验收完成',
            },
            {
              title: '开发阶段',
              description: '核心功能开发完成',
            },
            {
              title: '项目启动',
              description: '项目正式启动',
            },
          ]}
        />
        <Steps
          style={styles.wrapper}
          direction="vertical"
          reverse
          current={2}
          data={[
            {
              title: '项目完成',
              description: '项目已成功交付上线',
            },
            {
              title: '测试验收',
              description: '功能测试和用户验收完成',
            },
            {
              title: '开发阶段',
              description: '核心功能开发完成',
            },
            {
              title: '项目启动',
              description: '项目正式启动',
            },
          ]}
        />

        <Steps
          direction="vertical"
          reverse
          current={1}
          data={[
            {
              title: '发布上线',
              description: '产品正式发布上线',
              time: '2024-7-20',
            },
            {
              title: '内测完成',
              description: '内部测试完成，修复所有问题',
              time: '2024-7-15',
            },
            {
              title: '功能开发',
              description: '核心功能开发完成',
              time: '2024-7-10',
            },
            {
              title: '需求确认',
              description: '产品需求确认完成',
              time: '2024-7-1',
            },
          ]}
        />
      </Space>
    </Card>
  );
};

export default ReverseVertical;
