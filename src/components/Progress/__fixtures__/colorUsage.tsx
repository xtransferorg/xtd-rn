import React from 'react';
import { View, Text } from 'react-native';
import { Progress, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ColorUsage: React.FC = () => {
  const gradientColors = ['#87d068', '#ffe58f', '#ffccc7'];
  const blueGradient = ['#1890ff', '#36cfc9'];
  const purpleGradient = ['#722ed1', '#eb2f96'];

  return (
    <Card title="颜色">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持自定义进度条颜色和背景色，包括单色和渐变色
        </Text>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>线性进度条颜色</Text>
          <Space>
            <View>
              <Text style={styles.circleLabel}>默认颜色</Text>
              <Progress type="line" percent={60} />
            </View>
            <View>
              <Text style={styles.circleLabel}>自定义单色</Text>
              <Progress type="line" percent={60} strokeColor="#52c41a" />
            </View>
            <View>
              <Text style={styles.circleLabel}>渐变色</Text>
              <Progress type="line" percent={60} strokeColor={gradientColors} />
            </View>
            <View>
              <Text style={styles.circleLabel}>蓝色渐变</Text>
              <Progress type="line" percent={60} strokeColor={blueGradient} />
            </View>
            <View>
              <Text style={styles.circleLabel}>自定义背景色</Text>
              <Progress
                type="line"
                percent={60}
                strokeColor="#722ed1"
                trailColor="#f0f0f0"
              />
            </View>
          </Space>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>圆形进度条颜色</Text>
          <View style={styles.circleGrid}>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={60} size={80} />
              <Text style={styles.circleLabel}>默认颜色</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress
                type="circle"
                percent={60}
                size={80}
                strokeColor="#52c41a"
              />
              <Text style={styles.circleLabel}>绿色</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress
                type="circle"
                percent={60}
                size={80}
                strokeColor={gradientColors}
              />
              <Text style={styles.circleLabel}>渐变色</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress
                type="circle"
                percent={60}
                size={80}
                strokeColor={purpleGradient}
              />
              <Text style={styles.circleLabel}>紫色渐变</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ColorUsage;
