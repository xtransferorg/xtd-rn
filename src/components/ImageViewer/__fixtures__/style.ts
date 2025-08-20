import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 缩略图样式
  thumbnailImage: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },

  thumbnailImageVertical: {
    width: 150,
    height: 100,
    marginVertical: 5,
    borderRadius: 8,
  },

  // 网格布局
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  gridImage: {
    width: 80,
    height: 80,
    margin: 2,
    borderRadius: 6,
  },

  // 描述文本
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },

  // 状态信息
  statusContainer: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },

  statusText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },

  // 事件日志
  logContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 10,
  },

  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  logTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  logContent: {
    maxHeight: 200,
  },

  logItem: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  emptyLog: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingVertical: 20,
  },

  // 按钮组
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
});
