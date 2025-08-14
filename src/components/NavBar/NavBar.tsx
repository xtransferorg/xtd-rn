import React, {
  isValidElement,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { isBoolean, isFunction, isArray, isNil } from 'lodash';
import { renderTextLikeJSX, mergeProps } from '../../core/helpers';
import { STATUS_BAR_HEIGHT, NAVIGATION_HEIGHT } from '../../utils/adapter';
import ShouldRender from '../ShouldRender';
import { IconMAReturn1, IconXMoreb1 } from '../../icons/index';
import createStyle from './styles/navbar.style';
import { useTheme } from '../Theme/Theme';
import { NavBarProps, NavBarRef, RightIcon } from './interface';
import { iosOrAndroidOrHarmony } from '../../utils';
import { useMaxLayoutWidth } from '../../core/hooks';

const defaultProps = {
  backArrow: true,
  translucent: false,
};

const NavBar: ForwardRefRenderFunction<NavBarRef, NavBarProps> = (p, ref) => {
  const { maxLayoutWidth, handleLayout } = useMaxLayoutWidth();
  const props = mergeProps(defaultProps, p);
  const token = useTheme();
  const styles = createStyle(token);
  const shouldEnableContentCenter =
    props.enableContentCenter ??
    ((typeof props?.children === 'string' && props?.children?.length > 0) ||
      (typeof props?.title === 'string' && props?.title?.length > 0));

  // 处理状态栏高度
  const getStatusBarHeight = () => {
    // 安卓状态栏高度为StatusBar.currentHeight
    // ios没有状态栏

    return {
      height: iosOrAndroidOrHarmony(
        STATUS_BAR_HEIGHT,
        StatusBar.currentHeight,
        StatusBar.currentHeight
      ),
    };
  };

  // 处理导航栏高度
  const getNavBarHeight = () => {
    // 安卓导航栏高度为56（react-navigation源码里有说明）
    // harmony和Android一致
    // ios导航栏高度为44
    const androidH = 56;
    const harmonyH = 56;
    const iosH = NAVIGATION_HEIGHT;
    return {
      height: iosOrAndroidOrHarmony(iosH, androidH, harmonyH),
    };
  };

  const onBack = () => {
    if (!isFunction(props.onBack)) {
      return;
    }
    props.onBack();
  };

  // 渲染状态栏
  const renderStatusBar = (
    <ShouldRender
      condition={
        Platform.OS === 'ios' ||
        (props.translucent && ['android', 'harmony'].includes(Platform.OS))
      }
    >
      <View
        style={StyleSheet.flatten([
          styles.statusBar,
          getStatusBarHeight(),
          props.statusBarStyle,
        ])}
      />
    </ShouldRender>
  );

  // 自定义导航栏
  const customNavBar = (
    <>
      {/* 自定义导航栏 */}
      <ShouldRender condition={isValidElement(props.customNavBar)}>
        <View style={StyleSheet.flatten([styles.customNavBar])}>
          {props.customNavBar}
        </View>
      </ShouldRender>
    </>
  );

  // 是否有返回箭头
  const hasBackArrow = isBoolean(props.backArrow) && props.backArrow;

  // 导航栏左边区域
  const navBarLeftArea = (
    <View
      style={StyleSheet.flatten([
        styles.left,
        maxLayoutWidth > 0 && { width: maxLayoutWidth },
        props.leftStyle,
      ])}
      {...(!!shouldEnableContentCenter && { onLayout: handleLayout })}
    >
      {/* 返回区域的箭头 */}
      <ShouldRender condition={hasBackArrow}>
        <TouchableOpacity onPress={onBack}>
          <IconMAReturn1 fillColor={token['--color-text-6']} size={24} />
        </TouchableOpacity>
      </ShouldRender>
      {/* 自定义返回区域 */}
      <ShouldRender condition={isValidElement(props.backArrow)}>
        {props.backArrow}
      </ShouldRender>
      {/* 左侧内容，渲染在返回区域的右侧 */}
      {props.left}
    </View>
  );

  // 导航栏中间区域
  const navBarCenterArea = (
    <View style={StyleSheet.flatten([styles.center, props.centerStyle])}>
      {props?.children ? (
        renderTextLikeJSX(props?.children, [styles.title, props.titleStyle], {
          numberOfLines: 1,
        })
      ) : (
        <>
          {renderTextLikeJSX(props?.title, [styles.title, props.titleStyle], {
            numberOfLines: 1,
          })}

          {renderTextLikeJSX(
            props?.description,
            [styles.description, props.descriptionStyle],
            {
              numberOfLines: 1,
            }
          )}
        </>
      )}
    </View>
  );

  // 导航栏右边区域
  const rightList =
    isArray(props.right) && props.right.length > 2
      ? [props.right[0], { icon: IconXMoreb1, onPress: () => {} }]
      : props.right;
  const navBarRightArea = (
    <>
      {/* 右边区域 */}
      <View
        style={StyleSheet.flatten([
          styles.right,
          maxLayoutWidth > 0 && { width: maxLayoutWidth },
          props.rightStyle,
        ])}
        {...(!!shouldEnableContentCenter && { onLayout: handleLayout })}
      >
        <ShouldRender condition={!isArray(props.right)}>
          {renderTextLikeJSX(props?.right, [styles.rightTextStyle])}
        </ShouldRender>
        <ShouldRender condition={isArray(props.right)}>
          {rightList?.map?.((i: RightIcon, j: number) => {
            const IconComponent = i.icon;
            return (
              <TouchableOpacity
                style={j < rightList.length - 1 && styles.rightPadding}
                key={`customize-right-${j}`}
                onPress={() => {
                  if (!isFunction(i.onPress)) {
                    return;
                  }
                  i.onPress();
                }}
              >
                <IconComponent size={24} />
              </TouchableOpacity>
            );
          })}
        </ShouldRender>
      </View>
    </>
  );

  // 渲染导航栏
  const renderNavBar = (
    <View
      style={StyleSheet.flatten([
        styles.navbar,
        !props.autoHeight && getNavBarHeight(),
        props.navBarStyle,
      ])}
    >
      {customNavBar}

      {/* 非自定义导航栏 */}
      <ShouldRender condition={isNil(props.customNavBar)}>
        {navBarLeftArea}
        {navBarCenterArea}
        {navBarRightArea}
      </ShouldRender>
    </View>
  );

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));

  return (
    <View style={StyleSheet.flatten([styles.wrapper, props.style])}>
      {renderStatusBar}
      {renderNavBar}
    </View>
  );
};

export default forwardRef(NavBar);
