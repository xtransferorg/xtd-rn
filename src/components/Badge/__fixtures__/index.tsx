/**
 * title: Badge 徽标
 * desc: 图标右上角的圆形徽标数字
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import StatusUsage from './statusUsage';
import CustomUsage from './customUsage';
import AdvancedUsage from './advancedUsage';

const BadgeDemo: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Space gap={16}>
        <BasicUsage />
        <StatusUsage />
        <CustomUsage />
        <AdvancedUsage />
      </Space>
    </ScrollView>
  );
};

export default BadgeDemo;
