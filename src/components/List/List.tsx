import React, {
  ReactNode,
  isValidElement,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  Children,
} from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';
import { isNil, isString, isBoolean } from 'lodash';

import { mergeProps } from '../../core/helpers';
import ShouldRender from '../ShouldRender';

import createStyle from './styles/list.style';
import { useTheme } from '../Theme/Theme';

export interface ListProps {
  /**
   * 头部插槽
   */
  header?: ReactNode;

  /**
   * 底部插槽
   */
  footer?: ReactNode;

  /**
   * 分割线
   * @default true
   */
  separator?: boolean | ReactNode;
  children?: ReactNode;

  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 头部文字样式，header为string类型时生效
   */
  headerTextStyle?: StyleProp<TextStyle>;

  /**
   * 底部文字样式，footer为string类型时生效
   */
  footerTextStyle?: StyleProp<TextStyle>;

  /**
   * body样式
   */
  bodyStyle?: StyleProp<ViewStyle>;
}

const defaultProps = {
  separator: true,
};

export interface ListRef {}

const List: ForwardRefRenderFunction<ListRef, ListProps> = (p, ref) => {
  const props = mergeProps(defaultProps, p);
  const token = useTheme();
  const styles = createStyle(token);

  // header
  const header = (
    <>
      {/* 渲染header */}
      <ShouldRender condition={!isNil(props.header)}>
        {/* header为string类型 */}
        <ShouldRender condition={isString(props.header)}>
          <Text style={props.headerTextStyle}>{props.header}</Text>
        </ShouldRender>
        {/* header为元素类型 */}
        <ShouldRender condition={isValidElement(props.header)}>
          <View>{props.header}</View>
        </ShouldRender>
      </ShouldRender>
    </>
  );

  // footer
  const footer = (
    <>
      {/* 渲染footer */}
      <ShouldRender condition={!isNil(props.footer)}>
        {/* footer为string类型 */}
        <ShouldRender condition={isString(props.footer)}>
          <Text style={props.footerTextStyle}>{props.footer}</Text>
        </ShouldRender>
        {/* footer为元素类型 */}
        <ShouldRender condition={isValidElement(props.footer)}>
          <View>{props.footer}</View>
        </ShouldRender>
      </ShouldRender>
    </>
  );

  // 分割线
  const separator = (index: number) => {
    return (
      <>
        {/* 最后一个child没有底部边框 */}
        <ShouldRender condition={index !== Children.count(props.children) - 1}>
          {/* 布尔类型且为true */}
          <ShouldRender
            condition={isBoolean(props.separator) && props.separator}
          >
            <View style={StyleSheet.flatten([styles.separator])} />
          </ShouldRender>

          {/* 自定义分割线 */}
          <ShouldRender condition={isValidElement(props.separator)}>
            {props.separator}
          </ShouldRender>
        </ShouldRender>
      </>
    );
  };

  // body
  const body = (
    <>
      {/* 渲染list的children */}
      <ShouldRender condition={!isNil(props.children)}>
        <View style={props.bodyStyle}>
          {Children.map(props.children, (child, index) => {
            return (
              <View>
                <ShouldRender condition={isString(child) && child !== ''}>
                  <Text>{child}</Text>
                </ShouldRender>
                <ShouldRender condition={isValidElement(child)}>
                  {child}
                </ShouldRender>
                {separator(index)}
              </View>
            );
          })}
        </View>
      </ShouldRender>
    </>
  );

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));

  return (
    <View style={StyleSheet.flatten([styles.wrapper, props.style])}>
      {header}
      {body}
      {footer}
    </View>
  );
};

export default forwardRef(List);
