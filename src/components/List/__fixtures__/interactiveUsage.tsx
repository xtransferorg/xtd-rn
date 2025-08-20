import React, { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import { Space, Title, Button, Checkbox, Switch, List, Size } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const InteractiveUsage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  const handlePress = (title: string) => {
    Alert.alert('点击事件', `您点击了：${title}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card>
          <List header={<Title style={styles.title}>交互式列表</Title>}>
            <List.Item
              onPress={() => handlePress('可点击项目')}
              extra={<Text style={styles.description}>点击我</Text>}
              style={styles.singleItem}
            >
              可点击项目
            </List.Item>

            <List.Item
              extra={
                <Button
                  size={Size.small}
                  onPress={() => handlePress('按钮操作')}
                >
                  操作
                </Button>
              }
              style={styles.singleItem}
            >
              带按钮的项目
            </List.Item>

            <List.Item
              extra={<Checkbox checked={checked} onChange={setChecked} />}
              style={styles.singleItem}
            >
              带复选框的项目
            </List.Item>

            <List.Item
              extra={<Switch value={switchValue} onChange={setSwitchValue} />}
              style={styles.singleItem}
            >
              带开关的项目
            </List.Item>

            <List.Item
              disabled
              onPress={() => handlePress('禁用项目')}
              extra={<Text style={styles.description}>禁用状态</Text>}
              style={styles.singleItem}
            >
              禁用的项目
            </List.Item>
          </List>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default InteractiveUsage;
