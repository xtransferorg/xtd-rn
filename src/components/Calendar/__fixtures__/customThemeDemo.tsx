import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateData } from '@xrnjs/ui';
import dayjs from 'dayjs';
import { styles } from './style';

const CustomThemeDemo = () => {
  const formatter = 'YYYY-MM-DD';
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(formatter)
  );

  const onSelect = (current: DateData) => {
    setSelectedDate(current?.dateString);
  };

  const customTheme = {
    calendarBackground: '#f0f8ff',
    headerHeight: 50,
    knob: {
      backgroundColor: '#4169e1',
    },
    selectedDayBackgroundColor: '#4169e1',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#4169e1',
    dayTextColor: '#333333',
    textDisabledColor: '#cccccc',
    dotColor: '#4169e1',
    selectedDotColor: '#ffffff',
  };

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.sectionTitle}>自定义主题</Text>
      <View style={styles.container}>
        <Calendar
          testID="custom-theme-calendar"
          value={selectedDate}
          onSelect={onSelect}
          theme={customTheme}
          markedDays={[
            dayjs().add(1, 'day').format(formatter),
            dayjs().add(3, 'day').format(formatter),
          ]}
        />
        <Text style={styles.selectedText}>选中日期: {selectedDate}</Text>
      </View>
    </View>
  );
};

export default CustomThemeDemo;
