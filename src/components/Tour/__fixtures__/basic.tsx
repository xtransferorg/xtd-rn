import React from 'react';
import { ScrollView } from 'react-native';
import Space from '../../Space';
import BasicUsage from './basicUsage';
import CustomUsage from './customUsage';
import MaskUsage from './maskUsage';
import AdvancedUsage from './advancedUsage';
import EventUsage from './eventUsage';

export default () => {
  return (
    <ScrollView>
      <Space gap={24}>
        <BasicUsage />
        <CustomUsage />
        <MaskUsage />
        <AdvancedUsage />
        <EventUsage />
      </Space>
    </ScrollView>
  );
};
