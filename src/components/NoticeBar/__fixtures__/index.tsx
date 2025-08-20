import React from 'react';
import { Space } from '@xrnjs/ui';
import ScrollView from '_global/ScrollView';
import BasicUsage from './basicUsage';
import DifferentTypes from './differentTypes';
import CustomStyles from './customStyles';
import InteractiveFeatures from './interactiveFeatures';
import ScrollAndWrap from './scrollAndWrap';
import MultipleLines from './multipleLines';
import AdvancedFeatures from './advancedFeatures';

const NoticeBarScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <DifferentTypes />
        <CustomStyles />
        <InteractiveFeatures />
        <ScrollAndWrap />
        <MultipleLines />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default NoticeBarScreen;
