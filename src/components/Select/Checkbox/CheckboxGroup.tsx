import React from 'react';
import Checkbox from './Checkbox';
import { CheckboxGroupProps, Checkbox as XiaoshuCheckbox } from '../../../core';

export type RNCheckboxGroupProps<T> = Omit<
  CheckboxGroupProps<T>,
  'checkboxComponent'
>;

const RNCheckboxGroup = <T,>({ ...restProps }: RNCheckboxGroupProps<T>) => {
  return <XiaoshuCheckbox.Group checkboxComponent={Checkbox} {...restProps} />;
};

export default RNCheckboxGroup;
