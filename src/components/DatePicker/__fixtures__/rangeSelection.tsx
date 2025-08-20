import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DatePicker, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

type DateRange = [Date | null, Date | null];

const RangeSelection: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [businessRange, setBusinessRange] = useState<DateRange>([null, null]);

  const handleRangeSelect = () => {
    DatePicker.range({
      title: '选择日期范围',
      mode: 'Y-D',
      placeholder: ['开始日期', '结束日期'],
    }).then(({ action, values }) => {
      if (action === 'confirm') {
        setDateRange(values);
      }
    });
  };

  const handleBusinessRangeSelect = () => {
    const today = new Date();
    const minDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const maxDate = new Date(
      today.getFullYear() + 1,
      today.getMonth(),
      today.getDate()
    );

    DatePicker.range({
      title: '选择业务周期',
      mode: 'Y-D',
      min: minDate,
      max: maxDate,
      placeholder: ['项目开始', '项目结束'],
      confirmButtonText: '确定选择',
      resetButtonText: '重新选择',
      clearable: true,
      clearButtonText: '清空选择',
    }).then(({ action, values }) => {
      if (action === 'confirm') {
        setBusinessRange(values);
      } else if (action === 'clear') {
        setBusinessRange([null, null]);
      }
    });
  };

  const formatRange = (range: DateRange) => {
    const [start, end] = range;
    if (!start || !end) return '未选择';
    return `${dayjs(start).format('YYYY-MM-DD')} 至 ${dayjs(end).format(
      'YYYY-MM-DD'
    )}`;
  };

  return (
    <Card style={styles.section}>
      <Text style={styles.title}>范围选择</Text>
      <Space>
        <View style={styles.rangeExample}>
          <Text style={styles.subtitle}>基础范围选择</Text>
          <Button onPress={handleRangeSelect}>选择日期范围</Button>
          <Text style={styles.resultText}>
            选择范围：{formatRange(dateRange)}
          </Text>
        </View>

        <View style={styles.rangeExample}>
          <Text style={styles.subtitle}>业务范围选择</Text>
          <Text style={styles.description}>
            支持清空、自定义按钮文字、占位符
          </Text>
          <Button onPress={handleBusinessRangeSelect}>选择业务周期</Button>
          <Text style={styles.resultText}>
            业务周期：{formatRange(businessRange)}
          </Text>
        </View>
      </Space>
    </Card>
  );
};

export default RangeSelection;
