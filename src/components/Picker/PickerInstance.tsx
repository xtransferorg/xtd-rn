import React from 'react';

import type {
  PickerValue,
  Column,
  PickerOption,
  PickerOptionCascade,
} from '../../core/picker-view/interface';
import Portal from '../Portal';

import type { PickerProps, PickerMethodProps, PickerAction } from './interface';
import Picker from './Picker';
import PickerMethod from './PickerMethod';

export {
  PickerValue,
  Column,
  PickerProps,
  PickerMethodProps,
  PickerAction,
  PickerOption,
  PickerOptionCascade,
};

/**
 * 选择器
 */
export const Instance = (opts: PickerMethodProps) => {
  return new Promise<{
    action: PickerAction;
    values: PickerValue[];
    columns: Column[];
  }>((resolve) => {
    const key = Portal.add(
      <PickerMethod
        {...opts}
        onCancel={(v, c) => {
          opts.onCancel?.(v, c);
          resolve({
            action: 'cancel',
            values: v,
            columns: c,
          });
        }}
        onConfirm={(v, c) => {
          opts.onConfirm?.(v, c);
          resolve({
            action: 'confirm',
            values: v,
            columns: c,
          });
        }}
        onPressOverlay={(v, c) => {
          opts.onPressOverlay?.(v, c);
          resolve({
            action: 'overlay',
            values: v,
            columns: c,
          });
        }}
        onClosed={() => {
          opts.onClosed?.();
          Portal.remove(key);
        }}
      />
    );
  });
};

export const Component: React.FC<PickerProps> = (props) => {
  return <Picker {...props} />;
};

export const PickerComponent = Picker;
