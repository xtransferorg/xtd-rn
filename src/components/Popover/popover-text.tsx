import React, { memo } from 'react';
import { Text } from 'react-native';

import Theme from '../../core/theme';

import type { PopoverTextProps } from './interface';
import PopoverItem from './popover-item';
import { varCreator, styleCreator } from './styles/popover.style';

const PopoverText: React.FC<PopoverTextProps> = ({
  text,
  onSelect,
  dark,
  disabled,
  divider = false,
  style,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);

  return (
    <PopoverItem
      value={text}
      onSelect={onSelect}
      disabled={disabled}
      divider={divider}
      dark={dark}
      style={[STYLES.item_inner_text]}
    >
      <Text
        {...restProps}
        style={[STYLES.text, dark ? STYLES.text_dark : null, style]}
      >
        {text}
      </Text>
    </PopoverItem>
  );
};

export default memo(PopoverText);
