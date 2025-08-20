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

  // 基础示例样式
  block: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // 背景样式
  bgWhite: {
    backgroundColor: 'white',
  },
  bgBlack: {
    backgroundColor: 'black',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },

  // 内容样式
  contentBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },

  contentText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },

  // 动画内容样式
  animatedContent: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 20,
    margin: 20,
    alignItems: 'center',
  },

  animatedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // 自定义位置样式
  topContent: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },

  bottomContent: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },

  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  // 复杂内容样式
  complexContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    margin: 20,
    overflow: 'hidden',
  },

  complexHeader: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
  },

  complexHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  complexBody: {
    padding: 20,
  },

  complexBodyText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },

  complexFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  // 按钮样式
  buttonContainer: {
    marginVertical: 8,
  },

  closeButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },

  closeButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },

  confirmButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // 图片样式
  imageContent: {
    width: 200,
    height: 200,
    borderRadius: 8,
    alignSelf: 'center',
  },

  // 加载样式
  loadingContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
    alignItems: 'center',
    margin: 20,
  },

  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#333',
  },
});
