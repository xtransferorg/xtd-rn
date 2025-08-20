import React from 'react';
import { Text, View } from 'react-native';
import { Collapse, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const DefaultActiveDemo = () => {
  return (
    <Card title="默认展开">
      <Space>
        <Space>
          <Text style={styles.text}>默认展开指定面板</Text>
          <Text style={styles.description}>
            通过 defaultActiveKey 设置默认展开的面板
          </Text>
          <Collapse defaultActiveKey={['1', '3']}>
            <Collapse.Item title="默认展开的面板 1" name="1">
              <Text style={styles.contentText}>这个面板默认是展开的</Text>
            </Collapse.Item>
            <Collapse.Item title="默认收起的面板 2" name="2">
              <Text style={styles.contentText}>这个面板默认是收起的</Text>
            </Collapse.Item>
            <Collapse.Item title="默认展开的面板 3" name="3">
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>这个面板也是默认展开的</Text>
              </View>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>手风琴模式默认展开</Text>
          <Text style={styles.description}>手风琴模式下默认展开第二个面板</Text>
          <Collapse accordion defaultActiveKey="2">
            <Collapse.Item title="面板 1" name="1">
              <Text style={styles.contentText}>面板 1 的内容</Text>
            </Collapse.Item>
            <Collapse.Item title="面板 2（默认展开）" name="2">
              <Text style={styles.contentText}>
                这个面板在手风琴模式下默认展开
              </Text>
            </Collapse.Item>
            <Collapse.Item title="面板 3" name="3">
              <Text style={styles.contentText}>面板 3 的内容</Text>
            </Collapse.Item>
          </Collapse>
        </Space>
      </Space>
    </Card>
  );
};

export default DefaultActiveDemo;
