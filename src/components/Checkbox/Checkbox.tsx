import React from 'react';
import { StyleSheet } from 'react-native';
import { Checkbox, CheckboxProps } from '../../core';
import CheckboxIcon from './CheckboxIcon';
import { CheckboxSize, LabelAlign, RenderIconProps } from './interface';
import createStyle from './styles/checkboxStyle';
import { useTheme } from '../../components/Theme';

export interface RNCheckboxProps<
  ActiveValueT = boolean,
  InactiveValueT = boolean
> extends CheckboxProps<ActiveValueT, InactiveValueT> {
  /**
   * icon 尺寸
   * @default 'middle'
   */
  size?: CheckboxSize;
  /**
   * labelAlign 对齐方式
   * @default 'middle'
   */
  labelAlign?: LabelAlign;
}

const iconSizeMap = {
  middle: 20,
  small: 16,
};

const RNCheckbox = <ActiveValueT, InactiveValueT>(
  props: RNCheckboxProps<ActiveValueT, InactiveValueT>
) => {
  const token = useTheme();
  const {
    labelTextStyle,
    iconSize: propsIconSize,
    size = 'middle',
    labelAlign = 'middle',
    style,
    activeColor = token['--color-primary-6'],
    renderIcon: propsRenderIcon,
    ...restProps
  } = props;

  const styles = createStyle(token);
  const renderIcon = (renderIconProps: RenderIconProps) => (
    <CheckboxIcon
      {...renderIconProps}
      size={propsIconSize || iconSizeMap[size]}
    />
  );

  return (
    <Checkbox
      style={StyleSheet.flatten([
        labelAlign === 'top' && styles.alignTop,
        style,
      ])}
      labelTextStyle={StyleSheet.flatten([
        styles.labelText,
        labelTextStyle,
        size === 'small' && styles.labelTextSmall,
      ])}
      renderIcon={propsRenderIcon ?? renderIcon}
      activeColor={activeColor}
      {...restProps}
    />
  );
};

export default React.memo(RNCheckbox) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean
>(
  p: RNCheckboxProps<ActiveValueT, InactiveValueT>
  // eslint-disable-next-line no-undef
) => JSX.Element;
