import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    footerHorizontal: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: '#eeeeee',
      overflow: 'hidden',
      // borderBottomLeftRadius: 12,
      // borderBottomRightRadius: 12,
      backgroundColor: '#fff',
    },
    footerVertical: {
      flexDirection: 'column',
      overflow: 'hidden',
      // borderBottomLeftRadius: 12,
      // borderBottomRightRadius: 12,
      backgroundColor: '#fff',
    },
    dividerHorizontal: {
      height: 1,
      backgroundColor: '#eeeeee',
    },
    dividerVertical: {
      width: 1,
      backgroundColor: '#eeeeee',
    },
    buttonHorizontal: {
      flex: 1,
    },
    solidButtonFooterRow: {
      flexDirection: 'row',
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-2'],
      // borderBottomLeftRadius: 12,
      // borderBottomRightRadius: 12,
      backgroundColor: '#fff',
    },
    solidButtonFooterColumn: {
      flexDirection: 'column',
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-2'],
      // borderBottomLeftRadius: 12,
      // borderBottomRightRadius: 12,
      backgroundColor: '#fff',
    },
    solidButtonHorizontal: {
      flex: 1,
    },
    solidButtonHorizontalSpace: {
      marginLeft: token['--spacing-2'],
    },
    solidButtonVerticalSpace: {
      marginTop: token['--spacing-3'],
    },
    secondaryButton: {
      marginTop: 12,
      height: 21,
    },
  });
