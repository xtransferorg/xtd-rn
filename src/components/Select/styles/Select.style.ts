import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';
import { BOLD } from '../../../common/weight';

export default (token: Token) =>
  StyleSheet.create({
    contentStyle: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      paddingBottom: 0,
      paddingTop: 0,
    },
    footerStyle: {
      paddingBottom: 8,
    },
    btnContainer: {
      flexDirection: 'row',
      paddingHorizontal: 14,
    },
    btn: {
      flex: 1,
      marginHorizontal: 0,
    },
    checkboxGroupStyle: {
      paddingBottom: 20,
    },
    redirectContainer: {
      paddingBottom: 20,
    },
    itemContainer: {
      flexShrink: 1,
      flexGrow: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: token['--spacing-3'],
    },
    label: {
      fontSize: token['--font-size-3'],
      color: token['--color-text-6'],
      fontWeight: '400',
      lineHeight: token['--line-height-3'],
    },
    labelDisabled: {
      color: token['--color-text-2'],
    },
    subLabel: {
      fontSize: token['--font-size-1'],
      color: token['--color-text-4'],
      fontWeight: '400',
      lineHeight: token['--line-height-5'],
    },
    subLabelDisabled: {
      color: token['--color-text-2'],
    },
    contenLabel: {
      fontSize: token['--font-size-3'],
      color: token['--color-text-6'],
      lineHeight: token['--line-height-3'],
    },
    contentLabelDisabled: {
      color: token['--color-text-2'],
    },
    default_img: {
      width: 24,
      height: 24,
      borderRadius: 16,
      marginRight: token['--spacing-2'],
      overflow: 'hidden',
    },
    disabled_img: {
      opacity: 0.3,
    },
    left_content: {
      flex: 1,
    },
    right_icon: {
      marginLeft: token['--spacing-3'],
      alignItems: 'center',
      justifyContent: 'center',
    },
    cancelBtnStyle: {},
    confirmBtnStyle: {},
    searchContainer: {
      paddingHorizontal: token['--spacing-3'],
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: token['--spacing-2'],
    },
    searchInput: {
      width: '100%',
    },
    itemFullContainer: {
      paddingVertical: 0,
      minHeight: 60,
    },
    emptyNoDataContainer: {
      paddingVertical: 60,
    },
    emptySearchContainer: {
      paddingVertical: 20,
    },
    groupContainer: {
      flexDirection: 'column',
      gap: token['--spacing-2'],
    },
    groupItem: {
      width: '100%',
    },
    groupTitle: {
      color: token['--color-text-3'],
      fontSize: token['--font-size-2'],
      fontWeight: BOLD,
      lineHeight: token['--line-height-4'],
      paddingVertical: token['--spacing-2'],
      fontStyle: 'normal',
    },
  });
