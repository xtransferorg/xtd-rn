import React from 'react';
import { View, Text } from 'react-native';
import Card from '_global/Card';
import { Descriptions } from '@xrnjs/ui';
import styles from './style';

const BasicUsage = () => {
  const items = [
    {
      title: '姓名',
      content: '张三',
    },
    {
      title: '年龄',
      content: '25岁',
    },
    {
      title: '职业',
      content: '前端工程师',
    },
    {
      title: '邮箱',
      content: 'zhangsan@example.com',
    },
  ];

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>基础用法</Text>
      <Text style={styles.groupDescription}>
        最基本的描述列表用法，展示基本信息
      </Text>

      <View style={styles.spacing}>
        <Descriptions title="用户信息" items={items} />
      </View>
    </Card>
  );
};

export default BasicUsage;
