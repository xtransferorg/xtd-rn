import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import ConfigUsage from './configUsage';

const PdfViewerAllDemos = () => (
  <ScrollView>
    <Space direction="vertical" gap="l">
      <BasicUsage />
      <ConfigUsage />
    </Space>
  </ScrollView>
);

export default PdfViewerAllDemos;
