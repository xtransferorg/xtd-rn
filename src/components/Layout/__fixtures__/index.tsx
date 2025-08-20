import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import { styles } from './style';

import BasicUsageDemo from './basicUsage';
import PaddingUsageDemo from './paddingUsage';
import SafeAreaUsageDemo from './safeAreaUsage';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Space gap={16}>
        <BasicUsageDemo />
        <PaddingUsageDemo />
        <SafeAreaUsageDemo />
      </Space>
    </ScrollView>
  );
};
