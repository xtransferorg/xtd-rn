import { Token } from 'src/components/Theme/constant';
import { StyleSheet } from 'react-native';

export default (token: Token, dotSize: number) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: token['--spacing-3'],
    },
    dot: {
      width: dotSize,
      height: dotSize,
      marginVertical: 5,
      borderRadius: dotSize / 2,
    },
    lineWrapper: {
      flex: 1,
      width: dotSize,
      alignItems: 'center',
    },
    line: {
      flex: 1,
      width: 1,
    },
    waitLine: {
      width: 1,
      height: 6,
      backgroundColor: token['--color-fill-3'],
    },
    content: {
      flexDirection: 'row',
    },
    textContent: {
      width: '100%',
      position: 'relative',
      top: 5 - token['--font-size-2'] / 2,
      marginLeft: 20,
      paddingBottom: token['--spacing-4'],
    },
    title: {
      fontWeight: '400',
      color: token['--color-text-6'],
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
      paddingBottom: token['--spacing-1'],
    },
    description: {
      fontWeight: '400',
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      color: token['--color-text-3'],
    },
    time: {
      fontWeight: '400',
      marginTop: token['--spacing-1'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      color: token['--color-text-2'],
    },
    inactiveBackgroundColor: {
      backgroundColor: token['--color-line-1'],
    },
    activeBackgroundColor: {
      backgroundColor: token['--color-text-5'],
    },
  });
