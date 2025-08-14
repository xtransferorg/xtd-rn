import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  item: {
    backgroundColor: 'rgba(255, 0, 0, 0.2);',
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mockContent: {
    backgroundColor: '#F9F9F9',
    height: 1000,
  },
  blockItem: {
    backgroundColor: 'rgba(255, 0, 0, 0.2);',
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btn: {
    flex: 1,
  },

  headerStyle: {
    paddingVertical: 16,
  },
  cancelBtnStyle: {
    padding: 0,
  },
  titleStyle: {
    paddingVertical: 0,
  },
  confirmBtnStyle: {
    paddingRight: 0,
  },
  list: { width: '100%', padding: 0 },
  contentStyle: { padding: 0 },
  rightStyle: { justifyContent: 'flex-end' },
  newBtn: { width: '100%' },
  fadeContainer: { width: '100%', padding: 0 },
  topExtra: {
    position: 'absolute',
    top: -40,
    right: 24,
    zIndex: 1,
  },
  overShow: {
    overflow: 'visible',
  },
  rate: {
    width: '100%',
    paddingHorizontal: 16,
  },
  rateTitle: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  rateDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    paddingBottom: 24,
  },
  rateDescriptionText: {
    color: '#838099',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
  },
  rateInput: {
    marginBottom: 24,
  },
});
