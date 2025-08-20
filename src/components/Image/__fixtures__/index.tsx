import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import ResizeAndPosition from './resizeAndPosition';
import EffectsAndAnimation from './effectsAndAnimation';
import EventsAndCache from './eventsAndCache';
import Accessibility from './accessibility';

const ImageDemo = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Space>
        <BasicUsage />
        <ResizeAndPosition />
        <EffectsAndAnimation />
        <EventsAndCache />
        <Accessibility />
      </Space>
    </ScrollView>
  );
};

export default ImageDemo;
