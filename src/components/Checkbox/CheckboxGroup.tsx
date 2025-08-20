import React from 'react';
import Checkbox from './Checkbox';
import {
  CheckboxGroupProps,
  RenderIconProps,
} from '../../core/checkbox/interface';
import CheckboxGroup from '../../core/checkbox/checkbox-group';
import CheckboxIcon from './CheckboxIcon';
import { SpaceProps } from 'src/core';
import { omit } from 'lodash';

export type RNCheckboxGroupProps<T> = Omit<
  CheckboxGroupProps<T> & {
    /**
     * 是否启用分列布局
     * @default false
     */
    split?: boolean;
  },
  'checkboxComponent'
>;
const renderIconDefault = ({ size, ...renderIconProps }: RenderIconProps) => {
  return <CheckboxIcon size={size ?? 20} {...renderIconProps} />;
};

const RNCheckboxGroup = <T,>({
  renderIcon = renderIconDefault,
  ...restProps
}: RNCheckboxGroupProps<T>) => {
  const splitProps: SpaceProps | null = restProps.split
    ? {
        direction: 'horizontal' as 'vertical' | 'horizontal',
        wrap: true,
        gap: 0,
        style: {
          marginBottom: -8,
        },
        itemStyle: {
          width: '50%',
          marginBottom: 8,
        },
      }
    : null;
  return (
    <CheckboxGroup
      checkboxComponent={Checkbox}
      renderIcon={renderIcon}
      {...restProps}
      style={[restProps.style, splitProps?.style]}
      itemStyle={[restProps.itemStyle, splitProps?.itemStyle]}
      {...omit(splitProps, ['style', 'itemStyle'])}
    />
  );
};

export default RNCheckboxGroup;
