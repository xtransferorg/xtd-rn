import { StyleSheet } from '../../Theme/Theme';
import { BOLD } from '../../../common/weight';

export default StyleSheet.createTheme((token) => {
  return {
    wrapper: {
      paddingVertical: token['--spacing-4'],
      paddingHorizontal: token['--spacing-3'],
      backgroundColor: token['--color-bg-1'],
    },
    header: {
      maxWidth: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-3'],
      fontWeight: BOLD,
      lineHeight: token['--line-height-3'],
      flex: 1,
    },
    space: {
      width: token['--spacing-2'],
    },
    extra: {
      flex: 1,
      marginLeft: token['--spacing-2'],
    },
    items: {
      marginTop: token['--spacing-3'],
    },
    itemsNoHead: {
      marginTop: 0,
    },
    itemsBorder: {
      padding: token['--spacing-4'],
      borderWidth: token['--border-1'],
      borderColor: token['--color-border-1'],
      borderRadius: token['--border-radius-medium'],
    },
    item: {
      marginBottom: token['--spacing-4'],
    },
    itemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lastItem: {
      marginBottom: 0,
    },
    itemTitle: {
      color: token['--color-text-4'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },
    itemTitleRow: {
      minWidth: '20%',
    },
    itemContent: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      marginTop: token['--spacing-2'],
    },
    itemContentRow: {
      marginTop: 0,
      marginLeft: token['--spacing-4'],
      textAlign: 'right',
      minWidth: '20%',
    },
  };
});
