import React from 'react';
import { Text, View } from 'react-native';
import { Collapse, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const AdvancedDemo = () => {
  return (
    <Card title="高级功能">
      <Space>
        <Space>
          <Text style={styles.text}>常驻节点</Text>
          <Text style={styles.description}>
            添加不随折叠展开而变化的常驻内容
          </Text>
          <Collapse>
            <Collapse.Item
              title="带常驻节点的面板"
              name="1"
              permanentNode={
                <View style={styles.permanentNode}>
                  <Text style={styles.permanentNodeText}>
                    这是常驻节点内容，不会随面板展开收起而变化
                  </Text>
                </View>
              }
            >
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>这是可折叠的内容区域</Text>
              </View>
            </Collapse.Item>
            <Collapse.Item
              title="向上展开的常驻节点"
              name="2"
              arrowPlaceDown={true}
              headerStyle={{ flexDirection: 'column' }}
              permanentNode={
                <View style={styles.permanentNode}>
                  <Text style={styles.permanentNodeText}>
                    常驻节点 - 内容向上展开
                  </Text>
                </View>
              }
            >
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>向上展开的内容区域</Text>
              </View>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>复杂布局</Text>
          <Text style={styles.description}>自定义头部布局和样式</Text>
          <Collapse>
            <Collapse.Item
              headerStyle={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 16,
                backgroundColor: '#f8f9fa',
              }}
              title="自定义头部布局"
              name="1"
            >
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>
                  这个面板使用了自定义的头部布局样式
                </Text>
              </View>
            </Collapse.Item>
            <Collapse.Item
              headerStyle={{ borderBottomWidth: 0 }}
              title="无分割线面板"
              name="2"
            >
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>这个面板移除了底部分割线</Text>
              </View>
            </Collapse.Item>
          </Collapse>
        </Space>
      </Space>
    </Card>
  );
};

export default AdvancedDemo;
