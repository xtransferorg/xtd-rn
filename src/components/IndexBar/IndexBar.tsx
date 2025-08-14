import React, {
  forwardRef,
  useState,
  useMemo,
  useImperativeHandle,
  ForwardRefRenderFunction,
  useEffect,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  Keyboard,
  ScrollView,
  ViewToken,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { IconXSearchfor1 } from '../../icons/index';
import LinearGradient from 'react-native-linear-gradient';
import {
  IndexBarProps,
  IndexBarGroupItem,
  IndexBarValue,
  IndexBarBaseData,
  IndexBarRef,
} from './interface';
import { useLocale } from '../Locale/locale';
import { useMaxHeight, useMeasure, useKeyboardDimensions } from '../../utils';
import createStyle from './styles/index-bar.style';
import { useTheme } from '../Theme/Theme';
import { useMemoizedFn } from 'ahooks';
import { isArray, cloneDeep, isString, isNumber } from 'lodash';
import sectionListGetItemLayout from './getItemLayout';
import RenderItem from './renderItem';
import { SCREEN_WIDTH } from '../../utils/adapter';
import ShouldRender from '../ShouldRender';
import Popup from '../Popup';
import Input from '../Input';
import ErrorBlock from '../ErrorBlock';
import Tag from '../Tag';
import { TagFunc } from '../Tag/interface';
import ListHeader from './listHeader';
import ItemSeparator from './itemSeparator';
import { InputInstance } from '../Input/interface';

// https://blog.csdn.net/qq_42199786/article/details/94304729
// sectionListHeader固定高度
export const SECTIONLIST_HEADER_HEIGHT = 30;
// sectionListItem固定高度
export const SECTIONLIST_ITEM_HEIGHT = 56;
// ListHeaderComponent 单行高度
export const LIST_HEADER_ITEM_HEIGHT = 48;

const IndexBar: ForwardRefRenderFunction<IndexBarRef, IndexBarProps> = (
  props,
  ref
) => {
  const token = useTheme();
  const styles = createStyle(token);
  const locale = useLocale().IndexBar;

  const maxHeight = useMaxHeight();
  const {
    testID = '',
    visible,
    headerProps,
    listProps,
    sideBarStyle,
    containerStyle,
    titleStyle,
    descriptionStyle,
    groups = [],
    max = 10,
    value,
    disableSidebar = false,
    onChange,
    containerHeight: innerContainerHeight,
    descPlacement = 'bottom',
    mode = 'single',
    children,
    hotGroups,
    hotSectionTitle,
    hotRowNumber = 1,
    showSearch = true,
    filterOption,
    searchProps,
    showLine = false,
    lineStyle,
    emptyProps,
    footer,
    footerStyle,
    splitLine = false,
    showFooterValue = true,
    valueStyle,
    onDisabledPress,
    ...restProps
  } = props;
  const viewHeight = innerContainerHeight || maxHeight;
  const LIST_HEADER_HEIGHT = LIST_HEADER_ITEM_HEIGHT * hotRowNumber + 48;
  const maxFooterLableWidth = SCREEN_WIDTH - 80;
  // 每次打开或关闭IndexBar组件时
  useEffect(() => {
    // 清空快捷筛选的值
    searchValue && searchRef.current?.clear();
    setSearchValue('');

    // 关闭键盘
    if (showSearch) {
      Keyboard.dismiss();
    }
  }, [visible]);

  // 根据选中数据筛选出快捷筛选数据
  const hotSectionValue = useMemo(() => {
    if (!isArray(value)) {
      return [];
    } else if (value?.length === 0) {
      return [];
    }
    return hotGroups
      ?.filter((i) => value.includes(i.value))
      .map((i) => i.value);
  }, [value, hotGroups]);

  // 根据选中数据筛选出回显数据
  const footerValue = useMemo(() => {
    if (!isArray(value)) {
      return [];
    } else if (value?.length === 0) {
      return [];
    }
    let ret: IndexBarBaseData[] = [];
    groups.forEach((group) => {
      const list = group.data.filter((i) => value.includes(i.value));
      ret = [...ret, ...list];
    });
    return ret;
  }, [value, groups]);

  useImperativeHandle(ref, () => {
    return {
      // IndexBar组件重置
      reset: () => {
        // 清空快捷筛选的值
        searchValue && searchRef.current?.clear();
        setSearchValue('');

        // 将列表滚动至顶部
        onSideBarPress(groups?.[0]?.value as string, 0, 0, LIST_HEADER_HEIGHT);

        // IndexBar组件重置的时候
        if (showSearch) {
          Keyboard.dismiss();
        }
      },
      // IndexBar组件清空筛选
      clear: () => {
        //IndexBar组件关闭的时候，清空快捷筛选的值
        searchValue && searchRef.current?.clear();
        setSearchValue('');
      },
    };
  });

  // 列表可视区域高度
  const [sectionListRef, onSectionListLayout, sectionListLayout] =
    useMeasure<SectionList>();
  // 搜索框组件高度
  const [searchRef, onSearchLayout, searchLayout] = useMeasure<InputInstance>();

  const { height: keyboardHeight } = useKeyboardDimensions();

  const onValueChange = (
    val: IndexBarValue,
    index?: number,
    section?: IndexBarGroupItem<IndexBarBaseData>
  ) => {
    onChange?.(val, index, section);
  };

  const handlePress = useMemoizedFn(
    (
      isChecked: boolean,
      item: IndexBarBaseData,
      index: number,
      section: IndexBarGroupItem<IndexBarBaseData>
    ) => {
      if (mode === 'multiple') {
        const val = isArray(value) ? [...value] : [];
        if (!isChecked) {
          // 多选情况，取消勾选
          const temp = cloneDeep([...val]);
          const idx = temp?.findIndex((i) => `${i}` === `${item.value}`);
          idx > -1 && temp?.splice(idx, 1);
          onValueChange?.([...temp], index, section);
        } else {
          // 勾选数量超过max，禁止勾选
          if (val.length >= max) {
            return;
          }
          onValueChange?.([...val, item.value], index, section);
        }
      } else {
        onValueChange?.(item.value, index, section);
      }
    }
  );

  const renderItem = (params: {
    item: IndexBarBaseData;
    index: number;
    section: IndexBarGroupItem<IndexBarBaseData>;
  }) => {
    const { item, index, section } = params;

    return (
      <RenderItem
        item={item}
        index={index}
        section={section}
        sectionValue={value}
        height={SECTIONLIST_ITEM_HEIGHT}
        max={max}
        searchValue={searchValue}
        testID={`${testID}${item?.value}`}
        descPlacement={descPlacement}
        mode={mode}
        titleStyle={titleStyle}
        descriptionStyle={descriptionStyle}
        handlePress={handlePress}
        onDisabledPress={onDisabledPress}
      />
    );
  };

  const onListHeaderPress = (val: IndexBarValue) => {
    if (mode === 'multiple' && isArray(value)) {
      const leftValue = value?.filter(
        (i) => !hotGroups?.map((p) => p.value).includes(i)
      );
      const newValue = [...leftValue, ...(val || [])];
      if (newValue.length > max) {
        return;
      }
      onValueChange?.(newValue);
    } else {
      const item = hotGroups?.find((i) => i.value === val);
      if (item) {
        onValueChange?.(item.value);
      }
    }
  };

  /**
   * 根据搜索内容筛选选择项
   */
  const doFilterOptions = ({
    optionList,
    searchStr,
  }: {
    optionList: readonly IndexBarBaseData[];
    searchStr: string;
  }) => {
    return optionList.filter((option: IndexBarBaseData) => {
      if (filterOption) {
        return filterOption(searchStr, option);
      }

      return isContainStr({ data: option, searchStr });
    });
  };

  /**
   * 数据内容是否包含某字符串信息 element元素默认返回true（与之前逻辑保持一致）
   */
  const isContainStr = ({
    data,
    searchStr,
  }: {
    data: IndexBarBaseData;
    searchStr: string;
  }) => {
    const { label, description } = data;
    const labelValidString = isString(label) || isNumber(label);
    const isContainLabel = labelValidString
      ? String(label)
          .toLocaleLowerCase()
          .includes(searchStr.toLocaleLowerCase())
      : false;

    const descValidString = isString(description) || isNumber(description);
    const isContainDesc = descValidString
      ? String(description)
          .toLocaleLowerCase()
          .includes(searchStr.toLocaleLowerCase())
      : false;

    return isContainLabel || isContainDesc;
  };

  // 根据搜索值实时更新数据源groups
  const [searchValue, setSearchValue] = useState<string>('');
  const newGroups = useMemo(() => {
    if (!searchValue) {
      return groups;
    } else {
      const filterList = groups?.reduce((acc, item) => {
        const { data, ...restItem } = item;
        const list = doFilterOptions({
          optionList: data,
          searchStr: searchValue,
        });
        if (list.length > 0) {
          acc.push({ ...restItem, data: list });
        }
        return acc;
      }, [] as IndexBarGroupItem<IndexBarBaseData>[]);
      return filterList;
    }
  }, [searchValue, groups]);

  const [sideBarIdx, setSideBarIdx] = useState<string>(
    groups?.[0]?.value as string
  );
  const onSideBarPress = (
    val: string,
    index: number, // 滚动至sectioner的索引
    itemIndex?: number, // 滚动至sectioner中的item的索引
    viewOffset?: number // 滚动到对应的索引后继续的偏移量
  ) => {
    setSideBarIdx(val);
    sectionListRef.current?.scrollToLocation({
      animated: false, // 关闭滚动动画
      sectionIndex: index,
      itemIndex: itemIndex ?? 0,
      viewOffset: viewOffset ?? 0,
    });
  };

  const onViewableItemsChanged = (info: { viewableItems: ViewToken[] }) => {
    if (info.viewableItems.length === 0) {
      return;
    }
    const stickyItems = info.viewableItems.reduce((acc, item) => {
      acc.push(item.section?.value as string);
      return acc;
    }, [] as string[]);

    if (stickyItems.length > 0) {
      const stickyIdx = stickyItems?.[0] || groups?.[0]?.value;
      setSideBarIdx(stickyIdx as string);
    }
  };

  const showListHead =
    showSearch && searchValue ? false : (hotGroups || [])?.length > 0;

  return (
    <Popup visible={visible} position="bottom" round {...restProps}>
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          {
            height: viewHeight - keyboardHeight,
            paddingBottom: token['--spacing-2'],
            marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0,
          },
          containerStyle,
        ])}
      >
        <Popup.Header {...headerProps} />

        {showSearch && (
          <Input
            ref={searchRef}
            onLayout={onSearchLayout}
            testID={`${testID}-index-bar-search`}
            style={styles.searchInput}
            prefix={<IconXSearchfor1 size={token['--font-size-3']} />}
            size="default"
            onChange={(val) => setSearchValue(val ?? '')}
            {...searchProps}
          />
        )}

        {children}

        {/**
         * 为了优化内存占用同时保持滑动的流畅，列表内容会在屏幕外异步绘制。
         * 如果滑动的速度超过渲染的速度，则会先看到空白的内容。
         * 这是为了优化不得不作出的妥协，目前Facebook官方也在改进中。
         * */}
        <ShouldRender condition={!!visible}>
          <SectionList
            keyboardShouldPersistTaps={'handled'}
            ref={sectionListRef}
            onLayout={onSectionListLayout}
            removeClippedSubviews={true}
            style={styles.listStyle}
            sections={newGroups}
            keyExtractor={(item) => `${item.value}`}
            initialNumToRender={5}
            renderItem={renderItem}
            renderSectionHeader={({ section }) => (
              <Text
                style={StyleSheet.flatten([
                  styles.sectionListHeader,
                  { height: SECTIONLIST_HEADER_HEIGHT },
                ])}
              >
                {section.label}
              </Text>
            )}
            ListHeaderComponent={
              <ListHeader
                visible={showListHead}
                multiple={mode === 'multiple'}
                hotGroups={hotGroups}
                height={LIST_HEADER_HEIGHT}
                hotSectionTitle={hotSectionTitle}
                hotSectionValue={hotSectionValue}
                onChange={onListHeaderPress}
              />
            }
            ListEmptyComponent={
              <ErrorBlock
                style={styles.empty}
                title={locale.listNoData}
                status="empty"
                {...emptyProps}
              />
            }
            stickySectionHeadersEnabled={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            ItemSeparatorComponent={() => (
              <ItemSeparator visible={showLine} style={lineStyle} />
            )}
            getItemLayout={sectionListGetItemLayout({
              getItemHeight: () => SECTIONLIST_ITEM_HEIGHT, // 每一个selection item的高度
              getSeparatorHeight: () => (showLine ? 1 : 0), // 分割线的高度
              getSectionHeaderHeight: () => SECTIONLIST_HEADER_HEIGHT, // section headers的高度
              getSectionFooterHeight: () => 0, // section footers的高度
              listHeaderHeight: () => (showSearch ? LIST_HEADER_HEIGHT : 0), // ListHeaderComponent渲染的list header高度
            })}
            {...listProps}
          />
        </ShouldRender>

        <ShouldRender condition={!!visible && !disableSidebar}>
          <View
            style={StyleSheet.flatten([
              styles.sideBar,
              {
                maxHeight: sectionListLayout.height,
                top: searchLayout.height + 110,
              },
              sideBarStyle,
            ])}
          >
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewBar}
            >
              {newGroups.map((i, j) => (
                <TouchableOpacity
                  key={`${i}-${j}`}
                  onPress={() => onSideBarPress(i.value as string, j)}
                >
                  <Text
                    style={StyleSheet.flatten([
                      styles.sideBarText,
                      i.value === sideBarIdx && styles.activeSideBar,
                    ])}
                  >
                    {i.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ShouldRender>

        <ShouldRender
          condition={!!visible && showFooterValue && footerValue?.length > 0}
        >
          <View style={[styles.value, valueStyle]}>
            {footerValue?.map((i, j) => (
              <Tag
                key={`${i.value}-${j}`}
                closable
                tagFunc={TagFunc.weaken}
                size={'l'}
                style={styles.tag}
                onClose={() => {
                  const temp = cloneDeep([...footerValue]);
                  temp?.splice(j, 1);
                  onValueChange?.(temp.map((p) => p.value));
                }}
              >
                <View
                  style={{
                    maxWidth: maxFooterLableWidth,
                  }}
                >
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={{ fontSize: token['--font-size-2'] }}
                  >
                    {i.label}
                  </Text>
                </View>
              </Tag>
            ))}
          </View>
        </ShouldRender>

        <ShouldRender condition={!!visible && !!footer}>
          <View style={[styles.footer, footerStyle]}>
            <ShouldRender condition={splitLine}>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={['rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0)']}
                locations={[0.2, 0.8]}
                style={styles.linear}
              />
            </ShouldRender>
            {footer}
          </View>
        </ShouldRender>
      </View>
    </Popup>
  );
};

export default forwardRef(IndexBar);
