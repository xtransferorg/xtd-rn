import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
  },

  // 文本样式
  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    lineHeight: 22,
  },

  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 12,
  },

  // 内容区域样式
  contentText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    padding: 16,
  },

  contentArea: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 4,
  },

  // 自定义样式
  customTitleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  customTitleText: {
    color: '#FF7A00',
    fontSize: 16,
    fontWeight: '500',
  },

  customTitleWithIcon: {
    color: 'red',
    paddingLeft: 6,
    fontSize: 16,
  },

  // 常驻节点样式
  permanentNode: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },

  permanentNodeText: {
    fontSize: 14,
    color: '#666',
  },

  // 卡片样式
  card: {
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
    minHeight: 100,
    justifyContent: 'center',
  },

  customCard: {
    borderRadius: 10,
    backgroundColor: 'white',
    minHeight: 100,
    justifyContent: 'center',
  },

  // 间距样式
  spacing: {
    marginBottom: 16,
  },

  // 分组标题样式
  groupTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginBottom: 6,
  },

  // 分组描述样式
  groupDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginBottom: 10,
  },
});
