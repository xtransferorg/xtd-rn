import React, { useState } from 'react';
import { ScrollView, Text, Alert } from 'react-native';
import { Space, Switch } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const EventHandling = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);

  const handleChange = (newValue: boolean) => {
    Alert.alert('开关状态变化', `新状态: ${newValue ? '开启' : '关闭'}`);
    setValue1(newValue);
  };

  const handlePress = () => {
    Alert.alert('开关被点击', '触发了 onPress 事件');
  };

  const handleBeforeChange = (newValue: boolean) => {
    return new Promise<boolean>((resolve) => {
      Alert.alert('确认操作', `确定要${newValue ? '开启' : '关闭'}开关吗？`, [
        { text: '取消', onPress: () => resolve(false) },
        { text: '确定', onPress: () => resolve(true) },
      ]);
    });
  };

  const handleSyncBeforeChange = (newValue: boolean) => {
    // 同步拦截：只允许开启，不允许关闭
    if (!newValue) {
      Alert.alert('提示', '此开关不允许关闭');
      return false;
    }
    return true;
  };

  return (
    <ScrollView>
      <Space gap={20}>
        <Card style={styles.wrapper}>
          <Text style={styles.title}>onChange 事件</Text>
          <Switch value={value1} onChange={handleChange} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>onPress 事件</Text>
          <Switch value={value2} onChange={setValue2} onPress={handlePress} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>beforeChange 异步拦截</Text>
          <Switch
            value={value3}
            onChange={setValue3}
            beforeChange={handleBeforeChange}
          />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>beforeChange 同步拦截</Text>
          <Switch defaultValue={false} beforeChange={handleSyncBeforeChange} />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default EventHandling;
