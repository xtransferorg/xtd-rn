import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 容器样式
  container: {
    padding: 16,
  },

  // 目标元素样式
  targetItem: {
    width: 70,
    height: 38,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  targetItemSmall: {
    width: 100,
    height: 38,
  },

  targetItemMedium: {
    width: 200,
    height: 38,
  },

  targetItemLarge: {
    width: 300,
    height: 38,
  },

  targetItemFull: {
    width: '100%',
    height: 38,
  },

  targetText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },

  // 按钮样式
  customBtn: {
    alignItems: 'center',
    borderRadius: 96,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 5,
  },

  prevBtn: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#838099',
  },

  nextBtn: {
    backgroundColor: '#F56A00',
    marginLeft: 8,
  },

  btnText: {
    fontSize: 14,
    color: '#181721',
    lineHeight: 22,
    fontWeight: '500',
  },

  btnNextText: {
    color: '#FFF',
  },

  // 文本样式
  description: {
    color: '#181721',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },

  // 图片样式
  coverImage: {
    height: 200,
  },

  topImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -90,
    right: 16,
    backgroundColor: 'pink',
    borderRadius: 16,
    transform: [{ rotateZ: '18deg' }],
  },

  // 示例容器
  demoContainer: {
    marginBottom: 24,
  },

  demoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },

  demoDescription: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 16,
    lineHeight: 18,
  },

  // 按钮组
  buttonGroup: {
    marginBottom: 16,
  },

  // 目标元素组
  targetGroup: {
    marginBottom: 16,
  },

  // 事件日志相关样式
  eventLogContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
  },

  eventLogTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },

  eventLogItem: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
  },

  // 颜色变量
  colorRed: {
    backgroundColor: '#FF4D4F',
  },

  colorGreen: {
    backgroundColor: '#52C41A',
  },

  colorBlue: {
    backgroundColor: '#1890FF',
  },

  colorPink: {
    backgroundColor: '#EB2F96',
  },

  colorOrange: {
    backgroundColor: '#FA8C16',
  },

  colorPrimary: {
    backgroundColor: '#F56A00',
  },
});
