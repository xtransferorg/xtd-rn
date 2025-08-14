import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Calendar, DateData, Positions } from '@xrnjs/ui';
import { IconMARetreat1 } from '../../../icons/index';
import dayjs from 'dayjs';
import Button from '../../Button';
import DatePicker from '../../DatePicker';
import Card from '_global/Card';

const Demo = () => {
  const formatter = 'YYYY-MM-DD';
  const [min, max] = [
    dayjs().subtract(2, 'day').format(formatter),
    dayjs().add(3, 'day').format(formatter),
  ];
  const [holidays, setHolidays] = useState<string[]>([]);
  const [date, setDate] = useState<string>(
    dayjs().add(1, 'day').format(formatter)
  );
  const [visibleDate, setVisibleDate] = useState(date);

  useEffect(() => {
    setTimeout(() => {
      setHolidays([
        dayjs().subtract(5, 'day').format(formatter),
        min,
        max,
        dayjs().add(1, 'month').format(formatter),
      ]);
    }, 1000);
  }, []);

  const onSelect = (current: DateData) => {
    setDate(current?.dateString);
  };

  const onPress = () => {
    setDate(dayjs(date).add(1, 'day').format(formatter));
  };

  const onPreMonthPress = () => {
    setDate(dayjs(date).subtract(1, 'month').format(formatter));
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

  return (
    <ScrollView>
      <Card title="固定周日历展示" style={{ marginBottom: 20 }}>
        <Calendar
          testID="calendar2"
          // value={date}
          // onSelect={onSelect}
          markedDays={holidays}
          hideHeader
          hideKnob
          disablePan
          initialPosition={Positions.CLOSED}
        />
      </Card>
      <Calendar
        testID="calendar"
        value={date}
        onSelect={onSelect}
        onHeaderTouch={onHeaderTouch}
        visibleDate={visibleDate}
        onMonthChange={onMonthChange}
        markedDays={holidays}
        renderHeaderLeft={() => {
          return (
            <TouchableOpacity onPress={console.log}>
              <IconMARetreat1 fillColor="#222" size={14} />
            </TouchableOpacity>
          );
        }}
      />

      <Text>selected: {date}</Text>
      <Button onPress={onPress} style={{ marginVertical: 10 }}>
        选择后一天
      </Button>
      <Button onPress={onPreMonthPress} style={{ marginVertical: 10 }}>
        选择前一个月
      </Button>
    </ScrollView>
  );
};

export default Demo;
