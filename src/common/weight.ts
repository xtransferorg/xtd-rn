import { iosOrAndroid } from '../utils';

// 字体加粗，设置500时，ios和android的表现不一致，ios是加粗，android是不加粗
export const BOLD: any = iosOrAndroid('500', 'bold');
