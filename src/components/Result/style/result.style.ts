import { StyleSheet } from 'react-native';
import { BOLD } from '../../../common/weight';
import type { Token } from '../../Theme/constant';

export default (token: Token) => {
  return StyleSheet.create({
    iconWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleTextStyle: {
      textAlign: 'center',
      fontSize: token['--font-size-4'],
      color: token['--color-text-6'],
      fontWeight: BOLD,
      lineHeight: token['--line-height-2'],
    },
    titleTextMarginTop: { marginTop: token['--spacing-4'] },
    subtitleTextStyle: {
      textAlign: 'center',
      color: token['--color-text-4'],
      fontSize: token['--font-size-2'],
      marginTop: token['--spacing-3'],
      lineHeight: token['--line-height-4'],
    },

    horizontalStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    horizontalIconStyle: {
      marginRight: token['--spacing-2'],
    },

    extraStyle: {
      marginTop: token['--spacing-4'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    primaryStyle: { width: '100%' },
    secondaryStyle: {
      width: '100%',
      marginTop: token['--spacing-3'],
    },
  });
};
