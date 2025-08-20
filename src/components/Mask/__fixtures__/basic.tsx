import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import BackdropUsage from './backdropUsage';
import AnimationUsage from './animationUsage';

import styles from './style';

const MaskDemo: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <BasicUsage />
        <BackdropUsage />
        <AnimationUsage />
      </Space>
    </ScrollView>
  );
};

export default MaskDemo;
