import React from 'react';
import { Steps, Space, Card } from '@xrnjs/ui';

const BasicHorizontal = () => {
  return (
    <Card>
      <Space>
        <Steps
          current={0}
          data={[
            {
              title: '第一步',
              description: '引导用户按照流程完成任务',
            },
            {
              title: '第二步',
              description: '引导用户按照流程完成任务',
            },
            {
              title: '第三步',
              description: '引导用户按照流程完成任务',
            },
          ]}
        />

        <Steps
          current={1}
          data={[
            {
              title: '第一步',
              description: '引导用户按照流程完成任务',
            },
            {
              title: '第二步',
              description: '引导用户按照流程完成任务',
            },
            {
              title: '第三步',
              description: '引导用户按照流程完成任务',
            },
          ]}
        />

        <Steps
          current={2}
          data={[
            {
              title: '第一步',
              description: '引导用户按照流程完成任务',
            },
            {
              title: '第二步',
              description: '引导用户按照流程完成任务',
            },
            {
              title: '第三步',
              description: '引导用户按照流程完成任务',
            },
          ]}
        />
      </Space>
    </Card>
  );
};

export default BasicHorizontal;
