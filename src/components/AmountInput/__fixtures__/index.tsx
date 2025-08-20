import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import CurrencySelection from './currencySelection';
import CustomStyles from './customStyles';
import InputControl from './inputControl';
import LayoutPosition from './layoutPosition';
import AdvancedFeatures from './advancedFeatures';

const AmountInputScreen: React.FC = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Space>
        <BasicUsage />
        <CurrencySelection />
        <CustomStyles />
        <InputControl />
        <LayoutPosition />
        <AdvancedFeatures />
      </Space>
    </ScrollView>
  );
};

export default AmountInputScreen;
