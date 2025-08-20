import React from 'react';
import { View, Text } from 'react-native';
import { Popover, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const TriggerUsage: React.FC = () => {
  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  const sampleActions = [
    { text: '选项一' },
    { text: '选项二' },
    { text: '选项三' },
  ];

  return (
    <Card title="触发方式">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持点击、长按、按下等不同的触发方式
        </Text>
        <Space>
          <Popover
            trigger="onPress"
            actions={sampleActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>点击触发</Button>
          </Popover>

          <Popover
            trigger="onLongPress"
            actions={sampleActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>长按触发</Button>
          </Popover>

          <Popover
            trigger="onPressIn"
            actions={sampleActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>按下触发</Button>
          </Popover>

          <Popover
            disabled={true}
            actions={sampleActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>禁用状态</Button>
          </Popover>
        </Space>
      </View>
    </Card>
  );
};

export default TriggerUsage;
