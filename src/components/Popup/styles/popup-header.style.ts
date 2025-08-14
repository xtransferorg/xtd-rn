import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';
export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: token['--color-gray-1'],
      paddingHorizontal: token['--spacing-3'],
      minHeight: 52,
    },
    cancelBtn: { paddingHorizontal: 0 },
    cancelBtnIcon: { paddingHorizontal: 0, width: 20 },
    confirmBtnStyle: { paddingHorizontal: 0 },
    confirmButTextStyle: {
      color: token['--color-primary-6'],
      fontSize: token['--font-size-3'],
      fontStyle: 'normal',
      fontWeight: BOLD,
      lineHeight: token['--line-height-3'],
    },
    title: {
      paddingHorizontal: token['--spacing-3'],
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      textAlign: 'center',
      fontStyle: 'normal',
      fontWeight: BOLD,
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
      color: token['--color-text-6'],
    },
    description: {
      marginTop: 2,
      lineHeight: 18,
      textAlign: 'center',
      color: token['--color-text-4'],
      fontSize: token['--font-size-1'],
    },
  });
