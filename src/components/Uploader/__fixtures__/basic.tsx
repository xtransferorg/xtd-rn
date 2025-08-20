import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import FileTypes from './fileTypes';
import CustomStyles from './customStyles';
import InteractiveFeatures from './interactiveFeatures';
import StateControl from './stateControl';
import AdvancedFeatures from './advancedFeatures';

const UploaderDemo = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <FileTypes />
        <CustomStyles />
        <InteractiveFeatures />
        <StateControl />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default UploaderDemo;
