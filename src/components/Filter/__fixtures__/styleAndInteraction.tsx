import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Filter, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

// const basicOptions = [
//   { value: 1, label: '选项1' },
//   { value: 2, label: '选项2' },
//   { value: 3, label: '选项3' },
// ];

const StyleAndInteraction = () => {
  return (
    <Space>
      {/* <Card title="自定义样式">
        <Filter
          style={styles.filterWrapper}
          activeColor="#FF6B35"
          numberOfLines={1}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="自定义激活颜色"
              options={basicOptions}
              arrowIconActiveColor="#ccc"
              style={styles.item}
            >
              <View style={styles.panel100}>
                <Text>激活时显示红色</Text>
              </View>
            </Filter.Item>
            <Filter.Item
              placeholder="很长的筛选项名称会被截断显示"
              style={styles.item}
              numberOfLines={1}
            >
              <View style={styles.panel100}>
                <Text>单行显示，超出部分省略</Text>
              </View>
            </Filter.Item>
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
                <Text>使用自定义图标</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card> */}

      <Card title="交互控制">
        <Filter
          style={styles.filterWrapper}
          direction="up"
          duration={0.5}
          zIndex={999}
          closeOnPressOutside={false}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item placeholder="向上展开" style={styles.item}>
              <View style={styles.panel100}>
                <Text>面板向上展开</Text>
                <Text>点击外部不会关闭</Text>
              </View>
            </Filter.Item>
            <Filter.Item
              placeholder="禁用状态"
              style={styles.item}
              disabled={true}
            >
              <View style={styles.panel100}>
                <Text>这个筛选项被禁用了</Text>
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
    </Space>
  );
};

export default StyleAndInteraction;
