import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import { Tour, Button, TourStepProps } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  const [visible, setVisible] = useState(false);
  const [eventLog, setEventLog] = useState<string[]>([]);
  const { useMeasure } = Tour;
  const { ref, layout, onLayout, refresh } = useMeasure();
  const {
    ref: ref2,
    layout: layout2,
    onLayout: onLayout2,
    refresh: refresh2,
  } = useMeasure();

  const refreshAll = () => {
    refresh();
    refresh2();
  };

  const addLog = (message: string) => {
    setEventLog((prev) => [
      ...prev.slice(-4),
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  };

  const steps: TourStepProps[] = [
    {
      title: '事件监听示例',
      layout: layout,
      description: '点击背景或目标元素会触发相应的事件回调',
    },
    {
      title: '步骤变化监听',
      layout: layout2,
      description: '每次步骤变化都会记录到事件日志中',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card title="交互事件">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>事件回调</Text>
            <Text style={styles.demoDescription}>
              展示各种交互事件的回调处理，包括背景点击、目标点击、步骤变化等
            </Text>

            <View style={styles.buttonGroup}>
              <Space gap={8}>
                <Button
                  onPress={() => {
                    setEventLog([]);
                    refreshAll();
                    setVisible(true);
                    addLog('引导开始');
                  }}
                >
                  开始事件监听
                </Button>
                <Button onPress={() => setEventLog([])}>清空日志</Button>
              </Space>
            </View>

            <View style={styles.targetGroup}>
              <View
                style={[styles.targetItem, styles.colorPink]}
                ref={ref}
                onLayout={onLayout}
              >
                <Text style={styles.targetText}>可点击目标1</Text>
              </View>

              <View
                style={[
                  styles.targetItem,
                  styles.targetItemLarge,
                  styles.colorOrange,
                ]}
                ref={ref2}
                onLayout={onLayout2}
              >
                <Text style={styles.targetText}>可点击目标2</Text>
              </View>
            </View>

            {eventLog.length > 0 && (
              <View style={styles.eventLogContainer}>
                <Text style={styles.eventLogTitle}>事件日志:</Text>
                {eventLog.map((log, index) => (
                  <Text key={index} style={styles.eventLogItem}>
                    {log}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </Space>

        <Tour
          visible={visible}
          onBackdropPress={() => {
            addLog('点击了背景');
            setVisible(false);
          }}
          onTargetPress={() => {
            addLog('点击了目标元素');
          }}
          steps={steps}
          skip={true}
          onSkip={() => {
            addLog('跳过引导');
            setVisible(false);
          }}
          onChange={(current) => {
            addLog(`切换到第 ${current + 1} 步`);
          }}
          onFinish={() => {
            addLog('引导完成');
            setVisible(false);
          }}
        />
      </Card>
    </ScrollView>
  );
};
