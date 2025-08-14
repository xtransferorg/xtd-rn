import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';
import React, { memo } from 'react';
import { TextStyle, ViewStyle, StyleProp, StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

import { varCreator as varCreatorButton } from '../button/style';
import { getDefaultValue, getArrowOutline } from '../helpers';
import Theme from '../theme';

import { useDropdownConfig } from './context';
import DropdownBadge from './dropdown-badge';
import type { DropdownTextProps } from './interface';
import { varCreator, styleCreator } from './style';

const DropdownText: React.FC<DropdownTextProps> = ({
  textStyle,
  cusTextStyle = {},
  textActiveStyle,
  iconStyle,
  disabled = false,
  title,
  active = false,
  pressable = true,
  activeColor,
  direction,
  badge,
  numberOfLines = 1,
  // TouchableOpacity 属性
  style,
  activeOpacity,
  arrowIconColor,
  arrowIconActiveColor,
  iconSize,
  icon,
  ...restProps
}) => {
  const config = useDropdownConfig();
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);
  const CV_BUTTON = Theme.createVar(TOKENS, varCreatorButton);
  const showBadge = !active && !isNil(badge) && badge !== false;

  // 修正数据
  activeColor = getDefaultValue(activeColor, config.activeColor);
  activeOpacity = getDefaultValue(
    activeOpacity,
    CV_BUTTON.button_active_opacity
  );
  direction = getDefaultValue(direction, config.direction);

  const textColor = disabled
    ? CV.dropdown_text_disabled_color
    : active
    ? activeColor
    : CV.dropdown_text_color;

  const itemStyles: StyleProp<ViewStyle> = [
    STYLES.text_item,
    config.titleStyle,
    style,
  ];
  const textStyles: StyleProp<TextStyle> = [
    STYLES.text_text,
    showBadge ? null : STYLES.text_text_gap,
    config.titleTextStyle,
    {
      color: textColor,
    },
    textStyle,
    active && textActiveStyle,
  ];
  const iconStyles = [config.iconStyle, iconStyle].filter(Boolean);

  // 展示icon
  const showIcon = () => {
    // 根据激活态，返回对应的icon
    if (isFunction(icon)) {
      return icon(active);
    }
  };

  const ArrowFill = getArrowOutline(
    // @ts-ignore
    active ? (direction === 'up' ? 'down' : 'up') : direction
  );
  const ctxJSX = (
    <>
      {/* 如果title不为空字符串再渲染 */}
      {isString(title) && title !== '' && (
        <View style={STYLES.text_text_container}>
          <Text
            style={StyleSheet.flatten([textStyles, cusTextStyle])}
            numberOfLines={numberOfLines}
          >
            {title}
          </Text>
        </View>
      )}

      {showBadge ? (
        <DropdownBadge
          count={badge}
          style={[STYLES.text_text_badge, STYLES.text_text_gap]}
        />
      ) : null}

      {/* 如果有自定义的icon，则显示自定义icon，否则展示默认icon */}
      {isFunction(icon) ? (
        showIcon()
      ) : (
        <ArrowFill
          style={iconStyles.length ? iconStyles : undefined}
          size={iconSize || CV.dropdown_text_icon_size}
          color={
            active
              ? arrowIconActiveColor || activeColor
              : arrowIconColor || CV.dropdown_text_icon_color
          }
        />
      )}
    </>
  );

  if (pressable) {
    return (
      <TouchableOpacity
        {...restProps}
        disabled={disabled}
        style={itemStyles}
        activeOpacity={activeOpacity}
      >
        {ctxJSX}
      </TouchableOpacity>
    );
  }

  return (
    <View {...restProps} style={itemStyles}>
      {ctxJSX}
    </View>
  );
};

export default memo(DropdownText);
