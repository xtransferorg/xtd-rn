import React from 'react';
import { Text, View } from 'react-native';
import { Tabs, Space } from '@xrnjs/ui';
import { TabType } from '../enum';
import Card from '_global/Card';
import styles from './style';

const { TabPane } = Tabs;

const TabTypes = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.exampleTitle}>大标题类型</Text>
        <Text style={styles.exampleDescription}>
          适用于页面主要导航，字体较大且居中显示
        </Text>
        <Tabs tabType={TabType.LargeTitle}>
          <TabPane key="1" tab="推荐">
            <View style={styles.contentArea}>
              <Text>推荐内容</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="热门">
            <View style={styles.contentArea}>
              <Text>热门内容</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="最新">
            <View style={styles.contentArea}>
              <Text>最新内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>大文字标签</Text>
        <Text style={styles.exampleDescription}>
          默认类型，适用于一般的标签页导航
        </Text>
        <Tabs tabType={TabType.LargeText}>
          <TabPane key="1" tab="全部订单">
            <View style={styles.contentArea}>
              <Text>全部订单列表</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="待付款">
            <View style={styles.contentArea}>
              <Text>待付款订单</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="待收货">
            <View style={styles.contentArea}>
              <Text>待收货订单</Text>
            </View>
          </TabPane>
          <TabPane key="4" tab="已完成">
            <View style={styles.contentArea}>
              <Text>已完成订单</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>小文字标签</Text>
        <Text style={styles.exampleDescription}>
          适用于次要导航或空间受限的场景
        </Text>
        <Tabs tabType={TabType.SmallText}>
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
    </Space>
  );
};

export default TabTypes;
