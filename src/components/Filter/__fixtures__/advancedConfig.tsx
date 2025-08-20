import React, { useState, createRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Filter, Space, ItemRef, Button, Fill } from '@xrnjs/ui';
import { IconXASpecification1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const searchOptions = [
  { value: 1, label: '苹果' },
  { value: 2, label: '香蕉' },
  { value: 3, label: '橙子' },
  { value: 4, label: '葡萄' },
  { value: 5, label: '草莓' },
];

const AdvancedConfig = () => {
  const [searchValue, setSearchValue] = useState<number>();
  const [searchLabel, setSearchLabel] = useState<string>();
  const [customLabel, setCustomLabel] = useState<string>();
  const searchRef = createRef<ItemRef>();
  const customRef = createRef<ItemRef>();

  return (
    <Space>
      <Card title="箭头方向控制">
        <Filter style={styles.filterWrapper} direction="up">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item placeholder="向上展开" style={styles.item}>
              <View style={styles.panel100}>
                <Text>面板向上展开</Text>
              </View>
            </Filter.Item>
            <Filter.Item placeholder="默认向下" style={styles.item}>
              <View style={styles.panel100}>
                <Text>面板向下展开</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>

      <Card title="动画时长控制">
        <Filter style={styles.filterWrapper} duration={0.8}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item placeholder="慢速动画" style={styles.item}>
              <View style={styles.panel100}>
                <Text>0.8秒动画</Text>
              </View>
            </Filter.Item>
            <Filter.Item
              placeholder="快速动画"
              style={styles.item}
              duration={0.1}
            >
              <View style={styles.panel100}>
                <Text>0.1秒动画</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>

      <Card title="加载状态">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="加载中"
              style={styles.item}
              loading={true}
              options={[]}
            />
            <Filter.Item placeholder="正常状态" style={styles.item}>
              <View style={styles.panel100}>
                <Text>正常内容</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>

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
          </ScrollView>
        </Filter>
      </Card>

      <Card title="自定义图标">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="自定义图标"
              style={styles.item}
              icon={(active) => (
                <IconXASpecification1
                  size={16}
                  color={active ? '#FF6B35' : '#999'}
                />
              )}
            >
              <View style={styles.panel100}>
                <Text>自定义图标内容</Text>
              </View>
            </Filter.Item>
            <Filter.Item
              placeholder="图标颜色"
              style={styles.item}
              arrowIconColor="#999"
              arrowIconActiveColor="#FF6B35"
              iconSize={20}
            >
              <View style={styles.panel100}>
                <Text>自定义图标颜色</Text>
              </View>
            </Filter.Item>
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
          </ScrollView>
        </Filter>
      </Card>

      <Card title="层级和交互控制">
        <Filter
          style={styles.filterWrapper}
          zIndex={999}
          closeOnPressOutside={false}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item placeholder="高层级" style={styles.item} zIndex={1000}>
              <View style={styles.panel100}>
                <Text>z-index: 1000</Text>
                <Text>点击外部不会关闭</Text>
              </View>
            </Filter.Item>
            <Filter.Item
              placeholder="可点击外部关闭"
              style={styles.item}
              closeOnPressOutside={true}
            >
              <View style={styles.panel100}>
                <Text>点击外部会关闭</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>

      <Card title="面板事件回调">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
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

      <Card title="禁用状态">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="禁用筛选"
              style={styles.item}
              disabled={true}
            >
              <View style={styles.panel100}>
                <Text>这个筛选项被禁用了</Text>
              </View>
            </Filter.Item>
            <Filter.Item placeholder="正常筛选" style={styles.item}>
              <View style={styles.panel100}>
                <Text>正常可用</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>
    </Space>
  );
};

export default AdvancedConfig;
