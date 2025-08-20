import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateData } from '@xrnjs/ui';
import dayjs from 'dayjs';
import { styles } from './style';

const DateRangeDemo = () => {
  const formatter = 'YYYY-MM-DD';
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(formatter)
  );

  // 设置日期范围：前后各一周
  const minDate = dayjs().subtract(1, 'week').format(formatter);
  const maxDate = dayjs().add(1, 'week').format(formatter);

  const onSelect = (current: DateData) => {
    setSelectedDate(current?.dateString);
  };

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.sectionTitle}>日期范围限制</Text>
      <View style={styles.container}>
        <Calendar
          testID="range-calendar"
          value={selectedDate}
          onSelect={onSelect}
          minDate={minDate}
          maxDate={maxDate}
        />
        <Text style={styles.selectedText}>选中日期: {selectedDate}</Text>
        <Text style={styles.selectedText}>
          可选范围: {minDate} 至 {maxDate}
        </Text>
      </View>
    </View>
  );
};

export default DateRangeDemo;
