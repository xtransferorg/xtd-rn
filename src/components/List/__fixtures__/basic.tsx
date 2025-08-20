import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import MultilineUsage from './multilineUsage';
import CombinedUsage from './combinedUsage';
import LayoutUsage from './layoutUsage';
import InteractiveUsage from './interactiveUsage';
import styles from './style';

const ListScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Space style={styles.demoContainer}>
        <BasicUsage />
        <MultilineUsage />
        <CombinedUsage />
        <LayoutUsage />
        <InteractiveUsage />
      </Space>
    </ScrollView>
  );
};

export default ListScreen;
