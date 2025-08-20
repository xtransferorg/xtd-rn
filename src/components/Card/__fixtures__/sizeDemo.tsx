import React from 'react';
import { Text } from 'react-native';
import { Card, Space, Type } from '@xrnjs/ui';
import { styles } from './style';

const SizeDemo = () => {
  return (
    <Space>
      <Card
        type={Type.AllCard}
        title="中等尺寸 (默认)"
        size="m"
        bodyPadding={true}
      >
        <Text style={styles.text}>
          这是中等尺寸的卡片，使用默认的内边距和间距。
        </Text>
      </Card>

      <Card type={Type.AllCard} title="小尺寸" size="s" bodyPadding={true}>
        <Text style={styles.text}>
          这是小尺寸的卡片，适合在列表中使用，占用空间较少。
        </Text>
      </Card>

      <Card
        type={Type.NestCard}
        title="方形卡片"
        square={true}
        bodyPadding={true}
      >
        <Text style={styles.text}>
          这是一个方形卡片，没有圆角，适合特殊的设计需求。
        </Text>
      </Card>
    </Space>
  );
};

export default SizeDemo;
