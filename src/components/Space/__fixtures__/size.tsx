/**
 * title: 间距大小
 * desc: 组件 `gap` 属性内置三个不同大小的间距，也可以采用具体的间距数值。
 */

import React from 'react';
import { Text } from 'react-native';
import { Space, Button } from '@xrnjs/ui';
import Card from '_global/Card';

const BasicSpaceSize: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text>间距:s</Text>
        <Space>
          <Button>Button</Button>
          <Button>Button</Button>
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
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicSpaceSize;
