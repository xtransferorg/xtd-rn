import { iosOrAndroidOrHarmony } from '../../../utils';
import { StyleSheet } from '../../Theme/Theme';

export default StyleSheet.createTheme((token) => {
  return {
    wrapper: {
      zIndex: 100,
      overflow: 'visible',
    },
    input: {
      backgroundColor: token['--color-bg-1'],
    },
    options: {
      position: 'absolute',
      right: 0,
      width: '100%',
      marginTop: token['--spacing-2'],
      maxHeight:
        token['--spacing-2'] * 2 +
        (token['--line-height-4'] + 12 * 2) * 5 +
        2 * 4, // 默认显示五行 外层padding + 5行内容高度 + 4间距
      zIndex: 100,
      // shadow 效果， iOS和Android是不同的，Android不同系统也是有差异的，已和设计同学刘智确认
      ...iosOrAndroidOrHarmony(
        {
          shadowColor: token['--color-text-6'],
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 40,
          shadowOpacity: 0.12,
        },
        null,
        null
      ),
    },
    optionsScroll: {
      flex: 1,
      borderRadius: token['--border-radius-medium'],
      backgroundColor: token['--color-bg-1'],
      padding: token['--spacing-2'],
      // shadow 效果， iOS和Android是不同的，Android不同系统也是有差异的，已和设计同学刘智确认
      ...iosOrAndroidOrHarmony(
        null,
        {
          elevation: 5,
        },
        {
          shadowColor: token['--color-text-6'],
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 40,
          shadowOpacity: 0.12,
        }
      ),
    },
    option: {
      backgroundColor: token['--color-bg-1'],
      lineHeight: token['--line-height-4'],
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: 12,
      marginBottom: 2,
    },
    optionLast: {
      marginBottom: 0,
    },
    optionSelect: {
      borderRadius: token['--border-radius-small'],
      backgroundColor: token['--color-fill-2'],
    },
    optionLabel: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-2'],
      fontWeight: '400',
      lineHeight: token['--line-height-4'],
    },
  };
});
