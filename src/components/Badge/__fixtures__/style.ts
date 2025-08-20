import { StyleSheet } from 'react-native';

export const badgeStyles = StyleSheet.create({
  // 基础样式
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },

  // 徽标子组件样式
  badgeChild: {
    width: 60,
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },

  // 按钮样式
  button: {
    backgroundColor: '#1890ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    minWidth: 60,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },

  // 演示容器样式
  demoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },

  demoItem: {
    alignItems: 'center',
    gap: 8,
  },

  demoLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

// 保持向后兼容
export default badgeStyles;
