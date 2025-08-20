import React from 'react';
import { Text } from 'react-native';
import { Card, Space, Type } from '@xrnjs/ui';
import { styles } from './style';

const BasicUsage = () => {
  return (
    <Space>
      <Card
        type={Type.AllCard}
        title="基础卡片"
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          这是一个基础的卡片组件，展示了最简单的用法。
        </Text>
      </Card>

      <Card
        type={Type.NestCard}
        title="嵌套卡片"
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          这是一个嵌套卡片，圆角较小，适合在其他容器内使用。
        </Text>
      </Card>

      <Card
        title="无类型卡片"
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          这是一个没有指定类型的卡片，使用默认样式。
        </Text>
      </Card>
    </Space>
  );
};

export default BasicUsage;
