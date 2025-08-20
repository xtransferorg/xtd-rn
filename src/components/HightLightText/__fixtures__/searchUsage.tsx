import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import HightLightText from '../HightLightText';
import { styles } from './style';

export default () => {
  const [searchKeyword, setSearchKeyword] = useState('React');

  const searchResults = [
    {
      title: 'React Native 开发指南',
      content:
        'React Native 是 Facebook 开源的跨平台移动应用开发框架，使用 React 语法开发原生应用。',
    },
    {
      title: 'React 组件设计模式',
      content:
        '在 React 开发中，组件是构建用户界面的基本单元，良好的组件设计能提高代码复用性。',
    },
    {
      title: 'React Hooks 最佳实践',
      content:
        'React Hooks 提供了在函数组件中使用状态和其他 React 特性的能力，是现代 React 开发的重要工具。',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card title="搜索场景">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>搜索结果高亮</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="输入搜索关键词"
              value={searchKeyword}
              onChangeText={setSearchKeyword}
            />

            <Space gap={8}>
              {searchResults.map((item, index) => (
                <View key={index} style={styles.searchResultItem}>
                  <HightLightText
                    text={item.title}
                    highlight={searchKeyword}
                    style={styles.searchResultTitle}
                  />
                  <HightLightText
                    text={item.content}
                    highlight={searchKeyword}
                    style={styles.searchResultContent}
                  />
                </View>
              ))}
            </Space>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
