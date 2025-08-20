import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
  },
  demoContainer: {
    marginBottom: 16,
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

  // 状态显示样式
  statusContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  statusLabel: {
    fontWeight: '500',
    color: '#1890ff',
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

  // 对比示例样式
  comparisonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  comparisonItem: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  comparisonTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },

  // 自定义样式示例
  customEyeContainer: {
    marginBottom: 16,
  },
  customEyeTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  customEyeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  customEyeItem: {
    flex: 1,
    minWidth: '45%',
  },
  customEyeLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },

  // 验证示例样式
  validationContainer: {
    marginTop: 12,
  },
  validationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  validationIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  validationSuccess: {
    backgroundColor: '#52c41a',
  },
  validationError: {
    backgroundColor: '#ff4d4f',
  },
  validationWarning: {
    backgroundColor: '#faad14',
  },
  validationText: {
    fontSize: 13,
    color: '#666',
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
});
