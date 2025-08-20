import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { Tag, TagFunc, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { IconXClosesmall1, IconXStar1 } from '../../../icons/index';

/**
 * 可关闭标签示例
 */
const ClosableTags = () => {
  const [tags, setTags] = useState([
    { id: 1, text: '标签一', visible: true },
    { id: 2, text: '标签二', visible: true },
    { id: 3, text: '标签三', visible: true },
    { id: 4, text: '很长的标签文本内容', visible: true },
  ]);

  const [dynamicTags, setDynamicTags] = useState([
    '可编辑标签1',
    '可编辑标签2',
    '可编辑标签3',
    '很长的可编辑标签文本内容',
  ]);

  const handleClose = (id: number) => {
    setTags((prev) =>
      prev.map((tag) => (tag.id === id ? { ...tag, visible: false } : tag))
    );
  };

  const handleDynamicClose = (index: number) => {
    setDynamicTags((prev) => prev.filter((_, i) => i !== index));
  };

  const resetTags = () => {
    setTags((prev) => prev.map((tag) => ({ ...tag, visible: true })));
    setDynamicTags([
      '可编辑标签1',
      '可编辑标签2',
      '可编辑标签3',
      '很长的可编辑标签文本内容',
    ]);
  };

  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>基础可关闭标签</Text>
        <Text style={styles.exampleDescription}>点击关闭按钮隐藏标签</Text>
        <Space direction="horizontal" wrap>
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              closable
              visible={tag.visible}
              onClose={() => handleClose(tag.id)}
              style={styles.closableTag}
            >
              {tag.text}
            </Tag>
          ))}
        </Space>
        <Text style={styles.resetButton} onPress={resetTags}>
          重置标签
        </Text>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>动态可关闭标签</Text>
        <Text style={styles.exampleDescription}>动态删除标签数组</Text>
        <Space direction="horizontal" wrap>
          {dynamicTags.map((tag, index) => (
            <Tag
              key={index}
              closable
              onClose={() => handleDynamicClose(index)}
              style={styles.closableTag}
            >
              {tag}
            </Tag>
          ))}
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>带图标的可关闭标签</Text>
        <Text style={styles.exampleDescription}>同时包含图标和关闭按钮</Text>
        <Space direction="horizontal" wrap>
          <Tag
            closable
            icon={<IconXStar1 size={12} />}
            onClose={() => Alert.alert('提示', '标签已关闭')}
          >
            收藏标签
          </Tag>
          <Tag
            closable
            tagFunc={TagFunc.strengthen}
            icon={<IconXStar1 size={12} fillColor="white" />}
            onClose={() => Alert.alert('提示', '强调标签已关闭')}
          >
            强调收藏
          </Tag>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>自定义关闭图标</Text>
        <Text style={styles.exampleDescription}>使用自定义的关闭图标</Text>
        <Space direction="horizontal" wrap>
          <Tag
            closable
            closeIcon={<IconXClosesmall1 fillColor="#f50" size={14} />}
            onClose={() => Alert.alert('提示', '自定义关闭图标')}
          >
            自定义关闭
          </Tag>
        </Space>
      </Card>
    </Space>
  );
};

export default ClosableTags;
