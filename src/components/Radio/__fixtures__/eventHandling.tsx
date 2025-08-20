import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Radio, Toast, Button, Size } from '@xrnjs/ui';
import styles from './style';

const EventHandling: React.FC = () => {
  const [eventLog, setEventLog] = React.useState<string[]>([]);
  const [validationValue, setValidationValue] = React.useState<number>();
  const [asyncValue, setAsyncValue] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);

  const addLog = (message: string) => {
    const timestamp = new Date().toTimeString().slice(0, 8);
    setEventLog((prev) => [`[${timestamp}] ${message}`, ...prev.slice(0, 4)]);
  };

  const handleValidationChange = (value: number | number[]) => {
    if (Array.isArray(value)) return;
    if (value === 3) {
      Toast({
        position: 'middle',
        message: '此选项需要管理员权限',
        forbidPress: true,
      });
      return;
    }
    setValidationValue(value);
    addLog(`验证通过，选择了选项 ${value}`);
  };

  const handleAsyncChange = async (value: string | string[]) => {
    if (Array.isArray(value)) return;
    setLoading(true);
    addLog(`开始异步处理: ${value}`);

    try {
      // 模拟异步操作
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setAsyncValue(value);
      addLog(`异步处理完成: ${value}`);
    } catch (error) {
      addLog(`异步处理失败: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const onDisabledPress = (option: any) => {
    Alert.alert('操作提示', `${option.label} 当前不可选择`, [
      { text: '确定', style: 'default' },
    ]);
    addLog(`尝试点击禁用项: ${option.label}`);
  };

  return (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>事件监听</Text>
        <Text style={styles.subtitle}>监听选择变化事件</Text>
        <Radio
          defaultValue={1}
          options={[
            { label: '选项 A', value: 1 },
            { label: '选项 B', value: 2 },
            { label: '选项 C', value: 3 },
          ]}
          onChange={(value, options) => {
            const selectedOption = options.find((opt) => opt.value === value);
            addLog(`选择了: ${selectedOption?.label} (值: ${value})`);
          }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>禁用项处理</Text>
        <Text style={styles.subtitle}>点击禁用项时的处理</Text>
        <Radio
          defaultValue={1}
          options={[
            { label: '可选项 A', value: 1 },
            { label: '可选项 B', value: 2 },
            { label: '禁用项 C', value: 3, disabled: true },
            { label: '禁用项 D', value: 4, disabled: true },
          ]}
          onChange={(value) => {
            addLog(`正常选择: ${value}`);
          }}
          onDisabledPress={onDisabledPress}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>选择验证</Text>
        <Text style={styles.subtitle}>选择前进行验证</Text>
        <Radio<number>
          value={validationValue}
          onChange={handleValidationChange}
          options={[
            { label: '普通用户', value: 1 },
            { label: '高级用户', value: 2 },
            { label: '管理员 (需要权限)', value: 3 },
          ]}
        />
        {validationValue && (
          <View>
            <Text style={styles.successText}>
              ✓ 已选择: 选项 {validationValue}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>异步处理</Text>
        <Text style={styles.subtitle}>选择后进行异步操作</Text>
        <Radio<string>
          value={asyncValue}
          onChange={handleAsyncChange}
          options={[
            { label: '保存到本地', value: 'local' },
            { label: '上传到云端', value: 'cloud' },
            { label: '同步到服务器', value: 'server' },
          ]}
        />
        {loading && (
          <View style={styles.warningBox}>
            <Text>⏳ 正在处理中...</Text>
          </View>
        )}
        {asyncValue && !loading && (
          <View>
            <Text style={styles.successText}>✓ 处理完成: {asyncValue}</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>事件日志</Text>
        <Button
          onPress={() => setEventLog([])}
          size={Size.small}
          style={{ marginBottom: 8 }}
        >
          清空日志
        </Button>
        <View style={styles.customContainer}>
          {eventLog.length === 0 ? (
            <Text style={styles.subtitle}>暂无事件记录</Text>
          ) : (
            eventLog.map((log, index) => (
              <Text key={index} style={{ fontSize: 12, marginBottom: 4 }}>
                {log}
              </Text>
            ))
          )}
        </View>
      </View>
    </>
  );
};

export default EventHandling;
