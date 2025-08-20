/**
 * title: 基础用法
 * desc: Empty 组件必须通过 style 属性设置容器尺寸才能正确显示，width 和 height 属性仅用于内部逻辑
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Empty, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { emptyStyles } from './style';

const BasicUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={emptyStyles.title}>默认空状态</Text>
        <Text style={emptyStyles.subtitle}>通过 style 设置容器尺寸</Text>
        <View style={emptyStyles.container}>
          <Empty style={{ width: '100%', height: '100%' }} />
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>固定尺寸</Text>
        <Text style={emptyStyles.subtitle}>直接在 style 中设置具体尺寸</Text>
        <View style={emptyStyles.demoContainer}>
          <Empty style={{ width: 200, height: 150 }} />
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>小尺寸空状态</Text>
        <Text style={emptyStyles.subtitle}>适用于较小的展示区域</Text>
        <View style={emptyStyles.demoContainer}>
          <Empty style={{ width: 120, height: 80 }} />
        </View>
      </Card>
    </Space>
  );
};

export default BasicUsage;
