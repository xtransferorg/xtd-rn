import isNil from 'lodash/isNil';
import React, {
  useState,
  useRef,
  memo,
  useCallback,
  useEffect,
  isValidElement,
} from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { BOLD } from '../../common/weight';

import BottomBar from '../bottom-bar';
import { varCreator as varCreatorButton } from '../button/style';
import { getDefaultValue } from '../helpers';
import { useControllableValue } from 'ahooks';
import Theme from '../theme';

import type { ILayout, TabBarProps, TabItem, TabValue } from './interface';
import { varCreator, styleCreator } from './style';
import { SCREEN_WIDTH } from '../../utils/adapter';
import { ShouldRender } from '../../components';
import isString from 'lodash/isString';

const TabBar: React.FC<TabBarProps> = ({
  textColor,
  iconColor,
  activeTextColor,
  activeIconColor,
  options,
  indicator = false,
  indicatorWidth = 28,
  indicatorHeight,
  indicatorColor,
  tabAlign = 'center',
  tabStyle,

  height,
  indicatorStyle,
  textStyle,
  activeTextStyle,
  style,
  scrollViewStyle,
  scrollViewContainerStyle,
  badgeStyle,
  badgeActiveStyle,
  suffix,
  suffixWidth = 56,
  suffixStyle,
  tabWidth = SCREEN_WIDTH,
  backgroundColor,
  ...restProps
}) => {
  const isTabAdaption = tabAlign === 'center';
  const isTabTextCompact = isNil(indicatorWidth);
  const [value, onChange] = useControllableValue(restProps, {
    defaultValue: options[0]?.value,
  });
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  const CV_BUTTON = Theme.createVar(TOKENS, varCreatorButton);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);
  const [state, setState] = useState({
    layoutFinish: false,
  });
  const layouts = useRef<ILayout[]>([]);
  const ScrollViewRef = useRef<ScrollView>(null);
  const scrollViewWidth = useRef(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [cursor, setCursor] = useState(false);

  if (indicator && isNil(height)) {
    height = 40;
  }

  textColor = getDefaultValue(textColor, CV.tab_bar_text_color);
  iconColor = getDefaultValue(iconColor, CV.tab_bar_icon_color);
  activeTextColor = getDefaultValue(
    activeTextColor,
    CV.tab_bar_active_text_color
  );
  activeIconColor = getDefaultValue(
    activeIconColor,
    CV.tab_bar_active_icon_color
  );
  indicatorColor = getDefaultValue(indicatorColor, CV.tab_bar_indicator_color);

  const navigateTo = useCallback(
    (n: number) => {
      const targetLayout = layouts.current[n];
      const tab = targetLayout?.tab || { x: 0, width: 0 };
      const text = targetLayout?.text || { x: 0, width: 0 };
      // left = tab的左边距 + tab文本的左边距 + (tab文本宽度 - 指示器宽度) / 2
      const left = tab.x + text.x; // + (text.width - indicatorWidth) / 2;
      setIndicatorLeft(left);

      if (!isTabAdaption) {
        const hh = scrollViewWidth.current / 2;
        // @ts-ignore
        ScrollViewRef.current.scrollTo({
          // @ts-ignore
          x: !tab.width ? 0 : tab.x + tab.width / 2 - hh,
          animated: true,
        });
      }
    },
    [TOKENS.animation_duration_base, isTabAdaption]
  );

  const initIndicator = useCallback(() => {
    const layoutItems = layouts.current.filter((item) => !isNil(item?.key));

    if (
      layoutItems.length === layouts.current.length &&
      scrollViewWidth.current
    ) {
      setState((s) => ({
        ...s,
        layoutFinish: true,
      }));
    }
  }, []);

  const refreshTab = useCallback(() => {
    if (state.layoutFinish) {
      const n = options.findIndex((item) => item.value === value);

      if (n >= 0) {
        navigateTo(n);
      }
    }
  }, [value, options, options?.length, state.layoutFinish, navigateTo]);

  useEffect(() => {
    refreshTab();
  }, [
    value,
    options,
    options?.length, // 地址不变，个数变化情况兼容
    state.layoutFinish,
    navigateTo,
    refreshTab,
  ]);

  const onLayoutScrollView = useCallback(
    (e: LayoutChangeEvent) => {
      scrollViewWidth.current = e.nativeEvent.layout.width;
      initIndicator();
    },
    [initIndicator]
  );

  const onScrollBeginDrag = useCallback(() => {
    setCursor(true);
  }, [setCursor]);

  const onScrollEndDrag = useCallback(() => {
    setCursor(false);
  }, [setCursor]);

  const genOnPress = (v: TabValue) => () => {
    onChange(v);
  };

  const sortLayout = () => {
    const tempLayouts: ILayout[] = [];
    options?.forEach((option, optionIndex) => {
      const oldLayout = layouts.current?.find((layout) => {
        return layout && layout?.key === option.value;
      });

      tempLayouts[optionIndex] = oldLayout || ({} as ILayout);
    });

    layouts.current = tempLayouts;
  };

  const setLayout = ({
    i,
    key,
    tab,
    text,
  }: {
    i: number;
    key: TabValue;
    tab?: LayoutChangeEvent;
    text?: LayoutChangeEvent;
  }) => {
    const oldLayout = layouts.current[i];
    if (oldLayout && oldLayout?.key !== key) {
      sortLayout();
    }

    const currentLayout = layouts.current[i];
    layouts.current[i] = {
      text: text?.nativeEvent?.layout || currentLayout?.text,
      tab: tab?.nativeEvent?.layout || currentLayout?.tab,
      key,
    };

    initIndicator(); // 正常刷新
    refreshTab(); // 补充刷新 可能只是位置变了，其他都不变
  };

  const genOnLayoutTab =
    (i: number, item: TabItem) => (e: LayoutChangeEvent) => {
      setLayout({ i, key: item.value, tab: e });
    };

  const genOnLayoutText =
    (i: number, item: TabItem) => (e: LayoutChangeEvent) => {
      setLayout({ i, key: item.value, text: e });
    };

  const tabs = options?.map?.((item, index) => {
    const isActive = item.value === value;

    return (
      <TouchableOpacity
        key={item.value}
        style={[
          STYLES.item,
          isTabAdaption ? STYLES.item_adaption : null,
          item.iconRender ? null : STYLES.item_no_icon,
          tabStyle,
        ]}
        activeOpacity={CV_BUTTON.button_active_opacity}
        onPress={isActive ? undefined : genOnPress(item.value)}
        onLayout={genOnLayoutTab(index, item)}
      >
        {item.iconRender?.(isActive ? activeIconColor : iconColor)}
        <ShouldRender condition={isString(item.label)}>
          <Text
            style={StyleSheet.flatten([
              STYLES.item_text,
              isTabTextCompact ? null : STYLES.item_text_full,
              item.iconRender ? STYLES.item_text_icon : null,

              {
                color: isActive ? activeTextColor : textColor,
                fontWeight: isActive && indicator ? BOLD : 'normal',
              },
              // 作用于所有的tab
              textStyle,
              // FIXME: 激活和未被激活的tab字号不统一时，指示器定位不准，后续待修复
              // 作用于被激活的tab
              isActive && activeTextStyle,
            ])}
            onLayout={genOnLayoutText(index, item)}
          >
            {item.label}
          </Text>
        </ShouldRender>
        <ShouldRender condition={isValidElement(item.label)}>
          <View onLayout={genOnLayoutText(index, item)}>{item.label}</View>
        </ShouldRender>
        {/* 徽标部分 */}
        {!isNil(item.badge) && (
          <Text
            style={StyleSheet.flatten([
              STYLES.badge,
              // 徽标样式，未被激活
              badgeStyle,
              // 徽标激活样式
              isActive && badgeActiveStyle,
            ])}
          >
            {item.badge}
          </Text>
        )}
      </TouchableOpacity>
    );
  });

  const isBadge = options.some((item) => item.badge);

  const indicatorDom = () => {
    const n = options.findIndex((item) => item.value === value);
    const targetLayout = layouts.current[n];
    const width = targetLayout?.text?.width || 0;
    return (
      <View
        style={StyleSheet.flatten([
          {
            height: indicatorHeight || 2,
            width: width,
            backgroundColor: indicatorColor,
            position: 'absolute',
            left: indicatorLeft,
            borderRadius: 50,
          },
          indicatorStyle,
          {
            bottom: isBadge ? 0 : 4,
          },
        ])}
      />
    );
  };

  const indicatorJSX =
    indicator && state.layoutFinish && indicatorHeight !== 0
      ? indicatorDom()
      : null;

  return (
    <View style={StyleSheet.flatten<ViewStyle>([STYLES.container])}>
      <BottomBar
        {...restProps}
        backgroundColor={backgroundColor}
        height={height}
        style={[
          STYLES.tab_bar,
          style,
          suffix ? { width: tabWidth - suffixWidth } : {},
        ]}
      >
        {isTabAdaption ? (
          <>
            {tabs}
            {indicatorJSX}
          </>
        ) : (
          <ScrollView
            onLayout={onLayoutScrollView}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
            ref={ScrollViewRef}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={StyleSheet.flatten([STYLES.tab_bar_scroll, scrollViewStyle])}
            contentContainerStyle={StyleSheet.flatten([
              STYLES.tab_bar_scroll_content,
              scrollViewContainerStyle,
            ])}
          >
            {indicatorJSX}
            {tabs}
          </ScrollView>
        )}
      </BottomBar>
      <ShouldRender condition={!!suffix}>
        <View
          style={StyleSheet.flatten<ViewStyle>([
            {
              backgroundColor: backgroundColor || '#fff',
              height: height,
              width: suffixWidth,
            },
            STYLES.suffix,
            cursor && STYLES.suffixShadow,
            suffixStyle,
          ])}
        >
          {suffix}
        </View>
      </ShouldRender>
    </View>
  );
};

export default memo(TabBar);
