import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import TabTypes from './tabTypes';
import IndicatorConfig from './indicatorConfig';
import BadgeAndCustom from './badgeAndCustom';
import ScrollableAndDynamic from './scrollableAndDynamic';
import LayoutAndSize from './layoutAndSize';
import VerticalTabs from './verticalTabs';
import AdvancedFeatures from './advancedFeatures';

const TabsScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <TabTypes />
        <IndicatorConfig />
        <BadgeAndCustom />
        <ScrollableAndDynamic />
        <LayoutAndSize />
        <VerticalTabs />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default TabsScreen;
