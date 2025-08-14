import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 100,
    height: 100,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  wrapper_tip: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading_wrapper: {
    position: 'relative',
  },
  loading_continer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
