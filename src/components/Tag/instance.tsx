import React from 'react';
import Tag from './Tag';
import type { RNTagProps } from './interface';

//流程中
export const processing = ({ children, ...rest }: RNTagProps) => {
  return (
    <Tag {...rest} status="processing">
      {children}
    </Tag>
  );
};

//流程中断
export const interrupt = ({ children, ...rest }: RNTagProps) => {
  return (
    <Tag {...rest} status="interrupt">
      {children}
    </Tag>
  );
};

//已终止
export const terminate = ({ children, ...rest }: RNTagProps) => {
  return (
    <Tag {...rest} status="terminate">
      {children}
    </Tag>
  );
};

//流程失败
export const error = ({ children, ...rest }: RNTagProps) => {
  return (
    <Tag {...rest} status="error">
      {children}
    </Tag>
  );
};

//流程成功
export const success = ({ children, ...rest }: RNTagProps) => {
  return (
    <Tag {...rest} status="success">
      {children}
    </Tag>
  );
};
