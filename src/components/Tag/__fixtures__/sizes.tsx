import React from 'react';
import { Text } from 'react-native';
import { Tag, Space, TagType, TagFunc } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 尺寸示例
 */
const Sizes = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>标签尺寸</Text>
        <Text style={styles.exampleDescription}>三种不同尺寸的标签</Text>
        <Space direction="horizontal" wrap>
          <Tag size="l">大标签</Tag>
          <Tag size="m">中标签（默认）</Tag>
          <Tag size="s">小标签</Tag>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>不同类型的尺寸</Text>
        <Text style={styles.exampleDescription}>不同类型标签的尺寸对比</Text>
        <Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>实心标签：</Text>
            <Tag tagType={TagType.solid} size="l">
              大
            </Tag>
            <Tag tagType={TagType.solid} size="m">
              中
            </Tag>
            <Tag tagType={TagType.solid} size="s">
              小
            </Tag>
          </Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>空心标签：</Text>
            <Tag tagType={TagType.outline} size="l">
              大
            </Tag>
            <Tag tagType={TagType.outline} size="m">
              中
            </Tag>
            <Tag tagType={TagType.outline} size="s">
              小
            </Tag>
          </Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>强化标签：</Text>
            <Tag tagFunc={TagFunc.strengthen} size="l">
              大
            </Tag>
            <Tag tagFunc={TagFunc.strengthen} size="m">
              中
            </Tag>
            <Tag tagFunc={TagFunc.strengthen} size="s">
              小
            </Tag>
          </Space>
        </Space>
      </Card>
    </Space>
  );
};

export default Sizes;
