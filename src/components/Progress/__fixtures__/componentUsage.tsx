import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Progress, Button, Space, Size } from '@xrnjs/ui';
import { IconXHappy1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const ComponentUsage: React.FC = () => {
  const [linePercent, setLinePercent] = useState(30);
  const [circlePercent, setCirclePercent] = useState(60);

  return (
    <Card title="组件方式调用">
      <View style={styles.section}>
        <Text style={styles.description}>
          除了通过 type 属性指定类型，还可以直接使用 Progress.Line 和
          Progress.Circle 组件
        </Text>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>Progress.Line 组件</Text>
          <Space>
            <Progress.Line percent={linePercent} />
            <Progress.Line
              percent={linePercent}
              strokeColor="#52c41a"
              percentPosition="top"
            />
            <Progress.Line
              percent={linePercent}
              strokeColor={['#87d068', '#ffe58f']}
              pivotText="进行中"
            />
          </Space>
          <View style={styles.animationControls}>
            <Text style={styles.percentText}>{linePercent}%</Text>
            <Button
              size={Size.small}
              onPress={() => setLinePercent((prev) => Math.min(prev + 10, 100))}
            >
              增加
            </Button>
            <Button
              size={Size.small}
              onPress={() => setLinePercent((prev) => Math.max(prev - 10, 0))}
            >
              减少
            </Button>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>Progress.Circle 组件</Text>
          <View style={styles.circleGrid}>
            <View style={styles.circleItem}>
              <Progress.Circle percent={circlePercent} size={80} />
              <Text style={styles.circleLabel}>默认</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress.Circle
                percent={circlePercent}
                size={80}
                strokeColor="#722ed1"
              />
              <Text style={styles.circleLabel}>紫色</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress.Circle
                percent={circlePercent}
                size={80}
                strokeColor={['#722ed1', '#eb2f96']}
                pivotText={<IconXHappy1 size={20} />}
              />
              <Text style={styles.circleLabel}>渐变+图标</Text>
            </View>
          </View>
          <View style={styles.animationControls}>
            <Text style={styles.percentText}>{circlePercent}%</Text>
            <Button
              size={Size.small}
              onPress={() =>
                setCirclePercent((prev) => Math.min(prev + 15, 100))
              }
            >
              增加
            </Button>
            <Button
              size={Size.small}
              onPress={() => setCirclePercent((prev) => Math.max(prev - 15, 0))}
            >
              减少
            </Button>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ComponentUsage;
