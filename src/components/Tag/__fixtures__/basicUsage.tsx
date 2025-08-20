import React from 'react';
import { Text } from 'react-native';
import { Tag, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 基础用法示例
 */
const BasicUsage = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>基础标签</Text>
        <Text style={styles.exampleDescription}>最简单的用法</Text>
        <Space direction="horizontal" wrap>
          <Tag type="primary">主要标签</Tag>
          <Tag type="ghost">幽灵标签</Tag>
          <Tag type="hazy">朦胧标签</Tag>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>自定义颜色</Text>
        <Text style={styles.exampleDescription}>
          使用 color 和 textColor 自定义标签颜色
        </Text>
        <Space direction="horizontal" wrap>
          <Tag color="#f50">红色标签</Tag>
          <Tag color="#2db7f5">蓝色标签</Tag>
          <Tag color="#87d068">绿色标签</Tag>
          <Tag color="#108ee9" textColor="#fff">
            自定义文字颜色
          </Tag>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>细边框</Text>
        <Text style={styles.exampleDescription}>
          使用 hairline 属性设置细边框
        </Text>
        <Space direction="horizontal" wrap>
          <Tag type="ghost">普通边框</Tag>
          <Tag type="ghost" hairline>
            细边框
          </Tag>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicUsage;
