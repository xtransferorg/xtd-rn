import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Space, Switch } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const StateControl = () => {
  return (
    <ScrollView>
      <Space gap={20}>
        <Card style={styles.wrapper}>
          <Text style={styles.title}>加载状态 - 开启</Text>
          <Switch loading value={true} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>加载状态 - 关闭</Text>
          <Switch loading value={false} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>加载状态 - 禁用</Text>
          <Switch loading value={true} disabled />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>禁用状态 - 开启</Text>
          <Switch value={true} disabled />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>禁用状态 - 关闭</Text>
          <Switch value={false} disabled />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>禁用状态 - 带文字</Text>
          <Switch
            value={true}
            disabled
            activeChildren="开"
            inactiveChildren="关"
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default StateControl;
