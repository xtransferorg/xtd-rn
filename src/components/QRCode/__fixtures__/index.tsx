import React from 'react';
import { ScrollView } from 'react-native';
import BasicUsage from './basicUsage';
import StatusManagement from './statusManagement';
import LogoAndStyle from './logoAndStyle';
import AdvancedFeatures from './advancedFeatures';
import styles from './style';

const QRCodeDemo = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <BasicUsage />
      <StatusManagement />
      <LogoAndStyle />
      <AdvancedFeatures />
    </ScrollView>
  );
};

export default QRCodeDemo;
