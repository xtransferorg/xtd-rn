import React from 'react';
import { Text, View } from 'react-native';
import { Tabs, Space, Badge } from '@xrnjs/ui';
import { TabType } from '../enum';
import Card from '_global/Card';
import styles from './style';

const { TabPane } = Tabs;

const BadgeAndCustom = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.exampleTitle}>带徽标的标签</Text>
        <Text style={styles.exampleDescription}>
          使用 badge 属性显示数字徽标
        </Text>
        <Tabs tabType={TabType.SmallText}>
          <TabPane key="1" tab="消息" badge="99+">
            <View style={styles.contentArea}>
              <Text>消息列表</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="通知" badge="5">
            <View style={styles.contentArea}>
              <Text>通知列表</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="公告" badge="1">
            <View style={styles.contentArea}>
              <Text>公告列表</Text>
            </View>
          </TabPane>
          <TabPane key="4" tab="已读">
            <View style={styles.contentArea}>
              <Text>已读消息</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>自定义标签内容</Text>
        <Text style={styles.exampleDescription}>
          使用 Badge 组件自定义标签样式
        </Text>
        <Tabs>
          <TabPane
            key="1"
            tab={
              <Badge count={1}>
                <Text>待处理</Text>
              </Badge>
            }
          >
            <View style={styles.contentArea}>
              <Text>待处理任务列表</Text>
            </View>
          </TabPane>
          <TabPane
            key="2"
            tab={
              <Badge count={999}>
                <Text>进行中</Text>
              </Badge>
            }
          >
            <View style={styles.contentArea}>
              <Text>进行中任务列表</Text>
            </View>
          </TabPane>
          <TabPane
            key="3"
            tab={
              <Badge dot>
                <Text>已完成</Text>
              </Badge>
            }
          >
            <View style={styles.contentArea}>
              <Text>已完成任务列表</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>长文本处理</Text>
        <Text style={styles.exampleDescription}>超长标签文本的截断处理</Text>
        <Tabs tabType={TabType.SmallText} indicatorWidth={140}>
          <TabPane
            key="1"
            tab={
              <Text
                numberOfLines={1}
                ellipsizeMode="clip"
                style={styles.longTextTab}
              >
                这是一个非常长的英文标签 Very Long English Tab
              </Text>
            }
          >
            <View style={styles.contentArea}>
              <Text>长英文标签内容</Text>
            </View>
          </TabPane>
          <TabPane
            key="2"
            tab={
              <Text
                numberOfLines={1}
                ellipsizeMode="clip"
                style={styles.longTextTab}
              >
                这是一个非常长的中文标签标题内容
              </Text>
            }
          >
            <View style={styles.contentArea}>
              <Text>长中文标签内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>
    </Space>
  );
};

export default BadgeAndCustom;
