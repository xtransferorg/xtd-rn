/**
 * title: 方向和布局
 * desc: 展示不同的排列方向和布局方式
 */

import React from 'react';
import { Text } from 'react-native';
import { Space, Button } from '@xrnjs/ui';
import Card from '_global/Card';

const DirectionDemo: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text>垂直排列（默认）</Text>
        <Space>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>

      <Card>
        <Text>水平排列</Text>
        <Space direction="horizontal">
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>

      <Card>
        <Text>横向排版、不换行，gapVertical 为 0</Text>
        <Space direction="horizontal">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>

      <Card>
        <Text>间距:横向行尾对齐</Text>
        <Space direction="horizontal" justify={'flex-end'}>
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
        </Space>
      </Card>

      <Card>
        <Text>多行</Text>
        <Space gap="m" direction="horizontal" wrap>
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

export default DirectionDemo;
