import { StyleSheet } from 'react-native';

export const errorBlockStyles = StyleSheet.create({
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

  // 状态标签
  statusLabel: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 12,
    alignSelf: 'flex-start',
    fontFamily: 'Courier New',
  },

  // 自定义样式
  customTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1890ff',
    textAlign: 'center',
  },

  customDescription: {
    fontSize: 14,
    color: '#52c41a',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  // 自定义额外内容
  customExtraContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  customButton: {
    width: '80%',
    marginBottom: 12,
  },

  linkButton: {
    paddingVertical: 8,
  },

  linkText: {
    color: '#1890ff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  // 自定义底部
  customFooterContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },

  customFooterButton: {
    backgroundColor: '#52c41a',
    borderColor: '#52c41a',
  },

  // 自定义图片
  customImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    backgroundColor: '#f0f8ff',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#1890ff',
    borderStyle: 'dashed',
  },

  customImageText: {
    fontSize: 40,
    marginBottom: 8,
  },

  customImageLabel: {
    fontSize: 12,
    color: '#1890ff',
    fontWeight: '500',
  },

  // 全屏演示
  fullPageDemo: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  buttonGroup: {
    marginTop: 30,
    gap: 12,
  },

  demoButton: {
    marginBottom: 12,
  },

  // 兼容旧版本
  desc: {
    color: '#666666',
  },

  button: {
    width: '100%',
    marginTop: 20,
  },

  text: {
    marginTop: 20,
    color: '#FF7A00',
    fontSize: 14,
  },
});

// 保持向后兼容
export default errorBlockStyles;
