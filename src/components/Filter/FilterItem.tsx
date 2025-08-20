import React, { forwardRef } from 'react';
import type { Ref } from 'react';
import { StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { isNil } from 'lodash';

import Dropdown from '../Dropdown';
import type { DropdownItemProps } from '../Dropdown/interface';
import { DropdownItemOption } from '../../core';
import type { ItemRef } from '../../core';
import { mergeProps } from '../../core/helpers';
import useFilterItemStyles from './hooks/useFilterItemStyles';

import createStyle from './styles/filter-item.style';
import { IconXLowersmall1, IconXUppersmall1 } from '../../icons/index';
import { useTheme } from '../Theme/Theme';

// @ts-ignore
export interface FilterItemProps<T> extends DropdownItemProps<T> {
  /**
   * 选项数组
   */
  options?: DropdownItemOption<T>[];

  /**
   * 自定义样式属性
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 每一个Item标题的 numberOfLines，默认为 1，通常搭配 ellipsizeMode 使用
   */
  numberOfLines?: number;
  /**
   * 标题样式
   */
  cusTextStyle?: StyleProp<ViewStyle>;
}

const FilterItem = <T,>(p: FilterItemProps<T>, ref: Ref<ItemRef>) => {
  const token = useTheme();
  const styles = createStyle(token);
  const defaultProps = {
    options: [],
    arrowIconColor: token['--color-text-5'],
    arrowIconActiveColor: token['--color-primary-6'],
    iconSize: token['--font-size-3'],
  };
  const allProps: FilterItemProps<T> = mergeProps(defaultProps, p);

  const {
    options = [],
    titleStyle,
    arrowIconColor,
    arrowIconActiveColor,
    iconSize,
    titleTextStyle,
    textActiveStyle,
    style,
    itemLabel,
    useNative = false,
    ...props
  } = allProps;

  const { titleStyle: getTitleStyle } = useFilterItemStyles();

  const getArrowIconColor = () => {
    // 如果当前项中有值，则高亮展示
    if (!isNil(itemLabel)) {
      return arrowIconActiveColor;
    }
    return arrowIconColor;
  };

  return (
    // @ts-ignore
    <Dropdown.Item
      {...props}
      options={options}
      useNative={useNative}
      titleStyle={StyleSheet.flatten([
        styles.itemHeight,
        !isNil(itemLabel) && styles.activeItem,
        getTitleStyle,
        titleStyle,
        style,
      ])}
      arrowIconColor={getArrowIconColor()}
      arrowIconActiveColor={arrowIconActiveColor}
      iconSize={iconSize}
      titleTextStyle={StyleSheet.flatten([
        styles.text,
        // 如果当前项中有值，则高亮展示
        !isNil(itemLabel) && styles.activeText,
        titleTextStyle,
      ])}
      textActiveStyle={StyleSheet.flatten([styles.activeText, textActiveStyle])}
      ref={ref}
      itemLabel={itemLabel}
      icon={
        props.icon
          ? props.icon
          : (active) => {
              if (active) {
                const color =
                  !isNil(itemLabel) || active
                    ? arrowIconActiveColor
                    : arrowIconColor;
                return (
                  <IconXUppersmall1
                    fill={color}
                    fillColor={color}
                    name={'arr_upper'}
                    size={iconSize}
                  />
                );
              } else {
                const color = !isNil(itemLabel)
                  ? arrowIconActiveColor
                  : arrowIconColor;
                return (
                  <IconXLowersmall1
                    fill={color}
                    fillColor={color}
                    name={'arr_down'}
                    size={iconSize}
                  />
                );
              }
            }
      }
    />
  );
};

export default forwardRef(FilterItem);
