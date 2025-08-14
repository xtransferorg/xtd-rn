import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
  },
  headerWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 18,
  },
  scrollView: {
    height: 250,
    paddingLeft: 20,
    paddingRight: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 3,
    backgroundColor: '#333',
    marginTop: 10,
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    flexShrink: 1,
  },
});
