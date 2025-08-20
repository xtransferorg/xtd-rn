import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 通用样式
  container: {
    padding: 16,
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },

  // 按钮组样式
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    justifyContent: 'center',
  },
  buttonGroupWrap: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  // 颜色选择器样式
  colorRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
    justifyContent: 'center',
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  colorButtonActive: {
    borderColor: '#1890ff',
    borderWidth: 3,
  },

  // 自定义状态样式
  customStatus: {
    padding: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  customStatusText: {
    color: '#ff4d4f',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // 数据显示样式
  dataDisplay: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  dataText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'monospace',
  },

  // 标签样式
  itemLabel: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },

  // 容器样式
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centeredItem: {
    alignItems: 'center',
  },
});
