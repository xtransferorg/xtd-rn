import Image from './Image';
import { attachPropertiesToComponent } from '../../core/helpers';
import { Image as RNImage } from 'react-native';
import { Image as XrnImage } from '@xrnjs/image';

//选取RNImage的静态方法
const {
  getSize,
  getSizeWithHeaders,
  // prefetch,
  // prefetchWithMetadata,
  // abortPrefetch,
  // queryCache,
  resolveAssetSource,
} = RNImage;

// 获取FastImage的静态方法和静态属性
const {
  prefetch,
  clearMemoryCache,
  clearDiskCache,
  getCachePathAsync,
  generateBlurhashAsync,
  // loadAsync,
} = XrnImage;

// 将RNImage&FastImage的静态方法&属性添加到新增Image
export default attachPropertiesToComponent(Image, {
  getSize,
  getSizeWithHeaders,
  resolveAssetSource,
  prefetch,
  clearMemoryCache,
  clearDiskCache,
  getCachePathAsync,
  generateBlurhashAsync,
  // loadAsync,
});

// import Image from './Image';

// export default Image;
