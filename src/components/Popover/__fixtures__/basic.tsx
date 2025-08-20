import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import ThemeUsage from './themeUsage';
import PlacementUsage from './placementUsage';
import ArrowShadowUsage from './arrowShadowUsage';
import MenuUsage from './menuUsage';
import CloseControlUsage from './closeControlUsage';
import CustomContentUsage from './customContentUsage';
import NavBarUsage from './navBarUsage';

const PopoverDemo: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <ThemeUsage />
        <PlacementUsage />
        <ArrowShadowUsage />
        <MenuUsage />
        <CloseControlUsage />
        <CustomContentUsage />
        <NavBarUsage />
      </Space>
    </ScrollView>
  );
};

export default PopoverDemo;
