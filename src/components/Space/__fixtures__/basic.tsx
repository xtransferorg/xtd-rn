/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react';
import { ScrollView } from 'react-native';

import { Space } from '@xrnjs/ui';
import AlignmentDemo from './alignment';
import DirectionDemo from './direction';
import GapSizeDemo from './gapSize';

const BasicSpace: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <GapSizeDemo />
        <DirectionDemo />
        <AlignmentDemo />
      </Space>
    </ScrollView>
  );
};

export default BasicSpace;
