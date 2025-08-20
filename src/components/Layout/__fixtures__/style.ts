import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
  },

  // 演示容器
  demoContainer: {
    flex: 1,
    padding: 16,
  },

  // 内容区域
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  // 文本样式
  contentText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

  contentSubText: {
    color: 'white',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
    opacity: 0.8,
  },

  // 示例标题
  demoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  demoDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },

  // 按钮组
  buttonGroup: {
    marginBottom: 16,
  },

  // 布局示例容器
  layoutExample: {
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },

  layoutExampleTall: {
    height: 300,
  },

  // 颜色变量
  colorPrimary: {
    backgroundColor: '#1890ff',
  },

  colorSuccess: {
    backgroundColor: '#52c41a',
  },

  colorWarning: {
    backgroundColor: '#faad14',
  },

  colorError: {
    backgroundColor: '#f5222d',
  },

  colorOrange: {
    backgroundColor: '#ff934a',
  },

  colorPurple: {
    backgroundColor: '#722ed1',
  },

  colorGray: {
    backgroundColor: '#8c8c8c',
  },

  // 内容布局样式
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  topContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
  },

  bottomContent: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },

  leftContent: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 40,
  },

  rightContent: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 40,
  },

  // 多列布局
  rowContainer: {
    flexDirection: 'row',
    gap: 16,
  },

  columnItem: {
    flex: 1,
    height: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // 嵌套布局
  nestedContainer: {
    padding: 16,
    gap: 16,
  },

  nestedItem: {
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
