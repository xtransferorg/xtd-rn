import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import SearchAndHot from './searchAndHot';
import LayoutAndStyle from './layoutAndStyle';
import AdvancedFeatures from './advancedFeatures';

const IndexBarScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <SearchAndHot />
        <LayoutAndStyle />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default IndexBarScreen;
