import React from 'react';
import { Text, View } from 'react-native';
import { Tabs, Space, Collapse } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const { TabPane } = Tabs;

const VerticalTabs = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.exampleTitle}>基础垂直标签</Text>
        <Text style={styles.exampleDescription}>
          垂直排列的标签页，适用于侧边导航
        </Text>
        <View style={{ height: 120 }}>
          <Tabs vertical>
            <TabPane key="1" tab="选项一">
              <View style={styles.contentArea}>
                <Text>垂直标签页内容一</Text>
                <Text>这里是详细的内容描述</Text>
              </View>
            </TabPane>
            <TabPane key="2" tab="选项二">
              <View style={styles.contentArea}>
                <Text>垂直标签页内容二</Text>
                <Text>这里是详细的内容描述</Text>
              </View>
            </TabPane>
            <TabPane key="3" tab="选项三">
              <View style={styles.contentArea}>
                <Text>垂直标签页内容三</Text>
                <Text>这里是详细的内容描述</Text>
              </View>
            </TabPane>
            <TabPane key="4" tab="选项四">
              <View style={styles.contentArea}>
                <Text>垂直标签页内容四</Text>
                <Text>这里是详细的内容描述</Text>
              </View>
            </TabPane>
          </Tabs>
        </View>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>垂直标签 + 折叠面板</Text>
        <Text style={styles.exampleDescription}>结合折叠面板的垂直标签页</Text>
        <View style={{ height: 200 }}>
          <Tabs vertical>
            <TabPane key="1" tab="设置">
              <View style={styles.contentArea}>
                <Collapse>
                  <Collapse.Item key="1" name="账户设置">
                    <Text>修改密码、绑定手机等</Text>
                  </Collapse.Item>
                  <Collapse.Item key="2" name="隐私设置">
                    <Text>隐私保护、数据管理等</Text>
                  </Collapse.Item>
                  <Collapse.Item key="3" name="通知设置">
                    <Text>消息推送、邮件通知等</Text>
                  </Collapse.Item>
                </Collapse>
              </View>
            </TabPane>
            <TabPane key="2" tab="帮助">
              <View style={styles.contentArea}>
                <Collapse>
                  <Collapse.Item key="1" name="常见问题">
                    <Text>用户常见问题解答</Text>
                  </Collapse.Item>
                  <Collapse.Item key="2" name="使用教程">
                    <Text>详细的使用指南</Text>
                  </Collapse.Item>
                  <Collapse.Item key="3" name="联系客服">
                    <Text>在线客服、电话客服</Text>
                  </Collapse.Item>
                </Collapse>
              </View>
            </TabPane>
            <TabPane key="3" tab="关于">
              <View style={styles.contentArea}>
                <Text>应用版本信息</Text>
                <Text>用户协议和隐私政策</Text>
              </View>
            </TabPane>
          </Tabs>
        </View>
      </Card>
    </Space>
  );
};

export default VerticalTabs;
