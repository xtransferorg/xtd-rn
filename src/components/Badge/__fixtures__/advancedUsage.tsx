/**
 * title: 高级用法
 * desc: 展示徽标的高级功能，如最大值限制、零值显示、加载状态等
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Badge, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { badgeStyles } from './style';

const AdvancedUsage: React.FC = () => {
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);

  return (
    <Space>
      <Card>
        <Text style={badgeStyles.title}>最大值限制</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count={99} max={99}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={100} max={99}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={1000} max={999}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={10000} max={9999}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>零值显示</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count={0}>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={0} showZero>
            <View style={badgeStyles.badgeChild} />
          </Badge>
          <Badge count={0} showZero status="success">
            <View style={badgeStyles.badgeChild} />
          </Badge>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>动态控制</Text>
        <Space gap={12}>
          <Space direction="horizontal" gap={24}>
            <Badge count={count}>
              <View style={badgeStyles.badgeChild} />
            </Badge>
            <Badge count={count} loading={loading}>
              <View style={badgeStyles.badgeChild} />
            </Badge>
          </Space>
          <Space direction="horizontal" gap={12}>
            <TouchableOpacity
              style={badgeStyles.button}
              onPress={() => setCount(count + 1)}
            >
              <Text style={badgeStyles.buttonText}>增加</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={badgeStyles.button}
              onPress={() => setCount(Math.max(0, count - 1))}
            >
              <Text style={badgeStyles.buttonText}>减少</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={badgeStyles.button}
              onPress={() => setLoading(!loading)}
            >
              <Text style={badgeStyles.buttonText}>
                {loading ? '停止加载' : '开始加载'}
              </Text>
            </TouchableOpacity>
          </Space>
        </Space>
      </Card>

      <Card>
        <Text style={badgeStyles.title}>独立使用</Text>
        <Space direction="horizontal" gap={24}>
          <Badge count={25} />
          <Badge count="热门" />
          <Badge dot />
          <Badge count="NEW" custom color="#52c41a" />
        </Space>
      </Card>
    </Space>
  );
};

export default AdvancedUsage;
