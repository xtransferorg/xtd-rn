import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsageExample from './basicUsage';
import StatusDialogsExample from './statusDialogs';
import FormDialogsExample from './formDialogs';
import ImageDialogsExample from './imageDialogs';
import AdvancedFeaturesExample from './advancedFeatures';

const ModalScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsageExample />
        <StatusDialogsExample />
        <FormDialogsExample />
        <ImageDialogsExample />
        <AdvancedFeaturesExample />
      </Space>
    </ScrollView>
  );
};

export default ModalScreen;
