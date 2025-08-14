import React, { CSSProperties } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import {
  IconXCheckboxnormal1,
  IconXCheckboxselect1,
  IconXCheckboxdisable1,
  IconXCheckboxselectdisable1,
} from '../../../icons/index';
import { RenderIconProps } from '@xrnjs/ui';

const CustomerIcon: React.FC<RenderIconProps> = ({
  active,
  disabled,
  onPress,
  size,
  style,
}) => {
  const commonProps = { size, style: style as CSSProperties };
  const getIconComponent = () => {
    if (active) {
      return !disabled ? (
        <IconXCheckboxselect1 {...commonProps} />
      ) : (
        <IconXCheckboxselectdisable1 {...commonProps} />
      );
    }

    return !disabled ? (
      <IconXCheckboxnormal1 {...commonProps} />
    ) : (
      <IconXCheckboxdisable1 {...commonProps} />
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

export default CustomerIcon;
