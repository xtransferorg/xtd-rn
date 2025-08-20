import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    indicator: {
      borderRadius: 50,
      bottom: 2,
    },

    text: {
      fontWeight: BOLD,
    },

    activeText: {},

    tab: {
      paddingHorizontal: token['--spacing-4'] / 2,
    },

    fontSize22: {
      fontSize: token['--font-size-4'],
    },
    fontSize22Active: {
      fontSize: token['--font-size-4'],
      lineHeight: token['--line-height-2'],
    },
    fontSize16: {
      fontSize: token['--font-size-3'],
    },
    fontSize16Active: {
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
    },
    scrollViewContainer: {
      paddingHorizontal: token['--spacing-none'],
    },

    badge: {
      color: token['--color-text-6'],
    },

    activeBadge: {
      color: token['--color-primary-6'],
    },
  });
