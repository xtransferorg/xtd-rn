import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Title, List, Align } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const LayoutUsage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card>
          <List
            header={<Title style={styles.combineTitle}>左右布局-new</Title>}
            footer={<View style={styles.footer} />}
            separator={false}
          >
            <List.Item
              onPress={() => {}}
              titleLines={3}
              style={styles.combineItem}
              align={Align.middle}
              extra={
                <Text numberOfLines={3} style={styles.rightExtra}>
                  这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
                </Text>
              }
            >
              这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleLines={3}
              style={styles.combineItem}
              align={Align.middle}
              extra={
                <Text numberOfLines={3} style={styles.rightExtra}>
                  Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan,
                  Algeria,Angola, Angola, Afghanistan Angola, Afghanistan,
                  Algeria,Angola, Angola, Afghanistan, Algeria,Angola, Angola,
                  Afghanistan
                </Text>
              }
            >
              Major export areaMajor export areaMajor export areaMajor export
              areaMajor export areaMajor export areaMajor export areaMajor
              export areaMajor export areaMajor export area
            </List.Item>
          </List>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default LayoutUsage;
