import { StyleSheet, Platform } from 'react-native';

import type { TokensType } from '../../../core/theme/interface';
import { BOLD } from '../../../common/weight';

export const varCreator = (TOKENS: TokensType) => {
  return {
    popover_border_radius: TOKENS.border_radius_m,
    popover_color: TOKENS.white,
    popover_color_dark: 'rgba(34, 34, 34, 1)',
    popover_color_dark_text: 'rgba(34, 34, 34, 0.8)',
    popover_item_padding_horizontal: 14,
    popover_item_padding_vertical: TOKENS.space_3,
    popover_item_divider: TOKENS.gray_2,
    popover_item_divider_dark: 'rgba(255,255,255,0.15)',
    popover_text_color: TOKENS.gray_8,
    popover_text_color_dark: TOKENS.white,
    popover_text_color_disabled: 'rgba(153, 153, 153, 1)',
    popover_text_font_size: TOKENS.font_size_3,
    popover_action_text_font_size: TOKENS.font_size_5,
    button_active_opacity: TOKENS.opacity_60,
    popover_item_min_width: 120,
    popover_item_max_width: 280,
    popover_icon_size: TOKENS.font_size_8,
    popover_icon_padding_horizontal: TOKENS.space_2,
    popover_text_opacity: TOKENS.opacity_10,
    popover_shadow_color: TOKENS['--color-text-6'],
  };
};

type ComponentVars = ReturnType<typeof varCreator>;

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    trigger: {
      alignItems: 'center',
    },

    content: {
      backgroundColor: cv.popover_color,
      borderRadius: cv.popover_border_radius,
      paddingVertical: 0,
      paddingHorizontal: 0,
      elevation: 0,
      ...Platform.select({
        ios: {
          shadowColor: cv.popover_shadow_color,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 40,
          shadowOpacity: 0.12,
        },
        android: {
          elevation: 5,
        },
      }),
    },

    content_shadow: {
      ...Platform.select({
        android: {
          elevation: 4,
        },
        ios: {
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
      }),
    },

    content_dark: {
      backgroundColor: cv.popover_color_dark,
    },

    text_content_dark: {
      backgroundColor: cv.popover_color_dark_text,
    },

    arrow: {
      borderTopColor: cv.popover_color,
    },

    arrow_dark: {
      borderTopColor: cv.popover_color_dark,
    },

    background: {
      backgroundColor: 'transparent',
    },

    item_inner: {
      marginHorizontal: cv.popover_item_padding_horizontal,
      paddingVertical: cv.popover_item_padding_vertical,
    },

    item_inner_text: {
      minWidth: cv.popover_item_min_width,
      maxWidth: cv.popover_item_max_width,
    },

    item_inner_divider: {
      borderBottomWidth: 1,
      borderBottomColor: cv.popover_item_divider,
    },

    item_inner_divider_dark: {
      borderBottomColor: cv.popover_item_divider_dark,
    },

    text: {
      color: cv.popover_text_color,
      fontSize: cv.popover_text_font_size,
      fontWeight: BOLD,
      lineHeight: 21,
    },

    text_dark: {
      color: cv.popover_text_color_dark,
    },

    text_with_icon: {
      textAlign: 'left',
    },

    text_action: {
      color: cv.popover_text_color,
      fontSize: cv.popover_action_text_font_size,
      fontWeight: '400',
    },

    action: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 44,
      lineHeight: 1.5,
      paddingHorizontal: cv.popover_item_padding_horizontal,
    },

    icon_wrapper: {
      marginRight: cv.popover_icon_padding_horizontal,
    },
  });
};
