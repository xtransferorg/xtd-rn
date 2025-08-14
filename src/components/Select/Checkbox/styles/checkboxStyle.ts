import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    alignTop: {
      alignItems: 'flex-start',
    },
    checkboxContainer: {
      paddingVertical: token['--spacing-3'],
    },
    labelText: {
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
      color: token['--color-text-6'],
    },
    subLabelText: {
      fontSize: token['--font-size-1'],
      color: token['--color-text-4'],
      fontWeight: '400',
      lineHeight: token['--line-height-5'],
    },
  });
