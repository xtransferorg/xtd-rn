import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Collapse, Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const BasicUsage = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>(['1']);

  const handleChange = (keys?: string | string[] | null) => {
    setActiveKeys(Array.isArray(keys) ? keys : keys ? [keys] : []);
  };

  return (
    <Card title="基础用法">
      <Space>
        <Space>
          <Text style={styles.text}>普通折叠面板</Text>
          <Text style={styles.description}>可以同时展开多个面板</Text>
          <Collapse>
            <Collapse.Item title="标题 1" name="1">
              <Text style={styles.contentText}>这是第一个面板的内容</Text>
            </Collapse.Item>
            <Collapse.Item title="标题 2" name="2">
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>这是第二个面板的内容区域</Text>
              </View>
            </Collapse.Item>
            <Collapse.Item title="标题 3" name="3">
              <Text style={styles.contentText}>这是第三个面板的内容</Text>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>手风琴模式</Text>
          <Text style={styles.description}>同时只能展开一个面板</Text>
          <Collapse accordion>
            <Collapse.Item title="标题 1" name="1">
              <Text style={styles.contentText}>手风琴模式 - 内容 1</Text>
            </Collapse.Item>
            <Collapse.Item title="标题 2" name="2">
              <Text style={styles.contentText}>手风琴模式 - 内容 2</Text>
            </Collapse.Item>
            <Collapse.Item title="标题 3" name="3">
              <Text style={styles.contentText}>手风琴模式 - 内容 3</Text>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>受控模式</Text>
          <Text style={styles.description}>
            通过 activeKey 和 onChange 控制展开状态
          </Text>
          <Space direction="horizontal">
            <Button size={Size.small} onPress={() => setActiveKeys(['1', '2'])}>
              展开1,2
            </Button>
            <Button size={Size.small} onPress={() => setActiveKeys([])}>
              全部收起
            </Button>
          </Space>
          <Text style={styles.description}>
            当前展开: {activeKeys.length > 0 ? activeKeys.join(', ') : '无'}
          </Text>
          <Collapse activeKey={activeKeys} onChange={handleChange}>
            <Collapse.Item title="受控面板 1" name="1">
              <Text style={styles.contentText}>受控模式 - 内容 1</Text>
            </Collapse.Item>
            <Collapse.Item title="受控面板 2" name="2">
              <Text style={styles.contentText}>受控模式 - 内容 2</Text>
            </Collapse.Item>
          </Collapse>
        </Space>
      </Space>
    </Card>
  );
};

export default BasicUsage;
