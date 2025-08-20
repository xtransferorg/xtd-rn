import React, { useState } from 'react';
import { Text } from 'react-native';
import { DatePicker, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDatePick = () => {
    DatePicker({
      title: '选择日期',
      mode: 'Y-D',
    }).then(({ action, value }) => {
      if (action === 'confirm') {
        setSelectedDate(value);
      }
    });
  };

  return (
    <Card style={styles.section}>
      <Text style={styles.title}>基础用法</Text>
      <Space>
        <Button onPress={handleDatePick}>选择日期</Button>
        {selectedDate && (
          <Text style={styles.resultText}>
            选中日期: {selectedDate.toDateString()}
          </Text>
        )}
      </Space>
    </Card>
  );
};

export default BasicUsage;
