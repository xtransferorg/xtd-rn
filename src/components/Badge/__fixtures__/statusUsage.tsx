/**
 * title: 状态类型
 * desc: 不同状态的徽标，用于表示不同的业务状态
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Badge, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { badgeStyles } from './style';

const StatusUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={badgeStyles.title}>状态徽标</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count={5} status="primary">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={3} status="success">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={8} status="warning">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={2} status="error">
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>状态文字</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count="主要" status="primary">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count="成功" status="success">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count="警告" status="warning">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count="错误" status="error">
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>状态小红点</Text>
        <Space direction="horizontal" gap={24}>
          <Badge dot status="primary">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge dot status="success">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge dot status="warning">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge dot status="error">
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>
    </Space>
  );
};

export default StatusUsage;
