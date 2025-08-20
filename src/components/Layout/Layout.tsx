import React, {
  ReactNode,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Platform,
  SafeAreaView,
} from 'react-native';
import { isBoolean, isNumber } from 'lodash';

import { mergeProps } from '../../core/helpers';
import { wrapperBG } from '../../common/colors';
import BottomSafeArea from '../BottomSafeArea';
import ShouldRender from '../ShouldRender';

import styles from './styles/layout.style';

export interface LayoutProps {
  /**
   * 布局组件两侧留白
   * @default 12
   */
  sidePadding?: number;
  /**
   * 页面背景色
   * @default '#F5F5F5'
   */
  background?: string;
  /**
   * 布局组件自定义样式属性
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 页面底部安全距离
   * false：对于安卓和ios都不启用底部安全距离
   * true：ios采用SafeAreaView渲染，安卓底部安全距离默认值为30
   * number：安卓和ios底部安全距离由传入的数值控制
   */
  bottomSafeArea?: boolean | number;
  /**
   * 子元素
   */
  children: ReactNode;
}

const defaultProps = {
  sidePadding: 12,
  background: wrapperBG,
  bottomSafeArea: false,
};

export interface LayoutRef {}

const Layout: ForwardRefRenderFunction<LayoutRef, LayoutProps> = (p, ref) => {
  const props = mergeProps(defaultProps, p);

  const getStyle = () => {
    return {
      paddingHorizontal: props.sidePadding,
      backgroundColor: props.background,
    };
  };

  const Content = (
    <View style={StyleSheet.flatten([styles.wrapper, getStyle(), props.style])}>
      {props.children}
    </View>
  );

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));

  return (
    <>
      {/* 安卓和iOS都不开启底部安全距离 */}
      <ShouldRender
        condition={
          isBoolean(props.bottomSafeArea) && props.bottomSafeArea === false
        }
      >
        {Content}
      </ShouldRender>

      {/* 安卓和ios开启默认底部安全距离 */}
      <ShouldRender
        condition={
          isBoolean(props.bottomSafeArea) && props.bottomSafeArea === true
        }
      >
        {/* ios设备 */}
        <ShouldRender condition={Platform.OS === 'ios'}>
          <SafeAreaView style={StyleSheet.flatten([styles.wrapper])}>
            {Content}
          </SafeAreaView>
        </ShouldRender>
        {/* 安卓设备 */}
        <ShouldRender condition={Platform.OS === 'android'}>
          {Content}
          <BottomSafeArea />
        </ShouldRender>

        {/* web */}
        <ShouldRender condition={Platform.OS === 'web'}>{Content}</ShouldRender>
      </ShouldRender>

      {/* 安卓和ios自定义底部安全距离 */}
      <ShouldRender condition={isNumber(props.bottomSafeArea)}>
        {Content}
        <BottomSafeArea safeArea={props.bottomSafeArea} />
      </ShouldRender>
    </>
  );
};

export default forwardRef(Layout);
