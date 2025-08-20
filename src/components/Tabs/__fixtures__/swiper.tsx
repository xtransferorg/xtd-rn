//滑动布局
import React, { useState, useMemo } from 'react';
import { Text } from 'react-native';
import { Tabs, TabType, OptionGroup } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

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
      { label: '第14个子项3', value: 'fourteen-sub-three' },
      { label: '第14个子项4', value: 'fourteen-sub-four' },
      { label: '第14个子项5', value: 'fourteen-sub-five' },
    ],
  },
];

const SwiperScreen = () => {
  const [value, setValue] = useState<string>();

  const [swipeTabKey, setSwipeTabKey] = useState<string>('one');

  const filterTab = useMemo(() => {
    return mockTabList.find((i) => i.value === swipeTabKey);
  }, [swipeTabKey]);

  return (
    <Card>
      <Text>左右滑动布局，二级Tab</Text>
      <Tabs
        swipe
        tabType={TabType.SmallText}
        activeKey={swipeTabKey}
        onChange={setSwipeTabKey}
      >
        {mockTabList.map((item) => (
          <TabPane key={`${item.value}`} tab={`${item.label}`} />
        ))}
      </Tabs>

      <OptionGroup
        options={filterTab?.children || []}
        value={value}
        onChange={(v) => setValue(v)}
        // 自定义按钮样式
        optionStyle={styles.optionStyle}
        // 激活后选项样式
        optionActiveStyle={styles.optionActiveStyle}
        // 选项中文本样式
        optionTextStyle={styles.optionTextStyle}
        // 被激活后文本样式
        optionTextActiveStyle={styles.optionTextActiveStyle}
        scrollable
      />
    </Card>
  );
};

export default SwiperScreen;
