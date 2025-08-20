import { check, request, RESULTS } from 'react-native-permissions';
import { PhoneAuths } from '../Uploader/enum';
import { genAuthName } from '../Uploader/permission';
import { Platform } from 'react-native';

export const requestPermission = async (authType: PhoneAuths) => {
  if (authType === PhoneAuths.PhotoLibrary && Platform.OS === 'android') {
    return Promise.resolve(true);
  }

  const auth = genAuthName(authType);
  let granted = '';
  try {
    granted = await check(auth as any);
  } catch (e: any) {
    console.warn('e rror...', e);
  }

  if (granted === RESULTS.GRANTED || granted === RESULTS.LIMITED) {
    return true;
  }

  try {
    granted = await request(auth as any);
  } catch (e: any) {
    console.warn('e rror...', e);
  }

  if (granted === RESULTS.GRANTED) {
    return true;
  }

  return false;
};
