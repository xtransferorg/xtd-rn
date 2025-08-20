import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import WithPrefixExample from './withPrefix';
import SingleSelectExample from './singleSelect';
import SingleSelectWithExpandExample from './singleSelectWithExpand';
import MultipleSelectWithExpandExample from './multipleSelectWithExpand';
import WrapLayoutExample from './wrapLayout';
import LongTextHandlingExample from './longTextHandling';

const OptionGroupScreen = () => {
  return (
    <ScrollView>
      <Space>
        <WithPrefixExample />
        <SingleSelectExample />
        <SingleSelectWithExpandExample />
        <MultipleSelectWithExpandExample />
        <WrapLayoutExample />
        <LongTextHandlingExample />
      </Space>
    </ScrollView>
  );
};

export default OptionGroupScreen;
