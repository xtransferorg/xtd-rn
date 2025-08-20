import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 通用样式
  wrapper: {
    padding: 16,
    width: '100%',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // 基础用法样式
  basicContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 16,
  },
  sizeLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
    textAlign: 'center',
  },

  // Lottie 动画样式
  lottieContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  lottieRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 16,
  },
  lottieItem: {
    alignItems: 'center',
    flex: 1,
  },
  lottieLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
    textAlign: 'center',
  },

  // 带文案样式
  withTextContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  loadingText: {
    fontSize: 14,
    color: '#666666',
    marginTop: 8,
    textAlign: 'center',
  },
  customText: {
    fontSize: 14,
    color: '#333333',
    marginTop: 8,
    textAlign: 'center',
    maxWidth: 280,
  },

  // 进度条样式
  progressContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  progressText: {
    width: 282,
    textAlign: 'center',
    color: '#222222',
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
  },

  // 主题样式
  themeContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  lightBackground: {
    backgroundColor: '#EEEEEE',
    padding: 16,
    borderRadius: 8,
  },
  darkBackground: {
    backgroundColor: '#999999',
    padding: 16,
    borderRadius: 8,
  },
  primaryBackground: {
    backgroundColor: '#1890ff',
    padding: 16,
    borderRadius: 8,
  },

  // 自定义样式
  customContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  customLoadingStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  // 场景应用样式
  scenarioContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  pageLoadingContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 8,
    width: '100%',
    padding: 20,
  },
  buttonLoadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1890ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },

  // 分隔线
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 16,
    width: '100%',
  },

  // Loading with Children 样式
  contentContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    minHeight: 120,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 12,
  },
  contentMeta: {
    fontSize: 12,
    color: '#999999',
  },
  toggleButton: {
    backgroundColor: '#1890ff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 16,
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#52c41a',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 16,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#fa8c16',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 16,
    alignItems: 'center',
  },
  listContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 4,
  },
  listDesc: {
    fontSize: 14,
    color: '#666666',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 200,
    height: 120,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    marginBottom: 8,
  },
  imageText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  imageSubText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
  imageCaption: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  formField: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  fieldInput: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: 40,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 14,
    color: '#666666',
  },
  transparentContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    minHeight: 100,
  },
  transparentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  transparentText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },

  // 新增的场景应用样式
  dataContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    minHeight: 120,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dataLabel: {
    fontSize: 14,
    color: '#666666',
  },
  dataValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  uploadContainer: {
    width: '100%',
  },
  uploadArea: {
    backgroundColor: '#fafafa',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    padding: 24,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  uploadDesc: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 12,
  },
  uploadStatus: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  networkGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  networkItem: {
    alignItems: 'center',
    marginVertical: 12,
    width: '45%',
  },
  networkLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
    textAlign: 'center',
  },
});
