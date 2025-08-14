import { Platform, Dimensions, StatusBar } from 'react-native';
import { PlatformOS } from '../utils';

// App应用屏幕宽高
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

function isIPhoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
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

// 暂不考虑横屏情况
const getDefaultHeaderHeight = (): [number, number] => {
  const headerHeight = PlatformOS.select({
    ios: 44,
    android: 56,
    harmony: 56,
    default: 64,
  });

  const statusBarHeight = PlatformOS.select({
    ios: STATUS_BAR_HEIGHT,
    android: StatusBar.currentHeight,
    harmony: StatusBar.currentHeight,
    default: 0,
  });

  return [headerHeight, statusBarHeight];
};

const [NavHeight, StatusBarHeight] = getDefaultHeaderHeight();

const CommonContentHeight = SCREEN_HEIGHT - NavHeight - StatusBarHeight;

// 内容区高度
export const CONTENT_HEIGHT = PlatformOS.select({
  ios: CommonContentHeight,
  harmony:
    SCREEN_HEIGHT / SCREEN_WIDTH > 1.8
      ? CommonContentHeight + StatusBarHeight
      : CommonContentHeight,
  android:
    SCREEN_HEIGHT / SCREEN_WIDTH > 1.8
      ? CommonContentHeight + StatusBarHeight
      : CommonContentHeight,
  default: CommonContentHeight,
});
