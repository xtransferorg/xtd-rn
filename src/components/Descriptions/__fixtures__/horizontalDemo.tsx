import React from 'react';
import { View, Text } from 'react-native';
import Card from '_global/Card';
import { Descriptions } from '@xrnjs/ui';
import styles from './style';

const HorizontalDemo = () => {
  const items = [
    {
      title: '用户名',
      content: 'admin',
    },
    {
      title: '角色',
      content: '管理员',
    },
    {
      title: '部门',
      content: '技术部',
    },
    {
      title: '权限',
      content: '全部权限',
    },
  ];

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>水平布局</Text>
      <Text style={styles.groupDescription}>
        水平排列的描述列表，标题和内容在同一行显示
      </Text>

      <View style={styles.spacing}>
        <Descriptions title="账户信息" items={items} horizontal={true} />
      </View>

      <View style={styles.spacing}>
        <Descriptions
          title="带边框的水平布局"
          items={items}
          horizontal={true}
          bordered={true}
        />
      </View>
    </Card>
  );
};

export default HorizontalDemo;
