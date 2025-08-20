import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsageDemo from './basicUsage';
import CustomStyleDemo from './customStyle';
import FontSizeDemo from './fontSize';
import WithExtraDemo from './withExtra';
import DirectionDemo from './direction';

const TitleScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsageDemo />
        <WithExtraDemo />
        <FontSizeDemo />
        <DirectionDemo />
        <CustomStyleDemo />
      </Space>
    </ScrollView>
  );
};

export default TitleScreen;
