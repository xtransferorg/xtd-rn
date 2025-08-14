import dayjs from 'dayjs';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { DatePickerColumnMode } from '../../../core/date-picker-view/interface';
import { DatePicker, Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const DatePickerScreen = () => {
  const modes: DatePickerColumnMode[] = [
    'Y',
    'Y-M',
    'Y-D',
    'M-D',
    'Y-h',
    'D-m',
  ];

  const [v1, sv1] = useState<any>();
  return (
    <ScrollView>
      <Space>
        <Card
          style={styles.section}
          title="可以在文档右上角切换语言查看不同语言下选择模式"
        >
          {modes.map((mode) => (
            <Button
              key={mode}
              onPress={() => {
                DatePicker({
                  title: '某个时间',
                  defaultValue: undefined,
                  mode: mode,
                  CustomHeader: { showConfirmButton: false },
                }).then(({ action, value }) => {
                  console.log('单选:Promise  =>>  action  =>', action);
                  console.log('单选:Promise  =>>  value  =>', value);
                  sv1({ action, value });
                });
              }}
            >
              {mode} 模式
            </Button>
          ))}
          <View>
            <Text>选择的类型：{v1?.action}</Text>
          </View>
          <Text>选择的值：{v1?.value.toString()}</Text>
        </Card>

        <Card title="自定义最大值和最小值">
          <Button
            size={Size.large}
            onPress={() => {
              DatePicker({
                title: '某个时间',
                mode: 'Y-D',
                max: dayjs().add(1, 'day').toDate(),
                min: dayjs().subtract(20, 'years').toDate(),
                defaultValue: dayjs().subtract(1, 'day').toDate(),
                CustomHeader: { showConfirmButton: false },
              }).then(({ action, value }) => {
                console.log('单选:Promise  =>>  action  =>', action);
                console.log('单选:Promise  =>>  value  =>', value);
              });
            }}
          >
            <View>
              <Text>最大值：{dayjs().add(1, 'day').format('YYYY-MM-DD')}</Text>
              <Text>
                最小值：{dayjs().subtract(20, 'years').format('YYYY-MM-DD')}
              </Text>
              <Text>
                默认值：{dayjs().subtract(1, 'day').format('YYYY-MM-DD')}
              </Text>
            </View>
          </Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default DatePickerScreen;
