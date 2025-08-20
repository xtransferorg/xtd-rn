import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import DefaultActiveDemo from './defaultActiveDemo';
import DisabledDemo from './disabledDemo';
import IconDescriptionDemo from './iconDescriptionDemo';
import CustomStyleDemo from './customStyleDemo';
import ArrowDemo from './arrowDemo';
import AdvancedDemo from './advancedDemo';

const CollapseScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <DefaultActiveDemo />
        <DisabledDemo />
        <IconDescriptionDemo />
        <CustomStyleDemo />
        <ArrowDemo />
        <AdvancedDemo />
      </Space>
    </ScrollView>
  );
};

export default CollapseScreen;
