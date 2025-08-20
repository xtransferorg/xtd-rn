import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Tag, TagFunc, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { IconXStar1, IconXAddplus1 } from '../../../icons/index';

/**
 * 高级功能示例
 */
const AdvancedFeatures = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['tag1']);
  const [customTags, setCustomTags] = useState(['自定义1', '自定义2']);

  const selectableTags = [
    { key: 'tag1', label: '标签一' },
    { key: 'tag2', label: '标签二' },
    { key: 'tag3', label: '标签三' },
    { key: 'tag4', label: '标签四' },
  ];

  const toggleTag = (key: string) => {
    setSelectedTags((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const addCustomTag = () => {
    const newTag = `自定义${customTags.length + 1}`;
    setCustomTags((prev) => [...prev, newTag]);
  };

  const removeCustomTag = (index: number) => {
    setCustomTags((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>可选择标签</Text>
        <Text style={styles.exampleDescription}>点击标签进行选择/取消选择</Text>
        <Space direction="horizontal" wrap>
          {selectableTags.map((tag) => (
            <TouchableOpacity key={tag.key} onPress={() => toggleTag(tag.key)}>
              <Tag
                tagFunc={
                  selectedTags.includes(tag.key)
                    ? TagFunc.strengthen
                    : TagFunc.weaken
                }
                style={styles.selectableTag}
              >
                {tag.label}
              </Tag>
            </TouchableOpacity>
          ))}
        </Space>
        <Text style={styles.selectedInfo}>
          已选择: {selectedTags.join(', ') || '无'}
        </Text>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>动态添加标签</Text>
        <Text style={styles.exampleDescription}>动态添加和删除标签</Text>
        <Space direction="horizontal" wrap>
          {customTags.map((tag, index) => (
            <Tag
              key={index}
              closable
              onClose={() => removeCustomTag(index)}
              style={styles.closableTag}
            >
              {tag}
            </Tag>
          ))}
          <TouchableOpacity onPress={addCustomTag}>
            <Tag
              type="ghost"
              icon={<IconXAddplus1 size={12} />}
              style={styles.addTag}
            >
              添加标签
            </Tag>
          </TouchableOpacity>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>标签组合应用</Text>
        <Text style={styles.exampleDescription}>实际应用场景中的标签组合</Text>
        <Space>
          <Text style={styles.categoryTitle}>商品标签：</Text>
          <Space direction="horizontal" wrap>
            <Tag tagFunc={TagFunc.strengthen} color="#ff4d4f">
              热销
            </Tag>
            <Tag tagFunc={TagFunc.strengthen} color="#52c41a">
              新品
            </Tag>
            <Tag type="ghost" color="#1890ff">
              包邮
            </Tag>
            <Tag type="hazy" color="#faad14">
              限时
            </Tag>
          </Space>

          <Text style={styles.categoryTitle}>用户标签：</Text>
          <Space direction="horizontal" wrap>
            <Tag
              icon={<IconXStar1 size={10} fillColor="white" />}
              tagFunc={TagFunc.strengthen}
              color="#722ed1"
            >
              VIP
            </Tag>
            <Tag type="ghost" color="#eb2f96">
              新用户
            </Tag>
            <Tag type="hazy" color="#13c2c2">
              活跃用户
            </Tag>
          </Space>

          <Text style={styles.categoryTitle}>状态标签：</Text>
          <Space direction="horizontal" wrap>
            {Tag.processing({ children: '处理中', size: 's' })}
            {Tag.success({ children: '已完成', size: 's' })}
            {Tag.error({ children: '失败', size: 's' })}
          </Space>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>响应式标签</Text>
        <Text style={styles.exampleDescription}>根据内容长度自适应的标签</Text>
        <Space>
          <Tag>短</Tag>
          <Tag>中等长度标签</Tag>
          <Tag>这是一个很长的标签文本内容，用于测试标签的自适应能力</Tag>
          <Tag closable>
            可关闭的长标签文本内容，测试关闭按钮与长文本的配合效果
          </Tag>
        </Space>
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
