import React, { useState, createRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  Filter,
  Button,
  Space,
  Fill,
  ItemRef,
  FilterLayoutType,
} from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const basicOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' },
];

const BasicUsage = () => {
  const [customLabel, setCustomLabel] = useState<string>();
  const [optionLabel, setOptionLabel] = useState<string>();
  const [optionValue, setOptionValue] = useState<number>();
  const customRef = createRef<ItemRef>();
  const optionRef = createRef<ItemRef>();

  return (
    <Space>
      <Card title="基础筛选 - 等分布局">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="自定义内容"
              itemLabel={customLabel}
              ref={customRef}
              style={styles.item}
            >
              <View style={styles.panel200}>
                <Text>这是自定义面板内容</Text>
                <Text>可以放置任何 React 组件</Text>
              </View>
              <View style={styles.btnGroupWrapper}>
                <Button
                  style={styles.btn}
                  fill={Fill.outline}
                  onPress={() => {
                    setCustomLabel(undefined);
                    customRef.current?.close();
                  }}
                >
                  重置
                </Button>
                <Button
                  style={styles.btn}
                  onPress={() => {
                    setCustomLabel('已选择');
                    customRef.current?.close();
                  }}
                >
                  确定
                </Button>
              </View>
            </Filter.Item>

            <Filter.Item
              placeholder="选项筛选"
              itemLabel={optionLabel}
              ref={optionRef}
              options={basicOptions}
              value={optionValue}
              onChange={(v, option) => {
                console.log(v);
                if (typeof v === 'number') {
                  setOptionValue(v);
                  setOptionLabel(option.label);
                  optionRef.current?.close();
                }
              }}
              style={styles.item}
            />

            <Filter.Item placeholder="简单筛选" style={styles.item}>
              <View style={styles.panel100}>
                <Text>简单的筛选内容</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>

      <Card title="等距布局">
        <Filter
          style={styles.filterWrapper}
          filterLayoutType={FilterLayoutType.Equidistance}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item placeholder="筛选项1" style={styles.item}>
              <View style={styles.panel100}>
                <Text>等距布局内容1</Text>
              </View>
            </Filter.Item>
            <Filter.Item placeholder="筛选项2" style={styles.item}>
              <View style={styles.panel100}>
                <Text>等距布局内容2</Text>
              </View>
            </Filter.Item>
            <Filter.Item placeholder="筛选项3" style={styles.item}>
              <View style={styles.panel100}>
                <Text>等距布局内容3</Text>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>
    </Space>
  );
};

export default BasicUsage;
