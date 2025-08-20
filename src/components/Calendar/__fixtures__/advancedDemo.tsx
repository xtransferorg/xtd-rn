import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateData } from '@xrnjs/ui';
import dayjs from 'dayjs';
import { styles } from './style';

const AdvancedDemo = () => {
  const formatter = 'YYYY-MM-DD';
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(formatter)
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(true);
  const [highlightedDate] = useState<string>(
    dayjs().add(2, 'day').format(formatter)
  );

  const onSelect = (current: DateData) => {
    setSelectedDate(current?.dateString);
  };

  const onCalendarToggled = (isOpen: boolean) => {
    setIsCalendarOpen(isOpen);
  };

  const onMonthChange = (date: DateData) => {
    console.log('月份变化:', date.dateString);
  };

  // 自定义标记渲染
  const markedRender = (date: DateData) => {
    const isSpecialDay = dayjs(date.dateString).day() === 0; // 周日
    if (isSpecialDay) {
      return (
        <View style={styles.customRenderContainer}>
          <Text style={{ color: '#ff4444', fontSize: 10 }}>休</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.sectionTitle}>高级功能</Text>
      <View style={styles.container}>
        <Calendar
          testID="advanced-calendar"
          value={selectedDate}
          onSelect={onSelect}
          onCalendarToggled={onCalendarToggled}
          onMonthChange={onMonthChange}
          highlightDay={highlightedDate}
          markedRender={markedRender}
          pastScrollRange={24}
          futureScrollRange={24}
          openThreshold={80}
          closeThreshold={80}
          disabledWeekLazyUpdate={false}
        />
        <Text style={styles.selectedText}>选中日期: {selectedDate}</Text>
        <Text style={styles.selectedText}>高亮日期: {highlightedDate}</Text>
        <Text style={styles.selectedText}>
          日历状态: {isCalendarOpen ? '展开' : '收起'}
        </Text>
      </View>
    </View>
  );
};

export default AdvancedDemo;
