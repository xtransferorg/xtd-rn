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

  // 间距样式
  spacing: {
    marginBottom: 16,
  },

  // 按钮样式
  button: {
    marginTop: 8,
    marginRight: 8,
  },

  // 布局样式
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flexColumn: {
    flexDirection: 'column',
  },

  // CodeInput 特定样式
  codeInputWrapper: {
    marginBottom: 8,
  },

  extraContent: {
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },

  // 自定义样式示例
  customCell: {
    borderColor: '#1976d2',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#f3f8ff',
  },

  customFocusCell: {
    borderColor: '#ff5722',
    backgroundColor: '#fff3e0',
    shadowColor: '#ff5722',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  customText: {
    color: '#4caf50',
    fontWeight: 'bold',
    fontSize: 18,
  },

  // 状态样式
  errorDemo: {
    backgroundColor: '#ffebee',
    padding: 12,
    borderRadius: 4,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f44336',
  },

  successDemo: {
    backgroundColor: '#e8f5e8',
    padding: 12,
    borderRadius: 4,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4caf50',
  },

  // Card 内容样式
  cardContent: {
    paddingTop: 8,
  },

  // 提示文本样式
  hintText: {
    fontSize: 11,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 4,
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
