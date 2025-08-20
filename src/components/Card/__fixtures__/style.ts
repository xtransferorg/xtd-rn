import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 通用容器样式
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },

  // 文本样式
  text: {
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
  },
  longText: {
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
  },

  // 间距样式
  marginBottom: {
    marginBottom: 16,
  },
  marginTop: {
    marginTop: 16,
  },

  // 按钮样式
  footerButton: {
    width: '30%',
  },

  // 卡片间距
  cardSpacing: {
    marginBottom: 20,
  },

  // 自定义样式示例
  customCard: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  customHeader: {
    backgroundColor: '#e3f2fd',
  },
  customBody: {
    backgroundColor: '#fff3e0',
  },
  customFooter: {
    backgroundColor: '#f3e5f5',
  },

  // 标题样式
  customTitle: {
    color: '#1976d2',
    fontWeight: 'bold',
  },

  // 加载状态样式
  loadingContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // 图片样式
  cardImage: {
    width: 140,
    height: 140,
  },

  // 特殊布局样式
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },

  // 分割线样式
  dividerExample: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 8,
  },
});
