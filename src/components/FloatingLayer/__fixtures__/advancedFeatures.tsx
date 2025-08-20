import React, { useState } from 'react';
import { Button, FloatingLayer, Space, Rate, Title, Input } from '@xrnjs/ui';
import { View, Text, Dimensions } from 'react-native';
import {
  IconXHappy1,
  IconXEasy1,
  IconXAwkward1,
  IconXAngry8,
  IconXVangry6,
} from '../../../icons/index';
import styles from './style';
import Card from '_global/Card';

const getIcon = (score: number) => {
  const iconSize = 120;
  let icon = <IconXHappy1 size={iconSize} />;

  switch (score) {
    case 1:
      icon = <IconXVangry6 size={iconSize} />;
      break;
    case 2:
    case 3:
      icon = <IconXAngry8 size={iconSize} />;
      break;
    case 4:
    case 5:
      icon = <IconXAwkward1 size={iconSize} />;
      break;
    case 6:
      icon = <IconXEasy1 size={iconSize} />;
      break;
    case 7:
      icon = <IconXHappy1 size={iconSize} />;
      break;
    default:
      break;
  }

  return icon;
};

const AdvancedFeaturesScreen = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [rateValue, setRateValue] = useState(0);
  const [count, setCount] = useState(2);

  const { width: screenWidth } = Dimensions.get('window');
  const starWidth = (screenWidth - 32) / 7;

  const numberCharacter = [];
  for (let i = 0; i < 7; ++i) {
    numberCharacter.push({
      normal: String(i + 1),
      selected: String(i + 1),
    });
  }

  return (
    <Space>
      <Card title="向下拖拽关闭">
        <FloatingLayer
          title="可拖拽关闭的浮层"
          description="向下拖拽可以关闭浮层"
          visible={visible1}
          enableSlidingClose
          onPressOverlay={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
          onConfirm={() => setVisible1(false)}
          showCancelButton
          footer={<Button style={styles.btn}>确定</Button>}
        >
          <View style={styles.longContentContainer}>
            <Text style={styles.longContentText}>
              这是一个支持向下拖拽关闭的浮层。您可以通过向下拖拽手势来关闭这个浮层，
              也可以点击遮罩层或取消按钮来关闭。
            </Text>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible1(true)}>拖拽关闭浮层</Button>
      </Card>

      <Card title="超长内容浮层">
        <FloatingLayer
          title="长内容浮层"
          enableSlidingClose
          threshold={0.7}
          visible={visible2}
          onPressOverlay={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
          onConfirm={() => setVisible2(false)}
          showCancelButton
          footer={<Button style={styles.btn}>确定</Button>}
        >
          <View style={styles.mockContent}>
            <Text style={styles.longContentText}>
              作为一站式外贸企业跨境金融和风控服务公司，XTransfer通过与知名跨国银行及金融机构合作，
              建设跨国大集团级全球多币种统一结算平台，并打造了以中小微企业为中心的，
              数据化、自动化、互联网化和智能化的反洗钱风控基础设施。
              XTransfer以科技为桥梁，链接全球大型金融机构和中小微企业，
              让中小微企业享受到和大型跨国集团企业同等水平的跨境金融服务。
            </Text>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible2(true)}>超长内容浮层</Button>
      </Card>

      <Card title="顶部额外配置">
        <FloatingLayer
          title="评分浮层"
          topExtra={<View style={styles.topExtra}>{getIcon(rateValue)}</View>}
          style={styles.overShow}
          visible={visible3}
          showCancelButton
          onPressOverlay={() => setVisible3(false)}
          onCancel={() => setVisible3(false)}
          onConfirm={() => setVisible3(false)}
          onClose={() => setVisible3(false)}
          useNative
          disableKeyboardManager
          splitLine={false}
          footer={
            <Button style={styles.newBtn} onPress={() => setVisible3(false)}>
              提交评分
            </Button>
          }
        >
          <View style={styles.rate}>
            <Title style={styles.rateTitle}>
              您认为完成结汇的难易程度如何？
            </Title>
            <Rate
              count={7}
              character={numberCharacter}
              background
              single
              value={rateValue}
              onChange={(v) => setRateValue(v)}
              size={{ width: starWidth }}
            />
            <View style={styles.rateDescription}>
              <Text style={styles.rateDescriptionText}>很困难</Text>
              <Text style={styles.rateDescriptionText}>非常简单</Text>
            </View>
            <Input.TextArea
              placeholder="还有什么建议想和我们说"
              style={styles.rateInput}
            />
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible3(true)}>评分浮层</Button>
      </Card>

      <Card title="动态内容高度">
        <FloatingLayer
          title="动态内容"
          visible={visible4}
          onPressOverlay={() => setVisible4(false)}
          onCancel={() => setVisible4(false)}
          onConfirm={() => setVisible4(false)}
          showCancelButton
          footer={<Button style={styles.btn}>确定</Button>}
        >
          <View style={styles.formContainer}>
            <Space>
              <Button onPress={() => setCount(count + 1)}>添加内容 (+1)</Button>
              <Button onPress={() => setCount(Math.max(1, count - 1))}>
                减少内容 (-1)
              </Button>
              {Array.from({ length: count }).map((_, index) => (
                <View style={styles.blockItem} key={index}>
                  <Text>动态内容项 {index + 1}</Text>
                </View>
              ))}
            </Space>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible4(true)}>动态内容高度</Button>
      </Card>

      <Card title="滚动内容">
        <FloatingLayer
          title="滚动列表"
          visible={visible5}
          onPressOverlay={() => setVisible5(false)}
          onCancel={() => setVisible5(false)}
          onConfirm={() => setVisible5(false)}
          showCancelButton
          showsVerticalScrollIndicator
          onContentScroll={(event) => {
            console.log('滚动位置:', event.nativeEvent.contentOffset.y);
          }}
        >
          <View style={styles.scrollContent}>
            {Array.from({ length: 20 }).map((_, index) => (
              <View style={styles.scrollItem} key={index}>
                <Text style={styles.scrollItemText}>滚动项目 {index + 1}</Text>
              </View>
            ))}
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible5(true)}>滚动内容浮层</Button>
      </Card>
    </Space>
  );
};

export default AdvancedFeaturesScreen;
