/**
 * title: 基础用法
 * desc: 默认为水平分割线，可通过 direction 属性设置为垂直分割线。
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Divider, Space, Card } from '@xrnjs/ui';
import { styles } from './style';

const BasicUsage: React.FC = () => {
  return (
    <Space>
      <Card style={styles.container}>
        <Text style={styles.title}>水平分割线</Text>
        <Text style={styles.content}>这是第一段内容</Text>
        <Divider />
        <Text style={styles.content}>这是第二段内容</Text>
        <Divider />
        <Text style={styles.content}>这是第三段内容</Text>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>垂直分割线</Text>
        <View style={styles.verticalContainer}>
          <Text style={styles.content}>左侧内容</Text>
          <View style={styles.verticalDividerWrapper}>
            <Divider direction="vertical" />
          </View>
          <Text style={styles.content}>中间内容</Text>
          <View style={styles.verticalDividerWrapper}>
            <Divider direction="vertical" />
          </View>
          <Text style={styles.content}>右侧内容</Text>
        </View>
      </Card>
    </Space>
  );
};

export default BasicUsage;
