import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
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

  const steps: TourStepProps[] = [
    {
      title: '自定义背景色',
      layout: layout,
      description: '这个步骤使用了自定义的背景色和箭头颜色',
      arrowColor: 'orange',
      style: { backgroundColor: 'orange' },
    },
    {
      title: '自定义按钮',
      layout: layout2,
      description: '这个步骤使用了自定义的上一步和下一步按钮',
      prevButton: (
        <View style={[styles.customBtn, styles.prevBtn]}>
          <Text style={styles.btnText}>上一步</Text>
        </View>
      ),
      nextButton: (
        <View style={[styles.customBtn, styles.nextBtn]}>
          <Text style={[styles.btnText, styles.btnNextText]}>确认</Text>
        </View>
      ),
    },
    {
      title: '隐藏指示器',
      layout: layout3,
      description: '这个步骤隐藏了底部的指示器和跳过按钮',
      indicatorsRender: () => null,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card title="自定义样式">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>样式定制</Text>
            <Text style={styles.demoDescription}>
              展示如何自定义引导步骤的样式，包括背景色、按钮和指示器
            </Text>

            <View style={styles.buttonGroup}>
              <Button
                onPress={() => {
                  refreshAll();
                  setVisible(true);
                }}
              >
                自定义样式引导
              </Button>
            </View>

            <View style={styles.targetGroup}>
              <View
                style={[styles.targetItem, styles.colorOrange]}
                ref={ref}
                onLayout={onLayout}
              >
                <Text style={styles.targetText}>自定义背景</Text>
              </View>

              <View
                style={[
                  styles.targetItem,
                  styles.targetItemLarge,
                  styles.colorPrimary,
                ]}
                ref={ref2}
                onLayout={onLayout2}
              >
                <Text style={styles.targetText}>自定义按钮</Text>
              </View>

              <View
                style={[
                  styles.targetItem,
                  styles.targetItemFull,
                  styles.colorPink,
                ]}
                ref={ref3}
                onLayout={onLayout3}
              >
                <Text style={styles.targetText}>隐藏指示器</Text>
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
          onFinish={() => setVisible(false)}
        />
      </Card>
    </ScrollView>
  );
};
