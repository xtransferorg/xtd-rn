import React from 'react';
import { usePortal } from '../../common/portal';

import Portal from '../portal';

import ActionSheet from './action-sheet';
import ActionSheetMethod from './action-sheet-method';
import type { ActionSheetOptions, Action, ActionSheetProps } from './interface';

export const ActionSheetInstance = (opts: ActionSheetOptions) => {
  const { onSelect, onClosed, onResponse, ...resOpts } = opts;
  return new Promise<{ item: Action; index: number }>((resolve, reject) => {
    const key = Portal.add(
      <ActionSheetMethod
        {...resOpts}
        onClosed={() => {
          Portal.remove(key);
          onClosed?.();
        }}
        onResponse={(action, item, index) => {
          onResponse?.(action, item, index);
          // 语义上应该是指定某个操作，不会关系是如何取消的，所以 Promise 只关系点击了哪个操作
          if (action === 'item') {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onSelect?.(item!, index!);
            resolve({
              // @ts-ignore
              item,
              // @ts-ignore
              index,
            });
          } else {
            reject(new Error(action));
          }
        }}
      />
    );
  });
};

export const Component: React.FC<ActionSheetProps> = (props) => {
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
      <ActionSheet useNative={useNative} {...props} onClosed={onClosed} />
    </IComponent>
  );
};

export const open = (opts: ActionSheetOptions) => {
  const { onSelect, onClosed, onResponse, ...resOpts } = opts;
  const key = Portal.add(
    <ActionSheetMethod
      {...resOpts}
      onClosed={() => {
        Portal.remove(key);
        onClosed?.();
      }}
      onResponse={(action, item, index) => {
        onResponse?.(action, item, index);
        // 语义上应该是指定某个操作，不会关系是如何取消的，所以 Promise 只关系点击了哪个操作
        if (action === 'item') {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          onSelect?.(item!, index!);
        }
      }}
    />
  );
};

export const ActionSheetComponent = Component;
