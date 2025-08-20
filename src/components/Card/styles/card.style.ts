import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';
import { BOLD } from '../../../common/weight';

export default (token: Token) => {
  return StyleSheet.create({
    card: {
      backgroundColor: token['--color-gray-1'],
      overflow: 'hidden',
    },

    image: {
      width: '100%',
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: token['--spacing-3'],
    },

    header_s: {},

    title: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },

    title_text: {
      fontSize: token['--font-size-3'],
      fontFamily: 'PingFang SC',
      lineHeight: token['--line-height-3'],
      color: token['--color-gray-9'],
      fontWeight: BOLD,
      marginRight: token['--spacing-2'],
    },

    title_text_s: {
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },

    title_text_margin_left: {
      marginLeft: token['--spacing-2'],
    },

    footer: {
      paddingHorizontal: token['--spacing-3'],
      paddingBottom: token['--spacing-3'],
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },

    footer_text: {
      fontSize: token['--font-size-2'],
    },
  });
};
