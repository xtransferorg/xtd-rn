import React from 'react';
import DialogMethod from '../../core/dialog/dialog-method';
import { Portal } from '../../core';
import { Fill } from '../Button/enum';
import { ModalProps } from './interface';
export type DialogAction = 'cancel' | 'confirm' | 'overlay' | 'close';

export interface ModalMethodProps extends Omit<ModalProps, 'visible'> {
  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (action: DialogAction) => boolean | Promise<boolean>;

  /**
   * 操作完成后的回调
   */
  onResponse?: (action: DialogAction) => void;
}

export const Instance = (
  options: Omit<ModalMethodProps, 'onResponse' | 'onRequestClose'>
) => {
  return new Promise<DialogAction>((resolve) => {
    const key = Portal.add(
      <DialogMethod
        {...options}
        onClosed={() => {
          Portal.remove(key);

          options.onClosed?.();
        }}
        onResponse={(action) => {
          resolve(action);
        }}
      />
    );
  });
};

export const confirm = (options: ModalMethodProps) =>
  Instance({
    showCancelButton: true,
    ...options,
  });

export const info = (options: ModalMethodProps) =>
  Instance({
    status: 'info',
    showCancelButton: true,
    ...options,
  });

export const warning = (options: ModalMethodProps) =>
  Instance({
    status: 'warning',
    showCancelButton: true,
    ...options,
  });

export const error = (options: ModalMethodProps) =>
  Instance({
    status: 'error',
    showCancelButton: true,
    confirmButtonProps: { fill: Fill.danger },
    ...options,
  });

export const success = (options: ModalMethodProps) =>
  Instance({
    status: 'success',
    showCancelButton: true,
    ...options,
  });
