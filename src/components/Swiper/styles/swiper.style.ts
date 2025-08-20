import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';
import { BOLD } from '../../../common/weight';

export default (token: Token) => {
  return StyleSheet.create({
    wrapper: {
      position: 'relative',
      borderRadius: token['--border-radius-small'],
      overflow: 'hidden',
    },

    dot: {
      backgroundColor: token['--color-border-1'],
      borderRadius: token['--border-radius-max'],
    },

    indicator: {
      position: 'absolute',
    },
    child: {
      backgroundColor: token['--color-gray-7'],
    },
    counterWrapper: {
      paddingHorizontal: token['--spacing-2'],
      paddingVertical: token['--spacing-1'],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: token['--border-radius-medium'],
      position: 'absolute',
      bottom: token['--spacing-2'],
      right: token['--spacing-2'],
      backgroundColor: token['--color-fill-6'],
      opacity: 0.7,
    },
    counterText: {
      color: token['--color-text-1'],
      textAlign: 'center',
      opacity: 1,
      fontSize: token['--font-size-1'],
      fontWeight: BOLD,
    },
    swiperItemWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
