import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import LayoutAndStyle from './layoutAndStyle';
import EventsAndCallbacks from './eventsAndCallbacks';
import AdvancedFeatures from './advancedFeatures';

const ImageViewerDemo = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Space>
        <BasicUsage />
        <LayoutAndStyle />
        <EventsAndCallbacks />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default ImageViewerDemo;
