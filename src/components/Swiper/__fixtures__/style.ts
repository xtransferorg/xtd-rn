import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
  },

  height: {
    height: 260,
  },

  // 通用样式
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },

  pageText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },

  // 控制按钮样式
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 8,
  },

  activeButton: {
    backgroundColor: '#1890ff',
  },

  // 自定义指示器样式
  customIndicator: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  customIndicatorText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  customIndicatorStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  // 自定义图片样式
  customImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },

  // 横幅样式
  bannerItem: {
    flex: 1,
    position: 'relative',
  },

  swiperItem: {
    width: '100%',
  },

  bannerImage: {
    position: 'absolute',
    inset: 0,
    resizeMode: 'cover',
    objectFit: 'cover',
  },

  bannerOverlay: {
    // backgroundColor: '#',
    padding: 16,
  },

  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // 产品样式
  productItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    height: 50,
  },

  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  productTitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },

  // 新闻样式
  newsItem: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    margin: 8,
    borderRadius: 8,
  },

  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },

  newsContent: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },

  // 引导页样式
  guideItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  guideImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 24,
  },

  guideTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },

  guideDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },

  // 卡片样式
  cardItem: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  cardBody: {
    padding: 16,
  },

  cardContent: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
