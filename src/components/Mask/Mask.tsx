import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
  useEffect,
  useRef,
  isValidElement,
  ReactNode,
} from 'react';
import {
  Modal,
  Animated,
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
} from 'react-native';
import { isFunction } from 'lodash';

import { mergeProps } from '../../core/helpers';
import ShouldRender from '../ShouldRender';
import PressableAnimated from './PressableAnimated';

import createStyles from './styles/mask.style';
import { useTheme } from '../Theme';
import { useMemoizedFn } from 'ahooks';

export interface MaskProps {
  /**
   * 控制蒙层是否可见
   * @default false
   */
  visible?: boolean;

  /**
   * 点击背景容器时触发的事件
   */
  onBackdropPress?: () => void;

  /**
   * 动画时长
   * @default 300
   */
  duration?: number;

  /**
   * 动画结束后触发的事件
   */
  onFadeDone?: () => void;

  /**
   * 背景是否透明
   * TODO: 暂时还没有实现
   * @default false
   */
  transparent?: boolean;

  /**
   * 背景容器的样式
   */
  backdropStyle?: StyleProp<ViewStyle>;

  /**
   * 背景容器的不透明度
   * @default 0.85
   */
  backdropOpacity?: number;

  /**
   * 子元素
   */
  children?: ReactNode;

  /**
   * 叠加在背景容器上的组件的样式
   */
  overlayStyle?: StyleProp<ViewStyle>;

  /**
   * statusBarTranslucent 决定你的模态框是否应该在系统状态栏下。
   */
  statusBarTranslucent?: boolean;
}

const defaultProps = {
  visible: false,
  duration: 300,
  transparent: false,
  backdropOpacity: 0.85,
};

export interface MaskRef {}

const Mask: ForwardRefRenderFunction<MaskRef, MaskProps> = (p, ref) => {
  const props = mergeProps(defaultProps, p);
  const token = useTheme();
  const styles = createStyles(token);

  // 控制蒙层是否可见
  const [modalVisible, setModalVisible] = useState<boolean>(props.visible);

  const fadeAnimation = useRef(new Animated.Value(0));

  // 延时动画
  const animateFading = useMemoizedFn((toValue: number) => {
    return Animated.timing(fadeAnimation.current, {
      toValue,
      duration: props.duration,
      useNativeDriver: true,
    });
  });

  // 关闭蒙层
  const handleClose = () => {
    if (isFunction(props.onBackdropPress)) {
      props.onBackdropPress();
    }
  };

  // 动画结束后回调函数
  const handleClosed = useMemoizedFn(() => {
    if (isFunction(props.onFadeDone)) {
      props.onFadeDone();
    }
  });

  // 1、打开蒙层，开场动画开始过渡
  // 2、离场动画过渡结束，关闭蒙层
  useEffect(() => {
    // 如果监测到props.visible为true，则立即打开蒙层
    props.visible && setModalVisible(true);
    // props.visible为true，0到1过渡
    // props.visible为false，1到0过渡
    const timingEvent = animateFading(props.visible ? 1 : 0);
    // 开始动画
    timingEvent.start(() => {
      // 动画结束回调
      // 如果props.visible为false，则关闭蒙层
      !props.visible && setModalVisible(false);
      handleClosed();
    });
    // 组件卸载时，停止所有正在运行的动画
    return () => timingEvent.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);

  const opacityRange = fadeAnimation.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, props.backdropOpacity],
  });

  const renderContent = () => {
    return (
      <View style={StyleSheet.flatten([styles.wrapper, props.overlayStyle])}>
        {/* 如果背景不透明 */}
        <ShouldRender condition={!props.transparent}>
          <PressableAnimated
            style={[
              styles.backdrop,
              { opacity: opacityRange },
              props.backdropStyle,
            ]}
            onPress={handleClose}
          />
        </ShouldRender>
        <ShouldRender condition={isValidElement(props.children)}>
          {props.children}
        </ShouldRender>
      </View>
    );
  };

  useImperativeHandle(ref, () => ({}));

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={handleClose}
      transparent
      statusBarTranslucent={props.statusBarTranslucent}
      testID="mask"
    >
      {renderContent()}
    </Modal>
  );
};

export default forwardRef(Mask);
