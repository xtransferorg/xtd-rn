/**
 * title: 自定义样式
 * desc: 自定义徽标的颜色、位置、形状等样式
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Badge, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { badgeStyles } from './style';

const CustomUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={badgeStyles.title}>自定义颜色</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count={5} color="#f50">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={10} color="#2db7f5">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={15} color="#87d068">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={20} color="#108ee9">
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>自定义位置</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count={3} offset={[5, -5]}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={6} offset={[15, -10]}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={9} offset={[-5, 5]}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={12} offset={[20, -15]}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>自定义形状</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count="VIP" custom>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count="HOT" custom color="#ff6b35">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count="NEW" custom color="#52c41a">
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count="限时" custom color="#722ed1">
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>自定义样式</Text>
        <Space direction="horizontal" gap={24}>
          <Badge
            count={88}
            countStyle={{ backgroundColor: '#faad14', minWidth: 30 }}
            countTextStyle={{ fontSize: 10, fontWeight: 'bold' }}
          >
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge
            count="特价"
            countStyle={{ backgroundColor: '#eb2f96', borderRadius: 4 }}
            countTextStyle={{ fontSize: 9 }}
          >
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>
    </Space>
  );
};

export default CustomUsage;
