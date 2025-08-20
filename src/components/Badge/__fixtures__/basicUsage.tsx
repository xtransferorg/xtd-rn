/**
 * title: 基础用法
 * desc: 最简单的用法，适用于简单的数字或文字提示
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Badge, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { badgeStyles } from './style';

const BasicUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={badgeStyles.title}>数字徽标</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count={1}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={4}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={99}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={999}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>文字徽标</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count="新">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count="热门">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count="推荐">
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>小红点</Text>
        <Space direction="horizontal" gap={24}>
          <Badge dot>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge dot count={100}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicUsage;
