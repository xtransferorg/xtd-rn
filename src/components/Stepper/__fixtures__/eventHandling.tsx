import React, { useState } from 'react';
import { ScrollView, Alert, Text } from 'react-native';
import { Stepper, Space } from '@xrnjs/ui';
import Card from '_global/Card';

const EventHandling: React.FC = () => {
  const [value1, setValue1] = useState<number>(5);
  const [value2, setValue2] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev.slice(-4), message]);
  };

  const handleBeforeChange = async (
    value?: number | string
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      Alert.alert('确认修改', `是否将值修改为 ${value}？`, [
        { text: '取消', onPress: () => resolve(false) },
        { text: '确认', onPress: () => resolve(true) },
      ]);
    });
  };

  return (
    <ScrollView>
      <Space direction="vertical" gap="l">
        <Card title="基础事件">
          <Space direction="vertical">
            <Stepper
              defaultValue={5}
              onChange={(val) => addLog(`onChange: ${val}`)}
              onFocus={() => addLog('onFocus')}
              onBlur={() => addLog('onBlur')}
              onPlus={(e, val) => addLog(`onPlus: ${val}`)}
              onMinus={(e, val) => addLog(`onMinus: ${val}`)}
            />
            <Text>事件日志:</Text>
            {logs.map((log, index) => (
              <Text key={index} style={{ fontSize: 12, color: '#666' }}>
                {log}
              </Text>
            ))}
          </Space>
        </Card>

        <Card title="beforeChange 拦截">
          <Space direction="vertical">
            <Text>修改值时会弹出确认框</Text>
            <Stepper
              value={value1}
              onChange={(value) => value && setValue1}
              beforeChange={handleBeforeChange}
            />
          </Space>
        </Card>

        <Card title="同步 beforeChange">
          <Space direction="vertical">
            <Text>只允许偶数值</Text>
            <Stepper
              value={value2}
              step={2}
              onChange={(value) => value && setValue2}
              beforeChange={(val) => {
                const num = Number(val);
                return num % 2 === 0;
              }}
            />
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default EventHandling;
