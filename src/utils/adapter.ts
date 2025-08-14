import { Platform, Dimensions } from 'react-native';

// iPhoneX设备
const IOS_X_WIDTH = 375;
const IOS_X_HEIGHT = 812;

// App应用屏幕宽高
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

function isIPhoneX() {
  return (
    Platform.OS === 'ios' &&
    ((SCREEN_WIDTH >= IOS_X_WIDTH && SCREEN_HEIGHT >= IOS_X_HEIGHT) ||
      (SCREEN_WIDTH >= IOS_X_HEIGHT && SCREEN_HEIGHT >= IOS_X_WIDTH))
  );
}

// 状态栏高度
export const STATUS_BAR_HEIGHT = isIPhoneX() ? 44 : 20;
// 导航栏高度
export const NAVIGATION_HEIGHT = 44;
// 顶部安全区域高度：状态栏高度 + 导航栏高度
export const SAFE_AREA_TOP_HEIGHT = STATUS_BAR_HEIGHT + NAVIGATION_HEIGHT;
// 底部工具栏高度
export const TOOL_BAR_BOTTOM_HEIGHT = 49;
// 底部安全区域margin
export const SAFE_AREA_BOTTOM_MARGIN = isIPhoneX() ? 34 : 0;
// 底部安全区域高度：底部工具栏高度 + 底部安全区域margin
export const SAFE_AREA_BOTTOM_HEIGHT =
  TOOL_BAR_BOTTOM_HEIGHT + SAFE_AREA_BOTTOM_MARGIN;
