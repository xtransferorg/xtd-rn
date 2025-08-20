import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      padding: token['--spacing-2'],
      alignSelf: 'flex-start',
      backgroundColor: token['--color-bg-1'],
      borderColor: 'transparent',
      borderWidth: token['--border-1'],
    },
    withBorder: {
      borderRadius: token['--border-radius-small'],
      borderColor: token['--color-line-1'],
      borderWidth: token['--border-1'],
    },
    withShadow: {
      shadowColor: 'rgba(24, 23, 33, 0.12)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 40,
      elevation: 10,
    },
    qrcode: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: token['--font-size-3'],
    },
    statusOverlay: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.95,
      zIndex: 10,
      backgroundColor: token['--color-bg-1'],
    },
  });
};
