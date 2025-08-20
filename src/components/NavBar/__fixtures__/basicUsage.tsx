import React, { FC } from 'react';
import { NavBar } from '@xrnjs/ui';
import {
  IconXOpeneyes1,
  IconXSettings1,
  IconMASearch1,
} from '../../../icons/index';

const right = [
  { icon: IconXOpeneyes1, onPress: () => {}, label: '显示' },
  { icon: IconXSettings1, onPress: () => {}, label: '设置' },
  { icon: IconMASearch1, onPress: () => {}, label: '搜索' },
];

const BasicUsage: FC = () => {
  return (
    <NavBar
      translucent
      onBack={() => {}}
      right={right.slice(0, 1)}
      title="标题文案"
      description="副标题文案"
    />
  );
};

export default BasicUsage;
