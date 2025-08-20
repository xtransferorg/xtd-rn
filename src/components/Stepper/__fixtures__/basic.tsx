import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import NumberFormat from './numberFormat';
import StateControl from './stateControl';
import EventHandling from './eventHandling';
import CustomStyle from './customStyle';
import RefUsage from './refUsage';

const StepperDemo: React.FC = () => {
  return (
    <ScrollView>
      <Space direction="vertical" gap="l">
        <BasicUsage />
        <NumberFormat />
        <StateControl />
        <EventHandling />
        <CustomStyle />
        <RefUsage />
      </Space>
    </ScrollView>
  );
};

export default StepperDemo;
