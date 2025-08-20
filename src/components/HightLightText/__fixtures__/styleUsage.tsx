import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import HightLightText from '../HightLightText';
import { styles } from './style';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="样式定制">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>不同字体大小</Text>
            <Space gap={8}>
              <HightLightText
                text="大号文本高亮示例"
                highlight="大号"
                style={styles.largeText}
              />
              <HightLightText
                text="普通文本高亮示例"
                highlight="普通"
                style={styles.normalText}
              />
              <HightLightText
                text="小号文本高亮示例"
                highlight="小号"
                style={styles.smallText}
              />
            </Space>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>不同文本样式</Text>
            <Space gap={8}>
              <HightLightText
                text="粗体文本高亮示例"
                highlight="粗体"
                style={styles.boldText}
              />
              <HightLightText
                text="主要色彩高亮文本"
                highlight="主要"
                style={styles.primaryText}
              />
              <HightLightText
                text="成功状态高亮文本"
                highlight="成功"
                style={styles.successText}
              />
              <HightLightText
                text="警告状态高亮文本"
                highlight="警告"
                style={styles.warningText}
              />
              <HightLightText
                text="错误状态高亮文本"
                highlight="错误"
                style={styles.errorText}
              />
            </Space>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>多个匹配项</Text>
            <HightLightText
              text="React 是一个用于构建用户界面的 JavaScript 库。React 让你可以通过组合小而独立的代码片段来构建复杂的 UI。"
              highlight="React"
              style={styles.normalText}
            />
            <Text style={styles.demoDescription}>
              所有匹配的文本都会被高亮显示
            </Text>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
