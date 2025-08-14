import React, { FC, useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import styles from './style';
import { Tour, Button, TourStepProps } from '@xrnjs/ui';
import Card from '_global/Card';

interface TourScreenProps {}
const TourScreen: FC<TourScreenProps> = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { useMeasure } = Tour;
  const { ref, layout, onLayout } = useMeasure();
  const { ref: ref2, layout: layout2, onLayout: onLayout2 } = useMeasure();
  const { ref: ref3, layout: layout3, onLayout: onLayout3 } = useMeasure();
  const { ref: ref4, layout: layout4, onLayout: onLayout4 } = useMeasure();
  const { ref: ref5, layout: layout5, onLayout: onLayout5 } = useMeasure();
  const { ref: ref6, layout: layout6, onLayout: onLayout6 } = useMeasure();
  const { ref: ref7, layout: layout7, onLayout: onLayout7 } = useMeasure();

  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);
  const [visible4, setVisible4] = useState<boolean>(false);

  const cover = (
    <Image
      style={{ height: 200 }}
      resizeMode={'cover'}
      source={{
        uri: 'https://static.xtransfer.com/boss/static/banner-2_a5feaa9bf9e2e497.png',
      }}
    />
  );
  // 数据跨多个模块，可以使用redux、storage等方式同步layout数据
  const steps: TourStepProps[] = [
    {
      title: '标题1',
      cover,
      layout: layout,
      description: '全部信息',
    },
    {
      title: '标题2',
      // cover,
      layout: layout2,
      description: '全部信息-去除cover',
    },
    {
      // title: '标题3',
      layout: layout3,
      description: '全部信息-去除cover-去除title',
    },
    {
      title: '标题4',
      layout: layout4,
      description: '不显示指示器（包括skip）',
      indicatorsRender: () => null,
    },
    {
      title: '标题5',
      layout: layout5,
      description: '自定义背景色',
      arrowColor: 'orange',
      style: { backgroundColor: 'orange' },
    },
    {
      title: '标题6',
      layout: layout6,
      description: '自定义按钮',
      prevButton: (
        <View style={[styles.btn, styles.preBtn]}>
          <Text style={styles.btnText}>上一步</Text>
        </View>
      ),
      nextButton: (
        <View style={[styles.btn, styles.nextBtn]}>
          <Text style={[styles.btnText, styles.btnNextText]}>确认</Text>
        </View>
      ),
    },
  ];
  return (
    <ScrollView>
      <Card title="基础用法">
        <Button onPress={() => setVisible(true)}>显示Tour</Button>

        <View
          style={[styles.item, { backgroundColor: 'red' }]}
          ref={ref}
          onLayout={onLayout}
        >
          <Text>{steps[0]?.description}</Text>
        </View>
        <View
          style={[styles.item, { backgroundColor: 'green', width: 100 }]}
          ref={ref2}
          onLayout={onLayout2}
        >
          <Text>{steps[1]?.description}</Text>
        </View>
        <View
          style={[styles.item, { backgroundColor: 'blue', width: 200 }]}
          ref={ref3}
          onLayout={onLayout3}
        >
          <Text>{steps[2]?.description}</Text>
        </View>
        <View
          style={[styles.item, { backgroundColor: 'pink', width: 300 }]}
          ref={ref4}
          onLayout={onLayout4}
        >
          <Text>{steps[3]?.description}</Text>
        </View>
        <View
          style={[styles.item, { backgroundColor: 'orange', width: '100%' }]}
          ref={ref5}
          onLayout={onLayout5}
        >
          <Text>{steps[4]?.description}</Text>
        </View>
        <View
          style={[styles.item, { backgroundColor: '#F56A00', width: '100%' }]}
          ref={ref6}
          onLayout={onLayout6}
        >
          <Text>{steps[5]?.description}</Text>
        </View>
        <Tour
          visible={visible}
          onBackdropPress={() => setVisible(false)}
          steps={steps}
          onTargetPress={() => console.log('onTargetPress~')}
          skip={true}
          onSkip={() => setVisible(false)}
          onChange={(currrent) => console.log('onChange~', currrent)}
          onFinish={() => setVisible(false)}
        />
      </Card>

      <Card title="蒙层变化">
        <Button onPress={() => setVisible2(true)}>直接无蒙层</Button>
        <Button onPress={() => setVisible3(true)}>蒙层自定义透明</Button>
        <Button onPress={() => setVisible4(true)}>
          去除蒙层 & 带自定义顶部超出图片
        </Button>
        <View
          style={[styles.item, { backgroundColor: 'red' }]}
          ref={ref7}
          onLayout={onLayout7}
        />
        <Tour
          visible={visible2}
          onFinish={() => setVisible2(false)}
          mask={false}
          steps={[
            {
              title: '去除蒙层 & 带自定义顶部超出图片',
              layout: layout7,
              description: '底部提示&按钮自定义',
              prevButton: <></>,
              indicatorsRender: () => <></>,
            },
          ]}
        />

        <Tour
          visible={visible3}
          onFinish={() => setVisible3(false)}
          onBackdropPress={() => setVisible3(false)}
          onTargetPress={() => console.log('onTargetPress~')}
          maskOpacity={0}
          steps={[
            {
              title: '设置蒙层透明',
              layout: layout7,
              description:
                '可以响应onBackdropPress&onTargetPress， 从而实现点击其他空白地方关闭 & 点击目标响应等',
              prevButton: <></>,
              indicatorsRender: () => <></>,
            },
          ]}
        />

        <Tour
          visible={visible4}
          onFinish={() => setVisible4(false)}
          mask={false}
          steps={[
            {
              title: '去除蒙层&带自定义顶部超出图片',
              layout: layout7,
              description: (
                <View>
                  <Image
                    style={styles.topImg}
                    source={{
                      uri: 'https://static.xtransfer.com/boss/static/3-h5_55107e1e8bee49f8.png',
                    }}
                  />
                  <Text style={styles.description}>
                    去除蒙层 & 带自定义顶部超出图片
                  </Text>
                </View>
              ),
              prevButton: <></>,
              indicatorsRender: () => <></>,
            },
          ]}
        />
      </Card>
    </ScrollView>
  );
};

export default TourScreen;
