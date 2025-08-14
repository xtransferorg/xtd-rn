import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    smallSceneWrapper: {
      width: 320,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    smallSceneTip: { width: 32, height: 32 },
    smallSceneText: {
      width: 280,
      marginLeft: token['--spacing-2'],
      fontWeight: '400',
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      color: token['--color-text-3'],
    },

    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 150,
      height: 115,
    },
    title: {
      fontWeight: BOLD,
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
      color: token['--color-text-6'],
      marginTop: token['--spacing-4'],
      textAlign: 'center',
    },
    description: {
      fontWeight: '400',
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      color: token['--color-text-4'],
      marginTop: token['--spacing-3'],
      textAlign: 'center',
    },
    fullPage: {
      flex: 1,
    },
    footer: {
      width: '100%',
      marginTop: token['--spacing-5'],
    },
    footerPrimaryButton: { width: '100%' },
    footerPrimaryButtonText: {
      fontWeight: BOLD,
      color: token['--color-gray-1'],
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
    },
    footerSecondButton: { width: '100%', marginTop: token['--spacing-3'] },
    footerSecondButtonText: {
      fontWeight: BOLD,
      color: token['--color-gray-9'],
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
    },

    footerDescription: {
      marginTop: token['--spacing-3'],
    },
    footerDescriptionText: {
      color: token['--color-gray-6'],
      fontSize: token['--font-size-3'],
      fontWeight: BOLD,
      lineHeight: token['--line-height-3'],
      textDecorationLine: 'underline',
    },
  });
