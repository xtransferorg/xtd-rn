import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 通用容器样式
  container: {
    flex: 1,
  },
  demoContainer: {
    paddingVertical: 16,
  },
  scrollContainer: {
    paddingVertical: 16,
  },

  // 标题样式
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },

  // 文本样式
  selectedText: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },

  // 按钮样式
  button: {
    marginVertical: 10,
  },

  // 日历相关样式
  calendarContainer: {
    marginBottom: 20,
  },

  // 固定周日历样式
  fixedWeekCalendar: {
    backgroundColor: '#f9f9f9',
  },

  // 国际化示例样式
  localeContainer: {
    marginBottom: 20,
  },

  // 自定义主题样式
  customThemeCalendar: {
    backgroundColor: '#fff',
  },

  // 标记日期样式
  markedDaysContainer: {
    marginBottom: 16,
  },

  // 控制按钮容器
  controlsContainer: {
    marginTop: 16,
  },

  // 头部自定义样式
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  // 自定义渲染样式
  customRenderContainer: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },

  // 高级功能样式
  advancedContainer: {
    marginBottom: 20,
  },

  // 范围选择样式
  rangeContainer: {
    marginBottom: 16,
  },

  // 禁用日期样式
  disabledContainer: {
    opacity: 0.6,
  },
});
