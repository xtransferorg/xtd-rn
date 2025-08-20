import React from 'react';
import { Steps, Space, Card } from '@xrnjs/ui';

const CollapseMode = () => {
  return (
    <Card>
      <Space>
        <Steps
          current={0}
          collapse
          data={[
            {
              title: '第一步',
            },
            {
              title: '第二步',
            },
            {
              title: '第三步',
            },
          ]}
        />

        <Steps
          current={1}
          collapse
          data={[
            {
              title: '第一步',
            },
            {
              title: '第二步',
            },
            {
              title: '第三步',
            },
            {
              title: '第四步',
            },
          ]}
        />

        <Steps
          current={2}
          collapse
          data={[
            {
              title: '订单确认',
            },
            {
              title: '支付完成',
            },
            {
              title: '商品发货',
            },
            {
              title: '确认收货',
            },
            {
              title: '交易完成',
            },
          ]}
        />
      </Space>
    </Card>
  );
};

export default CollapseMode;
