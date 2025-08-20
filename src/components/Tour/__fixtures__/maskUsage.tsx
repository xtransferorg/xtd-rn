import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import { Tour, Button, TourStepProps } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const { useMeasure } = Tour;
  const { ref, layout, onLayout, refresh } = useMeasure();

  const refreshAll = () => {
    refresh();
  };

  const noMaskSteps: TourStepProps[] = [
    {
      title: '无蒙层模式',
      layout: layout,
      description: '这个模式下没有背景蒙层，用户可以直接与页面交互',
      prevButton: <></>,
      indicatorsRender: () => <></>,
    },
  ];

  const transparentMaskSteps: TourStepProps[] = [
    {
      title: '透明蒙层',
      layout: layout,
      description: '蒙层完全透明，可以响应背景点击和目标点击事件',
      prevButton: <></>,
      indicatorsRender: () => <></>,
    },
  ];

  const customMaskSteps: TourStepProps[] = [
    {
      title: '自定义蒙层',
      layout: layout,
      description: '使用自定义颜色和透明度的蒙层效果',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card title="蒙层配置">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>不同蒙层效果</Text>
            <Text style={styles.demoDescription}>
              展示不同的蒙层配置选项，包括无蒙层、透明蒙层和自定义蒙层
            </Text>

            <View style={styles.buttonGroup}>
              <Space gap={8}>
                <Button
                  onPress={() => {
                    refreshAll();
                    setVisible1(true);
                  }}
                >
                  无蒙层
                </Button>
                <Button
                  onPress={() => {
                    refreshAll();
                    setVisible2(true);
                  }}
                >
                  透明蒙层
                </Button>
                <Button
                  onPress={() => {
                    refreshAll();
                    setVisible3(true);
                  }}
                >
                  自定义蒙层
                </Button>
              </Space>
            </View>

            <View style={styles.targetGroup}>
              <View
                style={[styles.targetItem, styles.colorRed]}
                ref={ref}
                onLayout={onLayout}
              >
                <Text style={styles.targetText}>目标元素</Text>
              </View>
            </View>
          </View>
        </Space>

        {/* 无蒙层 */}
        <Tour
          visible={visible1}
          onFinish={() => setVisible1(false)}
          mask={false}
          steps={noMaskSteps}
        />

        {/* 透明蒙层 */}
        <Tour
          visible={visible2}
          onFinish={() => setVisible2(false)}
          onBackdropPress={() => setVisible2(false)}
          onTargetPress={() => console.log('点击了目标元素')}
          maskOpacity={0}
          steps={transparentMaskSteps}
        />

        {/* 自定义蒙层 */}
        <Tour
          visible={visible3}
          onFinish={() => setVisible3(false)}
          onBackdropPress={() => setVisible3(false)}
          maskColor="#000000"
          maskOpacity={0.6}
          steps={customMaskSteps}
        />
      </Card>
    </ScrollView>
  );
};
