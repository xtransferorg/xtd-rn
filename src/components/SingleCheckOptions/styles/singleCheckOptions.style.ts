import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 14,
  },
  spaceItem: {
    flex: 1,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7.5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemDisabled: {
    borderColor: '#ccc',
  },
  itemActive: {
    borderColor: '#ff7a00',
    backgroundColor: '#fff4eb',
  },
  label: {
    textAlign: 'center',
    maxWidth: 150,
    color: '#222',
    fontWeight: BOLD,
    fontSize: 14,
    lineHeight: 21,
  },
  labelActive: {
    color: '#ff7a00',
  },
  labelDisabled: {
    color: '#ccc',
  },
  description: {
    color: '#999',
    fontSize: 12,
    lineHeight: 18,
  },
  descriptionActive: {
    color: '#FF7A00',
  },
  descriptionDisabled: {
    color: '#ccc',
  },
});
