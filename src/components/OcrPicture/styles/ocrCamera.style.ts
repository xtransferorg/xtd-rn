import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
import { Token } from '../../Theme/constant';
import { OcrPictureDirection } from '../interface';

export const REAC_WIDTH = Math.ceil(width - width * 0.12);
export const REAC_HEIGHT_HORIZONTAL = Math.ceil(height * 0.26);
export const REAC_HEIGHT_VERTICAL = Math.ceil(height * 0.54);

export const createStyles = (token: Token, direction: OcrPictureDirection) => {
  const isHorizontal = direction === OcrPictureDirection.Horizontal;

  return StyleSheet.create({
    container: {
      width,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
    },
    camera: {
      width,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    rectWrap: {
      position: 'absolute',
      flex: 1,
      height: '100%',
    },
    maskOuter: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    maskInner: {
      flex: 1,
      position: 'relative',
      alignItems: 'center',
      height:
        (height -
          (isHorizontal ? REAC_HEIGHT_HORIZONTAL : REAC_HEIGHT_VERTICAL)) /
        2,
      backgroundColor: 'rgba(24, 23, 33, 0.70)',
    },
    closeBtn: {
      position: 'absolute',
      top: height * 0.06,
      left: (width * 0.12) / 2,
    },
    tipText: {
      position: 'absolute',
      color: '#FFF',
      fontFamily: 'SF Pro Display',
      fontSize: token['--font-size-4'],
      fontStyle: 'normal',
      fontWeight: '600',
      textAlign: 'center',
      width: REAC_WIDTH,
      alignItems: 'center',
      lineHeight: token['--line-height-1'],
      top: '50%',
      transform: [{ translateY: -token['--line-height-1'] / 2 }],
    },
    light: {
      width: '100%',
      justifyContent: 'center',
      top: 24,
      height: 48,
      flexDirection: 'row',
    },
    lightIcon: {
      marginRight: token['--spacing-2'],
    },
    lightText: {
      color: '#FFF',
      fontFamily: 'SF Pro Display',
      fontSize: token['--font-size-3'],
      fontWeight: '500',
      fontStyle: 'normal',
      lineHeight: token['--line-height-3'],
    },
    control: {
      flex: 1,
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', // Add vertical centering
    },
    controlAlbum: {
      position: 'absolute',
      right: 40,
      height: 68,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      top: '50%',
      transform: [{ translateY: -34 }], // height/2
    },
    controlAlbumText: {
      color: token['--color-text-1'],
      fontFamily: 'SF Pro Display',
      fontSize: token['--font-size-2'],
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: token['--line-height-4'],
      textAlign: 'center',
      flexShrink: 1,
      flexWrap: 'nowrap',
    },
    mid: {
      width,
      height: isHorizontal ? REAC_HEIGHT_HORIZONTAL : REAC_HEIGHT_VERTICAL,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    rect: {
      width: REAC_WIDTH,
      height: isHorizontal ? REAC_HEIGHT_HORIZONTAL : REAC_HEIGHT_VERTICAL,
      borderWidth: 2,
      borderColor: '#fff',
      backgroundColor: 'transparent',
      position: 'relative',
      borderRadius: 16,
      overflow: 'visible',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dashline: {
      position: 'absolute',
      top: '50%',
      transform: [{ translateY: -0.5 }],
    },
    corner: {
      position: 'absolute',
      width: 24,
      height: 24,
    },
    lt: {
      left: -2,
      top: -2,
    },
    rt: {
      right: -2,
      top: -2,
      transform: [
        {
          rotateZ: '90deg',
        },
      ],
    },
    lb: {
      left: -2,
      bottom: -2,
      transform: [
        {
          rotateZ: '-90deg',
        },
      ],
    },
    rb: {
      right: -2,
      bottom: -2,
      transform: [
        {
          rotateZ: '180deg',
        },
      ],
    },
    wrap: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    warn: {
      color: '#a1a1a1',
    },
    captureButtonContainer: {
      position: 'absolute',
      bottom: 30,
      alignSelf: 'center',
    },
    scanContainer: {
      width: REAC_WIDTH,
      height: isHorizontal ? REAC_HEIGHT_HORIZONTAL : REAC_HEIGHT_VERTICAL,
      position: 'relative',
    },
    leftMask: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: (width - REAC_WIDTH) / 2,
      backgroundColor: 'rgba(24, 23, 33, 0.70)',
    },
    rightMask: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: (width - REAC_WIDTH) / 2,
      backgroundColor: 'rgba(24, 23, 33, 0.70)',
    },
    verticalCenter: {
      position: 'absolute',
      top: '50%',
      transform: [{ translateY: -50 }],
    },
  });
};
