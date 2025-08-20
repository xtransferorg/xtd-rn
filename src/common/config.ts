// @ts-nocheck

/**
 * @description 此文件功能用于个性化组件配置
 */

import { ScrollView } from 'react-native';

ScrollView.defaultProps = Object.assign({}, ScrollView.defaultProps, {
  // ScrollView组件隐藏垂直方向滚动条
  showsVerticalScrollIndicator: false,
});
