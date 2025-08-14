import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    container: {
      backgroundColor: token['--color-bg-1'],
    },
  });
