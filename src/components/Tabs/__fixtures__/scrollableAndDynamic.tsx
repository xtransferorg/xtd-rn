import React, { useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { Tabs, Space, Button } from '@xrnjs/ui';
import { TabType } from '../enum';
import { IconMAScreen1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const { TabPane } = Tabs;

interface ChangeTabProps {
  changeTab: (key: string) => void;
}

const ScrollableAndDynamic = () => {
  const [activeKey, setActiveKey] = useState('1');
  const [showExtra, setShowExtra] = useState(false);
  const tabsRef = useRef<ChangeTabProps>(null);

  const handleChange = (key: string) => {
    setActiveKey(key);
  };

  const jumpToTab = () => {
    tabsRef.current?.changeTab('5');
  };

  const toggleExtra = () => {
    setShowExtra(!showExtra);
  };

  const dynamicTabs = [
    { key: '1', tab: '标签一', content: '内容一' },
    { key: '2', tab: '标签二', content: '内容二' },
    { key: '3', tab: '标签三', content: '内容三' },
    showExtra && { key: '4', tab: '动态标签', content: '动态内容' },
  ].filter(Boolean) as { key: string; tab: string; content: string }[];

  return (
    <Space>
      <Card>
        <Text style={styles.exampleTitle}>可滚动标签</Text>
        <Text style={styles.exampleDescription}>当标签过多时支持横向滚动</Text>
        <Tabs
          tabType={TabType.SmallText}
          suffix={<IconMAScreen1 fillColor="#222222" size={14} />}
        >
          <TabPane key="1" tab="标签一">
            <View style={styles.contentArea}>
              <Text>标签一内容</Text>
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
          <TabPane key="4" tab="标签四">
            <View style={styles.contentArea}>
              <Text>标签四内容</Text>
            </View>
          </TabPane>
          <TabPane key="5" tab="标签五">
            <View style={styles.contentArea}>
              <Text>标签五内容</Text>
            </View>
          </TabPane>
          <TabPane key="6" tab="标签六">
            <View style={styles.contentArea}>
              <Text>标签六内容</Text>
            </View>
          </TabPane>
          <TabPane key="7" tab="标签七">
            <View style={styles.contentArea}>
              <Text>标签七内容</Text>
            </View>
          </TabPane>
          <TabPane key="8" tab="标签八">
            <View style={styles.contentArea}>
              <Text>标签八内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>滑动切换</Text>
        <Text style={styles.exampleDescription}>
          支持左右滑动切换标签页内容
        </Text>
        <Space>
          <Button onPress={jumpToTab}>跳转到第5个标签</Button>
          <Tabs
            tabType={TabType.SmallText}
            swipe={true}
            activeKey={activeKey}
            ref={tabsRef}
            onChange={handleChange}
            suffix={<IconMAScreen1 fillColor="#222222" size={14} />}
          >
            <TabPane key="1" tab="首页">
              <View style={styles.contentArea}>
                <Text>首页内容 - 当前激活：{activeKey}</Text>
              </View>
            </TabPane>
            <TabPane key="2" tab="分类">
              <View style={styles.contentArea}>
                <Text>分类内容 - 当前激活：{activeKey}</Text>
              </View>
            </TabPane>
            <TabPane key="3" tab="购物车">
              <View style={styles.contentArea}>
                <Text>购物车内容 - 当前激活：{activeKey}</Text>
              </View>
            </TabPane>
            <TabPane key="4" tab="我的">
              <View style={styles.contentArea}>
                <Text>我的内容 - 当前激活：{activeKey}</Text>
              </View>
            </TabPane>
            <TabPane key="5" tab="设置">
              <View style={styles.contentArea}>
                <Text>设置内容 - 当前激活：{activeKey}</Text>
              </View>
            </TabPane>
          </Tabs>
        </Space>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>动态标签</Text>
        <Text style={styles.exampleDescription}>动态增减标签页</Text>
        <Space>
          <Button onPress={toggleExtra}>
            {showExtra ? '移除动态标签' : '添加动态标签'}
          </Button>
          <Tabs activeTextColor="red">
            {dynamicTabs.map((item) => (
              <TabPane key={item.key} tab={item.tab}>
                <View style={styles.contentArea}>
                  <Text>{item.content}</Text>
                </View>
              </TabPane>
            ))}
          </Tabs>
        </Space>
      </Card>
    </Space>
  );
};

export default ScrollableAndDynamic;
