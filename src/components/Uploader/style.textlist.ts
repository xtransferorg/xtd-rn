import { StyleSheet } from 'react-native';
import { Token } from '../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    container: {
      paddingTop: token['--spacing-2'],
      gap: token['--spacing-2'],
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'nowrap',
      paddingVertical: token['--spacing-2'],
      paddingHorizontal: token['--spacing-3'],
      borderRadius: token['--border-radius-mini'],
      backgroundColor: token['--color-fill-1'],
      gap: token['--spacing-2'],
    },
    itemLeft: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: token['--spacing-2'],
    },
    textWrapper: {
      flex: 1,
    },
    text: {
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      color: token['--color-text-6'],
    },
    itemRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: token['--spacing-2'],
    },
  });
