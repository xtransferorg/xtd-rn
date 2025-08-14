import { Platform, StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    container: {},
    count: {
      color: token['--color-text-3'],
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
      marginTop: 5,
      textAlign: 'right',
    },
    inputStyle: {
      textAlignVertical: 'top',
      height: '100%', // 多行撑满，防止当行塌陷为一行输入状态
      lineHeight: token['--line-height-4'], // 多行添加
      paddingVertical: 8,
      marginTop: Platform.select({
        ios: 0,
        android: 3,
      }),
    },
    inputWrapper: {},
  });
