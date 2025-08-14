import Color from 'color';
import isNil from 'lodash/isNil';
import React, { isValidElement, memo, useMemo } from 'react';
import type { ViewStyle, StyleProp } from 'react-native';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { ShouldRender } from '@xrnjs/ui';

import { renderTextLikeJSX } from '../helpers';
import Theme from '../theme';

import type { ButtonOptionProps } from './interface';
import { varCreator, styleCreator } from './style';

const ButtonOption: React.FC<ButtonOptionProps> = ({
  active,
  activeHighlight = true,
  badge,
  type = 'hazy',
  prefix,
  prefixStyle,
  text,
  textStyle,
  size = 's',
  hairline,
  style,
  activeStyle,
  children,
  onDisabledPress,
  disabled,
  onPress,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);

  const inactiveBackgroundColor = useMemo(() => {
    if (type === 'outline') {
      return TOKENS.white;
    }

    if (type === 'white') {
      return TOKENS.white;
    }

    return Color(CV.button_primary_color)
      .lightness(CV.button_hazy_lightness)
      .hex();
  }, [CV.button_hazy_lightness, CV.button_primary_color, TOKENS.white, type]);
  const inactiveBorderColor = useMemo(() => {
    if (disabled) {
      if (type === 'white') {
        return TOKENS.white;
      }
      return CV.button_option_disabled_border_color;
    }

    if (type === 'outline') {
      return TOKENS.gray_5;
    }

    if (type === 'white') {
      return TOKENS.white;
    }

    return inactiveBackgroundColor;
  }, [
    CV.button_option_disabled_border_color,
    TOKENS.gray_5,
    TOKENS.white,
    inactiveBackgroundColor,
    disabled,
    type,
  ]);
  const activeBackgroundColor = useMemo(
    () => Color(CV.button_primary_color).fade(0.89).string(),
    [CV.button_primary_color]
  );

  const buttonStyles: StyleProp<ViewStyle> = [
    STYLES.button,
    STYLES.option,
    {
      height: CV[`button_${size}_height`],
      backgroundColor: active ? activeBackgroundColor : inactiveBackgroundColor,
      borderColor: active ? CV.button_primary_color : inactiveBorderColor,
      borderWidth: hairline ? StyleSheet.hairlineWidth : 1,
    },
    // @ts-ignore
    STYLES[`button_${size}_padding_horizontal`],
    // restProps.disabled ? STYLES.button_disabled : null,
    // 每个选项样式
    style,
    // 激活后选项样式
    active && activeStyle,
  ];

  const childrenJSX = isValidElement(children)
    ? children
    : renderTextLikeJSX(!isNil(children) ? children : text, [
        {
          color:
            active && activeHighlight ? CV.button_primary_color : TOKENS.gray_8,
          fontSize: CV[`button_${size}_font_size`],
        },
        textStyle,
        disabled && STYLES.button_disabled_text,
        // 被激活后文本样式
        active && restProps.textActiveStyle,
      ]);
  const badgeTextJSX = renderTextLikeJSX(badge, [STYLES.option_badge_text]);
  const badgeJSX = !isNil(badgeTextJSX) ? (
    <View style={STYLES.option_badge}>{badgeTextJSX}</View>
  ) : null;
  const renderPrefix = (
    <>
      <ShouldRender condition={isValidElement(prefix)}>
        <View style={StyleSheet.flatten([STYLES.prefix, prefixStyle])}>
          {prefix}
        </View>
      </ShouldRender>
    </>
  );

  const renderContent = () => (
    <>
      {renderPrefix}
      {childrenJSX}
      {badgeJSX}
    </>
  );

  return disabled ? (
    <TouchableWithoutFeedback onPress={() => onDisabledPress?.()}>
      <View {...restProps} style={buttonStyles}>
        {renderContent()}
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableOpacity
      {...restProps}
      activeOpacity={CV.button_active_opacity}
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

export default memo(ButtonOption);
