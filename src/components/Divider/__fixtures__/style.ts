import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 基础容器样式
  container: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  // 文字样式
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    marginVertical: 8,
  },

  // 垂直分割线容器
  verticalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verticalDividerWrapper: {
    height: 30,
    marginHorizontal: 10,
  },
  verticalDividerWrapperTall: {
    height: 60,
    marginHorizontal: 10,
  },
  verticalDividerWrapperShort: {
    height: 40,
    marginHorizontal: 10,
  },

  // 自定义文字样式
  customText: {
    color: '#1890ff',
    fontSize: 16,
    fontWeight: '500',
  },

  // 自定义宽度
  customWidth: {
    width: 200,
    alignSelf: 'center',
  },
  customWidthSmall: {
    width: 150,
    alignSelf: 'center',
  },

  // 文章样式
  articleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  // 菜单样式
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  menuItem: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 15,
  },
  menuDivider: {
    height: 20,
  },

  // 表单样式
  formGroup: {
    paddingVertical: 8,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  formItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});
