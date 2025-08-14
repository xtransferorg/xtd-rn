import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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

  tag: { marginRight: 4, marginBottom: 8 },

  closableWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  closableTag: {
    marginRight: 6,
    marginBottom: 10,
  },
});
