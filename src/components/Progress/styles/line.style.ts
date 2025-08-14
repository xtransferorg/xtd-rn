import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: token['--color-bg-1'],
    },
    top: {
      flexDirection: 'column-reverse',
    },
    right: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
    },
    bottom: {
      flexDirection: 'column',
    },
    left: {
      flexDirection: 'row-reverse',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
    },
    pivot: {
      fontWeight: '400',
      color: token['--color-text-3'],
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-4'],
    },

    gradient: {
      height: '100%',
      width: '100%',
    },
  });
