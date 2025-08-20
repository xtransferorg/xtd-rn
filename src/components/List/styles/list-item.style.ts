import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      padding: token['--spacing-3'],
      justifyContent: 'space-between',
    },
    // 左边区域
    left: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 1,
      // flexBasis: token['--spacing-2'] / 2, //间距默认放到left,顾basis添加一半
    },

    // 左边内容区
    leftContent: {
      flexGrow: 1,
      flexShrink: 1,
    },

    // 主标题
    title: {
      color: token['--color-text-6'],
      fontWeight: '400',
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
    },

    // 描述行文本
    description: {
      color: token['--color-text-4'],
      fontWeight: '400',
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
    },

    // 右边区域
    right: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 1,
      // flexBasis: 0,
      // justifyContent: 'flex-end', // 发现的问题，右对齐需要添加改行代码，需求改造和UI确认
    },

    // 右边区域的自定义区域
    extra: {
      flexGrow: 1,
      flexShrink: 1,
    },
    arrow: {},
    arrowContainer: {
      padding: token['--spacing-1'],
      minWidth: token['--font-size-3'] + token['--spacing-1'] * 2,
    },
    textDisabled: {
      color: token['--color-text-2'],
    },
  });
