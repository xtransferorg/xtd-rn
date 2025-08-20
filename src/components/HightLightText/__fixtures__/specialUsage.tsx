import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import HightLightText from '../HightLightText';
import { styles } from './style';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="特殊字符处理">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>正则特殊字符</Text>
            <Space gap={8}>
              <HightLightText
                text="价格：$100.50 (包含税费)"
                highlight="$100.50"
                style={styles.normalText}
              />
              <HightLightText
                text="邮箱：user@example.com"
                highlight="@example.com"
                style={styles.normalText}
              />
              <HightLightText
                text="表达式：(a + b) * c"
                highlight="(a + b)"
                style={styles.normalText}
              />
              <HightLightText
                text="路径：/user/profile?id=123"
                highlight="?id=123"
                style={styles.normalText}
              />
            </Space>
            <Text style={styles.demoDescription}>
              组件会自动处理正则表达式中的特殊字符
            </Text>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>长文本高亮</Text>
            <HightLightText
              text="在现代前端开发中，React Native 作为一个跨平台移动应用开发框架，为开发者提供了使用 JavaScript 和 React 语法开发原生移动应用的能力。通过 React Native，开发者可以编写一套代码，同时运行在 iOS 和 Android 平台上，大大提高了开发效率。React Native 的核心理念是 'Learn once, write anywhere'，这意味着开发者只需要学习一次 React 的开发模式，就可以在不同的平台上进行开发。"
              highlight="React Native"
              style={styles.normalText}
            />
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>中英文混合</Text>
            <HightLightText
              text="使用 TypeScript 开发 React Native 应用可以提供更好的类型安全和开发体验。TypeScript 是 JavaScript 的超集，添加了静态类型检查功能。"
              highlight="TypeScript"
              style={styles.normalText}
            />
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>数字和符号</Text>
            <Space gap={8}>
              <HightLightText
                text="版本号：v1.2.3-beta.1，发布时间：2024-01-15 14:30:00"
                highlight="v1.2.3"
                style={styles.normalText}
              />
              <HightLightText
                text="HTTP 状态码：200 OK, 404 Not Found, 500 Internal Server Error"
                highlight="404"
                style={styles.normalText}
              />
            </Space>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
