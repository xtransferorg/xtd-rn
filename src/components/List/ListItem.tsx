import React, {
  ReactNode,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  isValidElement,
} from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  View,
  TextStyle,
} from 'react-native';
import { isString, isFunction, isBoolean } from 'lodash';

import { mergeProps } from '../../core/helpers';
import ShouldRender from '../ShouldRender';
import { Align } from './enum';
import { IconXRightsmall1 } from '../../icons/index';

import createStyle from './styles/list-item.style';
import { useTheme } from '../Theme/Theme';

export interface ListItemProps {
  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 容器元素垂直对齐方式，默认垂直居中
   */
  align?: Align;

  /**
   * 左侧区域元素垂直对齐方式，默认垂直居中
   */
  leftAlign?: Align;

  /**
   * 右侧区域元素垂直对齐方式，默认垂直居中
   */
  rightAlign?: Align;

  /**
   * 右侧区域的箭头
   */
  arrow?: boolean | ReactNode;

  /**
   * 右侧区域的箭头颜色
   * @default #999999
   */
  arrowFill?: string;

  /**
   * 左侧区域的前缀
   */
  prefix?: ReactNode;

  /**
   * 右侧区域的后缀
   */
  extra?: ReactNode;

  /**
   * 灰色的描述信息
   */
  description?: ReactNode;

  children?: ReactNode;

  /**
   * 点击事件
   */
  onPress?: () => void;

  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 标题容器样式，children为string类型时生效
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * 标题可显示文字行数，children为string类型时生效
   */
  titleLines?: number;

  /**
   * 描述容器样式，description为string类型时生效
   */
  descriptionStyle?: StyleProp<TextStyle>;
  /**
   * 描述可显示文字行数，description为string类型时生效
   */
  descriptionLines?: number;
  /**
   * 左侧区域样式
   */
  leftStyle?: StyleProp<ViewStyle>;

  /**
   * 右侧区域样式
   */
  rightStyle?: StyleProp<ViewStyle>;

  /**
   * 左侧内容区样式
   */
  leftContentSyle?: StyleProp<ViewStyle>;

  /**
   * 右侧内容区样式
   */
  rightContentStyle?: StyleProp<ViewStyle>;

  /**
   * 右侧区域箭头样式，arrow为true时生效或者onPress属性为函数时生效
   */
  arrowStyle?: StyleProp<ViewStyle>;
  /**
   * 右侧区域箭头容器样式，arrow为true时生效或者onPress属性为函数时生效
   */
  arrowContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 屏幕阅读器标签
   */
  accessibilityLabel?: string;
  /**
   * 不可操作点击回调
   */
  onDisabledPress?: () => void;
}

export interface ListItemRef {}

const ListItem: ForwardRefRenderFunction<ListItemRef, ListItemProps> = (
  p,
  ref
) => {
  const token = useTheme();
  const styles = createStyle(token);
  const defaultProps = {
    align: Align.middle,
    leftAlign: Align.middle,
    rightAlign: Align.middle,
  };

  const props: ListItemProps = mergeProps(defaultProps, p);

  // 左侧区域、右侧区域元素垂直对齐方式，默认垂直居中
  const getVerticalAlign = () => {
    return {
      alignItems: props.align,
    };
  };

  // 左侧区域各个元素垂直对齐方式
  const leftVerticalAlign = () => {
    return {
      alignItems: props.leftAlign,
    };
  };

  // 右侧区域各个元素垂直对齐方式
  const rightVerticalAlign = () => {
    return {
      alignItems: props.rightAlign,
    };
  };

  // 是否渲染右侧区域向右的箭头
  const hasArrow = () => {
    // 如果是布尔值
    if (isBoolean(props.arrow)) {
      return props.arrow;
    }
    // 如果是自定义节点
    if (isValidElement(props.arrow)) {
      return false;
    }

    // 如果onPress属性为函数，则默认值为true
    return isFunction(props.onPress);
  };

  // 控制右侧区域箭头的左边距
  // const arrowIconMarginLeft = () => {
  //   return {
  //     marginLeft: isValidElement(props.extra) ? 2 : 0,
  //   };
  // };

  // 控制左侧区域的左边距
  const leftContentMarginLeft = () => {
    return {
      marginLeft: isValidElement(props.prefix) ? token['--spacing-2'] : 0,
    };
  };

  // 控制左侧区域的右边距
  const leftMarginRight = () => {
    return {
      marginRight:
        isValidElement(props.extra) || hasArrow() || isValidElement(props.arrow)
          ? token['--spacing-2']
          : 0,
    };
  };

  // 左侧prefix区域
  const prefix = (
    <>
      {/* 左边区域的左侧区域 */}
      <ShouldRender condition={isValidElement(props.prefix)}>
        {props.prefix}
      </ShouldRender>
    </>
  );

  // 左侧内容区
  const leftContent = (
    <>
      {/* 左侧内容区 */}
      <ShouldRender
        condition={
          (isString(props.children) && props.children !== '') ||
          isValidElement(props.children)
        }
      >
        <View
          style={StyleSheet.flatten([
            leftContentMarginLeft(),
            styles.leftContent,
            props.leftContentSyle,
          ])}
        >
          {/* 主信息为字符串类型 */}
          <ShouldRender
            condition={isString(props.children) && props.children !== ''}
          >
            <Text
              style={StyleSheet.flatten([
                styles.title,
                props?.disabled && styles.textDisabled,
                props.titleStyle,
              ])}
              numberOfLines={props.titleLines}
            >
              {props.children}
            </Text>
          </ShouldRender>
          {/* 主信息为节点类型 */}
          <ShouldRender condition={isValidElement(props.children)}>
            <View>{props.children}</View>
          </ShouldRender>

          {/* 描述信息为字符串类型 */}
          <ShouldRender
            condition={isString(props.description) && props.description !== ''}
          >
            <Text
              numberOfLines={props.descriptionLines}
              style={StyleSheet.flatten([
                styles.description,
                props?.disabled && styles.textDisabled,
                props.descriptionStyle,
              ])}
            >
              {props.description}
            </Text>
          </ShouldRender>
          {/* 描述信息为节点类型 */}
          <ShouldRender condition={isValidElement(props.description)}>
            <View>{props.description}</View>
          </ShouldRender>
        </View>
      </ShouldRender>
    </>
  );

  // 左侧区域
  const leftArea = (
    <>
      {/* 左边区域 */}
      <View
        style={StyleSheet.flatten([
          styles.left,
          leftVerticalAlign(),
          leftMarginRight(),
          props.leftStyle,
        ])}
      >
        {prefix}
        {leftContent}
      </View>
    </>
  );
  // 右侧剪头区域
  const arrow = (
    <>
      {/* 右侧区域向右的箭头 */}
      <ShouldRender condition={hasArrow()}>
        <View
          style={StyleSheet.flatten([
            styles.arrowContainer,
            props.arrowContainerStyle,
          ])}
        >
          <IconXRightsmall1
            size={token['--font-size-3']}
            fillColor={
              props.arrowFill || props?.disabled
                ? token['--color-text-2']
                : token['--color-text-4']
            }
            style={StyleSheet.flatten([styles.arrow, props.arrowStyle])}
          />
        </View>
      </ShouldRender>
      {/* 右侧箭头区域自定义 */}
      <ShouldRender condition={isValidElement(props.arrow)}>
        {props.arrow}
      </ShouldRender>
    </>
  );

  // 右侧extra
  const extra = (
    <>
      {/* 右侧区域的箭头的左侧区域，即右侧内容区 */}
      <ShouldRender condition={isValidElement(props.extra)}>
        <View
          style={StyleSheet.flatten([styles.extra, props.rightContentStyle])}
        >
          {props.extra}
        </View>
      </ShouldRender>
    </>
  );

  // 右侧区域
  const rightArea = (
    <>
      {/* 右边区域 */}
      <View
        style={StyleSheet.flatten([
          styles.right,
          rightVerticalAlign(),
          props.rightStyle,
        ])}
      >
        {extra}
        {arrow}
      </View>
    </>
  );

  const handlePress = () => {
    if (props.disabled && isFunction(props.onDisabledPress)) {
      props.onDisabledPress?.();
      return;
    }

    // 之前逻辑保持不动
    if (!isFunction(props.onPress)) {
      return;
    }
    props.onPress();
  };

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));

  const disableFinal = !(
    isFunction(props.onPress) ||
    (props.disabled && isFunction(props.onDisabledPress))
  );
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.wrapper,
        getVerticalAlign(),
        props.style,
        // props.disabled && styles.wrapperDisabled, // 原来的disabled效果，通过设置不透明度来
      ])}
      // 如果没有onPress事件，则禁用点击效果
      disabled={disableFinal}
      onPress={handlePress}
    >
      {leftArea}
      {rightArea}
    </TouchableOpacity>
  );
};

export default forwardRef(ListItem);
