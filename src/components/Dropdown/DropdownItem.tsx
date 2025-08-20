import React, { forwardRef } from 'react';
import type { Ref } from 'react';

import { Dropdown } from '../../core';
import type { DropdownItemProps, ItemRef } from '../../core';
import { mergeProps } from '../../core/helpers';

export interface RNDropdownItemProps<T> extends DropdownItemProps<T> {}

const defaultProps = {};

const RNDropdownItem = <T,>(p: RNDropdownItemProps<T>, ref: Ref<ItemRef>) => {
  const props = mergeProps(defaultProps, p);

  return <Dropdown.Item {...props} ref={ref} />;
};

export const DropdownItem: React.FC<RNDropdownItemProps<undefined>> = () => (
  <></>
);

export default forwardRef(RNDropdownItem);
