import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateData, Positions } from '@xrnjs/ui';
import dayjs from 'dayjs';
import { styles } from './style';

const WeekViewDemo = () => {
  const formatter = 'YYYY-MM-DD';
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(formatter)
  );
  const [markedDays] = useState<string[]>([
    dayjs().subtract(1, 'day').format(formatter),
    dayjs().add(2, 'day').format(formatter),
  ]);

  const onSelect = (current: DateData) => {
    setSelectedDate(current?.dateString);
  };

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.sectionTitle}>固定周视图</Text>
      <View style={styles.container}>
        <Calendar
          testID="week-calendar"
          value={selectedDate}
          onSelect={onSelect}
          markedDays={markedDays}
          hideHeader
          hideKnob
          disablePan
          initialPosition={Positions.CLOSED}
        />
        <Text style={styles.selectedText}>选中日期: {selectedDate}</Text>
      </View>
    </View>
  );
};

export default WeekViewDemo;
