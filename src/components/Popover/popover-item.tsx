import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Theme from '../../core/theme';
import type { PopoverItemProps } from './interface';
import { varCreator, styleCreator } from './styles/popover.style';

const PopoverItem = <T,>({
  children,
  value,
  disabled,
  dark,
  style,
  divider = false,
  onSelect,
}: React.PropsWithChildren<PopoverItemProps<T>>) => {
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);

  return (
    <TouchableOpacity
      activeOpacity={CV.button_active_opacity}
      disabled={disabled}
      onPress={() => {
        if (typeof onSelect === 'function') {
          onSelect(value);
        }
      }}
      style={style}
    >
      <View
        style={[
          STYLES.item_inner,
          divider ? STYLES.item_inner_divider : null,
          dark ? STYLES.item_inner_divider_dark : null,
        ]}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default memo(PopoverItem) as <T>(
  p: React.PropsWithChildren<PopoverItemProps<T>>
) => React.ReactElement;
