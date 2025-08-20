import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import WithIconExample from './withIcon';
import CustomIconSizeExample from './customIconSize';
import VerticalLayoutExample from './verticalLayout';
import WithImageExample from './withImage';
import BasicUsageExample from './basicUsage';
import SingleSelectExample from './singleSelect';
import TitleDescriptionExample from './titleDescription';
import MultiLineTextExample from './multiLineText';
import MultipleSelectExample from './multipleSelect';
import WithFieldExample from './withField';

const OptionsScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsageExample />
        <WithIconExample />
        <CustomIconSizeExample />
        <VerticalLayoutExample />
        <WithImageExample />
        <SingleSelectExample />
        <TitleDescriptionExample />
        <MultiLineTextExample />
        <MultipleSelectExample />
        <WithFieldExample />
      </Space>
    </ScrollView>
  );
};

export default OptionsScreen;
