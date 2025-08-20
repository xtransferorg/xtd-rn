/**
 * title: Grid 栅格系统
 * desc: 24 栅格系统，通过 Row 和 Col 组件快速创建布局
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import GapUsage from './gapUsage';
import OffsetUsage from './offsetUsage';
import AlignmentUsage from './alignmentUsage';
import ResponsiveUsage from './responsiveUsage';

const GridDemo: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Space gap={16}>
        <BasicUsage />
        <GapUsage />
        <OffsetUsage />
        <AlignmentUsage />
        <ResponsiveUsage />
      </Space>
    </ScrollView>
  );
};

export default GridDemo;
