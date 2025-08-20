import React from 'react';
import { View, Text } from 'react-native';
import Card from '_global/Card';
import { Descriptions } from '@xrnjs/ui';
import styles from './style';

const BorderedDemo = () => {
  const items = [
    {
      title: '商品名称',
      content: 'iPhone 15 Pro',
    },
    {
      title: '颜色',
      content: '深空黑色',
    },
    {
      title: '存储容量',
      content: '256GB',
    },
    {
      title: '价格',
      content: '¥8,999',
    },
    {
      title: '库存状态',
      content: '现货',
    },
  ];

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>边框样式</Text>
      <Text style={styles.groupDescription}>
        带边框的描述列表，更清晰地区分各个条目
      </Text>

      <View style={styles.spacing}>
        <Descriptions title="商品信息" items={items} bordered={true} />
      </View>
    </Card>
  );
};

export default BorderedDemo;
