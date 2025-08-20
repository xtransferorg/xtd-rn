import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import StyleAndInteraction from './styleAndInteraction';
import AdvancedFeatures from './advancedFeatures';
import PopupFilter from './popupFilter';
import UsePopupFilter from './use-popup-filter';

const FilterScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <StyleAndInteraction />
        <AdvancedFeatures />
        <PopupFilter />
        <UsePopupFilter />
      </Space>
    </ScrollView>
  );
};

export default FilterScreen;
