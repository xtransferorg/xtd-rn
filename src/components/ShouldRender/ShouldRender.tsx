import React, { FC } from 'react';
import { ShouldRenderProps } from './interface';

const ShouldRender: FC<ShouldRenderProps> = (props) => {
  return <>{props.condition === true ? props.children : null}</>;
};

export default ShouldRender;
