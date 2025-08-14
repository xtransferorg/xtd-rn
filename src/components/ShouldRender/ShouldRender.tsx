import React, { FC, ReactNode } from 'react';

export interface ShouldRenderProps {
  condition: boolean;
  children: ReactNode;
}

const ShouldRender: FC<ShouldRenderProps> = (props) => {
  return <>{props.condition === true ? props.children : null}</>;
};

export default ShouldRender;
