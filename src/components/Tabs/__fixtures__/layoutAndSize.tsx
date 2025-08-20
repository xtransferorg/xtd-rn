import React from 'react';
import { Text, View } from 'react-native';
import { Tabs, Space } from '@xrnjs/ui';
import { TabType } from '../enum';
import { SCREEN_WIDTH } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const { TabPane } = Tabs;

const LayoutAndSize = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.exampleTitle}>等分布局 - 大文字</Text>
        <Text style={styles.exampleDescription}>
          标签等分屏幕宽度，适用于固定数量的标签
        </Text>
        <Tabs
          tabType={TabType.LargeText}
          tabStyle={{
            width: (SCREEN_WIDTH - 40) / 3,
          }}
        >
          <TabPane key="1" tab="标签一">
            <View style={styles.contentArea}>
              <Text>等分标签一</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="标签二">
            <View style={styles.contentArea}>
              <Text>等分标签二</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="标签三">
            <View style={styles.contentArea}>
              <Text>等分标签三</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>等分布局 - 小文字</Text>
        <Text style={styles.exampleDescription}>小文字标签的等分布局</Text>
        <Tabs
          tabType={TabType.SmallText}
          tabStyle={{
            width: (SCREEN_WIDTH - 40) / 4,
          }}
        >
          <TabPane key="1" tab="今日">
            <View style={styles.contentArea}>
              <Text>今日数据</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="本周">
            <View style={styles.contentArea}>
              <Text>本周数据</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="本月">
            <View style={styles.contentArea}>
              <Text>本月数据</Text>
            </View>
          </TabPane>
          <TabPane key="4" tab="本年">
            <View style={styles.contentArea}>
              <Text>本年数据</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>自定义标签栏高度</Text>
        <Text style={styles.exampleDescription}>调整标签栏的高度</Text>
        <Tabs tabBarHeight={60}>
          <TabPane key="1" tab="高标签栏">
            <View style={styles.contentArea}>
              <Text>高标签栏内容</Text>
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

export default LayoutAndSize;
