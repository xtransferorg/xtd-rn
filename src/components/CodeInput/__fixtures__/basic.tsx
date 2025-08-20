import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import MaskDemo from './maskDemo';
import ErrorStateDemo from './errorStateDemo';
import InteractiveDemo from './interactiveDemo';
import CustomStyleDemo from './customStyleDemo';
import ExtraDemo from './extraDemo';

const CodeInputScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <MaskDemo />
        <ErrorStateDemo />
        <InteractiveDemo />
        <CustomStyleDemo />
        <ExtraDemo />
      </Space>
    </ScrollView>
  );
};

export default CodeInputScreen;
