import { StyleSheet } from 'react-native';
import { T2, T5 } from '@xrnjs/ui';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: T2,
    color: '#222222',
    fontWeight: '500',
  },

  rightBtnStyle: { width: 60 },
  rightTextStyle: {
    color: '#181721',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },

  yellowStatusBar: { backgroundColor: '#F56A00' },
  yellowNavBar: { backgroundColor: '#F56A00' },
  blueStatusBar: { backgroundColor: '#8E13F7' },
  blueNavBar: { backgroundColor: '#8E13F7' },

  description: {
    textAlign: 'center',
    fontSize: T5,
    color: '#666666',
    fontWeight: '400',
    marginTop: 5,
  },

  iconSpace: {
    width: 18,
  },

  backText: {
    color: '#222222',
  },

  customNavBar: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
