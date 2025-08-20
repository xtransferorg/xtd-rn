import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicStatusExample from './basicStatus';
import WithButtonsExample from './withButtons';
import HorizontalLayoutExample from './horizontalLayout';
import CustomExtraExample from './customExtra';
import CustomStyleExample from './customStyle';

/**
 * Result 组件示例
 * 展示 Result 组件的各种用法和配置
 */
const ResultExample = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Space direction="vertical" gap={24}>
        <BasicStatusExample />
        <WithButtonsExample />
        <HorizontalLayoutExample />
        <CustomExtraExample />
        <CustomStyleExample />
      </Space>
    </ScrollView>
  );
};

export default ResultExample;
