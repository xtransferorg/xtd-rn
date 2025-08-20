import React from 'react';
import { View, Text } from 'react-native';
import Card from '_global/Card';
import { Descriptions } from '@xrnjs/ui';
import styles from './style';

const NoHeaderDemo = () => {
  const items = [
    {
      title: '订单号',
      content: 'ORD20240115001',
    },
    {
      title: '下单时间',
      content: '2024-01-15 14:30:00',
    },
    {
      title: '支付方式',
      content: '微信支付',
    },
    {
      title: '订单状态',
      content: '已完成',
    },
  ];

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>无标题</Text>
      <Text style={styles.groupDescription}>
        不显示标题的描述列表，直接展示内容
      </Text>

      <View style={styles.spacing}>
        <Descriptions items={items} />
      </View>
    </Card>
  );
};

export default NoHeaderDemo;
