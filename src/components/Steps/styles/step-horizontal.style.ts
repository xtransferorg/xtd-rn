import { Token } from 'src/components/Theme/constant';
import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';

const dotSize = 8;

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    indicator: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    dot: {
      width: dotSize,
      height: dotSize,
      borderRadius: dotSize / 2,
      backgroundColor: token['--color-text-3'],
    },
    line: {
      flex: 1,
      height: 1,
      borderRadius: 50,
    },
    title: {
      marginTop: token['--spacing-2'],
      fontWeight: BOLD,
      color: token['--color-text-6'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      textAlign: 'center',
      paddingHorizontal: 10,
      paddingBottom: token['--spacing-1'],
    },
    description: {
      marginTop: 2,
      textAlign: 'center',
      color: token['--color-text-3'],
      paddingHorizontal: 10,
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
    },
    waitBackgroundColor: {
      backgroundColor: token['--color-fill-3'],
    },
    activeBackgroundColor: {
      backgroundColor: token['--color-text-6'],
    },
    waitCollapsedLineBackgroundColor: {
      backgroundColor: token['--color-fill-3'],
    },
    collapsedLine: {
      height: 2,
      flex: 1,
      borderRadius: 50,
    },
    collapsedLineGap: {
      marginRight: token['--spacing-1'],
    },
  });
