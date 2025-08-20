import React from 'react';
import { Text } from 'react-native';
import { Tag, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 状态标签示例
 */
const StatusTags = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>状态标签</Text>
        <Text style={styles.exampleDescription}>用于表示不同的状态信息</Text>
        <Space>
          {Tag.processing({ children: '流程中', style: styles.statusTag })}
          {Tag.interrupt({ children: '流程中断', style: styles.statusTag })}
          {Tag.terminate({ children: '流程终止', style: styles.statusTag })}
          {Tag.error({ children: '流程失败', style: styles.statusTag })}
          {Tag.success({ children: '流程成功', style: styles.statusTag })}
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>长文本状态标签</Text>
        <Text style={styles.exampleDescription}>状态标签支持长文本显示</Text>
        <Space>
          {Tag.processing({
            children:
              '流程中 - 这是一个很长的状态描述信息，用于测试长文本的显示效果',
            style: styles.statusTag,
          })}
          {Tag.success({
            children: '流程成功 - 所有步骤已完成，数据处理正常',
            style: styles.statusTag,
          })}
          {Tag.error({
            children: '流程失败 - 发生了未知错误，请联系管理员处理',
            style: styles.statusTag,
          })}
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>不同尺寸的状态标签</Text>
        <Text style={styles.exampleDescription}>状态标签的尺寸变化</Text>
        <Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>大尺寸：</Text>
            {Tag.processing({ children: '流程中', size: 'l' })}
            {Tag.success({ children: '成功', size: 'l' })}
            {Tag.error({ children: '失败', size: 'l' })}
          </Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>中尺寸：</Text>
            {Tag.processing({ children: '流程中', size: 'm' })}
            {Tag.success({ children: '成功', size: 'm' })}
            {Tag.error({ children: '失败', size: 'm' })}
          </Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>小尺寸：</Text>
            {Tag.processing({ children: '流程中', size: 's' })}
            {Tag.success({ children: '成功', size: 's' })}
            {Tag.error({ children: '失败', size: 's' })}
          </Space>
        </Space>
      </Card>
    </Space>
  );
};

export default StatusTags;
