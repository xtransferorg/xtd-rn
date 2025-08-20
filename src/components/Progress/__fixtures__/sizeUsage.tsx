import React from 'react';
import { View, Text } from 'react-native';
import { Progress, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const SizeUsage: React.FC = () => {
  return (
    <Card title="尺寸">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持多种尺寸设置，包括预设尺寸和自定义尺寸
        </Text>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>线性进度条尺寸</Text>
          <Space>
            <View>
              <Text style={styles.circleLabel}>{`小尺寸 (size="small")`}</Text>
              <Progress type="line" percent={60} size="small" />
            </View>
            <View>
              <Text
                style={styles.circleLabel}
              >{`默认尺寸 (size="default")`}</Text>
              <Progress type="line" percent={60} size="default" />
            </View>
            <View>
              <Text style={styles.circleLabel}>自定义宽度 (size=300)</Text>
              <Progress type="line" percent={60} size={300} />
            </View>
            <View>
              <Text style={styles.circleLabel}>
                自定义宽高 (size=[250, 12])
              </Text>
              <Progress type="line" percent={60} size={[250, 12]} />
            </View>
          </Space>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>圆形进度条尺寸</Text>
          <View style={styles.circleGrid}>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={60} size="small" />
              <Text style={styles.circleLabel}>小尺寸</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={60} size="default" />
              <Text style={styles.circleLabel}>默认尺寸</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={60} size={100} />
              <Text style={styles.circleLabel}>自定义大小</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress type="circle" percent={60} size={[80, 8]} />
              <Text style={styles.circleLabel}>自定义尺寸和线宽</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default SizeUsage;
