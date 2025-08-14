import { PickerProps as XSPickerProps } from '../../core/picker/interface';
import { PickerMethodProps as XSPickerMethodProps } from '../../core/picker/interface';
import { PopupHeaderProps } from '../Popup/interface';

export type PickerAction = 'cancel' | 'confirm' | 'overlay';

export interface PickerProps
  extends Omit<XSPickerProps, 'headerTitleJSX' | 'popupComponent'>,
    PopupHeaderProps {}

export interface PickerMethodProps
  extends Omit<XSPickerMethodProps, 'pickerComponent'>,
    Omit<PopupHeaderProps, 'onConfirm' | 'onCancel'> {}
