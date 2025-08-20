import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 原有样式保持不变
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
    width: 170,
  },
  cnTextStyle: {
    fontWeight: 'normal',
    width: 168,
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
  optionActiveStyle: { backgroundColor: '#FFFFFF', borderColor: '#F56A00' },
  optionTextStyle: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#181721',
  },
  optionTextActiveStyle: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#F56A00',
  },

  // 新增样式
  exampleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  exampleDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  contentArea: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 4,
    marginTop: 8,
  },
  longTextTab: {
    fontWeight: 'normal',
    maxWidth: 140,
  },

  // 垂直标签样式
  verticalContainer: {
    flexDirection: 'row',
    height: 300,
  },
  verticalTabsContainer: {
    width: 120,
    backgroundColor: '#f5f5f5',
  },
  verticalContentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 4,
  },
  categoryItemText: {
    fontSize: 14,
    color: '#666666',
  },

  // 展开按钮样式
  expandButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandIcon: {
    fontSize: 16,
    color: '#666666',
  },

  // 控制按钮样式
  controlButton: {
    marginBottom: 12,
  },
});
