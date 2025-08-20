import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import VerticalSwiper from './verticalSwiper';
import IndicatorConfig from './indicatorConfig';
import AdvancedFeatures from './advancedFeatures';
import PracticalScenarios from './practicalScenarios';

const SwiperExamples = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <VerticalSwiper />
        <IndicatorConfig />
        <AdvancedFeatures />
        <PracticalScenarios />
      </Space>
    </ScrollView>
  );
};

export default SwiperExamples;
