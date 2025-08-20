/**
 * title: Empty 空状态
 * desc: 空状态时的占位提示
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import CustomUsage from './customUsage';
import ScenarioUsage from './scenarioUsage';
import ResponsiveUsage from './responsiveUsage';

const EmptyDemo: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Space gap={16}>
        <BasicUsage />
        <CustomUsage />
        <ScenarioUsage />
        <ResponsiveUsage />
      </Space>
    </ScrollView>
  );
};

export default EmptyDemo;
