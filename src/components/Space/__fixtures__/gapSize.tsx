/**
 * title: 间距大小
 * desc: 展示不同的间距大小设置
 */

import React from 'react';
import { Text } from 'react-native';
import { Space, Button } from '@xrnjs/ui';
import Card from '_global/Card';

const GapSizeDemo: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text>间距:s</Text>
        <Space>
          <Button>Button1</Button>
          <Button>Button2</Button>
        </Space>
      </Card>

      <Card>
        <Text>间距:m</Text>
        <Space gap="m">
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>

      <Card>
        <Text>间距:l</Text>
        <Space gap="l">
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>

      <Card>
        <Text>间距:自定义</Text>
        <Space direction="horizontal" gap={24}>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>
    </Space>
  );
};

export default GapSizeDemo;
