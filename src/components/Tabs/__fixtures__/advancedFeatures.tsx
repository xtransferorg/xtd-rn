import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Tabs, Space, OptionGroup } from '@xrnjs/ui';
import { TabType } from '../enum';
import { IconMAScreen1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const { TabPane } = Tabs;

const AdvancedFeatures = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [secondaryTab, setSecondaryTab] = useState('all');

  const primaryTabs = [
    { key: 'home', label: '首页', hasSecondary: true },
    { key: 'category', label: '分类', hasSecondary: true },
    { key: 'cart', label: '购物车', hasSecondary: false },
    { key: 'profile', label: '我的', hasSecondary: false },
  ];

  const secondaryOptions = {
    home: [
      { label: '全部', value: 'all' },
      { label: '推荐', value: 'recommend' },
      { label: '热门', value: 'hot' },
      { label: '最新', value: 'latest' },
    ],
    category: [
      { label: '全部分类', value: 'all' },
      { label: '数码电器', value: 'electronics' },
      { label: '服装鞋帽', value: 'clothing' },
      { label: '食品饮料', value: 'food' },
    ],
  };

  const visibleTabs = isExpanded ? primaryTabs : primaryTabs.slice(0, 2);

  const expandIcon = (
    <TouchableOpacity
      style={styles.expandButton}
      onPress={() => setIsExpanded(!isExpanded)}
    >
      <Text style={styles.expandIcon}>{isExpanded ? '收起' : '展开'}</Text>
    </TouchableOpacity>
  );

  return (
    <Space>
      <Card>
        <Text style={styles.exampleTitle}>带后置插槽</Text>
        <Text style={styles.exampleDescription}>
          在标签栏右侧添加自定义内容
        </Text>
        <Tabs
          tabType={TabType.LargeText}
          suffix={<IconMAScreen1 fillColor="#222222" size={16} />}
          suffixWidth={40}
        >
          <TabPane key="1" tab="首页">
            <View style={styles.contentArea}>
              <Text>首页内容</Text>
              <Text>右侧有图标按钮</Text>
            </View>
          </TabPane>
          <TabPane key="2" tab="分类">
            <View style={styles.contentArea}>
              <Text>分类内容</Text>
            </View>
          </TabPane>
          <TabPane key="3" tab="我的">
            <View style={styles.contentArea}>
              <Text>我的内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>可展开标签栏</Text>
        <Text style={styles.exampleDescription}>支持展开/收起更多标签</Text>
        <Tabs tabType={TabType.SmallText} suffix={expandIcon} suffixWidth={60}>
          {visibleTabs.map((tab) => (
            <TabPane key={tab.key} tab={tab.label}>
              <View style={styles.contentArea}>
                <Text>{tab.label}内容</Text>
                <Text>当前显示 {visibleTabs.length} 个标签</Text>
              </View>
            </TabPane>
          ))}
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>二级标签组合</Text>
        <Text style={styles.exampleDescription}>
          主标签 + 二级选项的组合使用
        </Text>
        <Tabs swipe>
          <TabPane key="home" tab="首页">
            <Space>
              <OptionGroup
                value={secondaryTab}
                onChange={setSecondaryTab}
                options={secondaryOptions.home}
                style={styles.subTabWrapperStyle}
                optionStyle={styles.optionStyle}
                optionActiveStyle={styles.optionActiveStyle}
                optionTextStyle={styles.optionTextStyle}
                optionTextActiveStyle={styles.optionTextActiveStyle}
              />
              <View style={styles.contentArea}>
                <Text>
                  首页 -{' '}
                  {
                    secondaryOptions.home.find(
                      (opt) => opt.value === secondaryTab
                    )?.label
                  }
                </Text>
                <Text>这里显示对应的内容</Text>
              </View>
            </Space>
          </TabPane>
          <TabPane key="category" tab="分类">
            <Space>
              <OptionGroup
                value={secondaryTab}
                onChange={setSecondaryTab}
                options={secondaryOptions.category}
                style={styles.subTabWrapperStyle}
                optionStyle={styles.optionStyle}
                optionActiveStyle={styles.optionActiveStyle}
                optionTextStyle={styles.optionTextStyle}
                optionTextActiveStyle={styles.optionTextActiveStyle}
              />
              <View style={styles.contentArea}>
                <Text>
                  分类 -{' '}
                  {
                    secondaryOptions.category.find(
                      (opt) => opt.value === secondaryTab
                    )?.label
                  }
                </Text>
                <Text>这里显示对应的分类内容</Text>
              </View>
            </Space>
          </TabPane>
          <TabPane key="cart" tab="购物车">
            <View style={styles.contentArea}>
              <Text>购物车内容</Text>
              <Text>无二级标签</Text>
            </View>
          </TabPane>
        </Tabs>
      </Card>

      <Card>
        <Text style={styles.exampleTitle}>自定义标签栏高度</Text>
        <Text style={styles.exampleDescription}>
          调整标签栏高度以适应不同设计需求
        </Text>
        <Tabs tabBarHeight={60} tabType={TabType.LargeText}>
          <TabPane key="1" tab="高标签栏">
            <View style={styles.contentArea}>
              <Text>标签栏高度为 60px</Text>
              <Text>适用于需要更大点击区域的场景</Text>
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

export default AdvancedFeatures;
