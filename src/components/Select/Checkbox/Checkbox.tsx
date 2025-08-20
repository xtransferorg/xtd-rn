import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import MultiCheckboxIcon from './MultiCheckboxIcon';
import SingleCheckboxIcon from './SingleCheckboxIcon';
import { CheckboxSize, LabelAlign } from './interface';
import createStyle from './styles/checkboxStyle';
import { Checkbox, CheckboxProps } from '../../../core';
import { defaultColor } from '../../../common/colors';
import { useTheme } from '../../Theme';

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

const RNCheckbox = <ActiveValueT, InactiveValueT>(
  props: RNCheckboxProps<ActiveValueT, InactiveValueT>
) => {
  const {
    labelTextStyle,
    size = 'middle',
    labelAlign = 'middle',
    style,
    activeColor = defaultColor,
    multiple,
    prefixIcon,
    ...restProps
  } = props;
  const token = useTheme();
  const styles = createStyle(token);
  const multiRenderIcon: CheckboxProps['renderIcon'] = (renderIconProps) => (
    <MultiCheckboxIcon {...renderIconProps} size={24} />
  );

  const singleRenderIcon: CheckboxProps['renderIcon'] = (renderIconProps) => (
    <SingleCheckboxIcon {...renderIconProps} size={20} />
  );

  return (
    <Checkbox
      style={StyleSheet.flatten([
        labelAlign === 'top' && styles.alignTop,
        styles.checkboxContainer,
        style,
      ])}
      labelTextStyle={StyleSheet.flatten([
        styles.labelText,
        labelTextStyle,
        { fontSize: size === 'middle' ? 16 : 12 },
      ])}
      subLabelTextStyle={styles.subLabelText}
      activeColor={activeColor}
      {...restProps}
      renderIcon={multiple ? multiRenderIcon : singleRenderIcon}
      prefixIcon={prefixIcon}
    />
  );
};

export default React.memo(RNCheckbox) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean
>(
  p: RNCheckboxProps<ActiveValueT, InactiveValueT>
) => ReactElement;
