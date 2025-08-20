/**
 * title: 对齐方式
 * desc: 展示不同的对齐方式设置
 */

import React from 'react';
import { Text } from 'react-native';
import { Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';

const AlignmentDemo: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text>上下外边距</Text>
        <Space head tail>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Card>

      <Card>
        <Text>主轴对齐方式</Text>
        <Space direction="horizontal" justify="center">
          <Button size={Size.large}>Button</Button>
          <Button size={Size.middle}>Button</Button>
          <Button size={Size.small}>Button</Button>
        </Space>
      </Card>

      <Card>
        <Text>交叉轴对齐方式</Text>
        <Space direction="horizontal" align="center">
          <Button size={Size.large}>Button</Button>
          <Button size={Size.middle}>Button</Button>
          <Button size={Size.small}>Button</Button>
        </Space>
      </Card>
    </Space>
  );
};

export default AlignmentDemo;
