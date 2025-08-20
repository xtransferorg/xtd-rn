import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 通用样式
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },

  // 混合预览样式
  combineContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 16,
    gap: 10,
  },
  fileLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
    textAlign: 'center',
  },

  // 图片预览样式
  imageContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 16,
    gap: 10,
  },

  // PDF 预览样式
  pdfContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  pdfViewer: {
    width: '100%',
    height: 400,
    marginTop: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  pdfDescription: {
    fontSize: 14,
    color: '#666666',
    marginVertical: 12,
    textAlign: 'center',
    lineHeight: 20,
  },

  // 缩略图样式
  thumbnailContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  thumbnailRow: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 16,
    gap: 15,
  },
  thumbnailItem: {
    alignItems: 'center',
    flex: 1,
  },

  // 功能演示样式
  featureContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  featureDescription: {
    fontSize: 14,
    color: '#333333',
    marginVertical: 8,
    textAlign: 'center',
    lineHeight: 20,
  },
  previewButton: {
    backgroundColor: '#1890ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 12,
  },
  previewButtonText: {
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
});
