/**
 * title: 排版方向
 * desc: 组件 `direction` 属性可以改变子组件排版方向，横向排版子组件太多可以通过 `wrap` 达到换行的效果。
 */

import React from 'react';
import { Text } from 'react-native';

import { Space, Button } from '@xrnjs/ui';
import Card from '_global/Card';

const BasicSpaceDirection: React.FC = () => {
  return (
    <Space>
      <Card>
        <Space>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>

      <Card>
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
        <Text>多行的情况下边距不好消除，只好通过父节点去掉多余的边距</Text>
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

export default BasicSpaceDirection;
