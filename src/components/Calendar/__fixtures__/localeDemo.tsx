import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateData, LangType, Locale } from '@xrnjs/ui';
import dayjs from 'dayjs';
import { styles } from './style';

const LocaleDemo = () => {
  const formatter = 'YYYY-MM-DD';
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(formatter)
  );

  const onSelect = (current: DateData) => {
    setSelectedDate(current?.dateString);
  };

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.sectionTitle}>国际化</Text>
      <View style={styles.container}>
        <Locale langType={LangType.en_US}>
          <Calendar
            testID="locale-calendar"
            value={selectedDate}
            onSelect={onSelect}
            locale={{
              dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
            }}
          />
        </Locale>
        <Text style={styles.selectedText}>选中日期: {selectedDate}</Text>
      </View>
    </View>
  );
};

export default LocaleDemo;
