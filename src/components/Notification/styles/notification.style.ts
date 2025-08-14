import { StyleSheet } from 'react-native';
import { BOLD } from '../../../common/weight';
import { Token } from '../../Theme/constant';
import { SCREEN_WIDTH } from '../../../utils/adapter';

export default (token: Token) => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      width: SCREEN_WIDTH - token['--spacing-3'] * 2,
      shadowColor: token['--color-text-6'],
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 40,
      shadowOpacity: 0.12,
      elevation: 5,
      borderRadius: token['--border-radius-small'],
      backgroundColor: token['--color-bg-1'],
      padding: token['--spacing-3'],
      marginHorizontal: token['--spacing-3'],
    },

    message: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
    },
    typeIcon: {
      marginRight: token['--spacing-2'],
      width: token['--size-mini'],
      height: token['--size-mini'],
    },

    center: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginRight: token['--spacing-3'],
    },
    title: {
      maxHeight: 48,
      fontSize: token['--font-size-3'],
      fontWeight: BOLD,
      color: token['--color-text-6'],
      lineHeight: token['--line-height-3'],
    },
    description: {
      maxHeight: 66,
      marginTop: token['--spacing-2'],
      color: token['--color-gray-8'],
      fontWeight: '400',
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },
    close: {
      width: token['--font-size-3'],
      height: token['--font-size-3'],
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
    },

    customBtn: {
      marginTop: token['--spacing-4'],
      alignSelf: 'flex-end',
    },
  });
};
