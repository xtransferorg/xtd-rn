import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) => {
  return StyleSheet.create({
    toast: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      paddingTop: '30%',
      paddingBottom: '20%',
    },

    inner: {
      justifyContent: 'center',
      backgroundColor: token['--color-fill-6'],
      borderRadius: token['--border-radius-medium'],
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-4'],
      maxWidth: 280,
      minHeight: 120,
      minWidth: 120,
    },

    inner_overlay: {
      backgroundColor: token['--color-gray-1'],
      opacity: 0.8,
    },

    inner_type_text: {
      borderRadius: token['--border-radius-small'],
      lineHeight: token['--line-height-4'],
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-2'],
      minWidth: 120,
      minHeight: 0,
      width: 'auto',
    },

    icon: {
      alignItems: 'center',
      padding: token['--spacing-none'],
    },

    text: {
      fontSize: token['--font-size-2'],
      fontWeight: BOLD,
      color: token['--color-text-1'],
      textAlign: 'center',
      lineHeight: token['--line-height-4'],
      marginTop: token['--spacing-3'],
    },

    text_overlay: {
      color: token['--color-gray-9'],
    },

    text_top_0: {
      marginTop: token['--spacing-none'],
    },
  });
};
