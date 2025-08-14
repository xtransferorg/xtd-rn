import { StyleSheet } from 'react-native';

import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    // 每个选项样式
    option: {
      borderRadius: token['--border-radius-max'],
      backgroundColor: token['--color-fill-1'],
      borderWidth: 0,
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-2'],
      height: token['--size-default'],
      overflow: 'hidden',
      opacity: 1,
    },

    // 激活后选项样式
    optionActive: {
      backgroundColor: token['--color-primary-1'],
    },

    // 选项条
    optionBar: {
      backgroundColor: token['--color-bg-1'],
      paddingVertical: token['--spacing-3'],
      paddingLeft: token['--spacing-3'],
      paddingRight: token['--spacing-3'],
    },

    // 选项文本
    optionText: {
      fontWeight: 'normal',
      color: token['--color-text-6'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },

    // 选项激活后的文本
    optionActiveText: {
      color: token['--color-primary-6'],
    },

    // 禁用文本
    optionDisabledText: {
      color: token['--color-text-2'],
    },
  });
