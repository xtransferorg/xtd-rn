import { StyleSheet } from 'react-native';
import { BOLD } from '../../../common/weight';
import { PlatformOS } from '../../../utils/index';

export default (headerHeight: number) => {
  return StyleSheet.create({
    text: {
      fontWeight: BOLD,
      fontSize: 14,
      lineHeight: 21,
      paddingHorizontal: 14,
      textAlign: 'center',
      color: '#222222',
      marginTop: 14,
    },
    loading: {
      width: 32,
      height: 32,
    },
    headerContainer: {
      minHeight: headerHeight,

      alignItems: 'center',
      ...PlatformOS.select({
        harmony: { justifyContent: 'center' },
      }),
      paddingTop: 20,
      paddingBottom: 30,
      backgroundColor: '#ffffff01',
    },
  });
};
