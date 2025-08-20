import React, { memo, isValidElement, ReactElement } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { isString, isNil } from 'lodash';
import { useControllableValue } from 'ahooks';
import Theme from '../theme';

import CheckboxIcon from './checkbox-icon';
import type { CheckboxProps } from './interface';
import { varCreator, styleCreator } from './style';
import ShouldRender from '../../components/ShouldRender';
import { useTheme } from '../../components/Theme/Theme';
import { renderHighLightTextLikeJSX } from '../helpers';
import Image from '../../components/Image';

const isValidString = (v: React.ReactNode) => isString(v) && v !== '';

function Checkbox<ActiveValueT = boolean, InactiveValueT = boolean>({
  textStyle,
  labelTextStyle,
  subLabelTextStyle,
  iconStyle,
  activeValue = true as unknown as ActiveValueT,
  inactiveValue = false as unknown as InactiveValueT,
  label,
  labelProps,
  subLabel,
  subLabelProps,
  labelDisabled = false,
  labelPosition = 'right',
  iconSize = 20,
  renderIcon,
  disabled,
  activeColor,
  style,
  children,
  prefixIcon,
  highlight,
  testID,
  onDisabledPress,
  contentLabel,
  contentLabelProps,
  contenStyle,
  contentLabelTextStyle,
  ...restProps
}: CheckboxProps<ActiveValueT, InactiveValueT>) {
  if (disabled) {
    labelDisabled = disabled;
  }
  const token = useTheme();
  const [value, onChange] = useControllableValue<ActiveValueT | InactiveValueT>(
    restProps,
    {
      defaultValue: inactiveValue,
    }
  );
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);

  const active = value === activeValue;
  const onChangeValue = () => {
    if (labelDisabled) return;
    const newValue = active ? inactiveValue : activeValue;
    onChange(newValue);
  };

  const prefixRender = (
    <>
      <ShouldRender condition={isValidString(prefixIcon)}>
        <Image
          source={{ uri: prefixIcon?.toString() }}
          style={[STYLES.default_img, disabled && STYLES.img_disabled]}
        />
      </ShouldRender>

      <ShouldRender condition={isValidElement(prefixIcon)}>
        <View>{prefixIcon}</View>
      </ShouldRender>
    </>
  );

  const labelJSX = !isNil(label) ? (
    <TouchableOpacity
      disabled={labelDisabled}
      onPress={onChangeValue}
      style={[
        STYLES.labelContainer,
        {
          [labelPosition === 'left' ? 'marginRight' : 'marginLeft']:
            token['--spacing-2'],
        },
      ]}
    >
      {prefixRender}
      <View style={StyleSheet.flatten([STYLES.labelWrapper, textStyle])}>
        {renderHighLightTextLikeJSX(
          label,
          StyleSheet.flatten([
            STYLES.label,
            labelTextStyle,
            disabled ? STYLES.label_disabled : null,
          ]),
          highlight,
          labelProps
        )}
        {renderHighLightTextLikeJSX(
          subLabel,
          StyleSheet.flatten([
            STYLES.subLabel,
            subLabelTextStyle,
            disabled ? STYLES.label_disabled : null,
          ]),
          highlight,
          subLabelProps
        )}
      </View>

      <ShouldRender condition={!!contentLabel}>
        <View style={StyleSheet.flatten([STYLES.content, contenStyle])}>
          {renderHighLightTextLikeJSX(
            contentLabel,
            StyleSheet.flatten([
              STYLES.contentLabel,
              contentLabelTextStyle,
              disabled ? STYLES.label_disabled : null,
            ]),
            highlight,
            contentLabelProps
          )}
        </View>
      </ShouldRender>
    </TouchableOpacity>
  ) : (
    children
  );
  const iconProps = {
    style: iconStyle,
    active,
    activeColor,
    disabled,
    size: iconSize,
    onPress: onChangeValue,
  };

  const iconJSX = renderIcon ? (
    renderIcon(iconProps)
  ) : (
    <CheckboxIcon {...iconProps} />
  );

  return (
    <TouchableWithoutFeedback
      onPress={onDisabledPress}
      disabled={!labelDisabled}
    >
      <View style={[STYLES.checkbox, style]} testID={testID}>
        {labelPosition === 'left' ? labelJSX : null}

        {iconJSX}
        {labelPosition === 'right' ? labelJSX : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default memo(Checkbox) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean
>(
  p: CheckboxProps<ActiveValueT, InactiveValueT>
) => ReactElement;
