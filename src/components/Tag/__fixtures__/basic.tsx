import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

// 导入所有示例组件
import TypesAndFunctions from './typesAndFunctions';
import Sizes from './sizes';
import StatusTags from './statusTags';
import IconTags from './iconTags';
import ClosableTags from './closableTags';
import AdvancedFeatures from './advancedFeatures';

/**
 * Tag 组件示例集合
 */
const TagExamples = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Space>
        <TypesAndFunctions />
        <Sizes />
        <StatusTags />
        <IconTags />
        <ClosableTags />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default TagExamples;
