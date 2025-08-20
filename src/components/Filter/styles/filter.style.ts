import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      height: token['--size-small'],
      backgroundColor: token['--color-bg-1'],
      overflow: 'hidden',
    },
  });
