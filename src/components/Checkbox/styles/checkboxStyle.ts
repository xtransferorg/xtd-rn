import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';
export default (token: Token) =>
  StyleSheet.create({
    alignTop: {
      alignItems: 'flex-start',
    },
    labelText: {
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      color: token['--color-text-6'],
    },
    labelTextSmall: {
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
    },
  });
