import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 通用样式
  container: {
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  demoContainer: {
    paddingVertical: 16,
  },
  demoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  currentValueText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },

  // 自定义样式示例
  customInput: {
    borderColor: '#1890ff',
    borderWidth: 2,
    borderRadius: 8,
  },
  customOptions: {
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1890ff',
  },
  customOption: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e8f4fd',
  },
  customOptionLabel: {
    color: '#1890ff',
    fontWeight: '500',
  },
  limitedHeight: {
    maxHeight: 120, // 限制最大高度，约3个选项
  },

  // 弹出位置示例
  placementTopContainer: {
    marginTop: 150,
  },

  // FloatingLayer 示例
  floatingLayerContent: {
    zIndex: 2,
    width: '100%',
  },
  floatingLayerField: {
    width: '100%',
    paddingBottom: 180,
  },
  customAutoComplete: {
    paddingBottom: 118,
    borderWidth: 1,
    borderColor: 'red',
  },

  // 按钮容器
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1890ff',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  buttonDanger: {
    backgroundColor: '#ff4d4f',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  buttonSuccess: {
    backgroundColor: '#52c41a',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  buttonWarning: {
    backgroundColor: '#faad14',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  // 间距
  spacer: {
    height: 40,
  },

  lastContainer: {
    marginBottom: 100,
  },
});
