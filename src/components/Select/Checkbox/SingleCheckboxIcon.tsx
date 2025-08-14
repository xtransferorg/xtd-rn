import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { IconXMarksmall1 } from '../../../icons/index';
import { CheckboxIconProps } from '../../../core';
import { useTheme } from '../../Theme';
const SingleCheckboxIcon: React.FC<CheckboxIconProps> = ({
  active,
  disabled,
  onPress,
  size,
}) => {
  const token = useTheme();
  const getIconComponent = () => {
    if (active) {
      return (
        <IconXMarksmall1 fillColor={token['--color-text-6']} size={size} />
      );
    }
    return <View style={{ width: size }} />; //占位
  };

  return !disabled ? (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>{getIconComponent()}</View>
    </TouchableWithoutFeedback>
  ) : (
    getIconComponent()
  );
};

export default SingleCheckboxIcon;
