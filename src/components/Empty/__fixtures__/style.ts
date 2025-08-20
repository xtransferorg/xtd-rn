import { StyleSheet } from 'react-native';

export const emptyStyles = StyleSheet.create({
  // 基础样式
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },

  // 容器样式
  container: {
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  demoContainer: {
    minHeight: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginBottom: 16,
  },

  smallContainer: {
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listContainer: {
    height: 280,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  // 响应式容器
  responsiveContainer1: {
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1890ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  responsiveContainer2: {
    height: 160,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#52c41a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  responsiveContainer3: {
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#faad14',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  narrowContainer: {
    width: 80,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    alignSelf: 'center',
    marginBottom: 16,
  },

  wideContainer: {
    width: 200,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    alignSelf: 'center',
    marginBottom: 16,
  },

  fullContainer: {
    height: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    marginBottom: 16,
  },

  // 文字样式
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 12,
    textAlign: 'center',
  },

  emptySubText: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
    textAlign: 'center',
  },

  containerLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
    backgroundColor: '#f5f5f5',
    paddingVertical: 4,
    borderRadius: 4,
  },

  // 按钮样式
  refreshButton: {
    backgroundColor: '#1890ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 16,
  },

  refreshButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  retryButton: {
    backgroundColor: '#ff4d4f',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 16,
  },

  retryButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  actionButton: {
    backgroundColor: '#52c41a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 16,
  },

  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

// 保持向后兼容
export default emptyStyles;
