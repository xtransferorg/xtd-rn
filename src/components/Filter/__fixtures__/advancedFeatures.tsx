import React, { useState, createRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Filter, Space, ItemRef, Button, Fill } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const searchOptions = [
  { value: 1, label: '苹果1' },
  { value: 2, label: '香蕉1' },
  { value: 3, label: '橙子1' },
  { value: 4, label: '葡萄1' },
  { value: 5, label: '草莓1' },
];

const AdvancedFeatures = () => {
  const [searchValue, setSearchValue] = useState<number>();
  const [searchLabel, setSearchLabel] = useState<string>();
  const [customLabel, setCustomLabel] = useState<string>();
  const searchRef = createRef<ItemRef>();
  const customRef = createRef<ItemRef>();

  return (
    <Space>
      <Card title="搜索功能">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="搜索筛选"
              itemLabel={searchLabel}
              ref={searchRef}
              style={styles.item}
              search={true}
              options={searchOptions}
              value={searchValue}
              onChange={(v, option) => {
                if (typeof v === 'number') {
                  setSearchValue(v);
                  setSearchLabel(option.label);
                  searchRef.current?.close();
                }
              }}
            />
            <Filter.Item
              placeholder="加载状态"
              style={styles.item}
              loading={true}
              options={[]}
            />
          </ScrollView>
        </Filter>
      </Card>

      <Card title="自定义面板内容">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="自定义面板"
              itemLabel={customLabel}
              ref={customRef}
              style={styles.item}
              customPanelContent={
                <View style={styles.panel200}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}
                  >
                    完全自定义的面板
                  </Text>
                  <Text>这里可以放置任何复杂的组件</Text>
                  <View style={styles.btnGroupWrapper}>
                    <Button
                      style={styles.btn}
                      fill={Fill.outline}
                      onPress={() => {
                        setCustomLabel(undefined);
                        customRef.current?.close();
                      }}
                    >
                      清除
                    </Button>
                    <Button
                      style={styles.btn}
                      onPress={() => {
                        setCustomLabel('自定义选择');
                        customRef.current?.close();
                      }}
                    >
                      选择
                    </Button>
                  </View>
                </View>
              }
            />
            <Filter.Item
              placeholder="事件回调"
              style={styles.item}
              onPanelOpen={() => console.log('面板打开')}
              onPanelClosed={() => console.log('面板关闭')}
            >
              <View style={styles.panel100}>
                <Text>查看控制台日志</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>

      <Card title="带徽章的选项">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="徽章筛选"
              style={styles.item}
              options={[
                { value: 1, label: '热门', badge: 'HOT' },
                { value: 2, label: '新品', badge: 'NEW' },
                { value: 3, label: '促销', badge: 99 },
              ]}
            />
            <Filter.Item
              placeholder="树形结构"
              style={styles.item}
              options={[
                {
                  value: 'electronics',
                  label: '电子产品',
                  children: [
                    { value: 'phone', label: '手机' },
                    { value: 'laptop', label: '笔记本' },
                  ],
                },
                {
                  value: 'clothing',
                  label: '服装',
                  children: [
                    { value: 'shirt', label: '衬衫' },
                    { value: 'pants', label: '裤子' },
                  ],
                },
              ]}
            />
          </ScrollView>
        </Filter>
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
