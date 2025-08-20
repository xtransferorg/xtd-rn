import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 卡片标题样式
  cardTitle: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // 基础容器样式
  wrapper: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
  },

  // 大容器样式
  largeWrapper: {
    width: 300,
    height: 400,
    backgroundColor: '#fff',
  },

  // 小容器样式
  smallWrapper: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
  },

  // Header 样式
  headerWrapper: {
    padding: 20,
  },

  customHeaderWrapper: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  customTitle: {
    fontSize: 20,
    color: '#1890ff',
    fontWeight: 'bold',
  },

  // 内容区域样式
  scrollView: {
    height: 250,
    paddingLeft: 20,
    paddingRight: 20,
  },

  contentContainer: {
    padding: 20,
  },

  largeContentContainer: {
    padding: 20,
    height: 300,
  },

  // 列表项样式
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 3,
    backgroundColor: '#333',
    marginTop: 10,
    marginRight: 8,
  },

  text: {
    fontSize: 14,
    lineHeight: 24,
    flexShrink: 1,
  },

  // 表单样式
  formContainer: {
    padding: 20,
  },

  inputContainer: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 4,
    padding: 12,
    fontSize: 14,
  },

  // 按钮容器样式
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  // 图片样式
  imageContainer: {
    alignItems: 'center',
    padding: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
  },

  // 自定义内容样式
  customContent: {
    backgroundColor: '#fff3cd',
    padding: 20,
    borderRadius: 8,
    margin: 20,
  },

  warningText: {
    color: '#856404',
    fontSize: 14,
    textAlign: 'center',
  },

  // 间距样式
  spacingContainer: {
    marginTop: 16,
  },

  // 圆角样式
  roundedContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});
