import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import { Tour, Button, TourStepProps } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { useMeasure } = Tour;
  const { ref, layout, onLayout, refresh } = useMeasure();
  const {
    ref: ref2,
    layout: layout2,
    onLayout: onLayout2,
    refresh: refresh2,
  } = useMeasure();

  const refreshAll = () => {
    refresh();
    refresh2();
  };

  const controlledSteps: TourStepProps[] = [
    {
      title: '受控模式',
      layout: layout,
      description: '这是受控模式的第一步，步骤切换由外部控制',
    },
    {
      title: '受控模式',
      layout: layout2,
      description: '这是受控模式的第二步，可以通过外部按钮控制',
    },
  ];

  const customContentSteps: TourStepProps[] = [
    {
      title: '自定义内容',
      layout: layout,
      description: (
        <View>
          <Image
            style={styles.topImage}
            source={{
              uri: 'https://static.xtransfer.com/boss/static/3-h5_55107e1e8bee49f8.png',
            }}
          />
          <Text style={styles.description}>
            支持在描述中插入自定义组件，如图片、按钮等
          </Text>
        </View>
      ),
      prevButton: <></>,
      indicatorsRender: () => <></>,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card title="高级功能">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>受控模式</Text>
            <Text style={styles.demoDescription}>
              通过外部状态控制当前步骤，实现更灵活的引导流程
            </Text>

            <View style={styles.buttonGroup}>
              <Space gap={8}>
                <Button
                  onPress={() => {
                    refreshAll();
                    setVisible1(true);
                  }}
                >
                  受控引导
                </Button>
                <Button
                  onPress={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep <= 0}
                >
                  上一步
                </Button>
                <Button
                  onPress={() => setCurrentStep(Math.min(1, currentStep + 1))}
                  disabled={currentStep >= 1}
                >
                  下一步
                </Button>
              </Space>
            </View>

            <Text style={styles.demoDescription}>
              当前步骤: {currentStep + 1}
            </Text>
          </View>

          <View style={styles.targetGroup}>
            <View
              style={[styles.targetItem, styles.colorBlue]}
              ref={ref}
              onLayout={onLayout}
            >
              <Text style={styles.targetText}>目标元素1</Text>
            </View>

            <View
              style={[
                styles.targetItem,
                styles.targetItemMedium,
                styles.colorGreen,
              ]}
              ref={ref2}
              onLayout={onLayout2}
            >
              <Text style={styles.targetText}>目标元素2</Text>
            </View>
          </View>
        </Space>

        <View style={styles.demoContainer}>
          <Text style={styles.demoTitle}>自定义内容</Text>
          <Text style={styles.demoDescription}>
            在引导内容中插入自定义组件，如图片、视频等
          </Text>

          <View style={styles.buttonGroup}>
            <Button
              onPress={() => {
                refreshAll();
                setVisible2(true);
              }}
            >
              自定义内容引导
            </Button>
          </View>
        </View>
        {/* 受控模式 */}
        <Tour
          visible={visible1}
          onBackdropPress={() => setVisible1(false)}
          current={currentStep}
          onChange={setCurrentStep}
          steps={controlledSteps}
          onFinish={() => setVisible1(false)}
        />

        {/* 自定义内容 */}
        <Tour
          visible={visible2}
          onFinish={() => setVisible2(false)}
          mask={false}
          steps={customContentSteps}
        />
      </Card>
    </ScrollView>
  );
};
