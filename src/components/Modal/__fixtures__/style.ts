import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 基础样式
  wrapper: {
    paddingVertical: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },

  // 自定义内容样式
  customContent: {
    fontSize: 16,
    padding: 20,
    textAlign: 'center',
  },
  customFooter: {
    marginHorizontal: 20,
    marginBottom: 8,
  },

  // 营销弹窗样式
  marketing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marketingContent: {
    padding: 20,
    alignItems: 'center',
  },
  marketingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  marketingDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },

  // 表单样式
  formContainer: {
    marginTop: 12,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },

  // 消息样式
  messageStyle: {
    textAlign: 'left',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 8,
  },
  messageSegment: {
    marginTop: 8,
    color: '#696680',
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },

  // 图片样式
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },

  // 按钮样式
  buttonContainer: {
    marginVertical: 8,
  },
  nestedModalButton: {
    marginTop: 12,
  },

  // 状态样式
  statusContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },

  // 长内容样式
  longContentContainer: {
    maxHeight: 200,
  },

  // 间距样式
  spacingContainer: {
    marginVertical: 8,
  },
});
