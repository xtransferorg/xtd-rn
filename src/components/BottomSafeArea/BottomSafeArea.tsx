import React, {
  forwardRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from 'react';
import { View, StyleSheet } from 'react-native';
import { isBoolean } from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { mergeProps } from '../../core/helpers';

export interface BottomSafeAreaProps {
  /**
   * true：默认值为30
   * false：底部安全距离为0
   * number：根据传值设置底部安全距离
   * @deprecated 此属性已废弃，不需要通过safeArea来控制是否需要安全距离，如果业务需要安全距离就使用`BottomSafeArea`组件包裹，如果不需要安全距离，就不要使用`BottomSafeArea`包裹
   */
  safeArea?: boolean | number;
}

const defaultProps = {
  safeArea: 30,
};

export interface BottomSafeAreaRef {}

const BottomSafeArea: ForwardRefRenderFunction<
  BottomSafeAreaRef,
  BottomSafeAreaProps
> = (p, ref) => {
  // 获取安全区域数据
  const insets = useSafeAreaInsets();
  const realBottomSafeAreaH = insets?.bottom || 30;

  const props = mergeProps(defaultProps, p);

  const getStyle = () => {
    if (isBoolean(props.safeArea)) {
      if (props.safeArea) {
        return {
          height: realBottomSafeAreaH,
        };
      } else {
        return {
          height: 0,
        };
      }
    } else {
      return {
        height: realBottomSafeAreaH,
      };
    }
  };

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));

  return <View style={StyleSheet.flatten([getStyle()])} />;
};

export default forwardRef(BottomSafeArea);
