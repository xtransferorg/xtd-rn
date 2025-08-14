import React from 'react';
import { Button, Space, Size } from '@xrnjs/ui';
import Card from '_global/Card';

const ButtonSizeDemo = () => (
  <Card title="大小">
    <Space>
      <Button size={Size.mini} block={false}>
        mini
      </Button>
      <Button size={Size.small} block={false}>
        small
      </Button>
      <Button size={Size.middle} block={false}>
        middle
      </Button>
      <Button size={Size.large} block={false}>
        large
      </Button>
    </Space>
  </Card>
);

export default ButtonSizeDemo;
