import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    container: {
      borderRadius: token['--border-radius-medium'],
      backgroundColor: '#fff',
    },
    scroll: {
      paddingTop: token['--spacing-4'],
      paddingBottom: token['--spacing-2'],
    },
    noTopScroll: {
      paddingTop: 0,
    },
    content: {
      flexShrink: 1,
      position: 'relative',
      paddingHorizontal: token['--spacing-3'],
      paddingBottom: token['--spacing-3'],
      // paddingTop: token['--spacing-2'],
    },
    linear: {
      position: 'absolute',
      bottom: token['--spacing-3'],
      left: 0,
      right: 0,
      height: 20,
    },
    titleText: {
      fontWeight: BOLD,
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
      textAlign: 'center',
      color: token['--color-text-6'],
    },
    messageWrapper: {
      marginTop: token['--spacing-2'],
    },
    messageText: {
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      color: token['--color-text-4'],
      textAlign: 'center',
    },
    messageTextOverflow: {
      paddingBottom: 14,
    },
    imgSmall: {
      alignSelf: 'center',
      // marginTop: token['--spacing-4'],
      width: 64,
      height: 64,
    },
    imgMiddle: {
      alignSelf: 'center',
      // marginTop: 30,
      width: 280,
      height: 140,
    },
    imgLarge: {
      width: '100%', // fix：设置固定 320 宽度会导致部分大屏幕机型图片无法完全铺满，故修改为 100%
      height: 160,
    },
    imgContent: {
      paddingTop: token['--spacing-4'],
    },
    statusStyle: {
      marginTop: token['--spacing-2'],
      marginBottom: token['--spacing-2'],
      alignItems: 'center',
    },
    overlayStyle: {
      backgroundColor: 'rgba(34, 34, 34, 0.8)',
    },
    closeIcon: {
      cursor: 'pointer',
      position: 'absolute',
      alignItems: 'flex-end',
      width: '100%',
      top: token['--spacing-3'],
      right: token['--spacing-3'],
    },
    marketingCloseIcon: {
      cursor: 'pointer',
      position: 'absolute',
      alignItems: 'center',
      width: '100%',
      bottom: -48,
    },
    closeIconCircle: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: '#777',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
