import React from 'react';
import { View, Text } from 'react-native';
import { Progress, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const StatusUsage: React.FC = () => {
  return (
    <Card title="状态">
      <View style={styles.section}>
        <Text style={styles.description}>
          进度条支持正常、成功、异常三种状态
        </Text>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>线性进度条状态</Text>
          <Space>
            <Progress type="line" percent={30} status="normal" />
            <Progress type="line" percent={100} status="success" />
            <Progress type="line" percent={50} status="exception" />
          </Space>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>圆形进度条状态</Text>
          <View style={styles.circleGrid}>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={30} status="normal" size={80} />
              <Text style={styles.circleLabel}>正常</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress
                type="circle"
                percent={100}
                status="success"
                size={80}
              />
              <Text style={styles.circleLabel}>成功</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress
                type="circle"
                percent={50}
                status="exception"
                size={80}
              />
              <Text style={styles.circleLabel}>异常</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default StatusUsage;
