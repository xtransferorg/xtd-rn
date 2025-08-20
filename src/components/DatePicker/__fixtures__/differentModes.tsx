import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DatePickerColumnMode } from '../../../core/date-picker-view/interface';
import { DatePicker, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { formatDate } from '../../../core/date-picker-view/helper';

const DifferentModes: React.FC = () => {
  const [results, setResults] = useState<Record<string, Date | null>>({});

  const modes: { mode: DatePickerColumnMode; label: string }[] = [
    { mode: 'Y', label: '年份选择' },
    { mode: 'Y-M', label: '年月选择' },
    { mode: 'Y-D', label: '年月日选择' },
    { mode: 'M-D', label: '月日选择' },
    { mode: 'Y-h', label: '年份小时选择' },
    { mode: 'D-m', label: '日期分钟选择' },
    { mode: 'h-m', label: '时分选择' },
  ];

  const handleModeSelect = (mode: DatePickerColumnMode, label: string) => {
    DatePicker({
      title: label,
      mode: mode,
    }).then(({ action, value }) => {
      if (action === 'confirm') {
        setResults((prev) => ({ ...prev, [mode]: value }));
      }
    });
  };

  return (
    <Card style={styles.section}>
      <Text style={styles.title}>不同选择模式</Text>
      <Text style={styles.description}>
        可以在文档右上角切换语言查看不同语言下选择模式
      </Text>
      <Space>
        {modes.map(({ mode, label }) => (
          <View key={mode} style={styles.modeItem}>
            <Button
              onPress={() => handleModeSelect(mode, label)}
              style={styles.modeButton}
            >
              {label} ({mode})
            </Button>
            {results[mode] && (
              <Text style={styles.modeResult}>
                {formatDate(mode, results[mode]!)}
              </Text>
            )}
          </View>
        ))}
      </Space>
    </Card>
  );
};

export default DifferentModes;
