import React from 'react';
import { View, Text } from 'react-native';
import { Progress, Space } from '@xrnjs/ui';
import { IconXHappy1, IconMACheckmark1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const TextComponent = ({ percent }: { percent: number }) => {
  return <Text>{`${percent}%`}</Text>;
};

const CustomContentUsage: React.FC = () => {
  return (
    <Card title="自定义内容">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持自定义进度条内容，包括文字、图标等
        </Text>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>自定义文字</Text>
          <Space>
            <Progress type="line" percent={60} pivotText="进行中" />
            <Progress
              type="line"
              percent={100}
              pivotText="已完成"
              status="success"
            />
            <Progress type="circle" percent={75} size={80} pivotText="3/4" />
          </Space>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>自定义图标</Text>
          <Space>
            <Progress
              type="line"
              percent={60}
              pivotText={<IconXHappy1 size={16} />}
            />
            <Progress
              type="circle"
              percent={100}
              size={80}
              pivotText={<IconMACheckmark1 size={24} />}
              status="success"
            />
          </Space>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>自定义格式化</Text>
          <Space>
            <Progress
              type="line"
              percent={60}
              format={() => TextComponent({ percent: 60 })}
            />
          </Space>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>自定义子组件</Text>
          <Space>
            <Progress type="line" percent={60}>
              <View style={styles.customContent}>
                <Text>自定义内容</Text>
                <Text style={{ fontWeight: 'bold' }}>60%</Text>
              </View>
            </Progress>
            <Progress type="circle" percent={85} size={80}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>85</Text>
                <Text style={{ fontSize: 12, color: '#666' }}>分</Text>
              </View>
            </Progress>
          </Space>
        </View>
      </View>
    </Card>
  );
};

export default CustomContentUsage;
