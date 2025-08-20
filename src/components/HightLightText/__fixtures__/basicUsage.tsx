import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import HightLightText from '../HightLightText';
import { styles } from './style';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="基本用法">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>默认高亮</Text>
            <HightLightText
              text="这是一段包含关键词的文本内容"
              highlight="关键词"
              style={styles.normalText}
            />
            <Text style={styles.demoDescription}>
              默认使用橙色高亮显示匹配的文本
            </Text>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>无高亮</Text>
            <HightLightText
              text="这是一段普通的文本内容，没有高亮"
              style={styles.normalText}
            />
            <Text style={styles.demoDescription}>
              当不传入 highlight 属性时，显示普通文本
            </Text>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>空高亮</Text>
            <HightLightText
              text="这是一段文本内容"
              highlight=""
              style={styles.normalText}
            />
            <Text style={styles.demoDescription}>
              当 highlight 为空字符串时，不进行高亮处理
            </Text>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>大小写不敏感</Text>
            <HightLightText
              text="React Native 是一个优秀的跨平台框架"
              highlight="react"
              style={styles.normalText}
            />
            <Text style={styles.demoDescription}>高亮匹配不区分大小写</Text>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
