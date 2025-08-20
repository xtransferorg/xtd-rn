import React from 'react';
import { View, Text } from 'react-native';
import { Progress, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const PositionUsage: React.FC = () => {
  return (
    <Card title="文字位置">
      <View style={styles.section}>
        <Text style={styles.description}>
          线性进度条支持将进度文字显示在不同位置
        </Text>

        <Space>
          <View style={styles.positionDemo}>
            <Text
              style={styles.circleLabel}
            >{`顶部 (percentPosition="top")`}</Text>
            <Progress type="line" percent={60} percentPosition="top" />
          </View>

          <View style={styles.positionDemo}>
            <Text style={styles.circleLabel}>
              {`右侧 (percentPosition="right")`}
            </Text>
            <Progress type="line" percent={60} percentPosition="right" />
          </View>

          <View style={styles.positionDemo}>
            <Text style={styles.circleLabel}>
              {`底部 (percentPosition="bottom")`}
            </Text>
            <Progress type="line" percent={60} percentPosition="bottom" />
          </View>

          <View style={styles.positionDemo}>
            <Text style={styles.circleLabel}>
              {`左侧 (percentPosition="left")`}
            </Text>
            <Progress type="line" percent={60} percentPosition="left" />
          </View>

          <View style={styles.positionDemo}>
            <Text style={styles.circleLabel}>不显示文字 (showInfo=false)</Text>
            <Progress type="line" percent={60} showInfo={false} />
          </View>
        </Space>
      </View>
    </Card>
  );
};

export default PositionUsage;
