/**
 * title: 自定义样式
 * desc: 可以自定义分割线的颜色、类型等样式。
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Divider, Space, Card } from '@xrnjs/ui';
import { styles } from './style';

const CustomStyle: React.FC = () => {
  return (
    <Space>
      <Card style={styles.container}>
        <Text style={styles.title}>自定义颜色</Text>
        <Text style={styles.content}>默认颜色分割线</Text>
        <Divider />
        <Text style={styles.content}>红色分割线</Text>
        <Divider color="#ff4d4f" />
        <Text style={styles.content}>蓝色分割线</Text>
        <Divider color="#1890ff" />
        <Text style={styles.content}>绿色分割线</Text>
        <Divider color="#52c41a" />
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>自定义宽度</Text>
        <Text style={styles.content}>默认宽度</Text>
        <Divider />
        <Text style={styles.content}>自定义宽度 200</Text>
        <Divider style={styles.customWidth} />
        <Text style={styles.content}>自定义宽度 150</Text>
        <Divider style={styles.customWidthSmall} />
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>垂直分割线高度</Text>
        <View style={styles.verticalContainer}>
          <Text style={styles.content}>默认高度</Text>
          <View style={styles.verticalDividerWrapper}>
            <Divider direction="vertical" />
          </View>
          <Text style={styles.content}>高度 60</Text>
          <View style={styles.verticalDividerWrapperTall}>
            <Divider direction="vertical" />
          </View>
          <Text style={styles.content}>高度 40</Text>
          <View style={styles.verticalDividerWrapperShort}>
            <Divider direction="vertical" />
          </View>
        </View>
      </Card>
    </Space>
  );
};

export default CustomStyle;
