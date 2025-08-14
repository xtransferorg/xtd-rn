import React from 'react';
import { Button, Space, Shape } from '@xrnjs/ui';
import Card from '_global/Card';

const ButtonShapeDemo = () => (
  <Card title="按钮形状">
    <Space>
      <Button>圆角按钮</Button>
      <Button shape={Shape.rectangular}>矩形按钮</Button>
    </Space>
  </Card>
);

export default ButtonShapeDemo;
