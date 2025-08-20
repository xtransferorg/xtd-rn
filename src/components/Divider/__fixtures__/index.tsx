/* eslint-disable react-native/no-inline-styles */
/**
 * title: Divider 分割线
 * desc: 用于将内容分隔为多个区域的分割线组件
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import WithText from './withText';
import DashedLine from './dashedLine';
import CustomStyle from './customStyle';
import PracticalExamples from './practicalExamples';

const DividerDemo: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Space>
        <BasicUsage />
        <WithText />
        <DashedLine />
        <CustomStyle />
        <PracticalExamples />
      </Space>
    </ScrollView>
  );
};

export default DividerDemo;
