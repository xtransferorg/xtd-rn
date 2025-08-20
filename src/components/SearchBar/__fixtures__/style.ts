import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  searchButton: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
  eventInfo: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },

  // 自定义样式示例
  customContainer: {
    backgroundColor: '#F0F8FF',
    borderRadius: 8,
  },
  customWrap: {
    paddingHorizontal: 4,
    paddingVertical: 0,
    borderRadius: 6,
  },
  customInputWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  customInput: {
    fontSize: 16,
    color: '#333',
  },
  customLeftExtra: {
    marginRight: 12,
    padding: 4,
  },
  customRightExtra: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  customRightText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },

  // 综合样式示例
  comprehensiveWrap: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  comprehensiveInputWrapper: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    borderWidth: 0,
  },
  comprehensiveInput: {
    fontSize: 15,
    color: '#333',
    paddingHorizontal: 4,
  },
  comprehensiveLeftExtra: {
    marginRight: 8,
    padding: 6,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
  },
  comprehensiveRightExtra: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  comprehensiveRightText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
