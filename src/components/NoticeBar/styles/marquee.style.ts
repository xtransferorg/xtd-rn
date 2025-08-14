import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    minHeight: 18,
  },
  contentRow: {
    flexDirection: 'row',
  },
  scrollableRow: {
    position: 'absolute',
  },
});
