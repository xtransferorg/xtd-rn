import React, { createRef } from 'react';

import Portal from '../Portal';

import type { ToastOptions, ToastType, ToastMethods } from './interface';
import Toast from './Toast';

type OptionsMap = Record<ToastType, ToastOptions | undefined | null>;

const parseOptions = (message: ToastOptions | string) => {
  if (typeof message === 'object') {
    return message;
  }
  return { message };
};

const defaultOptions: ToastOptions = {
  type: 'text',
  duration: 2000,
  message: '',
  position: 'middle',
  forbidPress: false,
  closeOnPressOverlay: false,
  overlay: false,
  loadingType: 'circular',
};

let defaultOptionsMap = {} as OptionsMap;

let currentOptions = {
  ...defaultOptions,
};

const toastKeyMap: { [key: number]: 1 } = {};

export const remove = (key: number) => {
  Portal.remove(key);
  delete toastKeyMap[key];
};

export const removeAll = () => {
  Object.keys(toastKeyMap).forEach((_key) => {
    Portal.remove(Number.parseInt(_key, 10));
  });
};

export const Instance = (options: ToastOptions | string) => {
  let opts: ToastOptions =
    typeof options === 'string' ? { message: options } : options;

  const type = opts?.type || currentOptions?.type;

  // 合并参数
  opts = {
    ...currentOptions,
    ...(type ? defaultOptionsMap[type] : {}),
    ...opts,
  };
  const ToastRef = createRef<ToastMethods>();
  const key = Portal.add(
    <Toast
      {...opts}
      ref={ToastRef}
      onClosed={() => {
        remove(key);
        // Portal.remove(key);
        opts.onClosed?.();
      }}
    />
  );

  toastKeyMap[key] = 1;

  return {
    key,
    close: () => {
      ToastRef.current?.close();
    },
    setMessage: (m: string) => {
      ToastRef.current?.setMessage(m);
    },
  };
};

export const loading = (options: ToastOptions | string) =>
  Instance({
    type: 'loading',
    ...parseOptions(options),
  });

export const success = (options: ToastOptions | string) =>
  Instance({
    type: 'success',
    ...parseOptions(options),
  });

export const fail = (options: ToastOptions | string) =>
  Instance({
    type: 'fail',
    ...parseOptions(options),
  });

export const warn = (options: ToastOptions | string) =>
  Instance({
    type: 'warn',
    ...parseOptions(options),
  });

/**
 * 修改默认配置，对所有 Toast 生效。传入 type 可以修改指定类型的默认配置
 */
export const setDefaultOptions = (
  type: ToastType | ToastOptions,
  options?: ToastOptions
) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    Object.assign(currentOptions, type);
  }
};

/**
 * 重置默认配置，对所有 Toast 生效。传入 type 可以重置指定类型的默认配置
 */
export const resetDefaultOptions = (type: ToastType | ToastOptions) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = { ...defaultOptions };
    defaultOptionsMap = {} as OptionsMap;
  }
};
