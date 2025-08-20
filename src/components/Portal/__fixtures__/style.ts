import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  section: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingBottom: 16,
    borderRadius: 4,
    paddingHorizontal: 16,
  },

  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  center: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -50 }],
    alignSelf: 'center',
  },

  circle: { width: 90 },

  circleWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleText: {
    color: '#222222',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },

  topWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
