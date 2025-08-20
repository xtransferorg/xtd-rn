import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 容器样式
  container: {
    padding: 10,
  },

  // 文本样式
  normalText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },

  largeText: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
  },

  smallText: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
  },

  boldText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: 'bold',
  },

  // 主题色文本
  primaryText: {
    fontSize: 14,
    color: '#1890FF',
  },

  successText: {
    fontSize: 14,
    color: '#52C41A',
  },

  warningText: {
    fontSize: 14,
    color: '#FAAD14',
  },

  errorText: {
    fontSize: 14,
    color: '#FF4D4F',
  },

  // 示例容器
  demoContainer: {
    marginBottom: 16,
  },

  demoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },

  demoDescription: {
    fontSize: 12,
    color: '#999999',
    marginTop: 8,
  },

  // 搜索相关
  searchInput: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 14,
  },

  searchResultItem: {
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 6,
    marginBottom: 8,
  },

  searchResultTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },

  searchResultContent: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },

  // 列表样式
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  listItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },

  listItemSubtitle: {
    fontSize: 12,
    color: '#999999',
  },

  // 标签样式
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },

  tag: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 4,
  },

  tagText: {
    fontSize: 12,
    color: '#666666',
  },
});
