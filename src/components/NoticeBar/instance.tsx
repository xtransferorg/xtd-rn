import React from 'react';
import { NoticeBarProps } from './interface';
import NoticeBar from './NoticeBar';

export const remind = (options: NoticeBarProps) => (
  <NoticeBar {...options} leftIcon="remind" />
);

export const warn = (options: NoticeBarProps) => (
  <NoticeBar {...options} leftIcon="warn" />
);

export const fail = (options: NoticeBarProps) => (
  <NoticeBar {...options} leftIcon="fail" />
);

export const success = (options: NoticeBarProps) => (
  <NoticeBar {...options} leftIcon="success" />
);
