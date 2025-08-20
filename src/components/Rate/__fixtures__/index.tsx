import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import ControlledUsage from './controlledUsage';
import DescriptionUsage from './descriptionUsage';
import CustomCharacterUsage from './customCharacterUsage';
import SingleModeUsage from './singleModeUsage';
import BackgroundUsage from './backgroundUsage';
import SizeUsage from './sizeUsage';
import DisabledUsage from './disabledUsage';

const RateDemo = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <ControlledUsage />
        <DescriptionUsage />
        <CustomCharacterUsage />
        <SingleModeUsage />
        <BackgroundUsage />
        <SizeUsage />
        <DisabledUsage />
      </Space>
    </ScrollView>
  );
};

export default RateDemo;
