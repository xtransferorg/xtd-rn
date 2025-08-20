import { StyleSheet } from 'react-native';
import { iosOrAndroid } from '../../utils';

// 字体加粗，设置500时，ios和android的表现不一致，ios是加粗，android是不加粗
const BOLD: any = iosOrAndroid('500', 'bold');
export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 68,
  },
  title: {
    paddingVertical: 14,
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontWeight: BOLD,
    fontSize: 16,
    lineHeight: 24,
  },
  description: {
    marginTop: 2,
    lineHeight: 18,
    textAlign: 'center',
    color: '#999999',
    fontSize: 12,
  },
});
