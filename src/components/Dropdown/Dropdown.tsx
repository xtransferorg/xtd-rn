import React, { FC } from 'react';

import { Dropdown } from '../../core';
import type { DropdownMenuProps } from '../../core';
import { mergeProps } from '../../core/helpers';

export interface RNDropdownProps extends DropdownMenuProps {}

const defaultProps = {};

/**
 * @deprecated 未与设计达成一致，暂时不允许继续使用
 */
const RNDropdown: FC<RNDropdownProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  return <Dropdown {...props} />;
};

export default RNDropdown;
