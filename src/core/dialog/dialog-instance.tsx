import React from 'react';
import { usePortal } from '../../common/portal';

import Portal from '../portal';

import Dialog from './dialog';
import DialogInput from './dialog-input';
import DialogKeyboard from './dialog-keyboard';
import DialogMethod from './dialog-method';
import type {
  DialogOptions,
  DialogAction,
  DialogInputOptions,
  DialogProps,
} from './interface';

export const Instance = (opts: DialogOptions) => {
  return new Promise<DialogAction>((resolve) => {
    const key = Portal.add(
      <DialogMethod
        {...opts}
        onClosed={() => {
          Portal.remove(key);

          opts.onClosed?.();
        }}
        onResponse={(action) => {
          resolve(action);
        }}
      />
    );
  });
};

export const confirm = (options: Omit<DialogOptions, 'showCancelButton'>) =>
  Instance({
    showCancelButton: true,
    ...options,
  });

/**
 * 不再维护，请用 Dialog 和 Input 组合使用
 * @deprecated 已经废弃
 */
export const input = (opts: DialogInputOptions) => {
  const key = Portal.add(
    <DialogInput
      {...opts}
      onClosed={() => {
        Portal.remove(key);
        opts.onClosed?.();
      }}
    />
  );
};

export const Component: React.FC<React.PropsWithChildren<DialogProps>> = (
  props
) => {
  const {
    Component: IComponent,
    visible,
    statusBarTranslucent,
    onClosed,
  } = usePortal({ ...props, useNative: false }); // useNative: false 强制为flase，否则true的时候Modal嵌套Modal会很有问题（原生modal）

  return (
    <IComponent
      transparent
      visible={visible}
      onRequestClose={onClosed}
      statusBarTranslucent={statusBarTranslucent}
    >
      <Dialog {...props} onClosed={onClosed} />
    </IComponent>
  );
};

export const DialogComponent = Dialog;

export const Keyboard: React.FC<React.PropsWithChildren<DialogProps>> = (
  props
) => {
  const {
    Component: IComponent,
    visible,
    useNative,
    statusBarTranslucent,
    onClosed,
  } = usePortal(props);

  return (
    <IComponent
      transparent
      visible={visible}
      onRequestClose={onClosed}
      statusBarTranslucent={statusBarTranslucent}
    >
      <DialogKeyboard useNative={useNative} {...props} onClosed={onClosed} />
    </IComponent>
  );
};

export const KeyboardComponent = DialogKeyboard;
