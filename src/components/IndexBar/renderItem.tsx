import React, { memo } from 'react';
import { StyleSheet, StyleProp, TextStyle, TextProps } from 'react-native';
import { ShouldRender, Checkbox } from '@xrnjs/ui';
import { IconXMarksmall1 } from '../../icons/index';
import {
  IndexBarGroupItem,
  IndexBarBaseData,
  IndexBarValue,
} from './interface';
import createStyle from './styles/index-bar.style';
import { useTheme } from '../Theme/Theme';
import { isArray } from 'lodash';

export interface RenderItemProps {
  item: IndexBarBaseData;
  index: number;
  section: IndexBarGroupItem<IndexBarBaseData>;

  sectionValue?: IndexBarValue;

  searchValue?: string | number;
  height?: number;
  testID?: string | undefined;
  descPlacement?: 'right' | 'bottom';
  mode?: 'multiple' | 'single';
  max?: number;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  handlePress?: (
    val: boolean,
    item: IndexBarBaseData,
    index: number,
    section: IndexBarGroupItem<IndexBarBaseData>
  ) => void;
  /**
   * 不可操作点击回调
   */
  onDisabledPress?: (value: IndexBarBaseData) => void;
}
const textLineStyle: TextProps = {
  numberOfLines: 1,
  ellipsizeMode: 'tail',
};
const RenderItem = (props: RenderItemProps) => {
  const {
    item,
    index,
    section,
    sectionValue,
    searchValue,
    height,
    testID,
    descPlacement = 'bottom',
    mode,
    max = 10,
    titleStyle,
    descriptionStyle,
    handlePress,
    onDisabledPress,
  } = props;

  const token = useTheme();
  const styles = createStyle(token);

  const isChecked = isArray(sectionValue)
    ? sectionValue.includes(item.value)
    : sectionValue === item.value;

  const disabled =
    isArray(sectionValue) &&
    !sectionValue.includes(item.value) &&
    sectionValue.length >= max;

  const onChange = (val: boolean) => {
    handlePress?.(val, item, index, section);
  };

  return (
    <Checkbox
      style={StyleSheet.flatten([styles.sectionListItem, { height }])}
      testID={testID}
      labelPosition="left"
      disabled={disabled}
      value={isChecked}
      onChange={onChange}
      prefixIcon={item.prefix}
      highlight={searchValue as string}
      textStyle={StyleSheet.flatten([
        styles.titleWrapper,
        descPlacement === 'right' && styles.titleWrapperRight,
        !!item.prefix && styles.titleWrapperPrefix,
      ])}
      label={item.label}
      labelProps={textLineStyle}
      labelTextStyle={StyleSheet.flatten([
        styles.title,
        descPlacement === 'right' && styles.rightTitle,
        titleStyle,
      ])}
      subLabel={item.description}
      subLabelProps={textLineStyle}
      subLabelTextStyle={StyleSheet.flatten([
        styles.description,
        descPlacement === 'right' && styles.rightDescription,
        descriptionStyle,
      ])}
      renderIcon={
        mode === 'single'
          ? () => (
              <ShouldRender condition={isChecked}>
                <IconXMarksmall1 size={token['--font-size-4']} />
              </ShouldRender>
            )
          : undefined
      }
      onDisabledPress={() => onDisabledPress?.(item)}
    />
  );
};

export default memo(RenderItem, (prev, next) => {
  // return true不渲染本Item，return false渲染本Item
  const prevList = prev.sectionValue || [];
  const nextList = next.sectionValue || [];
  const max = next.max || 0;

  // 勾选
  const checked =
    !prevList.includes(next.item.value) && nextList.includes(next.item.value);

  // 取消勾选
  const unChecked =
    prevList.includes(next.item.value) && !nextList.includes(next.item.value);

  // 达到了最大勾选数目
  const reachPrevMax = prevList.length >= max;
  const reachNextMax = nextList.length >= max;

  // 搜索内容变了也需要刷新（高亮）
  const isSearchChange = prev.searchValue !== next.searchValue;

  if (checked || unChecked || reachPrevMax || reachNextMax || isSearchChange) {
    return false;
  }

  return true;
});
