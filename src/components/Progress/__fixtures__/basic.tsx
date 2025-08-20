import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import StatusUsage from './statusUsage';
import SizeUsage from './sizeUsage';
import ColorUsage from './colorUsage';
import PositionUsage from './positionUsage';
import CustomContentUsage from './customContentUsage';
import AnimationUsage from './animationUsage';
import ComponentUsage from './componentUsage';
import ScenarioUsage from './scenarioUsage';

const ProgressDemo: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Space>
        <BasicUsage />
        <StatusUsage />
        <SizeUsage />
        <ColorUsage />
        <PositionUsage />
        <CustomContentUsage />
        <AnimationUsage />
        <ComponentUsage />
        <ScenarioUsage />
      </Space>
    </ScrollView>
  );
};

export default ProgressDemo;
