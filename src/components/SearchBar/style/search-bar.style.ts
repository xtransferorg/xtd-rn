import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  leftExtra: {
    marginRight: 20,
  },
  rightExtra: {
    marginLeft: 20,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  inputWrapperFocus: {
    borderColor: 'transparent',
  },
  input: {
    flex: 1,
    color: '#f66',
    fontWeight: BOLD,
    fontSize: 14,
  },
  default: {
    backgroundColor: '#fff',
    color: '#222',
  },
  primary: {
    backgroundColor: '#FF7A00',
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    fontWeight: BOLD,
    paddingBottom: 18,
    paddingTop: 12,
    fontSize: 16,
  },
  inputWrapperPrimary: {
    backgroundColor: 'rgba(255, 255, 255, 0.2);',
  },
  searchIcon: {
    marginRight: 6,
  },
});
