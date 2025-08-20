import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '_global/Card';
import { Descriptions } from '@xrnjs/ui';
import styles from './style';

const ExtraContentDemo = () => {
  const items = [
    {
      title: '文档标题',
      content: 'React Native 开发指南',
    },
    {
      title: '作者',
      content: '张三',
    },
    {
      title: '创建时间',
      content: '2024-01-15',
    },
    {
      title: '最后修改',
      content: '2024-01-20',
    },
  ];

  const extraContent = (
    <TouchableOpacity style={styles.customContent}>
      <Text style={styles.contentText}>编辑</Text>
    </TouchableOpacity>
  );

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>扩展内容</Text>
      <Text style={styles.groupDescription}>
        在标题右侧添加额外的操作按钮或内容
      </Text>

      <View style={styles.spacing}>
        <Descriptions title="文档信息" items={items} extra={extraContent} />
      </View>
    </Card>
  );
};

export default ExtraContentDemo;
