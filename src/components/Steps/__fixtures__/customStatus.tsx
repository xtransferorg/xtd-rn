import React from 'react';
import { Steps, Space, Card } from '@xrnjs/ui';
import { IconXMarksmall1 } from '../../../icons/index';

const CustomStatus = () => {
  return (
    <Card>
      <Space>
        <Steps
          current={-1}
          data={[
            {
              title: '已完成',
              description: '任务已成功完成',
              status: 'finish',
            },
            {
              title: '进行中',
              description: '任务正在进行中',
              status: 'process',
            },
            {
              title: '等待中',
              description: '等待前置任务完成',
              status: 'wait',
            },
          ]}
        />

        <Steps
          direction="vertical"
          current={-1}
          data={[
            {
              title: '审核通过',
              description: '申请已通过审核',
              status: 'finish',
              dot: <IconXMarksmall1 size={16} fillColor="#52c41a" />,
              time: '2024-7-1 09:00',
            },
            {
              title: '材料补充',
              description: '请补充相关材料',
              status: 'process',
              time: '2024-7-2 14:30',
            },
            {
              title: '最终审批',
              description: '等待最终审批结果',
              status: 'wait',
            },
          ]}
        />
      </Space>
    </Card>
  );
};

export default CustomStatus;
