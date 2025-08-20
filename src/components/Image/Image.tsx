import React, { useState } from 'react';
import { ImageProps } from './interface';
import { Image as XrnImage } from '@xrnjs/image';
import {
  ColorValue,
  ImageErrorEventData,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import { useMemoizedFn } from 'ahooks';
import { getStrObj, isSvgXml } from './utils';
import { NumberProp, SvgXml, XmlProps } from 'react-native-svg';
import { omitBy } from 'lodash';

const Image = (props: ImageProps) => {
  const {
    source,
    tintColor,
    onError,
    onLoad,
    style,
    width,
    height,
    ...restProps
  } = props;
  const [svg, setSvg] = useState('');
  const fStyle = StyleSheet.flatten(style); // 数组转换为普通样式对象

  const {
    width: stWidth,
    height: stHeight,
    opacity,
  } = (fStyle || {}) as ImageStyle;
  const { width: sWidth, height: sHeight } = source ?? {};
  // 权重 style > source > props
  const finalW = stWidth ?? sWidth ?? width;
  const finalH = stHeight ?? sHeight ?? height;

  let svgProps: XmlProps = {
    ...restProps,
    onError: onError as unknown as (error: Error) => void,
    onLoad: onLoad as unknown as () => void,
    style,
    width: finalW as NumberProp,
    height: finalH as NumberProp,
    opacity: opacity as NumberProp,
    xml: svg,
  };

  // 兼容问题处理
  if (tintColor) {
    svgProps = {
      ...svgProps,
      fill: tintColor as ColorValue,
      stroke: tintColor as ColorValue,
    };
  }

  const _onError = useMemoizedFn((errorData: ImageErrorEventData) => {
    const errorInfo = getStrObj(errorData?.error);
    // 二次校验数据，确保是svg数据
    if (errorInfo?.isSvg && errorInfo?.data && isSvgXml(errorInfo?.data)) {
      setSvg(errorInfo.data);
      return;
    }

    setSvg('');
    onError?.(errorData);
  });

  const size = omitBy(
    { width: finalW, height: finalH },
    (v) => v === undefined
  );

  return svg ? (
    <SvgXml {...svgProps} />
  ) : (
    <XrnImage
      source={source}
      tintColor={tintColor}
      style={StyleSheet.flatten([size, fStyle])}
      onError={_onError}
      onLoad={onLoad}
      {...restProps}
    />
  );
};
export default Image;

// import { Image } from 'react-native';

// export default Image;
