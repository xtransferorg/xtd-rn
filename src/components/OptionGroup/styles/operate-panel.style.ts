import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';

import { T3 } from '../../../common/fonts';

export default StyleSheet.create({
  // 操作
  operate: {
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    flexDirection: 'row',
  },

  // 左侧bar
  leftBar: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 14,
  },

  // 线性渐变
  linear: {
    width: 1.5,
  },

  // 展开区域
  operateArea: {
    width: 42,
    backgroundColor: 'white',
  },

  // 下拉菜单操作区域
  dropdown: {
    height: '100%',
    backgroundColor: 'transparent',
  },

  // 每项
  item: {
    height: '100%',
  },

  // 标签
  label: {
    color: '#222222',
    fontWeight: BOLD,
    fontSize: T3,
  },
});
