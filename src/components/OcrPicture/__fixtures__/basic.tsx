import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import DirectionUsage from './directionUsage';
import StaticUsage from './staticUsage';
import TimeoutUsage from './timeoutUsage';
import ErrorUsage from './errorUsage';

const OcrPictureDemo: FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <Space direction="vertical" gap="l">
        <BasicUsage />
        <DirectionUsage />
        <StaticUsage />
        <TimeoutUsage />
        <ErrorUsage />
      </Space>
    </ScrollView>
  );
};

export default OcrPictureDemo;
