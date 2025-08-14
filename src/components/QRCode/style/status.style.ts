import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: token['--color-bg-1'],
    },
    flex: {
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    refresh: {
      fontSize: token['--font-size-2'],
    },
    text: {
      lineHeight: token['--line-height-4'],
    },
    textActive: {
      color: token['--color-primary-6'],
      lineHeight: token['--line-height-4'],
    },
    icon: {
      color: token['--color-primary-6'],
    },
    ml4: {
      marginLeft: token['--spacing-1'],
    },
  });
};
