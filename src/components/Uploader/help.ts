import { Platform } from 'react-native';
import { PhoneOS } from './enum';
import { SetStateAction, useRef } from 'react';
import { useMemoizedFn, useUpdate } from 'ahooks';
import { isPromise } from '../../core/helpers';
import mime from 'mime';
import { PlatformOS } from '../../utils';

const getFileExteByString = (type: any, str: string) => {
  if (!type && str) {
    const uriLowcased = str && str.toLowerCase();
    const uriComponents = uriLowcased && uriLowcased.split('.');
    const fileExt =
      Array.isArray(uriComponents) && uriComponents[uriComponents.length - 1];
    return fileExt;
  }
};

// 安卓文件类型会为null,根据uri(android不准确，应取用path)来拼接下,path也不一定有(IOS无)
export const formatPhotoType = (type: any, uri: string, path?: string) => {
  if (type) {
    return type;
  }
  const str = Platform.OS === PhoneOS.Ios ? uri : path || '';
  const fileExt = getFileExteByString(type, str);
  if (fileExt && ['jpg', 'jpeg', 'png'].includes(fileExt)) {
    return `image/${fileExt}`;
  }
  return null;
};

type Options<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (v: T) => void;
};

export function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options;

  const update = useUpdate();

  const stateRef = useRef<T>(value !== undefined ? value : defaultValue);
  if (value !== undefined) {
    stateRef.current = value;
  }

  const setState = useMemoizedFn(
    (v: SetStateAction<T>, forceTrigger = false) => {
      // `forceTrigger` means trigger `onChange` even if `v` is the same as `stateRef.current`
      const nextValue =
        typeof v === 'function'
          ? (v as (prevState: T) => T)(stateRef.current)
          : v;
      if (!forceTrigger && nextValue === stateRef.current) return;
      stateRef.current = nextValue;
      update();
      return onChange?.(nextValue);
    }
  );
  return [stateRef.current, setState] as const;
}

/**
 * 将结果情况统一为promise形式
 * @param result 转换的结果
 */
export async function waitResult<T>(result: T) {
  return new Promise((resolve) => {
    if (isPromise(result)) {
      result
        .then((res) => {
          resolve(res ?? true);
        })
        .catch(() => {
          resolve(false);
        });
    } else {
      resolve(result);
    }
  });
}
/**
 * 获取对应type的mime
 */
export function getMimeType(type?: string) {
  // 获取不到对应的mime直接返回type
  return mime.getType(type || '') || type;
}

/**
 * 文件路径处理
 * 目前主要是针对鸿蒙的文件路径进行处理
 * @param filePath 文件
 */
export function filePathOS(filePath: string) {
  if (PlatformOS.isHarmony) {
    return filePath?.replace?.('file://', '');
  }

  return filePath;
}

/**
 * 文件路径展示处理
 * 目前主要是针对鸿蒙的文件路径进行处理
 * @param filePath
 */
export function filePathOSDisplay(filePath: string) {
  if (PlatformOS.isHarmony && filePath?.startsWith('/')) {
    return `file://${filePath}`;
  }

  return filePath;
}
