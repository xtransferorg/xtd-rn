import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';
import { BOLD } from '../../../common/weight';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: token['--color-warning-1'],
      flexDirection: 'row',
      alignItems: 'flex-start',
      overflow: 'hidden',
      paddingVertical: token['--spacing-2'],
      paddingHorizontal: token['--spacing-3'],
      minHeight: 30,
      borderRadius: token['--border-radius-small'],
    },

    leftIcon: {
      marginRight: token['--spacing-2'],
      height: token['--line-height-3'],
      lineHeight: token['--line-height-3'],
      justifyContent: 'center',
    },

    centerWrapper: {
      flex: 1,
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: token['--spacing-1'] / 4,
    },
    titleStyle: {
      color: token['--color-gray-9'],
      fontSize: token['--font-size-3'],
      fontStyle: 'normal',
      fontWeight: BOLD,
      lineHeight: token['--line-height-3'],
      marginBottom: token['--spacing-2'],
    },

    content: {
      color: token['--color-text-6'],
    },
    middleContent: {
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      color: token['--color-text-6'],
    },
    smallContent: {
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
      color: token['--color-text-6'],
    },

    cancelLinkStyle: {
      color: token['--color-gray-9'],
      fontSize: token['--font-size-2'],
      fontStyle: 'normal',
      fontWeight: BOLD,
      lineHeight: token['--line-height-4'],
      textDecorationLine: 'underline',
    },

    rightIcon: {
      marginLeft: 'auto',
      height: token['--line-height-3'],
      lineHeight: token['--line-height-3'],
      justifyContent: 'center',
    },
  });
