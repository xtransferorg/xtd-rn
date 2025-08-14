import { StyleSheet } from 'react-native';

import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    itemHeight: {
      height: '100%',
      borderWidth: token['--border-1'],
      borderStyle: 'solid',
      borderColor: token['--color-gray-4'],
      borderRadius: token['--border-radius-max'],
      paddingHorizontal: token['--spacing-3'],
    },

    activeItem: {
      borderColor: token['--color-primary-6'],
    },

    // 文本样式
    text: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      marginRight: token['--spacing-1'],
    },

    // 激活文本样式
    activeText: {
      color: token['--color-primary-6'],
    },
  });
