import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DatePicker, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const CustomConfiguration: React.FC = () => {
  const [customDate, setCustomDate] = useState<Date | null>(null);
  const [labelDate, setLabelDate] = useState<Date | null>(null);

  const handleCustomPicker = () => {
    DatePicker({
      title: '自定义配置',
      mode: 'Y-D',
      confirmButtonText: '选择这个日期',
      cancelable: true,
      cancelButtonText: '我不选了',
      CustomHeader: {
        showConfirmButton: true,
        confirmButtonText: '完成',
      },
      beforeClose: (action) => {
        console.log('即将关闭，操作类型:', action);
        return true;
      },
    }).then(({ action, value }) => {
      console.log('选择结果:', { action, value });
      if (action === 'confirm') {
        setCustomDate(value);
      }
    });
  };

  const handleCustomLabelPicker = () => {
    DatePicker({
      title: '自定义标签',
      mode: 'Y-D',
      renderLabel: (type, value) => {
        switch (type) {
          case 'Y':
            return `${value}年`;
          case 'M':
            return `${value + 1}月`;
          case 'D':
            return `${value}日`;
          default:
            return `${value}`;
        }
      },
    }).then(({ action, value }) => {
      if (action === 'confirm') {
        setLabelDate(value);
      }
    });
  };

  return (
    <Card style={styles.section}>
      <Text style={styles.title}>自定义配置</Text>
      <Space>
        <View style={styles.customExample}>
          <Text style={styles.subtitle}>自定义按钮和回调</Text>
          <Text style={styles.description}>
            自定义确认/取消按钮文字，添加关闭前回调
          </Text>
          <Button onPress={handleCustomPicker}>打开自定义选择器</Button>
          {customDate && (
            <Text style={styles.resultText}>
              选中：{customDate.toDateString()}
            </Text>
          )}
        </View>

        <View style={styles.customExample}>
          <Text style={styles.subtitle}>自定义标签渲染</Text>
          <Text style={styles.description}>自定义年月日的显示格式</Text>
          <Button onPress={handleCustomLabelPicker}>
            打开自定义标签选择器
          </Button>
          {labelDate && (
            <Text style={styles.resultText}>
              选中：{labelDate.toDateString()}
            </Text>
          )}
        </View>
      </Space>
    </Card>
  );
};

export default CustomConfiguration;
