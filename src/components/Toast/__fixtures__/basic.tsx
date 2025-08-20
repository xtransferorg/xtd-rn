import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

// 导入所有示例组件
import BasicUsage from './basicUsage';
import StatusToasts from './statusToasts';
import LoadingToasts from './loadingToasts';
import InteractiveFeatures from './interactiveFeatures';
import CustomStyles from './customStyles';
import AdvancedFeatures from './advancedFeatures';

/**
 * Toast 组件示例集合
 */
const ToastExamples = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Space>
        <BasicUsage />
        <StatusToasts />
        <LoadingToasts />
        <InteractiveFeatures />
        <CustomStyles />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default ToastExamples;
