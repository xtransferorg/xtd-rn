import { StyleSheet, TextStyle } from 'react-native';

export const styles = StyleSheet.create({
  // 通用样式
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  hint: {
    color: '#666',
    fontSize: 12,
  },
  selectedInfo: {
    color: '#666',
    fontSize: 12,
  },

  // basicRadio 样式
  displayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayText: {
    marginLeft: 8,
  },

  // groupSelect 样式
  extraContainer: {
    paddingBottom: 16,
  },
  extraText: {
    color: '#999',
    fontSize: 12,
  },

  // redirectSelect 样式
  imageStyle: {
    width: 24,
    height: 16,
    borderRadius: 2,
  },

  // customStyleSelect 样式
  customFooter: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9',
  },
  customFooterText: {
    textAlign: 'center',
    color: '#666',
  },
  contentStyle: {
    backgroundColor: '#fafafa',
    borderRadius: 8,
    margin: 16,
  },
  cancelBtnStyle: {
    backgroundColor: '#ff4d4f',
  },
  selectInputBorder: {
    borderWidth: 2,
  },
  suffixText: {
    color: '#666',
  },
  selectedOptionContainer: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    borderLeftWidth: 4,
  },

  // 主容器样式
  scrollContainer: {
    flex: 1,
  },
  spaceContainer: {
    padding: 16,
  },
});

// 自定义样式选项的文本样式
export const priorityStyles = {
  important: {
    labelTextStyle: {
      color: '#ff4d4f',
      fontWeight: 'bold',
    } as TextStyle,
    subLabelTextStyle: { color: '#ff7875' },
  },
  normal: {
    labelTextStyle: { color: '#1890ff' } as TextStyle,
    subLabelTextStyle: { color: '#69c0ff' },
  },
  low: {
    labelTextStyle: { color: '#52c41a' } as TextStyle,
    subLabelTextStyle: { color: '#95de64' },
    contentLabelTextStyle: { color: '#b7eb8f', fontSize: 12 },
  },
};
