import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    footer: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    btns: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    prevBtn: {},
    nextBtn: {
      marginLeft: token['--spacing-2'],
    },
    backdrop: {
      backgroundColor: token['--smegma-1'],
    },
    indicator: {
      color: token['--color-text-3'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },
  });
