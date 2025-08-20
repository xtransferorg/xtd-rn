import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import SizeVariants from './sizeVariants';
import LabelAlignment from './labelAlignment';
import GroupUsage from './groupUsage';
import CustomIcon from './customIcon';
import AdvancedFeatures from './advancedFeatures';

const CheckboxScreen: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <SizeVariants />
        <LabelAlignment />
        <GroupUsage />
        <CustomIcon />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default CheckboxScreen;
