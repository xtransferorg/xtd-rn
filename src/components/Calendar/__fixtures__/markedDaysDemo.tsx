import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateData } from '@xrnjs/ui';
import dayjs from 'dayjs';
import { styles } from './style';

const MarkedDaysDemo = () => {
  const formatter = 'YYYY-MM-DD';
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(formatter)
  );
  const [markedDays, setMarkedDays] = useState<string[]>([]);

  useEffect(() => {
    // 模拟异步加载标记日期
    setTimeout(() => {
      setMarkedDays([
        dayjs().subtract(2, 'day').format(formatter),
        dayjs().add(1, 'day').format(formatter),
        dayjs().add(3, 'day').format(formatter),
        dayjs().add(1, 'week').format(formatter),
      ]);
    }, 1000);
  }, []);

  const onSelect = (current: DateData) => {
    setSelectedDate(current?.dateString);
  };

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.sectionTitle}>标记日期</Text>
      <View style={styles.container}>
        <Calendar
          testID="marked-calendar"
          value={selectedDate}
          onSelect={onSelect}
          markedDays={markedDays}
        />
        <Text style={styles.selectedText}>选中日期: {selectedDate}</Text>
        <Text style={styles.selectedText}>
          标记日期: {markedDays.length} 个
        </Text>
      </View>
    </View>
  );
};

export default MarkedDaysDemo;
