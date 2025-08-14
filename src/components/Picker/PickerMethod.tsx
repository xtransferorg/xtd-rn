import React from 'react';
import Picker from './Picker';
import PickerMethod from '../../core/picker/picker-method';
import { PickerMethodProps } from './interface';

const RNPickerMethod: React.FC<PickerMethodProps> = (props) => {
  return <PickerMethod {...props} pickerComponent={Picker} />;
};

export default RNPickerMethod;
