import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // 演示容器
  demoContainer: {
    padding: 16,
  },

  // 内容区域
  content: {
    backgroundColor: '#fff',
  },

  // 文本样式
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },

  // 示例标题
  exampleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    paddingHorizontal: 16,
  },

  // 按钮组
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
  },

  // List 相关样式
  listContainer: {
    backgroundColor: '#fff',
    marginVertical: 8,
  },

  // 描述文本
  description: {
    color: '#696680',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'right',
    lineHeight: 21,
  },

  // 提醒文本
  remind: {
    color: '#FF7A00',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'right',
    lineHeight: 21,
  },

  // 开关样式
  switch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },

  // 标题图标
  titleIcon: {
    // paddingLeft: 6,
  },

  // 标题样式
  title: {
    backgroundColor: 'orange',
    padding: 12,
  },

  // 组合标题
  combineTitle: {
    paddingHorizontal: 12,
    paddingTop: 14,
  },

  // 组合标签
  combineLabel: {
    fontWeight: '400',
    fontSize: 14,
    color: '#696680',
  },

  // 新版组合标签
  combineLabelNew: {
    fontWeight: '400',
    fontSize: 14,
    color: '#696680',
    fontStyle: 'normal',
    lineHeight: 22,
  },

  // 组合描述
  combineDescription: {
    fontWeight: '400',
    fontSize: 14,
    color: '#222222',
    textAlign: 'right',
    lineHeight: 21,
  },

  // 新版组合描述
  combineDescriptionNew: {
    fontWeight: '400',
    fontSize: 14,
    color: '#181721',
    fontStyle: 'normal',
    lineHeight: 22,
  },

  // 单行列表项
  singleItem: {
    paddingRight: 12,
  },

  // 多行列表项
  multipleItem: {
    paddingRight: 12,
  },

  // 组合列表项
  combineItem: {
    paddingVertical: 7,
    paddingLeft: 12,
    paddingRight: 12,
  },

  // 底部区域
  footer: {
    height: 5,
  },

  // 弹性收缩
  flexShrink: {
    flexShrink: 0.5,
  },

  // 箭头样式
  arrowStyle: {
    // marginTop: 3.5,
  },

  // 新版箭头样式
  arrowStyleNew: {
    marginTop: 22, // 去除title的高度居中
  },

  // 右侧容器
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  // 右侧额外内容
  rightExtra: {
    fontSize: 16,
    lineHeight: 24,
    color: '#696680',
  },

  // 基础列表样式
  basicList: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4,
  },

  // 分组列表样式
  groupList: {
    backgroundColor: '#fff',
    marginVertical: 8,
  },

  // 可操作列表样式
  actionableList: {
    backgroundColor: '#fff',
  },

  // 禁用状态样式
  disabledItem: {
    opacity: 0.5,
  },

  // 选中状态样式
  selectedItem: {
    backgroundColor: '#f0f9ff',
  },

  // 分割线样式
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e5e5e5',
    marginLeft: 12,
  },

  // 无分割线
  noSeparator: {
    height: 0,
  },
});
