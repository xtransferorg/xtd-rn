import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';

export const createStyles = (token: Token) => {
  return StyleSheet.create({
    maskblock: {
      width: '100%',
      height: '100%',
      backgroundColor: token['--color-bg-1'],
    },
  });
};
