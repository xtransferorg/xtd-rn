import isUndefined from 'lodash/isUndefined';

/** 获取默认值 */
export const getDefaultValue = <T>(value: T, defaultValue: T): T => {
  return !isUndefined(value) ? value : defaultValue;
};

/**
 * 是否是svg结尾的资源
 * @param uri 远程资源路径
 * @returns true 是svg结尾的资源
 */
export const isEndWithSvg = (uri?: string | null) => {
  const isSvg = /\.svg$/i;
  return isSvg.test(uri?.toString?.() || '');
};
