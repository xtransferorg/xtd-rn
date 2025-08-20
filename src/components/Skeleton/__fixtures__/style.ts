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
  },
  column: {
    gap: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    textAlign: 'center',
  },

  // 演示容器样式
  demoContainer: {
    padding: 16,
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },

  // 骨架屏项目样式
  skeletonItem: {
    flex: 1,
    minWidth: 150,
    padding: 12,
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
  },
  itemLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // 按钮样式
  toggleButton: {
    marginTop: 8,
  },

  // 预设页面样式
  presetContainer: {
    minHeight: 200,
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  contentPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  contentSubText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },

  // 对比样式
  comparisonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  comparisonItem: {
    flex: 1,
  },
  comparisonLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  comparisonSkeleton: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    minHeight: 150,
  },

  // 场景样式
  scenarioContainer: {
    gap: 16,
  },
  scenarioTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  newsListSkeleton: {
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  userCardSkeleton: {
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  productDetailSkeleton: {
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },

  // 高级功能样式
  actualContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  textContent: {
    flex: 1,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  contentDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },

  // 嵌套样式
  nestedContainer: {
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  nestedHeader: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  nestedBody: {
    flex: 1,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bodyContent: {
    gap: 8,
  },
  bodyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bodyText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },

  // 自动切换样式
  autoContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  autoAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
  },
  autoText: {
    flex: 1,
  },
  autoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  autoDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  autoStatus: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },

  // 组合样式
  combinationContainer: {
    gap: 16,
    marginBottom: 12,
  },
  combinationItem: {
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  combinationLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },

  // 性能优化样式
  performanceContainer: {
    gap: 8,
    marginBottom: 12,
  },
  performanceItem: {
    borderColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  performanceNote: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
