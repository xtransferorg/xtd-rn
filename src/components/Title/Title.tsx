import React, {
  ReactNode,
  isValidElement,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { isString } from 'lodash';

import ShouldRender from '../ShouldRender';
import { mergeProps } from '../../core/helpers';
import { TitleFontSize, Align } from './enum';

import createStyle from './styles/title.style';
import { useTheme } from '../Theme/Theme';

export interface TitleProps {
  /**
   * TitleFontSize：枚举值，TitleFontSize.Size16; TitleFontSize.Size18;
   * @default TitleFontSize.Size16
   */
  titleFontSize?: TitleFontSize;

  /**
   * 副标题内容，可以直接传入字符串，也可以传入ReactNode
   */
  description?: ReactNode;

  /**
   * 'flex-start'：左边区域和右边区域顶部对齐
   * 'center'：左边区域和右边区域垂直居中对齐
   * 'flex-end'：左边区域和右边区域底部对齐
   * @default Align.middle
   */
  align?: Align;

  /**
   * 自定义右边区域
   */
  extra?: ReactNode;

  /**
   * 主标题自定义样式
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * 副标题自定义样式
   */
  descriptionStyle?: StyleProp<TextStyle>;

  /**
   * 标题组件自定义样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 主标题内容，可以直接传入字符串，也可以传入ReactNode
   */
  children: ReactNode;
}

const defaultProps = {
  titleFontSize: TitleFontSize.Size16,
  align: Align.middle,
};

export interface TitleRef {}

const Title: ForwardRefRenderFunction<TitleRef, TitleProps> = (p, ref) => {
  const props = mergeProps(defaultProps, p);
  const token = useTheme();
  const styles = createStyle(token);

  const getAlignStyle = () => {
    return {
      alignItems: props.align,
    };
  };

  const getTitleStyle = () => {
    switch (props.titleFontSize) {
      case TitleFontSize.Size18:
        return styles.font18Title;
      default:
        return styles.font16Title;
    }
  };

  // 渲染左边区域
  const renderLeftArea = (
    <>
      <View style={StyleSheet.flatten([styles.left])}>
        {/* children为字符串 */}
        <ShouldRender condition={isString(props.children)}>
          <Text
            style={StyleSheet.flatten([
              styles.title,
              getTitleStyle(),
              props.titleStyle,
            ])}
          >
            {props.children}
          </Text>
        </ShouldRender>
        {/* children为节点 */}
        <ShouldRender condition={isValidElement(props.children)}>
          {props.children}
        </ShouldRender>

        {/* 副标题区域 */}
        {/* 副标题为字符串 */}
        <ShouldRender
          condition={isString(props.description) && props.description !== ''}
        >
          <Text
            style={StyleSheet.flatten([
              styles.description,
              props.descriptionStyle,
            ])}
          >
            {props.description}
          </Text>
        </ShouldRender>
        {/* 副标题为节点 */}
        <ShouldRender condition={isValidElement(props.description)}>
          {props.description}
        </ShouldRender>
      </View>
    </>
  );

  // 渲染右边区域
  const renderRightArea = (
    <>
      <View style={StyleSheet.flatten([styles.right])}>
        <ShouldRender condition={isValidElement(props.extra)}>
          {props.extra}
        </ShouldRender>
      </View>
    </>
  );

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));

  return (
    <View
      style={StyleSheet.flatten([styles.wrapper, getAlignStyle(), props.style])}
    >
      {renderLeftArea}
      {renderRightArea}
    </View>
  );
};

export default forwardRef(Title);
