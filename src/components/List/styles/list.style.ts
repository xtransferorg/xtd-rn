import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: token['--color-bg-1'],
    },

    // verticalWrapper: {
    //   paddingVertical: XL,
    // },

    // 分割线
    separator: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: token['--color-line-1'],
      marginHorizontal: token['--spacing-3'],
    },
  });
