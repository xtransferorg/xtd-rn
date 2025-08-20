import React from 'react';
import { View, Text } from 'react-native';
import { Radio } from '@xrnjs/ui';
import styles from './style';

const CustomStyles: React.FC = () => {
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>自定义容器样式</Text>
        <Text style={styles.subtitle}>自定义背景和边框</Text>
        <View style={styles.customContainer}>
          <Radio
            defaultValue={1}
            options={[
              { label: '自定义样式 A', value: 1 },
              { label: '自定义样式 B', value: 2 },
              { label: '自定义样式 C', value: 3 },
            ]}
            onChange={(value) => console.log('自定义样式选择:', value)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>紧凑布局</Text>
        <Text style={styles.subtitle}>减少间距的紧凑布局</Text>
        <Radio
          defaultValue={1}
          options={[
            { label: '紧凑选项 A', value: 1 },
            { label: '紧凑选项 B', value: 2 },
            { label: '紧凑选项 C', value: 3 },
          ]}
          style={{ gap: 4 }}
          onChange={(value) => console.log('紧凑布局选择:', value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>宽松布局</Text>
        <Text style={styles.subtitle}>增加间距的宽松布局</Text>
        <Radio
          defaultValue={1}
          options={[
            { label: '宽松选项 A', value: 1 },
            { label: '宽松选项 B', value: 2 },
            { label: '宽松选项 C', value: 3 },
          ]}
          style={{ gap: 16 }}
          onChange={(value) => console.log('宽松布局选择:', value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>卡片样式</Text>
        <Text style={styles.subtitle}>每个选项都有独立的卡片样式</Text>
        <Radio
          defaultValue={1}
          options={[
            { label: '🏠 首页', value: 1 },
            { label: '📊 数据', value: 2 },
            { label: '⚙️ 设置', value: 3 },
            { label: '👤 个人', value: 4 },
          ]}
          itemStyle={{
            backgroundColor: '#f8f9fa',
            padding: 12,
            marginVertical: 4,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#e9ecef',
          }}
          onChange={(value) => console.log('卡片样式选择:', value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>主题色彩</Text>
        <Text style={styles.subtitle}>不同主题色彩的单选框</Text>
        <Radio
          defaultValue={1}
          options={[
            { label: '🔴 红色主题', value: 1 },
            { label: '🟢 绿色主题', value: 2 },
            { label: '🔵 蓝色主题', value: 3 },
            { label: '🟡 黄色主题', value: 4 },
          ]}
          onChange={(value) => console.log('主题色彩选择:', value)}
        />
      </View>
    </>
  );
};

export default CustomStyles;
