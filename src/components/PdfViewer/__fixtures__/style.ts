import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // 字段样式
  field: {
    marginBottom: 16,
  },

  // 示例说明样式
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },

  // PDF 容器样式
  pdfContainer: {
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  // 小尺寸 PDF 容器
  smallPdfContainer: {
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  // 大尺寸 PDF 容器
  largePdfContainer: {
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  // 状态显示样式
  statusContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#1890ff',
  },

  statusText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },

  statusLabel: {
    fontWeight: '600',
    color: '#1890ff',
  },

  // 配置示例样式
  configContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  configTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  configDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },

  // 按钮容器样式
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    flexWrap: 'wrap',
  },

  // 错误状态样式
  errorContainer: {
    height: 200,
    backgroundColor: '#fff5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fecaca',
  },

  errorText: {
    fontSize: 14,
    color: '#dc2626',
    textAlign: 'center',
  },

  // 加载状态样式
  loadingContainer: {
    height: 200,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  loadingText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
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
    borderRadius: 6,
    padding: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#e1e4e8',
  },

  codeText: {
    fontFamily: 'Courier New',
    fontSize: 12,
    color: '#24292e',
    lineHeight: 18,
  },

  // 工具栏样式
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },

  toolbarTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  toolbarActions: {
    flexDirection: 'row',
    gap: 8,
  },

  // 页面信息样式
  pageInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#f8f9fa',
  },

  pageInfoText: {
    fontSize: 14,
    color: '#666',
  },

  // 缩放控制样式
  zoomControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
  },

  zoomButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  zoomButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  zoomText: {
    fontSize: 14,
    color: '#666',
    minWidth: 60,
    textAlign: 'center',
  },
});
