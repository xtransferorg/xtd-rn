import React from 'react';
import { Space, Rate } from '@xrnjs/ui';
import Card from '_global/Card';

const BasicUsage = () => {
  return (
    <Space>
      <Card title="基本用法">
        <Rate count={5} />
      </Card>

      <Card title="任意长度(7)">
        <Rate defaultValue={6} count={7} />
      </Card>

      <Card title="只读">
        <Rate defaultValue={2} readonly />
        <Rate defaultValue={4} readonly />
      </Card>

      <Card title="不可取消">
        <Rate allowClear={false} />
      </Card>
    </Space>
  );
};

export default BasicUsage;
