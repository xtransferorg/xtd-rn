import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  item: {
    backgroundColor: 'rgba(255, 0, 0, 0.2);',
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mockContent: {
    backgroundColor: '#F9F9F9',
    height: 1000,
  },
  blockItem: {
    backgroundColor: 'rgba(255, 0, 0, 0.2);',
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
  },
  headerStyle: {
    paddingVertical: 16,
  },
  cancelBtnStyle: {
    padding: 0,
  },
  titleStyle: {
    paddingVertical: 0,
  },
  confirmBtnStyle: {
    paddingRight: 0,
  },
  list: { width: '100%', padding: 0 },
  contentStyle: { padding: 0 },
  rightStyle: { justifyContent: 'flex-end' },
  newBtn: { width: '100%' },
  fadeContainer: { width: '100%', padding: 0 },
  topExtra: {
    position: 'absolute',
    top: -40,
    right: 24,
    zIndex: 1,
  },
  overShow: {
    overflow: 'visible',
  },
  rate: {
    width: '100%',
    paddingHorizontal: 16,
  },
  rateTitle: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  rateDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    paddingBottom: 24,
  },
  rateDescriptionText: {
    color: '#838099',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
  },
  rateInput: {
    marginBottom: 24,
  },
  // 新增样式
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  shareItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  shareItemText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  formContainer: {
    padding: 16,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  longContentContainer: {
    padding: 16,
    minHeight: 300,
  },
  longContentText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
  },
  keyboardTestContainer: {
    padding: 16,
  },
  keyboardTestText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    marginVertical: 8,
  },
  animationContainer: {
    padding: 20,
    alignItems: 'center',
    minHeight: 100,
  },
  animationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  shareContainer: {
    padding: 20,
  },
  shareTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  shareIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareText: {
    fontSize: 12,
    color: '#666',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  advancedContainer: {
    padding: 20,
  },
  advancedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  featureIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#1890ff',
    borderRadius: 12,
    marginRight: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  keyboardContainer: {
    padding: 20,
  },
  keyboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  keyboardInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  keyboardNote: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },

  // 新增 API 调用样式
  description: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  apiContainer: {
    padding: 20,
    alignItems: 'center',
    minHeight: 120,
  },
  apiText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  apiDesc: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  confirmContainer: {
    padding: 20,
    alignItems: 'center',
    minHeight: 80,
  },
  confirmText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  listContainer: {
    padding: 16,
  },
  listItem: {
    marginBottom: 12,
  },
  customContainer: {
    padding: 20,
  },
  infoCard: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#1890ff',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  infoDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 4,
  },
  multiContainer: {
    padding: 20,
    alignItems: 'center',
    minHeight: 100,
  },
  multiText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
});
