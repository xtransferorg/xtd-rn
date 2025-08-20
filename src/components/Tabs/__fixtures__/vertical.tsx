//滑动布局
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Tabs, TabType, Options, Collapse } from '@xrnjs/ui';
import Card from '_global/Card';

const { TabPane } = Tabs;

const mockTabList = [
  {
    label: '第1个',
    value: 'one',
    children: [
      { label: '第1个子项1', value: 'one-sub-one' },
      { label: '第1个子项2', value: 'one-sub-two' },
      { label: '第1个子项3', value: 'one-sub-three' },
      { label: '第1个子项4', value: 'one-sub-four' },
      { label: '第1个子项5', value: 'one-sub-five' },
      { label: '第1个子项6', value: 'one-sub-six' },
    ],
  },
  {
    label: '第2个',
    value: 'two',
    children: [
      { label: '第2个子项1', value: 'two-sub-one' },
      { label: '第2个子项2', value: 'two-sub-two' },
      { label: '第2个子项3', value: 'two-sub-three' },
      { label: '第2个子项4', value: 'two-sub-four' },
      { label: '第2个子项5', value: 'two-sub-five' },
    ],
  },
  {
    label: '第3个',
    value: 'three',
    children: [
      { label: '第3个子项1', value: 'three-sub-one' },
      { label: '第3个子项2', value: 'three-sub-two' },
      { label: '第3个子项3', value: 'three-sub-three' },
      { label: '第3个子项4', value: 'three-sub-four' },
      { label: '第3个子项5', value: 'three-sub-five' },
    ],
  },
  {
    label: '第4个',
    value: 'four',
    children: [
      { label: '第4个子项1', value: 'four-sub-one' },
      { label: '第4个子项2', value: 'four-sub-two' },
      { label: '第4个子项3', value: 'four-sub-three' },
      { label: '第4个子项4', value: 'four-sub-four' },
      { label: '第4个子项5', value: 'four-sub-five' },
    ],
  },
  {
    label: '第5个',
    value: 'five',
    children: [
      { label: '第5个子项1', value: 'five-sub-one' },
      { label: '第5个子项2', value: 'five-sub-two' },
      { label: '第5个子项3', value: 'five-sub-three' },
      { label: '第5个子项4', value: 'five-sub-four' },
      { label: '第5个子项5', value: 'five-sub-five' },
    ],
  },
  {
    label: '第6个',
    value: 'six',
    children: [
      { label: '第6个子项1', value: 'six-sub-one' },
      { label: '第6个子项2', value: 'six-sub-two' },
      { label: '第6个子项3', value: 'six-sub-three' },
      { label: '第6个子项4', value: 'six-sub-four' },
      { label: '第6个子项5', value: 'six-sub-five' },
    ],
  },
  {
    label: '第7个',
    value: 'seven',
    children: [
      { label: '第7个子项1', value: 'seven-sub-one' },
      { label: '第7个子项2', value: 'seven-sub-two' },
      { label: '第7个子项3', value: 'seven-sub-three' },
      { label: '第7个子项4', value: 'seven-sub-four' },
      { label: '第7个子项5', value: 'seven-sub-five' },
    ],
  },
  {
    label: '第8个',
    value: 'eight',
    children: [
      { label: '第8个子项1', value: 'eight-sub-one' },
      { label: '第8个子项2', value: 'eight-sub-two' },
      { label: '第8个子项3', value: 'eight-sub-three' },
      { label: '第8个子项4', value: 'eight-sub-four' },
      { label: '第8个子项5', value: 'eight-sub-five' },
    ],
  },
  {
    label: '第9个',
    value: 'nine',
    children: [
      { label: '第9个子项1', value: 'nine-sub-one' },
      { label: '第9个子项2', value: 'nine-sub-two' },
      { label: '第9个子项3', value: 'nine-sub-three' },
      { label: '第9个子项4', value: 'nine-sub-four' },
      { label: '第9个子项5', value: 'nine-sub-five' },
    ],
  },
  {
    label: '第10个',
    value: 'ten',
    children: [
      { label: '第10个子项1', value: 'ten-sub-one' },
      { label: '第10个子项2', value: 'ten-sub-two' },
      { label: '第10个子项3', value: 'ten-sub-three' },
      { label: '第10个子项4', value: 'ten-sub-four' },
      { label: '第10个子项5', value: 'ten-sub-five' },
    ],
  },
  {
    label: '第11个',
    value: 'eleven',
    children: [
      { label: '第11个子项1', value: 'eleven-sub-one' },
      { label: '第11个子项2', value: 'eleven-sub-two' },
      { label: '第11个子项3', value: 'eleven-sub-three' },
      { label: '第11个子项4', value: 'eleven-sub-four' },
      { label: '第11个子项5', value: 'eleven-sub-five' },
    ],
  },
  {
    label: '第12个',
    value: 'twelve',
    children: [
      { label: '第12个子项1', value: 'twelve-sub-one' },
      { label: '第12个子项2', value: 'twelve-sub-two' },
      { label: '第12个子项3', value: 'twelve-sub-three' },
      { label: '第12个子项4', value: 'twelve-sub-four' },
      { label: '第12个子项5', value: 'twelve-sub-five' },
    ],
  },
  {
    label: '第13个',
    value: 'thirteen',
    children: [
      { label: '第13个子项1', value: 'thirteen-sub-one' },
      { label: '第13个子项2', value: 'thirteen-sub-two' },
      { label: '第13个子项3', value: 'thirteen-sub-three' },
      { label: '第13个子项4', value: 'thirteen-sub-four' },
      { label: '第13个子项5', value: 'thirteen-sub-five' },
    ],
  },
  {
    label: '第14个',
    value: 'fourteen',
    children: [
      { label: '第14个子项1', value: 'fourteen-sub-one' },
      { label: '第14个子项2', value: 'fourteen-sub-two' },
    ],
  },
];

const VerticalScreen = () => {
  const [tabKey, setTabKey] = useState<string>('ChangeHeight');

  return (
    <Card>
      <Text>垂直模式</Text>
      <View style={{ height: 300 }}>
        <Tabs
          vertical
          tabType={TabType.SmallText}
          activeKey={tabKey} // 可选
          onChange={setTabKey} // 可选 与 activeKey 配合使用
        >
          <TabPane key={'ChangeHeight'} tab={'高度变化项'}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 16,
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <View
                  style={{
                    width: 4,
                    height: 12,
                    borderRadius: 1,
                    backgroundColor: '#F56A00',
                  }}
                />
                <Text
                  style={{ color: '#181721', fontSize: 16, fontWeight: 'bold' }}
                >
                  高度变化项
                </Text>
              </View>
              <Collapse>
                <Collapse.Item
                  title={
                    <Text style={{ color: '#FF7A00' }}>
                      验证高度变化的时候定位是否依旧准确
                    </Text>
                  }
                  name="1"
                >
                  <View style={{ backgroundColor: 'red', height: 100 }}>
                    <Text>内容区域</Text>
                  </View>
                </Collapse.Item>
                <Collapse.Item
                  headerStyle={{ flexDirection: 'column' }}
                  name="3"
                >
                  <View>
                    <Text style={{ color: 'red' }}>
                      内容编辑区域 内容编辑区域 内容编辑区域
                    </Text>
                  </View>
                </Collapse.Item>
              </Collapse>
            </View>
          </TabPane>
          {mockTabList.map((item, i) => (
            <TabPane key={`${item.value}`} tab={`${item.label}`}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 16,
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <View
                  style={{
                    width: 4,
                    height: 12,
                    borderRadius: 1,
                    backgroundColor: '#F56A00',
                  }}
                />
                <Text
                  style={{ color: '#181721', fontSize: 16, fontWeight: 'bold' }}
                >
                  第{i + 1}项
                </Text>
              </View>

              <Options options={item.children} columns={1} />
              {/* <View style={{ height: 200, backgroundColor: 'red' }} /> */}
              {/* <Text>bottom {i + 1}</Text> */}
            </TabPane>
          ))}
        </Tabs>
      </View>
    </Card>
  );
};

export default VerticalScreen;
