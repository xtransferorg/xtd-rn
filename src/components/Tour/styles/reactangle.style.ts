import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';
import { SCREEN_WIDTH } from '../../../common/adapter';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      height: '100%',
    },
    rightTop: {
      position: 'absolute',
      right: 0,
      top: 0,
      transform: [
        {
          rotateZ: '90deg',
        },
      ],
    },
    rightBottom: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      transform: [
        {
          rotateZ: '180deg',
        },
      ],
    },
    leftBottom: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      transform: [
        {
          rotateZ: '-90deg',
        },
      ],
    },
    middle: {
      flexDirection: 'row',
    },
    step: {
      position: 'absolute',
      left: token['--spacing-3'],
      width: SCREEN_WIDTH - token['--spacing-3'] * 2,
    },
    arrow: {
      position: 'absolute',
    },
  });
