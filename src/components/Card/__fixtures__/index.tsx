import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, Card, Fill } from '@xrnjs/ui';
import { Type } from '../../Card/enum';

import styles from './style';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 140,
  height: 140,
};

const CardScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Card
        type={Type.AllCard}
        title="标题"
        imageSource={logo}
        bodyPadding={{ top: 0, bottom: 8, left: 16, right: 16 }}
        footer={<Button fill={Fill.solid}>确定</Button>}
      >
        <Text style={styles.text}>
          这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是
        </Text>
      </Card>

      <Card
        style={styles.divider}
        type={Type.AllCard}
        title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
        imageSource={logo}
        bodyPadding={{ top: 0, bottom: 8, left: 16, right: 16 }}
        footer={<Button fill={Fill.solid}>确定</Button>}
      >
        <Text style={styles.text} numberOfLines={4}>
          这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是
        </Text>
      </Card>

      <Card
        style={styles.divider}
        type={Type.NestCard}
        title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
        bodyPadding={{ top: 0, bottom: 8, left: 16, right: 16 }}
        footer={<Button fill={Fill.solid}>确定</Button>}
        footerTextStyle={styles.footerBtn}
      >
        <Text style={styles.text} numberOfLines={4}>
          这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是一段描述文案这是
        </Text>
      </Card>
    </ScrollView>
  );
};

export default CardScreen;
