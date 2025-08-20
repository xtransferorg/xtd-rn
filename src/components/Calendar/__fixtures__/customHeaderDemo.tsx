import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Calendar, DateData, DatePicker, Button } from '@xrnjs/ui';
import { IconMARetreat1 } from '../../../icons/index';
import dayjs from 'dayjs';
import { styles } from './style';

const CustomHeaderDemo = () => {
  const formatter = 'YYYY-MM-DD';
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(formatter)
  );
  const [visibleDate, setVisibleDate] = useState(selectedDate);

  const onSelect = (current: DateData) => {
    setSelectedDate(current?.dateString);
  };

  const onMonthChange = (d: DateData) => {
    setVisibleDate(d.dateString);
  };

  const onHeaderTouch = () => {
    DatePicker({
      title: '选择日期',
      mode: 'Y-M',
      defaultValue: dayjs(visibleDate).toDate(),
      min: dayjs().subtract(2, 'year').add(1, 'month').toDate(),
      max: dayjs().add(2, 'year').toDate(),
    })
      .then(({ value, action }) => {
        if (action === 'confirm') {
          setVisibleDate(dayjs(value).format(formatter));
        }
      })
      .catch(console.log);
  };

  const onPrevMonth = () => {
    setSelectedDate(dayjs(selectedDate).subtract(1, 'month').format(formatter));
  };

  const onNextDay = () => {
    setSelectedDate(dayjs(selectedDate).add(1, 'day').format(formatter));
  };

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.sectionTitle}>自定义头部</Text>
      <View style={styles.container}>
        <Calendar
          testID="custom-header-calendar"
          value={selectedDate}
          onSelect={onSelect}
          onHeaderTouch={onHeaderTouch}
          visibleDate={visibleDate}
          onMonthChange={onMonthChange}
          renderHeaderLeft={() => (
            <TouchableOpacity onPress={() => console.log('左侧按钮点击')}>
              <IconMARetreat1 fillColor="#222" size={14} />
            </TouchableOpacity>
          )}
        />
        <Text style={styles.selectedText}>选中日期: {selectedDate}</Text>
        <View style={styles.controlsContainer}>
          <Button onPress={onNextDay} style={styles.button}>
            选择后一天
          </Button>
          <Button onPress={onPrevMonth} style={styles.button}>
            选择前一个月
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CustomHeaderDemo;
