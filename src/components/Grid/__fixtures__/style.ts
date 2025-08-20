import { StyleSheet } from 'react-native';

export const gridStyles = StyleSheet.create({
  // 标题样式
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
  },

  // 基础演示样式
  colDemo: {
    backgroundColor: '#1890ff',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '500',
  },

  colDemo2: {
    flex: 1,
    backgroundColor: '#52c41a',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '500',
  },

  colDemo3: {
    flex: 1,
    backgroundColor: '#fa8c16',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '500',
  },

  // 高度不同的演示样式
  colDemoTall: {
    backgroundColor: '#1890ff',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '500',
    minHeight: 60,
  },

  // 卡片样式
  cardDemo: {
    backgroundColor: '#f0f2f5',
    color: '#333',
    textAlign: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    fontSize: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },

  // 表单样式
  formLabel: {
    backgroundColor: '#fafafa',
    color: '#333',
    textAlign: 'right',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },

  formInput: {
    backgroundColor: '#fff',
    color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },

  // 容器样式
  container: {
    padding: 16,
  },

  section: {
    marginBottom: 24,
  },

  // 说明文字
  description: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
    lineHeight: 18,
  },
});
