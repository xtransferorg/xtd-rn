import React from 'react';
import { View, Text } from 'react-native';
import { Radio } from '@xrnjs/ui';
import styles from './style';

const LayoutStyles: React.FC = () => {
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>垂直布局</Text>
        <Text style={styles.subtitle}>默认垂直排列</Text>
        <Radio
          defaultValue={1}
          options={[
            { label: '垂直选项 A', value: 1 },
            { label: '垂直选项 B', value: 2 },
            { label: '垂直选项 C', value: 3 },
          ]}
          onChange={(value) => console.log('垂直布局选择:', value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>水平布局</Text>
        <Text style={styles.subtitle}>水平排列选项</Text>
        <Radio
          defaultValue={1}
          direction="horizontal"
          options={[
            { label: '水平 A', value: 1 },
            { label: '水平 B', value: 2 },
            { label: '水平 C', value: 3 },
          ]}
          onChange={(value) => console.log('水平布局选择:', value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>分列布局</Text>
        <Text style={styles.subtitle}>两列显示，适合长文本</Text>
        <Radio
          defaultValue={1}
          split
          labelAlign="top"
          options={[
            {
              label: '这是一段较长的文字内容示例，用于测试分列布局效果',
              value: 1,
            },
            {
              label: '另一段较长的文字内容，展示分列布局的实际效果',
              value: 2,
            },
            {
              label: '第三个选项的文字内容',
              value: 3,
            },
            {
              label: '第四个选项内容',
              value: 4,
            },
          ]}
          onChange={(value) => console.log('分列布局选择:', value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>标签对齐</Text>
        <Text style={styles.subtitle}>顶部对齐适合多行文本</Text>
        <Radio
          defaultValue={1}
          labelAlign="top"
          options={[
            {
              label:
                '顶部对齐的长文本示例，当文本内容较多时，单选按钮会与第一行文字顶部对齐',
              value: 1,
            },
            {
              label: '另一个多行文本示例，展示顶部对齐的效果',
              value: 2,
            },
            {
              label: '短文本',
              value: 3,
            },
          ]}
          onChange={(value) => console.log('标签对齐选择:', value)}
        />
      </View>
    </>
  );
};

export default LayoutStyles;
