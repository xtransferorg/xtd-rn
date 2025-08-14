import { StyleSheet } from 'react-native';
import { Token } from '../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    collapseItem: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: token['--color-bg-1'],
    },
    collapseItemHeader: {
      paddingVertical: token['--spacing-3'],
      marginHorizontal: token['--spacing-3'],
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    collapseItemHeaderBorderBottom: {
      borderBottomColor: token['--color-line-1'],
      borderBottomWidth: 1,
    },
    collapseItemHeaderBorderTop: {
      borderTopColor: token['--color-line-1'],
      borderTopWidth: 1,
    },
    collapseItemHeaderIcon: { marginRight: token['--spacing-3'] },
    collapseItemHeaderTitle: { flex: 1, marginRight: token['--spacing-2'] },
    collapseTitle: {
      fontStyle: 'normal',
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
      color: token['--color-text-6'],
      fontWeight: '400',
    },
    collapseDescription: {
      fontStyle: 'normal',
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
      color: token['--color-text-4'],
      fontWeight: '400',
    },
    collapseItemHeaderArrowText: {
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
      fontWeight: '400',
    },
    collapseItemHeaderArrow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    collapseItemContent: {
      padding: token['--spacing-3'],
    },
    collapseItemDisabled: {
      color: token['--color-text-2'],
    },
  });
