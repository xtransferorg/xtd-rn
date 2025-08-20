import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import HightLightText from '../HightLightText';
import { styles } from './style';

export default () => {
  const [searchKeyword, setSearchKeyword] = useState('React');

  const contacts = [
    { name: '张三', phone: '138****1234', company: 'React 科技有限公司' },
    { name: '李四', phone: '139****5678', company: 'Vue 技术公司' },
    { name: '王五', phone: '137****9012', company: 'React Native 开发团队' },
    { name: '赵六', phone: '136****3456', company: 'Angular 解决方案' },
  ];

  const tags = [
    'React',
    'React Native',
    'JavaScript',
    'TypeScript',
    '移动开发',
    '跨平台',
  ];

  return (
    <ScrollView style={styles.container}>
      <Card title="列表场景">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>联系人列表</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="搜索联系人"
              value={searchKeyword}
              onChangeText={setSearchKeyword}
            />

            <View>
              {contacts.map((contact, index) => (
                <View key={index} style={styles.listItem}>
                  <HightLightText
                    text={contact.name}
                    highlight={searchKeyword}
                    style={styles.listItemTitle}
                  />
                  <HightLightText
                    text={contact.company}
                    highlight={searchKeyword}
                    style={styles.listItemSubtitle}
                  />
                  <Text style={styles.listItemSubtitle}>{contact.phone}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>标签高亮</Text>
            <View style={styles.tagContainer}>
              {tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <HightLightText
                    text={tag}
                    highlight={searchKeyword}
                    style={styles.tagText}
                  />
                </View>
              ))}
            </View>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
