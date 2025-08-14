/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react';
import { ScrollView, Text } from 'react-native';

import { Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';

const BasicSpaceSize: React.FC = () => {
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

const BasicSpaceOther: React.FC = () => {
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
        <Text>间距:横向行尾对齐</Text>
        <Space direction="horizontal" justify={'flex-end'}>
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
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

const BasicSpace: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <BasicSpaceSize />
        <BasicSpaceDirection />
        <BasicSpaceOther />
      </Space>
    </ScrollView>
  );
};

export default BasicSpace;
