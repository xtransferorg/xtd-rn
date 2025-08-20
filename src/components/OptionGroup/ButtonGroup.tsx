import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '../../core';
import type { ButtonOptionGroupProps, SpaceProps } from '../../core';
import { mergeProps } from '../../core/helpers';
import createStyles from './styles/button-group.style';
import { useTheme } from '../Theme';

export interface ButtonGroupProps extends ButtonOptionGroupProps {
  /**
   * 头部是否添加间距
   * @default true
   */
  head?: SpaceProps['head'];

  /**
   * 尾部是否添加间距
   * @default true
   */
  tail?: SpaceProps['tail'];

  /**
   * 水平方向的间距大小
   * @default 8
   */
  gapHorizontal?: SpaceProps['gapHorizontal'];
}

// export interface OptionsProps {}
export interface ButtonGroupRef {}

const ButtonGroup: ForwardRefRenderFunction<
  ButtonGroupRef,
  ButtonGroupProps
> = (p, ref) => {
  const token = useTheme();
  const styles = createStyles(token);
  const defaultProps = {
    head: true,
    tail: true,
    gapHorizontal: token['--spacing-2'],
  };
  const allProps = mergeProps(defaultProps, p);
  const {
    optionStyle,
    optionActiveStyle,
    optionTextStyle,
    optionTextActiveStyle,
    style,
    ...props
  } = allProps;

  useImperativeHandle(ref, () => ({}));

  return (
    <Button.OptionGroup
      optionStyle={StyleSheet.flatten([styles.option, optionStyle])}
      optionActiveStyle={StyleSheet.flatten([
        styles.optionActive,
        optionActiveStyle,
      ])}
      style={StyleSheet.flatten([styles.optionBar, style])}
      optionTextStyle={StyleSheet.flatten([styles.optionText, optionTextStyle])}
      optionTextActiveStyle={StyleSheet.flatten([
        styles.optionActiveText,
        optionTextActiveStyle,
      ])}
      {...props}
    />
  );
};

export default forwardRef(ButtonGroup);
