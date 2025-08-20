import { StyleSheet } from 'react-native';

import type { TokensType } from '../theme/interface';

export const varCreator = (TOKENS: TokensType) => {
  return {
    checkbox_icon_size: 20,
    checkbox_icon_color: TOKENS.gray_6,
    checkbox_icon_disabled_color: TOKENS.gray_5,
    checkbox_checked_icon_color: TOKENS.brand_6,
    checkbox_checked_icon_disabled_color: TOKENS.gray_5,
    checkbox_label_color: TOKENS.gray_8,
    checkout_subLabel_color: TOKENS['--color-text-4'],
    checkout_subLabel_size: TOKENS['--font-size-1'],
    checkout_subLabel_line_heigth: TOKENS['--line-height-5'],
    checkout_contetnLabel_color: TOKENS['--color-text-6'],
    checkout_contetnLabel_size: TOKENS['--font-size-2'],
    checkout_contetnLabel_line_heigth: TOKENS['--line-height-3'],
    checkbox_label_margin: 10,
    checkbox_disabled_label_color: TOKENS['--color-text-2'],
    checkout_disabled_subLabel_color: TOKENS.gray_6,
  };
};

type ComponentVars = ReturnType<typeof varCreator>;

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: cv.checkbox_icon_size,
    },

    labelContainer: {
      flexShrink: 1,
      flexGrow: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
    },
    labelWrapper: {
      flexShrink: 1,
      flexGrow: 1,
    },
    label: {
      color: cv.checkbox_label_color,
      lineHeight: cv.checkbox_icon_size,
      minHeight: cv.checkbox_icon_size,
    },
    subLabel: {
      color: cv.checkout_subLabel_color,
      lineHeight: cv.checkout_subLabel_line_heigth,
      fontSize: cv.checkout_subLabel_size,
      minHeight: cv.checkout_subLabel_size,
    },
    content: {
      alignSelf: 'flex-end',
      height: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
    },
    contentLabel: {
      color: cv.checkout_contetnLabel_color,
      lineHeight: cv.checkout_contetnLabel_line_heigth,
      fontSize: cv.checkout_contetnLabel_size,
      minHeight: cv.checkout_contetnLabel_size,
    },
    label_disabled: {
      color: cv.checkbox_disabled_label_color,
    },
    default_img: {
      width: 32,
      height: 32,
      borderRadius: 16,
      marginRight: 10,
      overflow: 'hidden',
    },
    img_disabled: {
      opacity: 0.3,
    },
  });
};
