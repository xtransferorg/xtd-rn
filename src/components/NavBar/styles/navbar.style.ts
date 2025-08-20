import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: token['--color-bg-1'],
    },

    statusBar: {
      overflow: 'hidden',
    },

    // 导航栏区域
    navbar: {
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: token['--spacing-3'],
    },

    // 左侧区域
    left: {
      height: '100%',
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
    },

    // 中间区域
    center: {
      flex: 1,
      paddingHorizontal: token['--spacing-3'],
    },

    // 右侧区域
    right: {
      height: '100%',
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
    },

    rightTextStyle: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-2'],
      fontWeight: '400',
      lineHeight: token['--line-height-4'],
    },

    // 自定义右侧按钮间距
    rightPadding: {
      marginRight: token['--spacing-3'],
    },

    // 标题文案
    title: {
      textAlign: 'center',
      fontSize: token['--font-size-3'],
      color: token['--color-text-6'],
      fontWeight: BOLD,
      lineHeight: token['--line-height-3'],
    },

    // 描述文案
    description: {
      textAlign: 'center',
      fontSize: token['--font-size-1'],
      color: token['--color-text-4'],
      fontWeight: '400',
      lineHeight: token['--line-height-5'],
    },

    // 自定义导航栏区域
    customNavBar: {
      flex: 1,
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
