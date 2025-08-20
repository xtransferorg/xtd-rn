import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Space, Switch } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const CustomStyle = () => {
  return (
    <ScrollView>
      <Space gap={20}>
        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义大小 - 小</Text>
          <Switch size={18} defaultValue={true} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义大小 - 中</Text>
          <Switch size={24} defaultValue={true} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义大小 - 大</Text>
          <Switch size={32} defaultValue={true} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义激活颜色</Text>
          <Switch defaultValue={true} activeColor="#0092FF" />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义非激活颜色</Text>
          <Switch defaultValue={false} inactiveColor="#FF6B6B" />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义双色</Text>
          <Switch
            defaultValue={true}
            activeColor="#52C41A"
            inactiveColor="#FF4D4F"
          />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义颜色 + 文字</Text>
          <Switch
            defaultValue={true}
            activeColor="#722ED1"
            inactiveColor="#FA8C16"
            activeChildren="ON"
            inactiveChildren="OFF"
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default CustomStyle;
