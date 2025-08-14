import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingBottom: 30,
  },
  section: {
    backgroundColor: '#fff',
    paddingBottom: 14,
    borderRadius: 4,
    paddingHorizontal: 14,
    position: 'relative',
  },
  inputPicker: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: 10,
  },
  amount: {
    fontSize: 32,
    height: 32,
  },
  amountLeftAndroid: {
    fontSize: 30,
    lineHeight: 40,
    height: 40,
  },
  amountRightAndroid: {
    fontSize: 30,
    lineHeight: 40,
    height: 40,
  },
  amountPrefix: {
    fontWeight: '400',
    fontSize: 26,
    color: '#222',
  },
  amountSuffix: {
    display: 'flex',
    marginRight: 4,
    fontWeight: '500',
    color: '#FF7A00',
    fontSize: 14,
    alignItems: 'center',
  },
  amountSuffixText: {
    color: '#FF7A00',
    fontWeight: '500',
    lineHeight: 24,
    fontSize: 16,
  },
  unitSuffix: {
    fontSize: 16,
    lineHeight: 24,
    marginRight: 4,
    color: '#222',
  },
  placeholderStyle: {
    fontSize: 16,
    lineHeight: 18,
  },
  placeholderStyleNoPrefix: {
    fontSize: 16,
    lineHeight: 32,
  },
});
