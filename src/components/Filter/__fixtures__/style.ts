import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  text: {
    paddingVertical: 10,
  },

  // 面板
  panel100: {
    padding: 14,
    position: 'relative',
  },

  // 面板
  panel200: {
    padding: 20,
    paddingHorizontal: 14,
    minHeight: 220,
  },

  // 面板
  panel300: {
    paddingHorizontal: 14,
    minHeight: 300,
  },

  // 筛选
  filter: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  // 筛选内容
  filterContent: {
    paddingHorizontal: 14,
    minHeight: 100,
  },

  // 按钮组
  btnGroupWrapper: {
    flexDirection: 'row',
    // position: 'absolute',
    // left: 0,
    // bottom: 0,
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },

  // 按钮组按钮
  btn: {
    width: '48%',
  },

  // 按钮组按钮之间间隙
  space: {
    width: 10,
  },
  panel3: {},
  title: {
    paddingLeft: 14,
    fontSize: 14,
  },
  optionStyle: {
    height: 36,
  },

  labelRow: {
    paddingBottom: 36,
    flex: 1,
  },

  wrapper: {
    paddingBottom: 34,
    flexDirection: 'column',
  },
  filterWrapper: { height: 48, overflow: 'visible' },
  scrollWrapper: { height: 32 },

  popupContent: { paddingHorizontal: 0 },
  content: {
    width: '100%',
    paddingVertical: 16,
    cursor: 'pointer',
    color: '#222222',
  },
  activeContent: { color: '#F56A00' },
  popupBtnGroupWrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  item: { marginRight: 8 },
  customIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    marginLeft: 4,
    width: 16,
    height: 16,
    backgroundColor: '#F56A00',
    color: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    textAlign: 'center',
  },
  unActiveItem: { borderColor: '#DADAE3', maxWidth: 48 },
  activeItem: { borderColor: '#F56A00', maxWidth: 68 },
  lastItem: { marginRight: 0 },
  checkboxComponentStyle: { padding: 16 },
  groupItem: { width: '100%' },
  groupTitle: {
    paddingHorizontal: 16,
    fontStyle: 'normal',
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },
});
