import { Dimensions, StyleSheet } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export default StyleSheet.create({
  viewMore: {
    color: '#181721',
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 22,
    textDecorationLine: 'underline',
  },
  headerWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
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
  popupWrapper: {
    maxHeight: screenHeight * 0.95,
  },
});
