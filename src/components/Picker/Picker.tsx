import React from 'react';
import Picker from '../../core/picker/picker';
import Popup from '../Popup';
import { PickerProps } from './interface';

const RNPicker: React.FC<PickerProps> = ({
  title,
  description,
  headerStyle,
  showCancelButton,
  cancelButtonText,
  onCancel,
  showConfirmButton,
  confirmButtonText,
  onConfirm,
  cancelBtnIconProps,
  ...restProps
}) => {
  const titleProps = {
    title,
    description,
    headerStyle,
    showCancelButton,
    cancelButtonText,
    onCancel,
    showConfirmButton,
    confirmButtonText,
    onConfirm,
    cancelBtnIconProps,
  };

  return (
    <Picker
      headerTitleJSX={<Popup.Header {...titleProps} />}
      popupComponent={Popup}
      {...restProps}
    />
  );
};

export default RNPicker;
