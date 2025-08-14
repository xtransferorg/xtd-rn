import React from 'react';
import { ProgressProps } from './interface';
import Progress from './Progress';

export const line = (props: ProgressProps) => {
  const { children, ...rest } = props;
  return (
    <Progress {...rest} type="line">
      {children}
    </Progress>
  );
};

export const circle = (props: ProgressProps) => {
  const { children, ...rest } = props;
  return (
    <Progress {...rest} type="circle">
      {children}
    </Progress>
  );
};
