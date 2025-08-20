import React from 'react';
import { Text, View } from 'react-native';
import { Collapse, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const DisabledDemo = () => {
  return (
    <Card title="禁用状态">
      <Space>
        <Space>
          <Text style={styles.text}>禁用指定面板</Text>
          <Text style={styles.description}>
            通过 disabled 属性禁用面板的展开/收起功能
          </Text>
          <Collapse>
            <Collapse.Item title="正常面板" name="1">
              <Text style={styles.contentText}>
                这是一个正常的面板，可以正常展开收起
              </Text>
            </Collapse.Item>
            <Collapse.Item title="禁用面板" name="2" disabled>
              <Text style={styles.contentText}>
                这个面板被禁用了，无法展开收起
              </Text>
            </Collapse.Item>
            <Collapse.Item title="另一个正常面板" name="3">
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>这也是一个正常的面板</Text>
              </View>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>手风琴模式禁用</Text>
          <Text style={styles.description}>手风琴模式下的禁用状态</Text>
          <Collapse accordion>
            <Collapse.Item title="可用面板 1" name="1">
              <Text style={styles.contentText}>手风琴模式 - 可用面板 1</Text>
            </Collapse.Item>
            <Collapse.Item title="禁用面板" name="2" disabled>
              <Text style={styles.contentText}>手风琴模式 - 禁用面板</Text>
            </Collapse.Item>
            <Collapse.Item title="可用面板 2" name="3">
              <Text style={styles.contentText}>手风琴模式 - 可用面板 2</Text>
            </Collapse.Item>
          </Collapse>
        </Space>
      </Space>
    </Card>
  );
};

export default DisabledDemo;
