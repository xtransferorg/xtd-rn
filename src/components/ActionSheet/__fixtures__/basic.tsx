import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import OptionStates from './optionStates';
import CallbackHandling from './callbackHandling';
import LayoutConfig from './layoutConfig';
import AdvancedFeatures from './advancedFeatures';

const ActionSheetDemo = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <OptionStates />
        <CallbackHandling />
        <LayoutConfig />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default ActionSheetDemo;
