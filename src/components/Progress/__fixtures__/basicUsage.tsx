import React from 'react';
import { View, Text } from 'react-native';
import { Progress, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage: React.FC = () => {
  return (
    <Card title="基础用法">
      <View style={styles.section}>
        <Text style={styles.description}>
          最基本的进度条用法，支持线性和圆形两种类型
        </Text>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>线性进度条</Text>
          <Space>
            <Progress type="line" percent={30} />
            <Progress type="line" percent={50} />
            <Progress type="line" percent={70} />
            <Progress type="line" percent={100} />
          </Space>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>圆形进度条</Text>
          <View style={styles.circleGrid}>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={30} size={80} />
              <Text style={styles.circleLabel}>30%</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={50} size={80} />
              <Text style={styles.circleLabel}>50%</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={70} size={80} />
              <Text style={styles.circleLabel}>70%</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={100} size={80} />
              <Text style={styles.circleLabel}>100%</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default BasicUsage;
