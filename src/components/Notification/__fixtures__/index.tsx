import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import StaticUsage from './staticUsage';
import ConfigUsage from './configUsage';
import InteractiveUsage from './interactiveUsage';
import StyleUsage from './styleUsage';

import styles from './style';

const NotificationDemo: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <BasicUsage />
        <StaticUsage />
        <ConfigUsage />
        <InteractiveUsage />
        <StyleUsage />
      </Space>
    </ScrollView>
  );
};

export default NotificationDemo;
