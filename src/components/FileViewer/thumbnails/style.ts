import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) => {
  return StyleSheet.create({
    wrapper: {
      width: 108,
      height: 108,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: token['--border-1'],
      borderColor: token['--color-line-1'],
      borderRadius: token['--border-radius-small'],
    },
    imagePdf: {
      width: 48,
      height: 48,
    },
    image: {
      width: 108,
      height: 108,
      borderRadius: token['--border-radius-small'],
    },
  });
};
