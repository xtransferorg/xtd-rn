import React, { createRef, useCallback, useEffect, useRef } from 'react';
import { Text, View, processColor } from 'react-native';
import { PullToRefreshProps } from './interface';
import { isNil } from 'lodash';
import LottieView from 'lottie-react-native';
import ShouldRender from '../ShouldRender';
import AnimationSource from './PullingLoadingAnimation.json';
import styleCreator from './styles/pullToRefresh.style';
import {
  SmartRefreshControl,
  AnyHeader,
} from 'react-native-smartrefreshlayout';

const DEFAULT_HEADER_HEIGHT = 166 / 2 + 50;

/**
 * 原生下拉刷新组件，支持自定义头部和尾部
 *
 * 需要更新 APP 原生包才能使用，使用前请确认原生包已经更新
 */
const PullToRefreshNative = ({
  style,
  children,
  refreshing,
  lottieProps,
  headerHeight = DEFAULT_HEADER_HEIGHT,
  headerComponent,
  text,
  textStyle,
  headerStyle,
  onRefresh: outOnRefresh,
}: PullToRefreshProps) => {
  const styles = styleCreator(headerHeight);
  const animationRef = useRef<LottieView>(null);
  const textStyleFinal = Object.assign({ ...styles.text }, textStyle);
  const smartRefreshControlRef = createRef<SmartRefreshControl>();
  const refreshingRef = useRef(refreshing);
  const isUserRefreshRef = useRef(false);
  const onRefresh = useCallback(async () => {
    isUserRefreshRef.current = true;
    animationRef.current?.play();
    try {
      await outOnRefresh?.();
    } finally {
      animationRef.current?.pause();
    }
  }, [outOnRefresh]);

  useEffect(() => {
    if (
      smartRefreshControlRef.current &&
      !refreshing &&
      refreshingRef.current !== refreshing &&
      isUserRefreshRef.current
    ) {
      isUserRefreshRef.current = false;
      //只有用户手动触发的刷新才能调用 finishRefresh
      smartRefreshControlRef.current.finishRefresh({ success: true });
    }
    refreshingRef.current = refreshing;
  }, [refreshing, smartRefreshControlRef]);

  return (
    <SmartRefreshControl
      ref={smartRefreshControlRef}
      style={[{ flex: 1 }, style]}
      headerHeight={headerHeight}
      primaryColor={processColor('rgba(0, 0, 0, 0)')!}
      onRefresh={onRefresh}
      HeaderComponent={
        <AnyHeader style={{ height: 0 }}>
          <View style={[styles.headerContainer, headerStyle]}>
            <ShouldRender condition={!!headerComponent}>
              {headerComponent}
            </ShouldRender>
            <ShouldRender condition={!headerComponent}>
              <View>
                <LottieView
                  {...(lottieProps || {})}
                  style={styles.loading}
                  ref={animationRef}
                  source={lottieProps?.source || AnimationSource}
                  autoPlay={lottieProps?.autoPlay ?? false}
                  loop={lottieProps?.loop ?? true}
                />
              </View>
              <ShouldRender condition={!isNil(text)}>
                <Text
                  style={textStyleFinal}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {text}
                </Text>
              </ShouldRender>
            </ShouldRender>
          </View>
        </AnyHeader>
      }
    >
      {children}
    </SmartRefreshControl>
  );
};
export default PullToRefreshNative;
