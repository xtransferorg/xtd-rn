import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    backdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: token['--smegma-1'],
    },
  });
