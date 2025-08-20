import React from 'react';
import { ScrollView } from 'react-native';
import BasicUsage from './basicUsage';
import MarkedDaysDemo from './markedDaysDemo';
import DateRangeDemo from './dateRangeDemo';
import WeekViewDemo from './weekViewDemo';
import LocaleDemo from './localeDemo';
import CustomHeaderDemo from './customHeaderDemo';
import CustomThemeDemo from './customThemeDemo';
import AdvancedDemo from './advancedDemo';
import { styles } from './style';
import { Space } from '@xrnjs/ui';

const CalendarDemo = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Space>
        <BasicUsage />
        <MarkedDaysDemo />
        <DateRangeDemo />
        <WeekViewDemo />
        <LocaleDemo />
        <CustomHeaderDemo />
        <CustomThemeDemo />
        <AdvancedDemo />
      </Space>
    </ScrollView>
  );
};

export default CalendarDemo;
