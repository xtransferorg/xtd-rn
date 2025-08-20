import React, { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Tabs } from '../../core';
import type { TabsProps, TabBarProps } from '../../core';

import { mergeProps } from '../../core/helpers';
import { TabType, TabAlign } from './enum';

import createStyle from './styles/tabs.style';
import { useTheme } from '../Theme/Theme';

export interface RNTabsProps extends TabsProps {
  /**
   * 激活的文案颜色
   * @default defaultColor
   */
  activeTextColor?: string;

  /**
   * 文案颜色
   * @default '#222222'
   */
  textColor?: string;

  /**
   * 是否采用指示器模式
   * @default true
   */
  indicator?: boolean;

  /**
   * 指示器宽
   * @deprecated 已经废弃
   * @description 0 表示撑满，其他数值标识固定，不填写与文字同宽
   * @default 28
   */
  indicatorWidth?: number;

  /**
   * 指示器颜色
   * @default defaultColor
   */
  indicatorColor?: string;

  /**
   * TabBar 高度
   * @default 44
   */
  tabBarHeight?: TabBarProps['height'];

  /**
   * tabs类型
   * @default LargeText
   */
  tabType?: TabType;

  /**
   * 排列方式，left 标识自适应宽、有滚动条，center 标识居中、无滚动条
   */
  tabAlign?: TabAlign;

  /**
   * 徽标样式，未被激活
   */
  badgeStyle?: StyleProp<TextStyle>;

  /**
   * 徽标激活样式
   */
  badgeActiveStyle?: StyleProp<TextStyle>;
  /**
   *  是否可以左右划动，true 是 false 否
   */
  swipe?: boolean;
  /**
   * @deprecated 已经废弃
   * tab 面板默认宽度
   */
  tabWidth?: number;

  /**
   * 后置插槽
   */
  suffix?: ReactNode;

  /**
   * 后置插槽宽度，用于计算左侧宽度
   * @default 56
   */
  suffixWidth?: number;

  /**
   * 后置插槽样式
   */
  suffixStyle?: ViewStyle;
}

export interface RNTabsRef {}

const RNTabs: ForwardRefRenderFunction<RNTabsRef, RNTabsProps> = (p, ref) => {
  const token = useTheme();
  const styles = createStyle(token);
  const defaultProps = {
    indicator: true,
    tabBarHeight: 44,
    // indicatorWidth: 28,
    indicatorColor: token['--color-primary-6'],
    activeTextColor: token['--color-primary-6'],
    textColor: token['--color-text-6'],
    tabType: TabType.LargeText,
    suffixWidth: 56,
  };

  const allProps: RNTabsProps = mergeProps(defaultProps, p);

  // 解析参数，区分小暑组件的原有属性和附加的属性
  const {
    indicator,
    indicatorWidth,
    indicatorColor,
    indicatorStyle,
    tabBarHeight,
    activeTextColor,
    textColor,
    textStyle,
    activeTextStyle,
    tabStyle,
    scrollViewContainerStyle,
    scrollViewStyle,
    badgeStyle,
    badgeActiveStyle,
    ...props
  } = allProps;

  // 目的：
  // 1、如果不显示指示器，则将其高度设置为0
  // 2、如果是大标题tab，则不显示指示器
  if (!indicator || props.tabType === TabType.LargeTitle) {
    // 隐藏指示器
    props.indicatorHeight = 0;
  }

  // 如果是大标题tab，则居中对齐，否则，居左对齐
  props.tabAlign =
    props.tabType === TabType.LargeTitle ? TabAlign.center : TabAlign.left;

  // 获取文本字体大小
  const getTextFontSize = () => {
    switch (props.tabType) {
      case TabType.SmallText:
        return styles.fontSize16;
      case TabType.LargeTitle:
        return styles.fontSize22;
      default:
        return styles.fontSize16;
    }
  };

  // 获取激活文本字体大小
  const getActiveTextFontSize = () => {
    switch (props.tabType) {
      case TabType.LargeTitle:
        return styles.fontSize22Active;
      case TabType.SmallText:
        return styles.fontSize16Active;
      default:
        return styles.fontSize16Active;
    }
  };

  // 获取每项tab样式
  const getTabStyle = () => {
    // 如果是大标题tab，重置flex
    return props.tabType === TabType.LargeTitle
      ? {
          flex: undefined,
        }
      : {};
  };

  return (
    <Tabs
      ref={ref}
      tabBarHeight={tabBarHeight}
      indicatorWidth={indicatorWidth}
      indicatorColor={indicatorColor}
      indicatorStyle={StyleSheet.flatten([styles.indicator, indicatorStyle])}
      activeTextColor={activeTextColor}
      textColor={textColor}
      textStyle={StyleSheet.flatten([
        styles.text,
        getTextFontSize(),
        textStyle,
      ])}
      activeTextStyle={StyleSheet.flatten([
        styles.activeText,
        getActiveTextFontSize(),
        activeTextStyle,
      ])}
      tabStyle={StyleSheet.flatten([styles.tab, getTabStyle(), tabStyle])}
      scrollViewContainerStyle={StyleSheet.flatten([
        styles.scrollViewContainer,
        scrollViewContainerStyle,
      ])}
      scrollViewStyle={StyleSheet.flatten([scrollViewStyle])}
      badgeStyle={StyleSheet.flatten([styles.badge, badgeStyle])}
      badgeActiveStyle={StyleSheet.flatten([
        styles.activeBadge,
        badgeActiveStyle,
      ])}
      {...props}
    >
      {props.children}
    </Tabs>
  );
};

export default forwardRef(RNTabs);
