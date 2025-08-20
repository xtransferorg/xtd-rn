import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Space, Title, List, Align } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const MultilineUsage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card>
          <List header={<Title style={styles.title}>二、多行列表</Title>}>
            <List.Item
              extra={<Text style={styles.description}>描述字段描述</Text>}
              description="描述行文本、对标题进行补充"
              style={styles.multipleItem}
            >
              标题文案1
            </List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.description}>描述字段描述字</Text>}
              description="描述行文本"
              style={styles.multipleItem}
            >
              标题带图标
            </List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.description}>描述字段</Text>}
              description="描述行文本描述行文本  描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段"
              descriptionLines={3}
              align={Align.top}
              style={styles.multipleItem}
            >
              顶部对齐
            </List.Item>
            <List.Item
              onPress={() => {}}
              prefix={
                <Image
                  source={{
                    uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
                  }}
                  style={{ width: 36, height: 36 }}
                />
              }
              extra={
                <Text style={styles.description}>描述字段描述字段描述</Text>
              }
              description="描述行文本描"
              style={styles.multipleItem}
            >
              标题带图片
            </List.Item>
          </List>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default MultilineUsage;
