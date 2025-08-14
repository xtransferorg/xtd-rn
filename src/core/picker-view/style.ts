import { StyleSheet } from 'react-native';
import type { TokensType } from '../theme/interface';

export const varCreator = (TOKENS: TokensType) => {
  return {
    picker_view_background_color: TOKENS['--color-bg-1'],
    picker_view_column_selected_background_color: TOKENS['--color-fill-1'],
    picker_view_column_margin_horizontal: TOKENS['--spacing-2'],
    picker_view_column_mask_background_color: 'rgba(255,255,255,0.8)',
    picker_view_column_text_color: TOKENS['--color-text-6'],
    picker_view_column_text_disabled_color: '#999',
    picker_view_column_text_font_size: TOKENS.font_size_5,
    picker_view_border_radius_mini: TOKENS['--border-radius-mini'],
  };
};

export type ComponentVars = ReturnType<typeof varCreator>;

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    picker: {
      backgroundColor: cv.picker_view_background_color,
      // backgroundColor: '#f30',
      overflow: 'hidden',
      marginHorizontal: cv.picker_view_column_margin_horizontal,
    },

    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(255,255,255,0.9)',
      zIndex: 2,
      justifyContent: 'center',
    },

    mask: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 3,
      backgroundColor: cv.picker_view_column_mask_background_color,
    },

    column: {
      flex: 1,
      position: 'relative',
    },

    column_touch: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 4,
    },

    first_column_text: {
      borderTopLeftRadius: cv.picker_view_border_radius_mini,
      borderBottomLeftRadius: cv.picker_view_border_radius_mini,
    },
    last_column_text: {
      borderTopRightRadius: cv.picker_view_border_radius_mini,
      borderBottomRightRadius: cv.picker_view_border_radius_mini,
    },

    column_text: {
      textAlign: 'center',
      fontSize: cv.picker_view_column_text_font_size,
      color: cv.picker_view_column_text_color,
      lineHeight: 24,
      paddingVertical: 14,

      backgroundColor: cv.picker_view_column_selected_background_color,
    },

    column_text_disabled: {
      color: cv.picker_view_column_text_disabled_color,
    },
  });
};
