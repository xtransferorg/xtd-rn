import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: token['--color-gray-1'],
      paddingBottom: 34,
      flexDirection: 'column',
      borderTopRightRadius: token['--border-radius-medium'],
      borderTopLeftRadius: token['--border-radius-medium'],
    },
    itemRow: {
      paddingHorizontal: 14,
      paddingTop: 20,
    },
    itemCol: {
      marginBottom: 20,
    },
    textButton: {
      borderTopWidth: 1,
      borderTopColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'normal',
    },
    head: {
      borderTopRightRadius: token['--border-radius-medium'],
      borderTopLeftRadius: token['--border-radius-medium'],
    },
    main: {
      padding: token['--spacing-3'],
      minHeight: 102,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      overflow: 'hidden',
    },
    footer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-2'],
    },
    linear: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -6,
      height: 6,
    },
  });
