import React, {
  forwardRef,
  Key,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  ReactElement,
} from 'react';
import {
  LayoutChangeEvent,
  ScrollView,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Platform,
  UIManager,
  StyleSheet,
  Text,
  AppState,
} from 'react-native';
import { isNumber, isFunction, round } from 'lodash';
import { SwiperInstance, SwiperProps } from './interface';
import useRefState from '../../utils/useRefState';
import createStyle from './styles/swiper.style';
import { useTheme } from '../Theme/Theme';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Swiper = forwardRef<SwiperInstance, SwiperProps>((props, ref) => {
  const {
    children,
    style,
    vertical = false,
    placement = 'bottom',
    swiperType = 'inner',
    indicator = true,
    touchable = true,
    loop = false,
    loopBackground = false,
    autoplay = 3000,
    initialSwipe = 0,
    onChange,
    indicatorStyle,
    showCounter,
    containerStyle,
    ...rest
  } = props;
  const token = useTheme();
  const styles = createStyle(token);

  const swiperRef = useRef<ScrollView>(null);

  // 自动播放队列
  const autoPlayTimer = useRef<ReturnType<typeof setTimeout>>();

  // 轮播图索引指针 - useRefState避免闭包陷阱
  const [currentIndex, setCurrentIndex, currentPageIndex] = useRefState(
    loop ? initialSwipe + 1 : initialSwipe
  );
  // 轮播图高度/宽度
  const [pageHeight, setPageHeight, setPageHeightRef] = useRefState(
    props.height || 0
  );
  const [pageWidth, setPageWidth, setPageWidthRef] = useRefState(
    props.width || 0
  );

  const innerPading = token['--spacing-2'];
  const indicatorPlacement = () => {
    let ret = {};
    const verticalStyle = {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: pageHeight,
    };
    const horizontalStyle = {
      flexDirection: 'row',
      justifyContent: 'center',
      width: pageWidth,
    };
    switch (placement) {
      case 'left':
        ret = vertical
          ? { ...verticalStyle, left: innerPading }
          : {
              ...horizontalStyle,
              top: swiperType === 'inner' ? innerPading : 0 - innerPading,
            };
        break;
      case 'top':
        ret = vertical
          ? { ...verticalStyle, right: innerPading }
          : {
              ...horizontalStyle,
              top: swiperType === 'inner' ? innerPading : 0 - innerPading,
            };
        break;
      case 'bottom':
        ret = vertical
          ? { ...verticalStyle, right: innerPading }
          : {
              ...horizontalStyle,
              bottom: swiperType === 'inner' ? innerPading : 0 - innerPading,
            };
        break;
      case 'right':
        ret = vertical
          ? { ...verticalStyle, right: innerPading }
          : {
              ...horizontalStyle,
              bottom: swiperType === 'inner' ? innerPading : 0 - innerPading,
            };
        break;
    }

    return ret;
  };

  const dotStyle = (active: boolean, isLastDot: boolean) => {
    return {
      width: vertical ? 4 : active ? 24 : 16,
      height: vertical ? (active ? 24 : 16) : 4,
      backgroundColor: vertical
        ? token['--color-gray-1']
        : active
        ? token['--color-primary-6']
        : token['--color-gray-4'],
      opacity: vertical ? (active ? 1 : 0.4) : 1,
      marginBottom: !vertical ? 0 : !isLastDot ? token['--spacing-2'] : 0,
      marginRight: vertical ? 0 : isLastDot ? 0 : token['--spacing-2'],
    };
  };

  // 轮播图数量 - 循环播放时需要首尾形成闭环
  const pagesCount = useMemo(() => React.Children.count(children), [children]);
  const actualCurrentIndex = useMemo(
    () => (loop ? currentIndex - 1 : currentIndex),
    [loop, currentIndex]
  );

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  /**
   * 设置轮播图的偏移量
   * @param pageIndex
   */
  const updateOffset = (pageIndex: number, animated = true) => {
    const pageSize = vertical
      ? setPageHeightRef.current
      : setPageWidthRef.current;
    const offset = pageSize * pageIndex;
    const x = vertical ? 0 : offset;
    const y = vertical ? offset : 0;
    swiperRef?.current?.scrollTo?.({ x, y, animated });
  };

  /**
   * @description 点击导航跳转至某一图片
   * @param pageIndex
   */
  const goToPage = (pageIndex: number) => {
    if (pageIndex === 1 && currentPageIndex.current === pagesCount) {
      updateOffset(pagesCount + 1);
      setCurrentIndex(pageIndex);
      return;
    }
    if (pageIndex === pagesCount && currentPageIndex.current === 1) {
      updateOffset(0);
      setCurrentIndex(pageIndex);
      return;
    }
    updateOffset(pageIndex);
    setCurrentIndex(pageIndex);
  };

  /**
   * @description 轮播图前进1
   */
  const goToNextPage = () => {
    const goToIndex = currentPageIndex.current + 1;
    const targetIndex = goToIndex > pagesCount ? 1 : goToIndex;
    goToPage(targetIndex);
  };

  /**
   * @description 轮播图后退1
   */
  const goToPrevPage = () => {
    goToPage(currentPageIndex.current - 1);
  };

  /**
   * @description 自动播放 - autoPlay
   * @param autoReply
   */
  const startAutoPlay = () => {
    if (loop) {
      const delay = isNumber(autoplay) ? autoplay : 5000;
      autoPlayTimer.current = setInterval(() => {
        goToNextPage();
      }, delay);
    }
  };

  /**
   * @description 卸载自动播放
   */
  const stopAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  /**
   * @description 手动设置scrollView的初始偏移量 默认{x: 0, y: 0}
   */
  const contentOffset = useMemo(() => {
    const pageSize = vertical ? pageHeight : pageWidth;
    const pageIndex = loop ? initialSwipe + 1 : initialSwipe;
    const offset = pageSize * pageIndex;
    return {
      x: vertical ? 0 : offset,
      y: vertical ? offset : 0,
    };
  }, [initialSwipe, loop, pageWidth, pageHeight, vertical]);

  /**
   * 初始化位置显示完善
   * @param {w: 页面宽度, h:页面高度}
   */
  const initOffsetPosition = ({ w, h }: { w: number; h: number }) => {
    const initIndex = loop ? initialSwipe + 1 : initialSwipe;
    let x, y;
    if (vertical) {
      x = 0;
      y = h * initIndex;
    } else {
      x = w * initIndex;
      y = 0;
    }
    swiperRef?.current?.scrollTo?.({ x, y, animated: false });
  };

  /**
   * @description 手动设置滑块高度
   * @param param
   */
  const onContainerLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { layout } = nativeEvent;
    if ((vertical && layout.height) || (!vertical && layout.width)) {
      // 没有设置滑块的宽高时，使用容器的宽高
      const containerWidth = props.width || layout.width;
      const containerHeight = props.height || layout.height;
      // 滑块高度需要去掉内边距
      setPageWidth(containerWidth);
      setPageHeight(containerHeight);

      // 初始化位置完善
      initOffsetPosition({ w: containerWidth, h: containerHeight });
    }
  };

  /**
   * @description 用户拖拽时需要停止自动轮播
   */
  const onScrollBeginDrag = () => {
    stopAutoPlay();
  };

  /**
   * @description 用户拖拽结束时重置自动轮播
   */
  const onScrollEndDrag = () => {
    resetAutoPlay();
  };

  /**
   * @description 移动滑块结束时的回调 计算当前滑块的index以及执行onChange回调函数
   * @param event
   * @returns
   */
  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const offsetY = event.nativeEvent.contentOffset.y;
    // 获取滚动完毕后轮播图的偏移量 根据偏移量确定当前的pageIndex
    const offset = vertical ? offsetY : offsetX;
    const pageSize = vertical
      ? setPageHeightRef.current
      : setPageWidthRef.current;
    const scrolledIndex = round(offset / pageSize);

    onChange && onChange(loop ? scrolledIndex - 1 : scrolledIndex);
    if (loop && scrolledIndex === 0) {
      goToPage(pagesCount);
      updateOffset(pagesCount, false);
      return;
    }
    if (loop && scrolledIndex === pagesCount + 1) {
      goToPage(1);
      updateOffset(1, false);
      return;
    }
    setCurrentIndex(scrolledIndex);
  };

  const onScrollForWeb = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (Platform.OS !== 'web') return;
    onMomentumScrollEnd(event);
  };

  /**
   * @description 渲染单个子节点
   * @param child
   * @param key
   * @returns
   */
  const renderChild = (
    child: React.ReactNode,
    key: Key
  ): ReactElement | undefined => {
    if (!child) {
      return undefined;
    }

    return (
      <View
        style={[
          styles.swiperItemWrapper,
          {
            width: pageWidth,
            height: vertical ? pageHeight : undefined,
          },
        ]}
        key={key}
        collapsable={false}
      >
        {child}
      </View>
    );
  };

  const renderChildren = () => {
    let firstChild: ReactNode;
    let lastChild: ReactNode;
    const childrenArray = React.Children.map(children, (child, index) => {
      if (index === 0) {
        firstChild = child;
      }
      if (index === pagesCount - 1) {
        lastChild = child;
      }
      return renderChild(child, index);
    });

    if (loop && childrenArray && firstChild && lastChild) {
      // @ts-ignore
      childrenArray.unshift(renderChild(lastChild, `${pagesCount - 1}-clone`));
      // @ts-ignore
      childrenArray.push(renderChild(firstChild, `0-clone`));
    }

    return childrenArray;
  };

  const renderIndicator = () => {
    if (indicator === false) return null;

    if (isFunction(indicator)) {
      return indicator(pagesCount, actualCurrentIndex);
    }

    return (
      <View style={[styles.indicator, indicatorPlacement(), indicatorStyle]}>
        {Array.from({ length: pagesCount }).map((_, index) => {
          const isActive = index === actualCurrentIndex;
          const isLastDot = index === pagesCount - 1;
          return (
            <View
              key={index}
              style={[styles.dot, dotStyle(isActive, isLastDot)]}
            />
          );
        })}
      </View>
    );
  };

  const renderCounter = () => {
    if (showCounter) {
      return (
        <View style={styles.counterWrapper}>
          <Text style={styles.counterText}>{`${
            actualCurrentIndex + 1
          }/${pagesCount}`}</Text>
        </View>
      );
    }
    return null;
  };

  React.useImperativeHandle(ref, () => ({
    activeIndex: actualCurrentIndex,
    swipeNext: goToNextPage,
    swipePrev: goToPrevPage,
    swipeTo: (index: number) => goToPage(loop ? index + 1 : index),
    pause() {
      stopAutoPlay();
    },
    resume() {
      resetAutoPlay();
    },
  }));

  useEffect(() => {
    if (loopBackground) return;

    const sub = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        resetAutoPlay();
      } else if (nextAppState === 'background') {
        stopAutoPlay();
      }
    });

    return () => {
      sub?.remove();
    };
  }, [loopBackground]);

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        styles.wrapper,
        !!vertical && { height: pageHeight, overflow: 'hidden' },
        style,
      ])}
      onLayout={onContainerLayout}
    >
      <ScrollView
        contentContainerStyle={StyleSheet.flatten([
          styles.child,
          containerStyle,
        ])}
        ref={swiperRef}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        decelerationRate="fast"
        scrollEventThrottle={200}
        horizontal={!vertical}
        scrollEnabled={touchable}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScroll={onScrollForWeb}
        onLayout={onContainerLayout}
        contentOffset={contentOffset}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
      >
        {renderChildren()}
      </ScrollView>
      {/* 轮播图指示器 */}
      {renderIndicator()}
      {/* 轮播图滑动提示 例 1/3 */}
      {renderCounter()}
    </View>
  );
});

export default Swiper;
