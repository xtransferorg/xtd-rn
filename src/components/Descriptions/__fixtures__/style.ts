import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // 文本样式
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },

  // 内容样式
  contentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },

  longText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },

  // 自定义内容样式
  customContent: {
    marginTop: 8,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },

  uploaderContainer: {
    marginTop: 8,
  },

  // 卡片样式
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // 间距样式
  spacing: {
    marginBottom: 16,
  },

  // 分组标题样式
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },

  groupDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },

  // 特殊布局样式
  wrap: {
    flexDirection: 'column',
    backgroundColor: '#DDD',
  },

  customerContent: {
    marginTop: 8,
  },

  descriptionsBottom: {
    paddingBottom: 0,
  },

  // 浮层样式
  floatingLayer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    margin: 16,
  },
});
