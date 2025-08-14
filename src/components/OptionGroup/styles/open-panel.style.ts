import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 操作面板
  panel: {
    backgroundColor: 'white',
  },

  // 操作面板按钮组wrapper
  btnGroupWrapper: {
    paddingVertical: 0,
    paddingTop: 10,
  },

  // 操作按钮组
  btnGroup: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },

  // 按钮组间隙
  btnGroupSpace: {
    width: 10,
  },

  // 按钮
  btn: {
    flex: 1,
  },
});
