/**
 * title: 响应式布局
 * desc: 在不同容器尺寸下的空状态展示，展示如何正确设置尺寸
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Empty, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { emptyStyles } from './style';

const ResponsiveUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={emptyStyles.title}>不同容器尺寸</Text>
        <Text style={emptyStyles.subtitle}>根据容器大小自动调整图片</Text>

        <Text style={emptyStyles.containerLabel}>小容器 (宽度 &lt; 100px)</Text>
        <View style={emptyStyles.narrowContainer}>
          <Empty style={{ width: '100%', height: '100%' }} />
        </View>

        <Text style={emptyStyles.containerLabel}>
          中等容器 (宽度 &gt; 100px)
        </Text>
        <View style={emptyStyles.wideContainer}>
          <Empty style={{ width: '100%', height: '100%' }} />
        </View>

        <Text style={emptyStyles.containerLabel}>大容器 (全宽)</Text>
        <View style={emptyStyles.fullContainer}>
          <Empty style={{ width: '100%', height: '100%' }} />
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>固定尺寸对比</Text>
        <Text style={emptyStyles.subtitle}>不同固定尺寸的效果对比</Text>

        <View style={emptyStyles.demoContainer}>
          <Text style={emptyStyles.containerLabel}>80x60</Text>
          <Empty style={{ width: 80, height: 60 }} />
        </View>

        <View style={emptyStyles.demoContainer}>
          <Text style={emptyStyles.containerLabel}>120x90</Text>
          <Empty style={{ width: 120, height: 90 }} />
        </View>

        <View style={emptyStyles.demoContainer}>
          <Text style={emptyStyles.containerLabel}>200x150</Text>
          <Empty style={{ width: 200, height: 150 }} />
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>百分比尺寸</Text>
        <Text style={emptyStyles.subtitle}>使用百分比实现响应式布局</Text>

        <View style={emptyStyles.responsiveContainer1}>
          <Text style={emptyStyles.containerLabel}>50% x 50%</Text>
          <Empty style={{ width: '50%', height: '50%' }} />
        </View>

        <View style={emptyStyles.responsiveContainer2}>
          <Text style={emptyStyles.containerLabel}>70% x 70%</Text>
          <Empty style={{ width: '70%', height: '70%' }} />
        </View>

        <View style={emptyStyles.responsiveContainer3}>
          <Text style={emptyStyles.containerLabel}>100% x 80%</Text>
          <Empty style={{ width: '100%', height: '80%' }} />
        </View>
      </Card>
    </Space>
  );
};

export default ResponsiveUsage;
