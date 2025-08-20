import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DatePicker, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const DateRangeLimit: React.FC = () => {
  const [limitedDate, setLimitedDate] = useState<Date | null>(null);
  const [businessDate, setBusinessDate] = useState<Date | null>(null);

  const minDate = dayjs().subtract(1, 'year').toDate();
  const maxDate = dayjs().add(1, 'year').toDate();
  const defaultDate = dayjs().subtract(1, 'day').toDate();

  const handleLimitedDatePick = () => {
    DatePicker({
      title: '限制日期范围',
      mode: 'Y-D',
      min: minDate,
      max: maxDate,
      defaultValue: defaultDate,
    }).then(({ action, value }) => {
      if (action === 'confirm') {
        setLimitedDate(value);
      }
    });
  };

  const handleBusinessDatePick = () => {
    const today = new Date();
    const businessMin = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    const businessMax = new Date(
      today.getFullYear(),
      today.getMonth() + 3,
      today.getDate()
    );

    DatePicker({
      title: '业务日期选择',
      mode: 'Y-D',
      min: businessMin,
      max: businessMax,
      defaultValue: businessMin,
    }).then(({ action, value }) => {
      if (action === 'confirm') {
        setBusinessDate(value);
      }
    });
  };

  return (
    <Card style={styles.section}>
      <Text style={styles.title}>日期范围限制</Text>
      <Space>
        <View style={styles.rangeExample}>
          <Text style={styles.subtitle}>自定义最大值和最小值</Text>
          <Text style={styles.rangeInfo}>
            最小值：{dayjs(minDate).format('YYYY-MM-DD')}
          </Text>
          <Text style={styles.rangeInfo}>
            最大值：{dayjs(maxDate).format('YYYY-MM-DD')}
          </Text>
          <Text style={styles.rangeInfo}>
            默认值：{dayjs(defaultDate).format('YYYY-MM-DD')}
          </Text>
          <Button onPress={handleLimitedDatePick}>
            选择日期（一年范围内）
          </Button>
          {limitedDate && (
            <Text style={styles.resultText}>
              选中：{dayjs(limitedDate).format('YYYY-MM-DD')}
            </Text>
          )}
        </View>

        <View style={styles.rangeExample}>
          <Text style={styles.subtitle}>业务场景示例</Text>
          <Text style={styles.description}>只能选择明天到三个月后的日期</Text>
          <Button onPress={handleBusinessDatePick}>选择业务日期</Button>
          {businessDate && (
            <Text style={styles.resultText}>
              选中：{dayjs(businessDate).format('YYYY-MM-DD')}
            </Text>
          )}
        </View>
      </Space>
    </Card>
  );
};

export default DateRangeLimit;
