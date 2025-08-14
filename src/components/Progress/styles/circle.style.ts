import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    container: {
      position: 'relative',
    },

    circleInfo: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },

    pivot: {
      fontWeight: '400',
      color: token['--color-text-3'],
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-4'],
    },
  });
