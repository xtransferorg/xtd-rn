import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateData } from '@xrnjs/ui';
import dayjs from 'dayjs';
import { styles } from './style';

const BasicUsage = () => {
  const formatter = 'YYYY-MM-DD';
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(formatter)
  );

  const onSelect = (current: DateData) => {
    setSelectedDate(current?.dateString);
  };

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.sectionTitle}>基础用法</Text>
      <View style={styles.container}>
        <Calendar
          testID="basic-calendar"
          value={selectedDate}
          onSelect={onSelect}
        />
        <Text style={styles.selectedText}>选中日期: {selectedDate}</Text>
      </View>
    </View>
  );
};

export default BasicUsage;
