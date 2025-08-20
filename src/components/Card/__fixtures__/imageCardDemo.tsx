import React from 'react';
import { Text } from 'react-native';
import { Card, Space, Type } from '@xrnjs/ui';
import { styles } from './style';

const ImageCardDemo = () => {
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 140,
    height: 140,
  };

  return (
    <Space>
      <Card
        type={Type.AllCard}
        title="React Native"
        imageSource={logo}
        bodyPadding={{ top: 0, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          React Native 是一个用于构建原生移动应用的框架，使用 JavaScript 和
          React。
        </Text>
      </Card>

      <Card
        type={Type.NestCard}
        title="自定义图片样式"
        imageSource={logo}
        imageStyle={styles.cardImage}
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          可以通过 imageStyle 属性自定义图片的样式和尺寸。
        </Text>
      </Card>
    </Space>
  );
};

export default ImageCardDemo;
