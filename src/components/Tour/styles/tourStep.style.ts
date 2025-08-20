import { Platform, StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';
import { BOLD } from '../../../common/weight';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      padding: token['--spacing-3'],
      backgroundColor: token['--color-bg-1'],
      borderRadius: token['--border-radius-medium'],
      opacity: 1,
      ...Platform.select({
        ios: {
          shadowColor: token['--color-text-6'],
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 40,
          shadowOpacity: 0.12,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    cover: {
      width: '100%',
      marginBottom: token['--spacing-3'],
    },
    title: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-3'],
      fontWeight: BOLD,
      lineHeight: token['--line-height-3'],
      marginBottom: token['--spacing-2'],
    },
    description: {
      color: token['--color-text-5'],
      fontSize: token['--font-size-2'],
      fontWeight: '400',
      lineHeight: token['--line-height-4'],
    },
    footer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: token['--spacing-3'],
    },
  });
