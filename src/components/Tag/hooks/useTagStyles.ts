import type { TextStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import { TagType, TagFunc } from '../interface';
import { defaultColor } from '../../../common/colors';
import { Token } from 'src/components/Theme/constant';

export default function useTagStyles(
  tagType: TagType,
  tagFunc: TagFunc,
  closable: boolean | undefined,
  token: Token
) {
  const style: {
    wrapperStyle: ViewStyle;
    fontStyle: TextStyle;
  } = {
    // 1、需要设置容器样式
    wrapperStyle: {},
    // 2、需要设置字体样式
    fontStyle: {},
  };

  // 可编辑标签
  if (closable) {
    style.wrapperStyle.borderWidth = 0;
    style.wrapperStyle.backgroundColor = token['--color-fill-2'];
    style.fontStyle.color = token['--color-text-6'];
    return style;
  }

  if (tagType === TagType.outline) {
    // 线标签
    style.wrapperStyle.borderWidth = StyleSheet.hairlineWidth;

    switch (tagFunc) {
      case TagFunc.weaken:
        style.wrapperStyle.borderColor = '#99999980';
        style.wrapperStyle.backgroundColor = 'white';
        style.fontStyle.color = '#999999';
        break;
      default:
        // 普通标签
        style.wrapperStyle.borderColor = `${defaultColor}80`;
        style.wrapperStyle.backgroundColor = token['--color-gray-1'];
        style.fontStyle.color = defaultColor;
        break;
    }
  } else {
    // 面标签
    style.wrapperStyle.borderWidth = 0;

    switch (tagFunc) {
      case TagFunc.translucent:
        style.wrapperStyle.backgroundColor = `${token['--color-fill-6']}80`;
        style.fontStyle.color = token['--color-text-1'];
        break;
      case TagFunc.strengthen:
        style.wrapperStyle.backgroundColor = token['--color-primary-6'];
        style.fontStyle.color = token['--color-text-1'];
        break;
      case TagFunc.weaken:
        style.wrapperStyle.backgroundColor = token['--color-fill-2'];
        style.fontStyle.color = token['--color-text-6'];
        break;
      // 普通标签
      default:
        style.wrapperStyle.backgroundColor = token['--color-primary-2'];
        style.fontStyle.color = token['--color-text-6'];
        break;
    }
  }

  return style;
}
