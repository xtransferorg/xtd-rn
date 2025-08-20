// 仅用于文档展示
// 初版接口内容来自于 @xrnjs/image

import React from 'react';
import { Text, View } from 'react-native';

type ImageSource = {
  /**
   * 图像资源标识符的字符串
   */
  uri?: string;
  /**
   *远程图片请求一起发送的HTTP头的对象
   */
  headers?: Record<string, string>;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 高度
   */
  height?: number;

  /**
   * 用于查询和存储此特定图像的缓存键 默认是uri
   */
  cacheKey?: string;
  // /**
  //  * 此源应被选择的视口的最大宽度。
  //  * 如果`source`属性不是数组或者只有一个元素，则无效。
  //  * 如果`responsivePolicy`没有设置为`static`，则无效。
  //  * 如果提供了`blurhash`或`thumbhash`，则会被忽略（如果以数组的形式传递，则图像哈希值永远不会被选择）。
  //  * @platform web
  //  */
  // webMaxViewportWidth?: number;
  /**
   * 图像是否有动画（例如GIF动画或WebP动画）
   */
  isAnimated?: boolean;
};

type ImageContentFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

type ImageDecodeFormat = 'argb' | 'rgb';

type ImageLoadEventData = {
  cacheType: 'none' | 'disk' | 'memory';
  source: {
    url: string;
    width: number;
    height: number;
    mediaType: string | null;
    isAnimated?: boolean;
  };
};

/**
 * 表示单个轴的相对位置的值。
 * 如果是`number`，它是以点为单位（逻辑像素）到相应边缘的距离
 * 如果是`string`，它必须是一个百分比值，其中` 100% `是容器和图像在各自轴上的大小差值，
 * 或者` center ` `，它是默认值` 50% `的别名。您可以在MDN文档中阅读有关百分比的更多信息
 * [`background-position`]（https://developer.mozilla.org/en-US/docs/Web/CSS/background-position#regarding_percentages）很好地描述了这个概念。
 */
type ImageContentPositionValue =
  | number
  | string
  | `${number}%`
  | `${number}`
  | 'center';

type ImageContentPositionString =
  | 'center'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top center'
  | 'top right'
  | 'top left'
  | 'right center'
  | 'right top'
  | 'right bottom'
  | 'bottom center'
  | 'bottom right'
  | 'bottom left'
  | 'left center'
  | 'left top'
  | 'left bottom';

/**
 * 指定图像在其容器中的位置。一个值控制x轴，第二个值控制y轴。
 */
type ImageContentPosition =
  /**
   * 将图像相对于右上角定位的对象。
   */
  | {
      top?: ImageContentPositionValue;
      right?: ImageContentPositionValue;
    }
  /**
   * 将图像相对于左上角定位的对象。
   */
  | {
      top?: ImageContentPositionValue;
      left?: ImageContentPositionValue;
    }
  /**
   * 将图像相对于右下角定位的对象。
   */
  | {
      bottom?: ImageContentPositionValue;
      right?: ImageContentPositionValue;
    }
  /**
   * 将图像相对于左下角定位的对象。
   */
  | {
      bottom?: ImageContentPositionValue;
      left?: ImageContentPositionValue;
    }
  | ImageContentPositionString;

type ImageProgressEventData = {
  loaded: number;
  total: number;
};

type ImageErrorEventData = {
  error: string;
};

type ImageTransition = {
  /**
   * 过渡的持续时间，单位为毫秒。
   * @default 0
   */
  duration?: number;

  /**
   * 指定过渡效果的速度曲线以及如何计算中间值。
   * @default 'ease-in-out'
   */
  timing?: 'ease-in-out' | 'ease-in' | 'ease-out' | 'linear';

  /**
   * 用于过渡的动画效果。
   * @default 'cross-dissolve'
   *
   * On Android, only `'cross-dissolve'` is supported.
   * On Web, `'curl-up'` and `'curl-down'` effects are not supported.
   */
  effect?:
    | 'cross-dissolve'
    | 'flip-from-top'
    | 'flip-from-right'
    | 'flip-from-bottom'
    | 'flip-from-left'
    | 'curl-up'
    | 'curl-down'
    | null;
};

interface ImageProps {
  /**
   * 图片源
   */
  source?: ImageSource | string | number | ImageSource[] | string[] | null;

  /**
   * 图片宽度 和RN的Image保持一致 权重 style > source > props
   */
  width?: number;
  /**
   * 图片高度 和RN的Image保持一致 权重 style > source > props
   */
  height?: number;

  /**
   * 尚未显示图像或源未设置时候显示。
   */
  placeholder?: ImageSource | string | number | ImageSource[] | string[] | null;

  /**
   * 确定如何调整图像大小以适应其容器。这个属性告诉图像要填充容器
   * 以各种方式；例如“保持纵横比”或“向上伸展并占据尽可能多的空间”。
   * 它镜像了CSS [`object-fit`]（https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit）属性。
   *
   * - " cover‘ ’——图像的大小在填充容器盒子时保持其宽高比。
   * 如果图像的宽高比与其所在框的宽高比不匹配，则对象将被裁剪以适应。
   *
   * - " contain'`—图像缩放以保持其宽高比，同时适应容器盒。
   *
   * - " fill'`—图像的大小可以完全填满容器盒子。如果有必要，图像将被拉伸或压缩以适应。
   *
   * - " none'`—图像默认居中，未调整大小。
   * 当指定时，可以通过[`contentPosition`]（# contentPosition）属性来控制确切的位置。
   *
   * - " scale-down'`—如果指定了`none`或`contain`，则图像的大小将被调整，无论哪种情况都会导致图像的具体尺寸更小。
   *
   * @default 'cover'
   */
  contentFit?: ImageContentFit;

  /**
   * 确定如何调整占位符的大小以适应其容器。
   * @default 'scale-down'
   */
  placeholderContentFit?: ImageContentFit;

  /**
   * 它与[' contentFit ']（# contentFit）一起使用，以指定图像在其自身容器中的x/y坐标如何定位。
   * 等同于CSS [`object-position`]（https://developer.mozilla.org/en-US/docs/Web/CSS/object-position）属性。
   * @default 'center'
   */
  contentPosition?: ImageContentPosition;

  /**
   * 描述在切换图像源时，图像视图应该如何过渡内容
   * 如果以数字的形式提供，它是` cross-dissolve `特效的持续时间，单位为毫秒。
   */
  transition?: ImageTransition | number | null;

  /**
   * 模糊的半径为点，`0`表示没有模糊效果。
   * 此效果不适用于占位符。
   * @default 0
   */
  blurRadius?: number;

  /**
   * 用于给模板图像上色的颜色（一种只影响不透明度的位图图像）。
   * 颜色应用于每个不透明的像素，使图像的形状采用该颜色。
   * 此效果不适用于占位符。
   * @default null
   */
  tintColor?: string | null;

  /**
   * 加载优先级
   * @default 'normal'
   */
  priority?: 'low' | 'normal' | 'high' | null;

  /**
   * 决定是否缓存映像及其位置：在磁盘上、内存中或两者都缓存。
   *
   * @default 'disk'
   */
  cachePolicy?:
    | 'none'
    | 'disk'
    | 'memory'
    | 'memory-disk'
    | /** @hidden */ null;

  /**
   * 在加载和渲染最终图像之前，更改此属性会将图像视图内容重置为空白或占位符。
   * 这对于任何类型的回收视图特别有用，例如[FlashList]（https://github.com/shopify/flash-list）
   * 为了防止在新源代码完全加载之前显示前一个源代码。
   * @default null
   * @platform android
   * @platform ios
   */
  recyclingKey?: string | null;

  /**
   * 动画图像是否应该自动开始播放
   * @default true
   * @platform android
   * @platform ios
   */
  autoplay?: boolean;

  /**
   * 在图像开始加载时调用。
   */
  onLoadStart?: () => void;

  /**
   * 当图片加载成功完成时调用。
   */
  onLoad?: (event: ImageLoadEventData) => void;

  /**
   * 在图片加载时调用。可以在图像加载完成之前多次调用。
   * event对象提供了到目前为止加载了多少字节以及预期的总大小的详细信息。
   */
  onProgress?: (event: ImageProgressEventData) => void;

  /**
   * 在获取图像错误时调用。
   */
  onError?: (event: ImageErrorEventData) => void;

  /**
   * 在图像加载成功或失败时调用。
   */
  onLoadEnd?: () => void;

  /**
   * 当图像视图成功渲染源图像时调用。
   */
  onDisplay?: () => void;

  // DEPRECATED

  /**
   * @deprecated Provides compatibility for [`defaultSource` from React Native Image](https://reactnative.dev/docs/image#defaultsource).
   * Use [`placeholder`](#placeholder) prop instead.
   */
  defaultSource?: ImageSource | null;

  /**
   * @deprecated 为[React Native Image的`defaultSource`]（https://reactnative.dev/docs/image#defaultsource）提供兼容性。
   * 使用[`placeholder`](#placeholder) prop代替。
   */
  loadingIndicatorSource?: ImageSource | null;

  /**
   * @deprecated 为[React Native Image的`resizeMode`]（https://reactnative.dev/docs/image#resizemode）提供兼容性。
   * 注意，不支持`"repeat"`选项。
   * 使用更强大的[`contentFit`]（# contentFit）和[`contentPosition`](# contentPosition) props来代替。
   */
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';

  /**
   * @deprecated 为[React Native Image的`fadeDuration`]（https://reactnative.dev/docs/image#fadeduration-android）提供兼容性。
   * 使用[' transition ']（#transition）代替指定的时长。
   */
  fadeDuration?: number;

  /**
   * 当为true时，表示视图是可访问性元素。
   * 当视图是可访问性元素时，它将其子元素分组到单个可选择组件中。
   *
   * 在Android上，`accessible`属性将被转换为原生的`isScreenReaderFocusable`，
   * @default false
   * @platform android
   * @platform ios
   */
  accessible?: boolean;

  /**
   * 当用户与图像交互时，屏幕阅读器读取的文本。设置网页上的`alt`标签，用于网络爬虫和链接遍历。
   * @default undefined
   */
  accessibilityLabel?: string;

  /**
   * 当用户与图像交互时，屏幕阅读器读取的文本。设置网页上的`alt`标签，用于网络爬虫和链接遍历。是` accessbilitylabel `的别名。
   *
   * @alias accessibilityLabel
   * @default undefined
   */
  alt?: string;

  /**
   * 启用与图像的实时文本交互。查看官方[Apple文档]（https://developer.apple.com/documentation/visionkit/enabling_live_text_interactions_with_images）了解更多细节。
   * @default false
   * @platform ios 16.0+
   */
  enableLiveTextInteraction?: boolean;

  /**
   * 图像是否应该缩小以匹配视图容器的大小。
   * 关闭此功能可能会对应用程序的性能产生负面影响，特别是在处理大型资源文件时。
   * 然而，它将导致更平滑的图像缩放，并且最终用户将始终获得最高的资产质量。
   * 当`contentFit`属性被设置为`none`或`fill`时，永远不会使用Downscaling。
   * @default true
   */
  allowDownscaling?: boolean;

  /**
   * 图像数据解码的格式。
   * @default 'argb'
   * @platform android
   */
  decodeFormat?: ImageDecodeFormat;
}

const ImageDoc = (props: ImageProps) => {
  let propsStr = '';
  try {
    propsStr = JSON.stringify(props);
  } catch (_err) {
    console.log('Image error=', _err);
  }

  return (
    <View>
      <Text>仅用于文档展示</Text>
      <Text>{propsStr}</Text>
    </View>
  );
};

export default ImageDoc;
