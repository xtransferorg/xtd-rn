import React, { useState, useRef, ReactNode } from 'react';
import { Button, FloatingLayer, Space, List, Fill } from '@xrnjs/ui';
import { Dimensions, Animated, Easing } from 'react-native';
import { IconXClosesmall1, IconXLeftsmall1 } from '../../../icons/index';
import styles from './style';
import Card from '_global/Card';

const ScreenWidth = Dimensions.get('window').width;

type ListOption = {
  label: ReactNode | string;
  value: string;
  children?: { label: ReactNode | string; value: string }[];
};

const mockList: ListOption[] = [
  {
    label: '上海',
    value: 'Shanghai',
    children: [
      { label: '杨浦区', value: 'yangpu' },
      { label: '徐汇区', value: 'xuhui' },
      { label: '长宁区', value: 'changning' },
      { label: '浦东新区', value: 'pudong' },
    ],
  },
  {
    label: '北京',
    value: 'Beijing',
    children: [
      { label: '东城区', value: 'dongcheng' },
      { label: '西城区', value: 'xicheng' },
      { label: '海淀区', value: 'haidian' },
      { label: '朝阳区', value: 'chaoyang' },
    ],
  },
  {
    label: '重庆',
    value: 'Chongqin',
    children: [
      { label: '万州区', value: 'wanzhou' },
      { label: '涪陵区', value: 'fuling' },
      { label: '渝中区', value: 'yuzhong' },
      { label: '大渡口区', value: 'dadukou' },
    ],
  },
  {
    label: '天津',
    value: 'Tianjin',
    children: [
      { label: '武清区', value: 'wuqing' },
      { label: '和平区', value: 'heping' },
      { label: '河东区', value: 'hedong' },
      { label: '河西区', value: 'hexi' },
    ],
  },
];
const SwitchFloatingLayerScreen = () => {
  const [title, setTitle] = useState<ReactNode | string>('地址选择');
  const [list, setList] = useState<ListOption[]>(mockList);
  const [isFirstLevel, setFirstLevel] = useState<boolean>(true);

  const [visible, setVisible] = useState<boolean>(false);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const slideAnim = animatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0 - ScreenWidth, 0, ScreenWidth], // 100 是你想要滑动的距离
  });

  const goSlide = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: -1,
        duration: 10,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 10,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };

  const backSlide = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 10,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };

  const onListItem = (label: ReactNode | string, children?: ListOption[]) => {
    if (!children) {
      closePopup();
      return;
    }
    goSlide();
    setTitle(label);
    setList(children || []);
    setFirstLevel(false);
  };

  const closePopup = () => {
    setVisible(false);
    setList(mockList);
    setFirstLevel(true);
  };

  const backPopup = () => {
    setTitle('地址选择');
    setList(mockList || []);
    setFirstLevel(true);
    backSlide();
  };

  const listStyle = {
    transform: [
      {
        translateX: slideAnim,
      },
    ],
  };

  return (
    <Space>
      <Card title="二级跳转">
        <FloatingLayer
          title={title}
          visible={visible}
          showCancelButton
          cancelBtnIcon={
            isFirstLevel ? (
              <IconXClosesmall1 size={20} strokeWidth={0} fill="#413F57" />
            ) : (
              <IconXLeftsmall1 size={20} strokeWidth={0} fill="#413F57" />
            )
          }
          showConfirmButton={false}
          onPressOverlay={() => closePopup()}
          onPressTextButton={() => closePopup()}
          onConfirm={() => closePopup()}
          onCancel={() => (isFirstLevel ? closePopup() : backPopup())}
          useNative
          onClose={closePopup}
          headerStyle={styles.headerStyle}
          cancelBtnStyle={styles.cancelBtnStyle}
          titleStyle={styles.titleStyle}
          confirmBtnStyle={styles.confirmBtnStyle}
          contentStyle={styles.contentStyle}
          footer={
            <Button
              fill={Fill.solid}
              style={styles.newBtn}
              onPress={() => closePopup()}
            >
              确定
            </Button>
          }
        >
          <Animated.View style={[styles.fadeContainer, listStyle]}>
            <List style={styles.list}>
              {list.map((i, j) => (
                <List.Item
                  key={`${j}`}
                  rightStyle={styles.rightStyle}
                  onPress={() => onListItem(i.label, i?.children)}
                  arrow={!!i.children}
                >{`${i.label}`}</List.Item>
              ))}
            </List>
          </Animated.View>
        </FloatingLayer>
        <Button onPress={() => setVisible(true)}>打开二级跳转</Button>
      </Card>
    </Space>
  );
};

export default SwitchFloatingLayerScreen;
