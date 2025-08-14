import React, { CSSProperties } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { CheckboxIconProps } from '../../core';
import {
  IconXRadionormal1,
  IconXRadioselect1,
  IconXRadiodisable1,
  IconXRadioselectdisable1,
} from '../../icons/index';
// import { useTheme } from '../Theme';
const RadioIcon: React.FC<CheckboxIconProps> = ({
  active,
  disabled,
  onPress,
  size,
  style,
}) => {
  // const token = useTheme();
  const commonProps = { size, style: style as CSSProperties };
  const getIconComponent = () => {
    if (active) {
      return !disabled ? (
        <IconXRadioselect1 {...commonProps} />
      ) : (
        <IconXRadioselectdisable1 {...commonProps} />
      );
    }

    return !disabled ? (
      <IconXRadionormal1 {...commonProps} />
    ) : (
      <IconXRadiodisable1 {...commonProps} />
    );
  };

  return !disabled ? (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>{getIconComponent()}</View>
    </TouchableWithoutFeedback>
  ) : (
    getIconComponent()
  );
};

export default RadioIcon;
