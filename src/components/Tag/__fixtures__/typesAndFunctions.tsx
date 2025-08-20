import React from 'react';
import { Text } from 'react-native';
import { Tag, TagFunc, TagType, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 标签类型和功能示例
 */
const TypesAndFunctions = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>标签类型</Text>
        <Text style={styles.exampleDescription}>
          solid（面标签）和 outline（线标签）
        </Text>
        <Space direction="horizontal" wrap>
          <Tag tagType={TagType.solid}>面标签</Tag>
          <Tag tagType={TagType.outline}>线标签</Tag>
          <Tag tagType={TagType.solid} tagFunc={TagFunc.strengthen}>
            强调面标签
          </Tag>
          <Tag tagType={TagType.outline} tagFunc={TagFunc.strengthen}>
            强调线标签
          </Tag>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>标签功能</Text>
        <Text style={styles.exampleDescription}>不同功能的标签样式</Text>
        <Space direction="horizontal" wrap>
          <Tag tagFunc={TagFunc.strengthen}>强调标签</Tag>
          <Tag tagFunc={TagFunc.normal}>普通标签</Tag>
          <Tag tagFunc={TagFunc.weaken}>弱化标签</Tag>
          <Tag tagFunc={TagFunc.translucent}>半透明标签</Tag>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>组合使用</Text>
        <Text style={styles.exampleDescription}>标签类型与功能的组合</Text>
        <Space direction="horizontal" wrap>
          <Tag tagType={TagType.solid} tagFunc={TagFunc.strengthen}>
            强调面标签
          </Tag>
          <Tag tagType={TagType.solid} tagFunc={TagFunc.weaken}>
            弱化面标签
          </Tag>
          <Tag tagType={TagType.outline} tagFunc={TagFunc.strengthen}>
            强调线标签
          </Tag>
          <Tag tagType={TagType.outline} tagFunc={TagFunc.weaken}>
            弱化线标签
          </Tag>
        </Space>
      </Card>
    </Space>
  );
};

export default TypesAndFunctions;
