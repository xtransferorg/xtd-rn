import { Dimensions, StyleSheet } from 'react-native';
import { BOLD } from '../../../common/weight';

export const CredentialsWidthFullScreen = Dimensions.get('window').width - 20;
export const CredentialsWidth = (CredentialsWidthFullScreen - 16) / 2;
export const CredentialsHeight = 138;

export default StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
  },
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
  // 新增样式
  spacingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingContainer: {
    paddingHorizontal: 35,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleIcon: {
    flexShrink: 0,
  },
  titleText: {
    paddingLeft: 4,
    color: 'red',
    flexShrink: 1,
  },
  absoluteTitle: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
  },
  customContentStyle: {
    width: CredentialsWidthFullScreen,
    height: 200,
  },
  // 提取的内联样式
  cardTitle: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  horizontalSpaceContainer: {
    marginTop: 16,
  },
});
