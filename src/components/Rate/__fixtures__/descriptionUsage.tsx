import React from 'react';
import { Space, Rate } from '@xrnjs/ui';
import Card from '_global/Card';

const DescriptionUsage = () => {
  return (
    <Space>
      <Card title="描述信息">
        <Rate
          defaultValue={3}
          description={[
            'Your rating will be submitted automatically',
            'VERY BAD',
            'POOR',
            'AVERAGE',
            'GOOD',
            'EXCELLENT',
          ]}
        />
      </Card>
    </Space>
  );
};

export default DescriptionUsage;
