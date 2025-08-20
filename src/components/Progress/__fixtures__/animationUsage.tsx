import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Progress, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const AnimationUsage: React.FC = () => {
  const [linePercent, setLinePercent] = useState(0);
  const [circlePercent, setCirclePercent] = useState(0);
  const [slowPercent, setSlowPercent] = useState(0);

  const increaseLinePercent = () => {
    setLinePercent((prev) => Math.min(prev + 20, 100));
  };

  const resetLinePercent = () => {
    setLinePercent(0);
  };

  const increaseCirclePercent = () => {
    setCirclePercent((prev) => Math.min(prev + 25, 100));
  };

  const resetCirclePercent = () => {
    setCirclePercent(0);
  };

  const increaseSlowPercent = () => {
    setSlowPercent((prev) => Math.min(prev + 10, 100));
  };

  const resetSlowPercent = () => {
    setSlowPercent(0);
  };

  return (
    <Card title="动画效果">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持进度条动画效果，可以自定义动画时长
        </Text>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>线性进度条动画</Text>
          <Progress
            type="line"
            percent={linePercent}
            animated
            // animationDuration={300}
            onAnimationEnd={(percent) => console.log('线性动画结束:', percent)}
          />
          <View style={styles.animationControls}>
            <Text style={styles.percentText}>{linePercent}%</Text>
            <Button size={Size.small} onPress={increaseLinePercent}>
              增加 20%
            </Button>
            <Button size={Size.small} onPress={resetLinePercent}>
              重置
            </Button>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>圆形进度条动画</Text>
          <View style={{ alignItems: 'center' }}>
            <Progress
              type="circle"
              percent={circlePercent}
              size={100}
              animated
              animationDuration={500}
              onAnimationEnd={(percent) =>
                console.log('圆形动画结束:', percent)
              }
            />
          </View>
          <View style={styles.animationControls}>
            <Text style={styles.percentText}>{circlePercent}%</Text>
            <Button size={Size.small} onPress={increaseCirclePercent}>
              增加 25%
            </Button>
            <Button size={Size.small} onPress={resetCirclePercent}>
              重置
            </Button>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>慢速动画</Text>
          <Progress
            type="line"
            percent={slowPercent}
            animated
            animationDuration={1000}
            strokeColor="#722ed1"
          />
          <View style={styles.animationControls}>
            <Text style={styles.percentText}>{slowPercent}%</Text>
            <Button size={Size.small} onPress={increaseSlowPercent}>
              增加 10%
            </Button>
            <Button size={Size.small} onPress={resetSlowPercent}>
              重置
            </Button>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default AnimationUsage;
