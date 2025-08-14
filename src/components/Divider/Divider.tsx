import React, { FC } from 'react';
import { mergeProps } from '../../core/helpers';
import { Divider, DividerProps } from '../../core';

const defaultProps: DividerProps = {
  color: '#e2e2e2',
  textStyle: {
    color: '#999999',
    fontSize: 12,
  },
};
const RNDivider: FC<DividerProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  return <Divider {...props} />;
};
export default RNDivider;
