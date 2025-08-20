import { Toast } from '@xrnjs/ui';
import { CacheKeys, PhoneAuths, PhoneOS } from './enum';
import { Platform } from 'react-native';
import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions';
import { Locale } from '../Locale/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { iosOrAndroidOrHarmony } from '../../utils';

interface TAuthRet {
  result: boolean;
  tip: null | string;
}

enum PermissionTips {
  Camera = 'camera',
  PhotoLibrary = 'photoLibrary',
  Biometrics = 'biometrics',
  // Touch ID, once locked-out due to incorrect tries, will be locked until the user enters the passcode.
  Locked = 'locked',
}

// 鸿蒙相关权限
export const PERMISSIONS_HARMONY = {
  CAMERA: 'ohos.permission.CAMERA', //相机功能
  READ_WRITE_DOWNLOAD_DIRECTORY:
    'ohos.permission.READ_WRITE_DOWNLOAD_DIRECTORY', //访问公共目录下Download目录及子目录。
  ACCESS_BIOMETRIC: 'ohos.permission.ACCESS_BIOMETRIC', //生物识别功能
};

const genPlatformAuth = (
  iosAuth: string,
  androidAuth: string,
  harmonyAuth: string
) => iosOrAndroidOrHarmony(iosAuth, androidAuth, harmonyAuth);

const mapTip = (
  auth: PhoneAuths,
  error: string,
  locale: Locale['Uploader']
) => {
  if (error && auth === PhoneAuths.Biometrics)
    return locale[PermissionTips.Locked];
  if (PermissionTips[auth]) return locale[PermissionTips[auth]];
  throw Error('need case map in func mapTip');
};

export const genAuthName = (auth: PhoneAuths) => {
  switch (auth) {
    case PhoneAuths.Camera:
      return genPlatformAuth(
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS_HARMONY.CAMERA
      );
    case PhoneAuths.PhotoLibrary:
      return genPlatformAuth(
        PERMISSIONS.IOS.PHOTO_LIBRARY,
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS_HARMONY.READ_WRITE_DOWNLOAD_DIRECTORY
      );
    case PhoneAuths.Biometrics: // android 没有此权限的限制
      return genPlatformAuth(
        PERMISSIONS.IOS.FACE_ID,
        null as any,
        PERMISSIONS_HARMONY.ACCESS_BIOMETRIC
      );
    default:
      throw Error('need case in func genAuthName');
  }
};

const requestAuth = async (
  auth: PhoneAuths,
  locale: Locale['Uploader']
): Promise<TAuthRet> => {
  const authName = genAuthName(auth);
  const ret = { result: false, tip: null };
  let result;
  let error1;
  let error2;
  try {
    result = await checkAuth(auth);
  } catch (e: any) {
    result = null;
    error1 = e.message;
  }
  if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
    ret.result = true;
    return ret;
  }
  let requestResult;
  try {
    requestResult = await request(authName as any);
  } catch (e: any) {
    // 这里生物识别的tip 不一定是权限没给。也可能是 Biometry is locked out
    requestResult = null;
    error2 = e.message;
    // ret.result = false
  }
  if (requestResult === RESULTS.GRANTED) {
    ret.result = true;
    return ret;
  }

  ret.result = false;
  ret.tip = mapTip(auth, error1 || error2, locale) as any;
  return ret;
};
// 权限
const checkAuth = async (auth: PhoneAuths) => {
  const authName = genAuthName(auth);
  let result;
  try {
    result = await check(authName as any);
  } catch (e) {
    // 这里可能是 Error: Biometry is locked out.
    console.warn('e rror...', e);
  }
  return result;
};

export const requestPermission = async (
  auth: PhoneAuths,
  locale: Locale['Uploader'],
  useNative?: boolean
): Promise<TAuthRet> => {
  const ret: TAuthRet = await requestAuth(auth, locale);
  if (!ret.result && ret.tip) {
    Toast({
      message: ret.tip,
      forbidPress: true,
      useNative: useNative,
    });
  }
  return ret;
};

const setLocalToken = async (key: CacheKeys, value: string) =>
  AsyncStorage.setItem(key, value);

export const saveLeaveCacheTime = async () => {
  if (Platform.OS === PhoneOS.Android) {
    const now = new Date().getTime().toString();
    await setLocalToken(CacheKeys.AndroidToPhoto, now);
  }
};
