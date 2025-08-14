import React, {
  ReactNode,
  isValidElement,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useMemo,
} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
  View,
} from 'react-native';
import { isFunction, isNil, isString } from 'lodash';

import { mergeProps } from '../../core/helpers';
import {
  Size,
  Shape,
  Fill,
  DisabledType,
  IconPosition,
  TextType,
} from './enum';
import { svgNames } from '../Icon/svgs';
import ShouldRender from '../ShouldRender';
import Loading from '../Loading';
import { LoadingType, LoadingType2 } from '../Loading/interface';
import { IconMASuccess1 } from '../../icons/index';

import createStyle from './styles/button.style';
import { useTheme } from '../Theme';

const BORDER_WIDTH_HALF_PX = [Size.mini, Size.small];

export interface ButtonProps {
  /**
   * 按钮大小
   * @default Size.middle
   */
  size?: Size;

  /**
   * 按钮样式
   * @default Shape.rounded
   */
  shape?: Shape;

  /**
   * 按钮填充样式
   * @default Fill.solid
   */
  fill?: Fill;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 按钮禁用样式
   * @default DisabledType.unactive
   */
  disabledType?: DisabledType;

  /**
   * 是否加载中
   */
  loading?: boolean;

  /**
   * 加载中图标
   * @deprecated 动画已经内置，不支持修改
   */
  loadingIcon?: LoadingType;

  /**
   * 按钮图标
   */
  icon?: keyof typeof svgNames | ReactNode;

  children?: ReactNode;

  /**
   * 自定义样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 自定义图标样式
   */
  iconStyle?: StyleProp<ViewStyle>;

  /**
   * 自定义文字样式
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * 点击事件
   */
  onPress?: TextProps['onPress'];

  /**
   * 辅助功能标签
   */
  accessibilityLabel?: string;

  /**
   * 图标位置
   * @default IconPosition.left
   */
  iconPosition?: string;

  /**
   * 将按钮宽度调整为其父宽度的选项
   * @default true
   */
  block?: boolean;

  /**
   * 文本/文本链类型
   * @default TextType.default
   */
  textType?: TextType;
}

const defaultProps = {
  size: Size.middle,
  shape: Shape.rounded,
  fill: Fill.solid,
  disabled: false,
  disabledType: DisabledType.unactive,
  loading: false,
  loadingIcon: 'loading',
  iconPosition: IconPosition.left,
  block: true, // 兼容以前逻辑，默认是父容器宽度
  textType: TextType.default,
};

export interface ButtonRef {}

/**
 * Button 按钮
 * @description 按钮用于触发一个操作，如提交表单。
 */
const Button: ForwardRefRenderFunction<ButtonRef, ButtonProps> = (p, ref) => {
  const props: ButtonProps = mergeProps(defaultProps, p);
  const token = useTheme();
  const styles = createStyle(token);

  const isTextType = useMemo(
    () => [Fill.text, Fill.link].includes(props.fill ?? defaultProps.fill),
    [props]
  );

  const getBlockStyle = () => {
    if (!props.block || isTextType) {
      return styles.defaultAlign;
    }
    return {};
  };

  const getWrapperStyleBySize = () => {
    if (isTextType) {
      return {};
    }
    switch (props.size) {
      case Size.mini:
        return styles.miniWrapper;
      case Size.small:
        return styles.smallWrapper;
      case Size.large:
        return styles.largeWrapper;
      default:
        return styles.middleWrapper;
    }
  };

  const getWrapperStyleByShape = () => {
    if (isTextType) {
      return {};
    }
    switch (props.shape) {
      case Shape.rectangular:
        return styles.rectangular;
      default:
        return styles.rounded;
    }
  };

  const getWrapperBorder = () => {
    if (props.disabled) {
      return {};
    }
    if (isTextType) {
      return {};
    }
    if (props.fill === Fill.dashed) {
      return styles.dashedBorder;
    }
    const isMiniOrSmall = BORDER_WIDTH_HALF_PX.indexOf(props.size!) !== -1;
    const borderWidthStyle = { borderWidth: isMiniOrSmall ? 0.5 : 1 };
    // 强按钮没有border
    // outline按钮border分为： 基本样式、未激活、失败
    // 弱按钮border分为：基本样式、未激活、失败
    if (props.fill === Fill.outline) {
      // outline按钮
      if (!props.disabled) {
        // 基本样式
        return StyleSheet.flatten([
          styles.defaultOutFillBorder,
          borderWidthStyle,
        ]);
      }
      if (props.disabledType === DisabledType.unactive) {
        // 未激活
        return StyleSheet.flatten([
          styles.unactiveOutlineBorder,
          borderWidthStyle,
        ]);
      }
      // 失败
      return StyleSheet.flatten([styles.failOutlineBorder, borderWidthStyle]);
    } else if (props.fill === Fill.weak) {
      // 极弱样式按钮
      if (!props.disabled) {
        // 基本样式
        return StyleSheet.flatten([styles.defaultWeakBorder, borderWidthStyle]);
      }
      if (props.disabledType === DisabledType.unactive) {
        // 未激活
        return StyleSheet.flatten([
          styles.unactiveOutlineBorder,
          borderWidthStyle,
        ]);
      }
      // 失败
      return StyleSheet.flatten([styles.failOutlineBorder, borderWidthStyle]);
    }
    // 强按钮
    return styles.noBorder;
  };

  const getWrapperBackground = () => {
    if (isTextType) {
      return {};
    }
    if (props.fill === Fill.danger) {
      return styles.dangerBackground;
    }
    if (props.disabled) {
      return styles.disableBackground;
    }
    // 弱按钮背景色为white
    // 强按钮背景色分为：基本样式、未激活、失败
    if (props.fill === Fill.solid) {
      // 强按钮
      // 基本样式
      if (!props.disabled) {
        return styles.defaultBackground;
      }
      // 未激活
      if (props.disabledType === DisabledType.unactive) {
        return styles.solidUnactiveBackground;
      }
      // 失败
      return styles.solidFailBackground;
    }

    // outline按钮和弱按钮
    return styles.outlineBackground;
  };

  const getWrapperOpacity = () => {
    // if (props.loading) {
    //   return styles.loadingOpacity;
    // }
    return styles.notLoadingOpacity;
  };

  const getTextStyleBySize = () => {
    switch (props.size) {
      case Size.mini:
        return styles.miniFont;
      case Size.small:
        return styles.smallFont;
      case Size.large:
        return styles.largeFont;
      default:
        return styles.middleFont;
    }
  };

  const getTextColor = () => {
    if (isTextType) {
      if (props.disabled) {
        return styles.disableTextColor;
      }
      const colorMap = {
        [TextType.default]: styles.textDefaultColor,
        [TextType.primary]: styles.textPrimaryColor,
        [TextType.danger]: styles.textDangerColor,
      };
      return colorMap[props.textType!];
    }
    if (props.disabled) {
      return styles.disableTextColor;
    }

    if (props.fill === Fill.dashed) {
      return styles.textDefaultColor;
    }

    // 强按钮字体颜色为white
    // 弱按钮分为：基本样式、未激活、失败
    if (props.fill === Fill.outline) {
      if (!props.disabled) {
        return styles.outlineBaseFontColor;
      }
      // 未激活
      if (props.disabledType === DisabledType.unactive) {
        return styles.outlineUnactiveFontColor;
      }
      // 失败
      return styles.outlineFailFontColor;
    } else if (props.fill === Fill.weak) {
      if (!props.disabled) {
        return styles.weakBaseFontColor;
      }
      // 未激活
      if (props.disabledType === DisabledType.unactive) {
        return styles.outlineUnactiveFontColor;
      }
      // 失败
      return styles.outlineFailFontColor;
    }
    // 强按钮
    return styles.defaultFontColor;
  };

  const getLoadingType = (): LoadingType2 => {
    if (props.loading) {
      return 'dot';
    }
    return 'default';
  };

  const getLoadingColor = () => {
    if (props.fill === Fill.danger || props.fill === Fill.solid) {
      return token['--color-gray-1'];
    }
    if (isTextType) {
      return token['--color-primary-6'];
    }
    return token['--color-gray-9'];
  };

  const handlePress: TextProps['onPress'] = (e) => {
    // 按钮禁用、loading或者onPress不是一个function，则中断执行
    if (props.disabled || props.loading || !isFunction(props.onPress)) {
      return;
    }
    props.onPress(e);
  };

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));

  const isIconLeft = props.iconPosition === IconPosition.left;

  return (
    <TouchableOpacity
      accessibilityLabel={props.accessibilityLabel}
      style={StyleSheet.flatten([
        styles.wrapper,
        getWrapperStyleByShape(),
        getWrapperStyleBySize(),
        getWrapperBorder(),
        getWrapperBackground(),
        getWrapperOpacity(),
        getBlockStyle(),
        props.style,
        {
          flexDirection: isIconLeft ? 'row' : 'row-reverse',
        },
      ])}
      onPress={handlePress}
      disabled={props.loading || props.disabled}
    >
      {/* 非loading状态 */}
      <ShouldRender condition={!props.loading}>
        {/* icon为string类型 */}
        <ShouldRender condition={isString(props.icon) && !isNil(props.icon)}>
          <IconMASuccess1
            size={getTextStyleBySize().fontSize}
            fillColor={getTextColor().color}
            style={StyleSheet.flatten([
              styles.icon,
              props.iconStyle,
              {
                marginLeft: isIconLeft ? 0 : 6,
                marginRight: isIconLeft ? 6 : 0,
              },
            ])}
          />
        </ShouldRender>
        {/* icon为ReactNode类型 */}
        <ShouldRender condition={isValidElement(props.icon)}>
          {props.icon}
        </ShouldRender>
      </ShouldRender>

      {/* 是loading状态 */}
      <ShouldRender condition={!!props.loading}>
        <Loading
          name="loading-xt"
          width={32}
          height={6}
          loadingType={getLoadingType()}
          colorFilters={[{ keypath: 'circle', color: getLoadingColor() }]}
        />
      </ShouldRender>

      <ShouldRender condition={!props.loading}>
        <View>
          <Text
            numberOfLines={1}
            style={StyleSheet.flatten([
              styles.text,
              getTextStyleBySize(),
              getTextColor(),
              props.textStyle,
            ])}
          >
            {props.children}
          </Text>
          <ShouldRender condition={props.fill === Fill.link}>
            <View
              style={{
                position: 'relative',
                left: 0,
                top: -1,
                height: token['--border-1'],
                backgroundColor: getTextColor()?.color,
              }}
            />
          </ShouldRender>
        </View>
      </ShouldRender>
    </TouchableOpacity>
  );
};

export default forwardRef(Button);
