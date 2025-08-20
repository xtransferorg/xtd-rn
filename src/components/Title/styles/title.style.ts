import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import { T2 } from '../../../common/fonts';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    left: {},

    right: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    font16Title: {
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
    },

    font18Title: {
      fontSize: T2,
      lineHeight: 24,
    },

    title: {
      color: token['--color-text-6'],
      fontWeight: BOLD,
    },

    description: {
      fontSize: token['--font-size-2'],
      fontWeight: '400',
      color: token['--color-text-4'],
      lineHeight: token['--line-height-4'],
      // marginTop: 2,
    },
  });
