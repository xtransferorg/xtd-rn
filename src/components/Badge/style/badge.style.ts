import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';
import { BOLD } from '../../../common/weight';

export const badge_size = 16;
export const badge_dot_size = 8;

export default (token: Token) => {
  return StyleSheet.create({
    count: {
      minWidth: 16,
      maxWidth: 57,
      paddingHorizontal: token['--spacing-1'],
      paddingVertical: token['--spacing-none'],
    },

    count_text: {
      color: token['--color-text-1'],
      fontSize: token['--font-size-1'],
      fontWeight: BOLD,
      textAlign: 'center',
      height: badge_size,
      lineHeight: badge_size,
    },

    count_dot: {
      width: badge_dot_size,
      height: badge_dot_size,
      minWidth: 0,
    },

    count_fixed: {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 2,
      transform: [
        {
          translateX: badge_size / 2,
        },
        {
          translateY: -badge_size / 2,
        },
      ],
    },

    count_dot_fixed: {
      transform: [
        {
          translateX: badge_dot_size / 2,
        },
        {
          translateY: -badge_dot_size / 2,
        },
      ],
    },
  });
};
