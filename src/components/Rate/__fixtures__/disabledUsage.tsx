import React from 'react';
import { Space, Rate } from '@xrnjs/ui';
import Card from '_global/Card';

const DisabledUsage = () => {
  return (
    <Space>
      <Card title="禁用状态">
        <Rate defaultValue={3} disabled />
        <Rate defaultValue={2} disabled readonly />
      </Card>
    </Space>
  );
};

export default DisabledUsage;
