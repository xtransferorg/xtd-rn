import type { ViewStyle } from 'react-native';

export default function useOperatePanelStyles(panelOpen: boolean) {
  const styles: {
    barStyle: ViewStyle;
  } = {
    barStyle: {},
  };

  if (panelOpen) {
    // 当面板打开时
    styles.barStyle.width = '100%';
    styles.barStyle.backgroundColor = 'white';
  } else {
    // 当面板关闭时
  }

  return styles;
}
