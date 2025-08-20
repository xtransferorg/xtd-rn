import React from 'react';
import { View, Text } from 'react-native';
import Card from '_global/Card';
import { Descriptions, FloatingLayer } from '@xrnjs/ui';
import styles from './style';

const MultipleDemo = () => {
  const userItems = [
    {
      title: '姓名',
      content: '李四',
    },
    {
      title: '部门',
      content: '产品部',
    },
  ];

  const projectItems = [
    {
      title: '项目名称',
      content: '移动端应用',
    },
    {
      title: '进度',
      content: '80%',
    },
  ];

  const floatingItems = [
    {
      title: '弹层标题',
      content: '这是在浮层中的描述列表',
    },
    {
      title: '用途',
      content: '演示在浮层组件中使用描述列表',
    },
  ];

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>多个描述列表</Text>
      <Text style={styles.groupDescription}>
        在同一个页面中使用多个描述列表，以及在浮层中使用
      </Text>

      <View style={styles.spacing}>
        <Descriptions
          title="用户信息"
          items={userItems}
          style={styles.descriptionsBottom}
        />
      </View>

      <View style={styles.spacing}>
        <Descriptions
          title="项目信息"
          items={projectItems}
          style={styles.descriptionsBottom}
        />
      </View>

      <View style={styles.spacing}>
        <FloatingLayer>
          <View style={styles.floatingLayer}>
            <Descriptions title="浮层中的描述列表" items={floatingItems} />
          </View>
        </FloatingLayer>
      </View>
    </Card>
  );
};

export default MultipleDemo;
