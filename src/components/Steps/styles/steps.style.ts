import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapperHorizontal: {
      flexDirection: 'row',
      paddingHorizontal: token['--spacing-3'],
    },
    wrapperVertical: {
      paddingHorizontal: token['--spacing-2'],
    },
    wrapperCollapse: {
      display: 'flex',
      alignItems: 'center',
      height: 18,
    },
  });
