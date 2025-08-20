import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Space, Title, List } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const BasicUsage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card>
          <List header={<Title style={styles.title}>一、单行列表</Title>}>
            <List.Item style={styles.singleItem}>标题文案1</List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.description}>描述字段</Text>}
              style={styles.singleItem}
            >
              标题文案2
            </List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.description}>描述字段描述</Text>}
              style={styles.singleItem}
            >
              标题文案3
            </List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.remind}>提醒字段</Text>}
              style={styles.singleItem}
            >
              标题文案4
            </List.Item>
            <List.Item
              disabled
              onPress={() => {}}
              extra={<Text style={styles.description}>描述字段</Text>}
              style={styles.singleItem}
            >
              标题文案5（禁用）
            </List.Item>
            <List.Item
              onPress={() => {}}
              prefix={
                <Image
                  source={{
                    uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
                  }}
                  style={{ width: 24, height: 24 }}
                />
              }
              extra={<Text style={styles.description}>描述字段</Text>}
              style={styles.singleItem}
            >
              标题带图标
            </List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.description}>描述字段描述</Text>}
              style={styles.singleItem}
            >
              标题文案7
            </List.Item>
          </List>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicUsage;
