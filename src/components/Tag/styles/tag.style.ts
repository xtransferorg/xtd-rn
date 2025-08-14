import { StyleSheet } from 'react-native';

import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    tag: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },
    tag_transparent: {
      backgroundColor: 'transparent',
    },
    tag_inner_l: {
      borderRadius: token['--border-radius-large'],
      paddingHorizontal: token['--spacing-3'],
      height: 24,
    },
    tag_inner_m: {
      borderRadius: token['--border-radius-medium'],
      paddingHorizontal: token['--spacing-2'],
      height: 20,
    },
    tag_inner_s: {
      borderRadius: token['--border-radius-small'],
      paddingHorizontal: token['--spacing-1'],
      height: 16,
    },
    tag_inner: {
      borderRadius: token['--border-radius-mini'] / 2,
      flexDirection: 'row',
      alignItems: 'center',
      flexShrink: 1,
    },
    tag_text_l: {
      fontWeight: '400',
      lineHeight: token['--line-height-4'],
      fontSize: token['--font-size-2'],
    },
    tag_text_m: {
      fontWeight: '400',
      lineHeight: token['--line-height-5'],
      fontSize: token['--font-size-1'],
    },
    tag_text_s: {
      fontWeight: '400',
      // lineHeight: token['--line-height-5'], //小尺寸的高度不足以支撑行高，目前设计也无实际应用
      fontSize: token['--font-size-1'],
    },

    // icon 样式
    icon: {
      marginRight: token['--spacing-1'],
    },

    // 关闭 icon
    closeIcon: {
      marginLeft: token['--spacing-1'],
    },

    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      overflow: 'hidden',
    },
  });
