import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { mergeProps } from '../../core/helpers';
import { Size } from './enum';
import { svgNames } from './svgs';
import { fillSvg } from './utils';

export interface IconProps {
  /**
   * svg图标集名称
   */
  name: keyof typeof svgNames;

  /**
   * 图标大小
   * @default Size.Size24
   */
  size?: Size | number;

  /**
   * 要填充的颜色，目前只针对单色svg生效
   */
  fill?: string;

  /**
   * icon父容器自定义的样式属性
   */
  style?: StyleProp<ViewStyle>;
}

const defaultProps = {
  size: Size.Size24,
};

export interface IconRef {}

const Icon: ForwardRefRenderFunction<IconRef, IconProps> = (p, ref) => {
  const props = mergeProps(defaultProps, p);

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));

  return (
    <SvgXml
      xml={fillSvg(
        svgNames[props.name as keyof typeof svgNames] as string,
        props.fill
      )}
      width={props.size}
      height={props.size}
      style={props.style}
    />
  );
};

/**
 * @deprecated 已经废弃
 */
export default forwardRef(Icon);
