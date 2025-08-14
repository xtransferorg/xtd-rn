import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  subTabScrollStyle: { width: '100%' },
  subTabWrapperStyle: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingLeft: 12,
  },

  outline: { borderColor: '#F56A00' },
  weak: { borderColor: '#DADAE3' },
  btn: {
    height: 32,
    lineHeight: 22,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginRight: 8,
    minWidth: 'auto',
  },
  tabBtn: { marginBottom: 8 },

  otherTabsStyle: {
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  btnText: { fontWeight: 'normal' },
  activeBtn: { borderWidth: 0, backgroundColor: '#F56A00', color: '#FFFFFF' },
  activeText: { fontWeight: 'normal', color: '#FFFFFF' },
  unactiveBtn: { borderWidth: 0, backgroundColor: '#F5F5F7', color: '#181721' },
  unactiveText: { fontWeight: 'normal', color: '#181721' },

  enTextStyle: {
    fontWeight: 'normal',
    width: 170 /* 或者其他固定宽度 */,
  },
  cnTextStyle: {
    fontWeight: 'normal',
    width: 168 /* 或者其他固定宽度 */,
  },
  activeTextStyle: {
    color: '#F56A00',
  },

  // 自定义按钮样式
  optionStyle: {
    height: 32,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DADAE3',
  },
  // 激活后选项样式
  optionActiveStyle: { backgroundColor: '#FFFFFF', borderColor: '#F56A00' },
  // 选项中文本样式
  optionTextStyle: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#181721',
  },
  // 被激活后文本样式
  optionTextActiveStyle: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#F56A00',
  },
});
