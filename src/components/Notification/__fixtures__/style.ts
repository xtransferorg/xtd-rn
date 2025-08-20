import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  demoContainer: {
    padding: 16,
  },

  // 按钮样式
  buttonContainer: {
    marginVertical: 8,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  buttonItem: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
  },

  // 自定义按钮样式
  customButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },

  weakButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 8,
  },

  weakButtonText: {
    color: '#666',
    fontSize: 14,
  },

  solidButton: {
    backgroundColor: '#1890ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },

  solidButtonText: {
    color: 'white',
    fontSize: 14,
  },

  // 配置示例样式
  configContainer: {
    marginVertical: 8,
  },

  configLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },

  configValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },

  // 状态指示器
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },

  statusText: {
    fontSize: 14,
    color: '#333',
  },

  // 成功状态
  successDot: {
    backgroundColor: '#52c41a',
  },

  // 错误状态
  errorDot: {
    backgroundColor: '#ff4d4f',
  },

  // 警告状态
  warningDot: {
    backgroundColor: '#faad14',
  },

  // 信息状态
  infoDot: {
    backgroundColor: '#1890ff',
  },

  // 示例说明
  exampleDescription: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
    lineHeight: 18,
  },

  // 分割线
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 16,
  },

  // 代码块样式
  codeBlock: {
    backgroundColor: '#f6f8fa',
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
  },

  codeText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#24292e',
  },
});
