import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
  },
  demoContainer: {
    marginBottom: 16,
  },

  // 按钮样式
  button: {
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  // 结果显示样式
  resultContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  successText: {
    color: '#52c41a',
  },
  errorText: {
    color: '#ff4d4f',
  },

  // 字段样式
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },

  // 示例说明样式
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },

  // 分割线样式
  divider: {
    height: 1,
    backgroundColor: '#e8e8e8',
    marginVertical: 16,
  },

  // 代码块样式
  codeBlock: {
    backgroundColor: '#f6f8fa',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
  },
  codeText: {
    fontFamily: 'Courier',
    fontSize: 12,
    color: '#24292e',
  },

  // 状态指示器样式
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusSuccess: {
    backgroundColor: '#52c41a',
  },
  statusError: {
    backgroundColor: '#ff4d4f',
  },
  statusLoading: {
    backgroundColor: '#1890ff',
  },
  statusText: {
    fontSize: 14,
    color: '#333',
  },

  // 配置示例样式
  configContainer: {
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  configTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  configItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  configLabel: {
    fontSize: 13,
    color: '#666',
  },
  configValue: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },

  // 方向示例样式
  directionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  directionItem: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    minWidth: 100,
  },
  directionLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  // 超时示例样式
  timeoutContainer: {
    backgroundColor: '#fff7e6',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#faad14',
    marginBottom: 12,
  },
  timeoutTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#d46b08',
    marginBottom: 4,
  },
  timeoutDescription: {
    fontSize: 13,
    color: '#ad6800',
    lineHeight: 18,
  },
});
