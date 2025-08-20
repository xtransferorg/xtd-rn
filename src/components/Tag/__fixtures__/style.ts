import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 原有样式
  wrapper: {
    backgroundColor: 'white',
    padding: 8,
  },
  statusTagList: {
    flexDirection: 'column',
  },
  statusTag: {
    marginBottom: 8,
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 4,
    marginBottom: 8,
  },
  closableWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  closableTag: {
    marginRight: 6,
    marginBottom: 10,
  },

  // 新增样式
  exampleCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#262626',
    marginBottom: 4,
  },
  exampleDescription: {
    fontSize: 14,
    color: '#8c8c8c',
    marginBottom: 12,
  },
  sizeLabel: {
    fontSize: 14,
    color: '#595959',
    marginRight: 8,
    alignSelf: 'center',
    minWidth: 60,
  },
  selectableTag: {
    marginRight: 8,
    marginBottom: 8,
  },
  selectedInfo: {
    fontSize: 12,
    color: '#1890ff',
    marginTop: 8,
    fontStyle: 'italic',
  },
  addTag: {
    marginRight: 8,
    marginBottom: 8,
    borderStyle: 'dashed',
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#262626',
    marginTop: 8,
    marginBottom: 4,
  },
  resetButton: {
    fontSize: 14,
    color: '#1890ff',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
});
