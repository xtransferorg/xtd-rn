import React, { FC } from 'react';
import { NavBar, Space } from '@xrnjs/ui';
import {
  IconXOpeneyes1,
  IconXSettings1,
  IconMASearch1,
} from '../../../icons/index';
import { Text } from 'react-native';

const right = [
  { icon: IconXOpeneyes1, onPress: () => {}, label: '显示' },
  { icon: IconXSettings1, onPress: () => {}, label: '设置' },
  { icon: IconMASearch1, onPress: () => {}, label: '搜索' },
];

const MultipleRightButtons: FC = () => {
  return (
    <Space>
      <NavBar translucent onBack={() => {}} right={right.slice(0, 2)}>
        <Text>两个右侧按钮</Text>
      </NavBar>

      <NavBar translucent onBack={() => {}} right={right}>
        <Text>多个右侧按钮（自动收起）</Text>
      </NavBar>
    </Space>
  );
};

export default MultipleRightButtons;
