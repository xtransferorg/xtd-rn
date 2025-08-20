import React from 'react';
import { Text, View } from 'react-native';
import { Tabs, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const { TabPane } = Tabs;

const IndicatorConfig = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.exampleTitle}>默认指示器</Text>
        <Text style={styles.exampleDescription}>指示器宽度与文字同宽</Text>
        <Tabs>
          <TabPane key="1" tab="短标签">
            <View style={styles.contentArea}>
              <Text>短标签内容</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="这是一个长标签">
            <View style={styles.contentArea}>
              <Text>长标签内容</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="中等">
            <View style={styles.contentArea}>
              <Text>中等标签内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>自定义指示器颜色</Text>
        <Text style={styles.exampleDescription}>
          自定义指示器颜色和文字颜色
        </Text>
        <Tabs indicatorColor="green" activeTextColor="#ff6b35">
          <TabPane key="1" tab="绿色主题">
            <View style={styles.contentArea}>
              <Text>绿色主题内容</Text>
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
        <Text style={styles.exampleTitle}>无指示器</Text>
        <Text style={styles.exampleDescription}>完全隐藏指示器</Text>
        <Tabs indicator={false}>
          <TabPane key="1" tab="无指示器">
            <View style={styles.contentArea}>
              <Text>无指示器内容</Text>
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

export default IndicatorConfig;
