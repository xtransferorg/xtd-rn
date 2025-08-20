/**
 * title: 虚线分割线
 * desc: 通过 dashed 属性设置虚线样式。
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Divider, Space, Card } from '@xrnjs/ui';
import { styles } from './style';

const DashedLine: React.FC = () => {
  return (
    <Space>
      <Card style={styles.container}>
        <Text style={styles.title}>水平虚线</Text>
        <Text style={styles.content}>这是第一段内容</Text>
        <Divider dashed />
        <Text style={styles.content}>这是第二段内容</Text>
        <Divider dashed />
        <Text style={styles.content}>这是第三段内容</Text>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>垂直虚线</Text>
        <View style={styles.verticalContainer}>
          <Text style={styles.content}>左侧内容</Text>
          <View style={styles.verticalDividerWrapper}>
            <Divider direction="vertical" dashed />
          </View>
          <Text style={styles.content}>中间内容</Text>
          <View style={styles.verticalDividerWrapper}>
            <Divider direction="vertical" dashed />
          </View>
          <Text style={styles.content}>右侧内容</Text>
        </View>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>带文字的虚线</Text>
        <Text style={styles.content}>上方内容</Text>
        <Divider dashed contentPosition="center">
          虚线分割
        </Divider>
        <Text style={styles.content}>下方内容</Text>
      </Card>
    </Space>
  );
};

export default DashedLine;
