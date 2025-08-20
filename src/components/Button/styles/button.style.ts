import { StyleSheet } from 'react-native';

import { defaultColor } from '../../../common/colors';
import { BOLD } from '../../../common/weight';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    // wrapper容器

    wrapper: {
      overflow: 'hidden',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    defaultAlign: {
      alignSelf: 'flex-start',
    },

    miniWrapper: {
      paddingHorizontal: token['--spacing-2'],
      height: 24,
    },

    smallWrapper: {
      paddingHorizontal: token['--spacing-3'],
      height: 32,
    },

    middleWrapper: {
      paddingHorizontal: token['--spacing-4'],
      height: 40,
    },

    largeWrapper: {
      paddingHorizontal: token['--spacing-4'],
      height: 48,
    },

    // 方形按钮
    rectangular: {
      borderRadius: 0,
    },

    // 圆角按钮
    rounded: {
      borderRadius: token['--border-radius-max'],
    },

    // no border
    noBorder: {
      borderWidth: 0,
    },

    // 默认的outFill Border
    defaultOutFillBorder: {
      borderWidth: token['--border-1'],
      borderColor: `${defaultColor}80`,
    },

    dashedBorder: {
      borderWidth: token['--border-1'],
      borderStyle: 'dashed',
      borderColor: token['--color-border-2'],
    },

    defaultWeakBorder: {
      borderWidth: token['--border-1'],
      borderColor: token['--color-border-2'],
    },

    // 未激活、弱按钮border
    unactiveOutlineBorder: {
      borderWidth: 0,
    },

    // 失败、弱按钮border
    failOutlineBorder: {
      borderWidth: 0,
    },

    // 默认背景色
    defaultBackground: {
      backgroundColor: token['--color-primary-6'],
    },

    dangerBackground: {
      backgroundColor: token['--color-danger-6'],
    },

    disableBackground: {
      backgroundColor: token['--color-fill-2'],
    },

    // 强按钮未激活背景色
    solidUnactiveBackground: {
      backgroundColor: token['--color-fill-2'],
    },

    // 强按钮失败背景色
    solidFailBackground: {
      backgroundColor: token['--color-fill-2'],
    },

    // 弱按钮背景色
    outlineBackground: {
      backgroundColor: token['--color-bg-1'],
    },

    // loading状态时
    loadingOpacity: {
      opacity: 0.4,
    },

    // 非loading状态时
    notLoadingOpacity: {
      opacity: 1,
    },

    // text文本
    miniFont: {
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
    },

    smallFont: {
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },

    middleFont: {
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },

    largeFont: {
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
    },

    // 默认字体颜色
    defaultFontColor: {
      color: token['--color-text-1'],
    },

    // outline按钮基本样式字体颜色
    outlineBaseFontColor: {
      color: defaultColor,
    },

    //weak按钮基本样式字体颜色
    weakBaseFontColor: {
      color: token['--color-text-6'],
    },

    // 弱按钮未激活字体颜色
    outlineUnactiveFontColor: {
      color: token['--color-fill-4'],
    },

    // 弱按钮失败字体颜色
    outlineFailFontColor: {
      color: token['--color-fill-4'],
    },

    // 按钮图标icon
    icon: {},

    // 按钮文本
    text: {
      fontWeight: BOLD,
    },
    textDefaultColor: {
      color: token['--color-text-6'],
    },
    textPrimaryColor: {
      color: token['--color-primary-6'],
    },
    textDangerColor: {
      color: token['--color-danger-6'],
    },
    disableFillTextColor: {
      color: token['--color-fill-4'],
    },
    disableTextColor: {
      color: token['--color-text-2'],
    },
  });
