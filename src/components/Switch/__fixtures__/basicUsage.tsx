import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Space, Switch } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  const [value, setValue] = useState(false);

  return (
    <ScrollView>
      <Space gap={20}>
        <Card style={styles.wrapper}>
          <Text style={styles.title}>基础开关</Text>
          <Switch defaultValue={true} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>默认关闭</Text>
          <Switch defaultValue={false} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>受控模式</Text>
          <Switch value={value} onChange={(val) => setValue(val as boolean)} />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>带文字的开关</Text>
          <Switch
            defaultValue={true}
            activeChildren="开"
            inactiveChildren="关"
          />
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义值</Text>
          <Switch
            defaultValue="yes"
            activeValue="yes"
            inactiveValue="no"
            activeChildren="是"
            inactiveChildren="否"
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicUsage;
