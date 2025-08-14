import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Space, Switch } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const SwitchScreen = () => {
  return (
    <ScrollView>
      <Space gap={20}>
        <Card style={styles.wrapper}>
          <Text style={styles.title}>基础状态,文字</Text>
          <Switch
            defaultValue={true}
            activeChildren="开"
            inactiveChildren="关"
          />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>基础状态</Text>
          <Switch defaultValue={true} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>加载状态</Text>
          <Switch loading value={true} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>加载状态,禁用</Text>
          <Switch loading value={true} disabled />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>关闭状态</Text>
          <Switch defaultValue={false} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>开启禁用状态</Text>
          <Switch value={true} disabled />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>关闭禁用状态</Text>
          <Switch value={false} disabled />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义颜色</Text>
          <Switch defaultValue={true} activeColor="#0092FF" />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义大小</Text>
          <Switch size={18} defaultValue={true} />
        </Card>
      </Space>
    </ScrollView>
  );
};
export default SwitchScreen;
