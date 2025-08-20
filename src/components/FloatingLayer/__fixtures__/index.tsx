import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsageScreen from './basicUsage';
import ApiUsageScreen from './apiUsage';
import ShareLayerScreen from './shareLayer';
import FormLayerScreen from './formLayer';
import AdvancedFeaturesScreen from './advancedFeatures';
import KeyboardHandlingScreen from './keyboardHandling';

const FloatingLayerScreen = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Space>
        <BasicUsageScreen />
        <ApiUsageScreen />
        <ShareLayerScreen />
        <FormLayerScreen />
        <AdvancedFeaturesScreen />
        <KeyboardHandlingScreen />
      </Space>
    </ScrollView>
  );
};

export default FloatingLayerScreen;
