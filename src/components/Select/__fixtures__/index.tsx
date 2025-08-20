import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

// 导入所有示例组件
import BasicRadioExample from './basicRadio';
import MultipleSelectExample from './multipleSelect';
import GroupSelectExample from './groupSelect';
import SearchSelectExample from './searchSelect';
import RedirectSelectExample from './redirectSelect';
import CustomStyleSelectExample from './customStyleSelect';
import SizeVariantsExample from './sizeVariants';
import EmptyStateExample from './emptyState';

const SelectExamples = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Space style={{ padding: 16 }}>
        <BasicRadioExample />
        <MultipleSelectExample />
        <GroupSelectExample />
        <SearchSelectExample />
        <RedirectSelectExample />
        <CustomStyleSelectExample />
        <SizeVariantsExample />
        <EmptyStateExample />
      </Space>
    </ScrollView>
  );
};

export default SelectExamples;
