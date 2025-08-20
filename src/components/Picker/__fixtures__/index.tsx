import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import CascadeSelection from './cascadeSelection';
import ComponentUsage from './componentUsage';
import AdvancedFeatures from './advancedFeatures';

const PickerScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <CascadeSelection />
        <ComponentUsage />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default PickerScreen;
