import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Tabs, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const { TabPane } = Tabs;

const BasicUsage = () => {
  const [activeKey, setActiveKey] = useState('1');

  const handleChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <Space>
      <Card>
        <Text style={styles.exampleTitle}>基础用法</Text>
        <Text style={styles.exampleDescription}>最简单的标签页用法</Text>
        <Tabs>
          <TabPane key="1" tab="标签一">
            <View style={styles.contentArea}>
              <Text>标签一的内容</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="标签二">
            <View style={styles.contentArea}>
              <Text>标签二的内容</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="标签三">
            <View style={styles.contentArea}>
              <Text>标签三的内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>受控模式</Text>
        <Text style={styles.exampleDescription}>
          通过 activeKey 和 onChange 控制标签页
        </Text>
        <Tabs activeKey={activeKey} onChange={handleChange}>
          <TabPane key="1" tab="首页">
            <View style={styles.contentArea}>
              <Text>当前激活标签：{activeKey}</Text>
              <Text>首页内容</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="分类">
            <View style={styles.contentArea}>
              <Text>当前激活标签：{activeKey}</Text>
              <Text>分类内容</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="我的">
            <View style={styles.contentArea}>
              <Text>当前激活标签：{activeKey}</Text>
              <Text>我的内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>自定义颜色</Text>
        <Text style={styles.exampleDescription}>
          自定义激活和非激活状态的文字颜色
        </Text>
        <Tabs activeTextColor="red" textColor="#666666">
          <TabPane key="1" tab="红色主题">
            <View style={styles.contentArea}>
              <Text>红色主题标签页</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="标签二">
            <View style={styles.contentArea}>
              <Text>标签二内容</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="标签三">
            <View style={styles.contentArea}>
              <Text>标签三内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>禁用指示器</Text>
        <Text style={styles.exampleDescription}>不显示底部指示器线条</Text>
        <Tabs indicator={false}>
          <TabPane key="1" tab="无指示器">
            <View style={styles.contentArea}>
              <Text>无指示器的标签页</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="标签二">
            <View style={styles.contentArea}>
              <Text>标签二内容</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="标签三">
            <View style={styles.contentArea}>
              <Text>标签三内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>
    </Space>
  );
};

export default BasicUsage;
