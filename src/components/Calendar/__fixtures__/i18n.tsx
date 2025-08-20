import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Calendar from '../Calendar';
import { DateData } from '../calendars';
import dayjs from 'dayjs';
import Locale from '../../Locale';
import { LangType } from '../../Locale/enum';

const Demo = () => {
  const formatter = 'YYYY-MM-DD';
  const [date, setDate] = useState<string>(
    dayjs().add(1, 'day').format(formatter)
  );

  const onSelect = (current: DateData) => {
    setDate(current?.dateString);
  };

  return (
    <ScrollView>
      <View>
        <Locale langType={LangType.en_US}>
          <Calendar
            testID="calendar"
            value={date}
            onSelect={onSelect}
            locale={{
              dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
            }}
          />
        </Locale>
      </View>
    </ScrollView>
  );
};

export default Demo;
