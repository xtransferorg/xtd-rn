import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    switch: {
      position: 'relative',
    },

    switch_wrap: {
      flexDirection: 'row',
      overflow: 'visible',
    },

    node: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: token['--color-bg-1'],
    },

    children_wrap: {
      position: 'relative',
      overflow: 'hidden',
    },

    children_text: {
      color: token['--color-text-1'],
      fontSize: token['--font-size-1'],
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: token['--line-height-5'],
    },
  });
