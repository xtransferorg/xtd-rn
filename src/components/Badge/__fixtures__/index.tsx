import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Badge, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BadgeScreen = () => {
  return (
    <ScrollView>
      <Space>
        <Card style={{ padding: 20, height: 120 }}>
          <Text style={{ marginBottom: 12 }}>包裹子组件</Text>
          <Space direction="horizontal" gap={12}>
            <Badge count={999} dot>
              <View style={styles.badgeChild} />
            </Badge>
            <Badge
              // countTextStyle={{ paddingHorizontal: 0, fontSize: 5 }}
              count={2}
            >
              <View style={styles.badgeChild} />
            </Badge>
            <Badge count="描述" custom>
              <View style={styles.badgeChild} />
            </Badge>
            <Badge count="描述" custom>
              <View style={styles.badgeChild} />
            </Badge>
            <Badge
              count={999}
              countContainerStyle={{ width: 30 }}
              offset={[15, -6]}
            >
              <View style={[styles.badgeChild, { width: 20 }]} />
            </Badge>
          </Space>
        </Card>

        <Card style={{ padding: 20, height: 120 }}>
          <Text style={{ marginBottom: 12 }}>自定义最大数字、文字最多4个</Text>
          <Space direction="horizontal" gap={24}>
            <Badge count={99}>
              <View style={styles.badgeChild} />
            </Badge>
            <Badge count={999}>
              <View style={styles.badgeChild} />
            </Badge>
            <Badge count="描述文字信息" custom>
              <View style={styles.badgeChild} />
            </Badge>
            <Badge count="超多" custom>
              <View style={styles.badgeChild} />
            </Badge>
          </Space>
        </Card>

        <Card style={{ padding: 20, height: 120 }}>
          <Text style={{ marginBottom: 12 }}>自定义状态</Text>
          <Space direction="horizontal" gap={24}>
            <Badge count="主状态" status="primary">
              <View style={styles.badgeChild} />
            </Badge>
            <Badge count="成功" status="success">
              <View style={styles.badgeChild} />
            </Badge>
            <Badge count="警告" custom status="warning">
              <View style={styles.badgeChild} />
            </Badge>
            <Badge count="错误" custom status="error">
              <View style={styles.badgeChild} />
            </Badge>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};
export default BadgeScreen;
