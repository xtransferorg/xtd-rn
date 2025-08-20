import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import Positions from './positions';
import HeaderExamples from './headerExamples';
import AdvancedFeatures from './advancedFeatures';
import ConfigOptions from './configOptions';

const PopupDemo = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <Positions />
        <HeaderExamples />
        <AdvancedFeatures />
        <ConfigOptions />
      </Space>
    </ScrollView>
  );
};

export default PopupDemo;
