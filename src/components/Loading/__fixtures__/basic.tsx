import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import LottieAnimations from './lottieAnimations';
import WithText from './withText';
import ThemeStyles from './themeStyles';
import Scenarios from './scenarios';

const LoadingScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <LottieAnimations />
        <WithText />
        <ThemeStyles />
        <Scenarios />
      </Space>
    </ScrollView>
  );
};

export default LoadingScreen;
