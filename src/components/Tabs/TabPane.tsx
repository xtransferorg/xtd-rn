import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';

import { Tabs } from '../../core';
import type { TabPaneProps } from '../../core';

import { mergeProps } from '../../core/helpers';

const { TabPane } = Tabs;

export interface RNTabPaneProps extends TabPaneProps {}

const defaultProps = {};

export interface RNTabPaneRef {}

const RNTabPane: ForwardRefRenderFunction<RNTabPaneRef, RNTabPaneProps> = (
  p,
  ref
) => {
  const props = mergeProps(defaultProps, p);

  useImperativeHandle(ref, () => ({}));

  return <TabPane {...props}>{props.children}</TabPane>;
};

export default forwardRef(RNTabPane);
