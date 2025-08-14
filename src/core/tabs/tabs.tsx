import React, {
  useMemo,
  memo,
  isValidElement,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
} from 'react';
import { LayoutChangeEvent, ScrollView, StyleSheet, View } from 'react-native';
import { SCREEN_WIDTH } from '../../utils/adapter';

import Divider from '../divider';
import { childrenToArray } from '../helpers';
import { useControllableValue } from 'ahooks';
import TabBar from '../tab-bar';
import type { TabItem } from '../tab-bar/interface';

import type { TabsProps, TabPaneProps } from './interface';
import TabView from './tab-view';
import styles from './style';

const parseTabList = (children: React.ReactNode) => {
  return childrenToArray(children)
    .map((node: React.ReactElement<TabPaneProps>) => {
      if (isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined;
        return {
          // @ts-ignore
          key,
          ...node.props,
          node,
        };
      }

      return null;
    })
    .filter((tab) => tab);
};

export interface TabsRef {}

/**
 * tab竖向布局所需信息
 */
interface TabPosition {
  height: number;
  start: number; //即父容器中起始y坐标
}
const Tabs: ForwardRefRenderFunction<TabsRef, TabsProps> = (
  {
    children,
    tabBarStyle,
    tabBarHeight,
    tabBarBackgroundColor,
    divider,
    swipe,
    vertical = false,
    indicatorColor,
    indicatorHeight,
    indicatorWidth,
    suffix,
    suffixWidth = 56,
    contentScrollViewStyle,
    ...restProps
  },
  ref
) => {
  const [tabWidth, setTabWidth] = useState(SCREEN_WIDTH);
  const scrollViewRef = useRef<ScrollView>(null);
  const tabPositions = useRef<{ [key: string]: TabPosition }>({});
  const isManualChangeTab = useRef(false);
  const isInnerChangeVal = useRef(false);
  const layoutTimeId = useRef<NodeJS.Timeout>();
  const [isLayoutEnd, setIsLayoutEnd] = useState(false);
  const [_options, _tabs] = useMemo(() => {
    const tabs = parseTabList(children);
    const options: TabItem[] = tabs.map((t) => ({
      // @ts-ignore
      value: t.key,
      // @ts-ignore
      label: t.tab,
      // @ts-ignore
      badge: t.badge,
    }));

    return [options, tabs];
  }, [children]);

  const [value, onChange] = useControllableValue<string>(restProps, {
    valuePropName: 'activeKey',
    defaultValuePropName: 'defaultActiveKey',
    defaultValue: _options[0]?.value as string,
  });

  const pageIndex = _options.findIndex((item) => item.value === value);

  /**
   * 滚动到当前值的位置
   * @newValue 可选指定值位置，默认为当前值
   */
  const scrollToCurrentVertical = (newValue?: string) => {
    const tabP = tabPositions.current[newValue ?? value];
    if (tabP?.start !== undefined) {
      scrollViewRef.current?.scrollTo({
        x: 0,
        y: tabP.start,
        animated: false,
      });
    }
  };

  const scrollToCurrentVerticalManual = (newValue?: string) => {
    isManualChangeTab.current = true;
    scrollToCurrentVertical(newValue);
  };

  // 布局变化的时候回调
  const onChildrenLayout = (key: string, e: LayoutChangeEvent) => {
    const { height, y } = e?.nativeEvent?.layout || { height: 0, y: 0 };
    if (key) {
      tabPositions.current[key] = {
        height,
        start: y,
      };
    }
    // 布局稳定确认
    if (layoutTimeId.current) {
      clearTimeout(layoutTimeId.current);
    }
    if (!isLayoutEnd) {
      layoutTimeId.current = setTimeout(() => {
        setIsLayoutEnd(true); //认为已经稳定
      }, 10);
    }
  };

  const renderChildren = () => {
    const onLayout = vertical ? onChildrenLayout : undefined;
    return (
      <>
        {_tabs.map((t) => {
          return (
            <TabView
              // @ts-ignore
              key={t.key}
              // @ts-ignore
              lazyRender={t.node.props.lazyRender}
              // @ts-ignore
              active={t.key === value || vertical}
              swipe={vertical ? false : swipe}
              tabWidth={tabWidth}
              onLayout={(e) => {
                onLayout?.(t?.key as string, e);
              }}
            >
              {/* @ts-ignore */}
              {t.node}
            </TabView>
          );
        })}
      </>
    );
  };

  const onContainerLayout = (e: LayoutChangeEvent) => {
    if (vertical) {
      return;
    } else if (swipe) {
      const w = e.nativeEvent.layout.width + (suffix ? suffixWidth : 0);
      if (pageIndex >= 0) {
        scrollViewRef.current?.scrollTo({
          x: pageIndex * w,
          y: 0,
          animated: false,
        });
      }
      setTabWidth(w);
    }
  };

  const handleIndicatorPositionVertical = (y: number) => {
    if (isManualChangeTab.current) {
      //人工主动切换tab，无需在进行二次滚动定位
      isManualChangeTab.current = false;
      return;
    }
    _options.some((option) => {
      const tabP = tabPositions.current[option.value];

      if (tabP && tabP.start <= y && tabP.start + tabP.height > y) {
        isInnerChangeVal.current = true;
        onChange?.(option.value as string);
        return true;
      }

      return false;
    });
  };

  const handleIndicatorPosition = (event: any) => {
    if (vertical) {
      handleIndicatorPositionVertical(event.nativeEvent?.contentOffset?.y);
      return;
    }

    dragging.current = 1;
    // 根据scroll的滑动偏移量计算indicator的位置
    const offSetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offSetX / tabWidth);

    const nextValue = String(_options?.[Number(page)]?.value);

    if (nextValue !== value && dragging.current) {
      onChange(nextValue);
    }
  };

  const changeTabVertical = (nextValue: string) => {
    if (nextValue === value) return;
    isInnerChangeVal.current = false; //外部触发的
    scrollToCurrentVerticalManual(nextValue);
    onChange(nextValue);
  };

  const changeTab = (nextValue: any) => {
    if (vertical) {
      changeTabVertical(nextValue);
      return;
    }

    dragging.current = 0;

    const pageIndex = _options.findIndex((item) => item.value === nextValue);
    if (pageIndex >= 0) {
      scrollViewRef.current?.scrollTo({
        x: pageIndex * tabWidth,
        y: 0,
        animated: false,
      });
    }
    onChange(nextValue);
    setTimeout(() => {
      dragging.current = 1;
    }, 0);
  };

  const dragging = useRef(0);

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({
    changeTab,
  }));

  // 外部受控同步
  useEffect(() => {
    if (isInnerChangeVal.current) {
      // 内部改变val，无需再手动滚动内容，直接返回
      isInnerChangeVal.current = false;
      return;
    }
    isLayoutEnd && scrollToCurrentVerticalManual(value);
  }, [value, isLayoutEnd]);

  return (
    <>
      <TabBar
        {...restProps}
        style={tabBarStyle}
        height={tabBarHeight}
        backgroundColor={tabBarBackgroundColor}
        indicator
        indicatorColor={indicatorColor}
        indicatorWidth={indicatorWidth}
        indicatorHeight={indicatorHeight}
        divider={false}
        safeAreaInsetBottom={false}
        keyboardShowNotRender={false}
        hidden={false}
        value={value}
        options={_options}
        tabWidth={tabWidth}
        suffix={suffix}
        suffixWidth={suffixWidth}
        // @ts-ignore
        onChange={changeTab}
        onLayout={onContainerLayout}
      />

      {divider ? <Divider /> : null}
      {swipe || vertical ? (
        <ScrollView
          horizontal={!vertical}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}
          bounces={false}
          pagingEnabled={!vertical}
          ref={scrollViewRef}
          scrollsToTop={false}
          scrollEventThrottle={10}
          onScroll={handleIndicatorPosition}
          keyboardShouldPersistTaps={'handled'}
          style={StyleSheet.flatten([
            vertical ? styles.scrollVertical : undefined,
            contentScrollViewStyle,
          ])}
        >
          {vertical ? (
            renderChildren()
          ) : (
            <View style={styles.tabChildrenWrapper}>{renderChildren()}</View>
          )}
        </ScrollView>
      ) : (
        renderChildren()
      )}
    </>
  );
};

export default memo(forwardRef(Tabs));
