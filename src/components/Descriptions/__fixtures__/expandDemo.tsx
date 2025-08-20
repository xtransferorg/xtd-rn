import React from 'react';
import { View, Text } from 'react-native';
import Card from '_global/Card';
import { Descriptions } from '@xrnjs/ui';
import styles from './style';

const ExpandDemo = () => {
  const items = [
    {
      title: '产品名称',
      content: 'React Native 组件库',
    },
    {
      title: '版本号',
      content: 'v1.0.0',
    },
    {
      title: '发布时间',
      content: '2024-01-15',
    },
    {
      title: '描述',
      content:
        '一个功能丰富的 React Native UI 组件库，提供了丰富的组件和工具函数。',
    },
  ];

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>展开收起</Text>
      <Text style={styles.groupDescription}>
        支持展开收起功能，可以控制内容的显示和隐藏
      </Text>

      <View style={styles.spacing}>
        <Descriptions
          title="可展开的描述列表"
          items={items}
          expanded={true}
          defaultValue={false}
        />
      </View>

      <View style={styles.spacing}>
        <Descriptions
          title="不可展开/收起的描述列表"
          items={items}
          expanded={false}
        />
      </View>
    </Card>
  );
};

export default ExpandDemo;
