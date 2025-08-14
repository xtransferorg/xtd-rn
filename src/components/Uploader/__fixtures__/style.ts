import { Dimensions, StyleSheet } from 'react-native';
import { BOLD } from '../../../common/weight';
export const CredentialsWidthFullScreen = Dimensions.get('window').width - 20; // 根据实际情况调整
export const CredentialsWidth = (CredentialsWidthFullScreen - 16) / 2; // 根据实际情况调整
export const CredentialsHeight = 138;
export default StyleSheet.create({
  container: { position: 'relative', alignItems: 'center', width: '100%' },
  idcard_btn: {
    width: CredentialsWidth,
    height: CredentialsHeight,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gap: {
    height: 16,
    width: '100%',
    backgroundColor: '#F9F9F9',
  },
  cameraWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 21,
    // 添加阴影
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  camera: {
    width: 24,
    height: 24,
  },
  desc: {
    fontSize: 12,
    color: '#999999',
    marginTop: 10,
    marginBottom: 14,
  },
  tipContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  tip: {
    color: '#181721',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 22,
  },
  tipBtn: {
    color: '#F56A00',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: BOLD,
    lineHeight: 22,
    textDecorationLine: 'underline',
  },
  cusImg: {
    marginBottom: 16,
  },
});
