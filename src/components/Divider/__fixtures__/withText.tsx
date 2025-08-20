/**
 * title: 带文字的分割线
 * desc: 可以在分割线中间插入文字，通过 contentPosition 属性设置文字位置。
 */

import React from 'react';
import { Text } from 'react-native';
import { Divider, Space, Card } from '@xrnjs/ui';
import { styles } from './style';

const WithText: React.FC = () => {
  return (
    <Space>
      <Card style={styles.container}>
        <Text style={styles.title}>居中文字</Text>
        <Text style={styles.content}>上方内容</Text>
        <Divider contentPosition="center">分割线文字</Divider>
        <Text style={styles.content}>下方内容</Text>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>左侧文字</Text>
        <Text style={styles.content}>上方内容</Text>
        <Divider contentPosition="left">左侧文字</Divider>
        <Text style={styles.content}>下方内容</Text>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>右侧文字</Text>
        <Text style={styles.content}>上方内容</Text>
        <Divider contentPosition="right">右侧文字</Divider>
        <Text style={styles.content}>下方内容</Text>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>自定义文字样式</Text>
        <Text style={styles.content}>上方内容</Text>
        <Divider contentPosition="center" textStyle={styles.customText}>
          自定义样式文字
        </Divider>
        <Text style={styles.content}>下方内容</Text>
      </Card>
    </Space>
  );
};

export default WithText;
