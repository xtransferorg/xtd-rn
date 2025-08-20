import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import { Tour, Button, TourStepProps } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  const [visible, setVisible] = useState(false);
  const { useMeasure } = Tour;
  const { ref, layout, onLayout, refresh } = useMeasure();
  const {
    ref: ref2,
    layout: layout2,
    onLayout: onLayout2,
    refresh: refresh2,
  } = useMeasure();
  const {
    ref: ref3,
    layout: layout3,
    onLayout: onLayout3,
    refresh: refresh3,
  } = useMeasure();

  const refreshAll = () => {
    refresh();
    refresh2();
    refresh3();
  };

  const cover = (
    <Image
      style={styles.coverImage}
      resizeMode="cover"
      source={{
        uri: 'https://static.xtransfer.com/boss/static/banner-2_a5feaa9bf9e2e497.png',
      }}
    />
  );

  const steps: TourStepProps[] = [
    {
      title: '欢迎使用引导功能',
      cover,
      layout: layout,
      description: '这是一个完整的引导步骤，包含标题、封面图片和描述信息',
    },
    {
      title: '第二步引导',
      layout: layout2,
      description: '这是没有封面图片的引导步骤，只包含标题和描述',
    },
    {
      layout: layout3,
      description: '这是最简单的引导步骤，只包含描述信息',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card title="基础用法">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>多步骤引导</Text>
            <Text style={styles.demoDescription}>
              展示包含多个步骤的基础引导功能，支持标题、封面图片和描述
            </Text>

            <View style={styles.buttonGroup}>
              <Button
                onPress={() => {
                  refreshAll();
                  setVisible(true);
                }}
              >
                开始引导
              </Button>
            </View>

            <View style={styles.targetGroup}>
              <View
                style={[styles.targetItem, styles.colorRed]}
                ref={ref}
                onLayout={onLayout}
              >
                <Text style={styles.targetText}>目标元素1</Text>
              </View>

              <View
                style={[
                  styles.targetItem,
                  styles.targetItemSmall,
                  styles.colorGreen,
                ]}
                ref={ref2}
                onLayout={onLayout2}
              >
                <Text style={styles.targetText}>目标元素2</Text>
              </View>

              <View
                style={[
                  styles.targetItem,
                  styles.targetItemMedium,
                  styles.colorBlue,
                ]}
                ref={ref3}
                onLayout={onLayout3}
              >
                <Text style={styles.targetText}>目标元素3</Text>
              </View>
            </View>
          </View>
        </Space>

        <Tour
          visible={visible}
          onBackdropPress={() => setVisible(false)}
          steps={steps}
          skip={true}
          onSkip={() => setVisible(false)}
          onChange={(current) => console.log('当前步骤:', current)}
          onFinish={() => setVisible(false)}
        />
      </Card>
    </ScrollView>
  );
};
