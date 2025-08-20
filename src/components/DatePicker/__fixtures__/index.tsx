import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import DifferentModes from './differentModes';
import DateRangeLimit from './dateRangeLimit';
import RangeSelection from './rangeSelection';
import CustomConfiguration from './customConfiguration';
import styles from './style';

const DatePickerScreen = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Space>
        <BasicUsage />
        <DifferentModes />
        <DateRangeLimit />
        <RangeSelection />
        <CustomConfiguration />
      </Space>
    </ScrollView>
  );
};

export default DatePickerScreen;
