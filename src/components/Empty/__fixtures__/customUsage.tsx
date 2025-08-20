/**
 * title: 自定义样式
 * desc: 自定义空状态的样式和图片，记住必须在 style 中设置尺寸
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Empty, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { emptyStyles } from './style';

const CustomUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={emptyStyles.title}>自定义容器样式</Text>
        <Text style={emptyStyles.subtitle}>设置背景色、边框等样式</Text>
        <View style={emptyStyles.demoContainer}>
          <Empty
            style={{
              width: 200,
              height: 150,
              backgroundColor: '#f0f8ff',
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#1890ff',
              borderStyle: 'dashed',
            }}
          />
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>自定义图片样式</Text>
        <Text style={emptyStyles.subtitle}>修改图片的透明度和颜色</Text>
        <View style={emptyStyles.demoContainer}>
          <Empty
            style={{
              width: 200,
              height: 150,
            }}
            imageStyle={{
              opacity: 0.6,
              tintColor: '#52c41a',
            }}
          />
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>圆形容器</Text>
        <Text style={emptyStyles.subtitle}>创建圆形的空状态容器</Text>
        <View style={emptyStyles.demoContainer}>
          <Empty
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#fff2e8',
              borderRadius: 60,
              borderWidth: 1,
              borderColor: '#faad14',
            }}
            imageStyle={{
              tintColor: '#faad14',
            }}
          />
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>响应式尺寸</Text>
        <Text style={emptyStyles.subtitle}>使用百分比设置响应式尺寸</Text>
        <View style={emptyStyles.container}>
          <Empty
            style={{
              width: '80%',
              height: '80%',
              backgroundColor: '#fafafa',
              borderRadius: 8,
            }}
          />
        </View>
      </Card>
    </Space>
  );
};

export default CustomUsage;
