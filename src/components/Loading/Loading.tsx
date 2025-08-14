/* eslint-disable react-native/no-inline-styles */
import React, {
  useRef,
  useEffect,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  ReactNode,
} from 'react';
import {
  Animated,
  Easing,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';

import { Size } from '../Icon/interface';
import { mergeProps } from '../../core/helpers';
import LottieView from 'lottie-react-native';
import {
  IconMABloading1,
  IconMAForward1,
  IconMAWloading1,
} from '../../icons/index';

import styles from './styles/loading.style';
import { useLocale } from '../Locale/locale';
import { useTheme } from '../Theme/Theme';
import { useMemoizedFn } from 'ahooks';

const IconTypeEnum: { [key: string]: any } = {
  'loading': IconMABloading1,
  'loading-white': IconMAWloading1,
  'loading-dot': IconMAForward1,
  'loading-line': IconMAForward1,
  'loading-o': IconMAForward1,
  'loading-xt': IconMABloading1,
  'transparent': IconMABloading1,
};

const IconSizeEnum: { [key: string]: number } = {
  mini: Size.Size12,
  small: Size.Size16,
  middle: Size.Size32,
  large: Size.Size48,
};

enum LoadingTypeEnum {
  'loading' = 'loading',
  'loading-white' = 'loading-white',
  'loading-dot' = 'loading-dot',
  'loading-line' = 'loading-line',
  'loading-o' = 'loading-o',
  'loading-xt' = 'loading-xt',
  'transparent' = 'transparent',
}

export type LoadingType =
  | 'loading'
  | 'loading-white'
  | 'loading-dot'
  | 'loading-line'
  | 'loading-o'
  | 'loading-xt'
  | 'transparent';

export type LoadingType2 =
  | 'dot'
  | 'circle'
  | 'goldCoin'
  | 'whiteCoin'
  | 'default';

export interface LoadingProps {
  /**
   * name="loading-xt"展示预设Lottie动画，否则展示自定义动画
   * @default 'loading-xt'
  | 'loading-white'
  | 'loading-dot'
  | 'loading-line'
  | 'loading-o'
  | 'loading-xt';
   * */
  name?: LoadingType;

  /** 要填充的颜色，目前只针对单色svg生效 */
  fill?: string;

  /**
   * icon宽度和高度<br />枚举值Size或者传入number类型或者枚举值控制
   * @default Size.Size20
   * */
  size?: Size | number | 'mini' | 'small' | 'middle' | 'large';

  /**
   * 动画宽度
   */
  width?: number;

  /**
   * 动画高度
   */
  height?: number;

  /** loading icon父容器自定义的样式属性  */
  style?: StyleProp<ViewStyle>;

  /** 文案显示隐藏,默认不显示tip
   */
  tipDisable?: Boolean;

  /** 有子元素时，是否显示loading，默认显示
   * @default true
   */
  loading?: boolean;

  /**
   * 提示内容
   */
  tip?: ReactNode;

  /**
   * 子元素
   */
  children?: ReactNode;

  /**
   * 预设的Lottie动画类型
   * @default 'goldCoin'
   */
  loadingType?: LoadingType2;

  /**
   * 颜色覆盖，用来主题色替换
   */
  colorFilters?: { keypath: string; color: string }[];
}

const LoadingSourceMap: Record<LoadingType2, any> = {
  circle: require('./consts/Circle.json'),
  dot: require('./consts/Dot.json'),
  goldCoin: require('./consts/GoldCoin.json'),
  whiteCoin: require('./consts/WhiteCoin.json'),
  default: require('./consts/LoadingAnimation.json'),
};

const defaultProps: LoadingProps = {
  name: 'loading-xt',
  size: Size.Size20,
  tip: <></>,
  tipDisable: false,
  loadingType: 'goldCoin',
  colorFilters: [],
  loading: true,
};

export interface LoadingRef {}

const Loading: ForwardRefRenderFunction<LoadingRef, LoadingProps> = (
  p,
  ref
) => {
  const { loadingText } = useLocale().Loading;
  const token = useTheme();

  if (p.tipDisable) {
    switch (p.name) {
      case LoadingTypeEnum['loading-white']:
        defaultProps.tip = (
          <Text style={{ color: 'white', marginLeft: 5 }}>{loadingText}</Text>
        );
        break;
      case LoadingTypeEnum['loading-xt']:
        defaultProps.tip = (
          <Text style={{ color: 'white', marginLeft: 5, marginTop: 10 }}>
            {loadingText}
          </Text>
        );
        break;
      default:
        defaultProps.tip = (
          <Text style={{ color: '#666666', marginLeft: 5 }}>{loadingText}</Text>
        );
        break;
    }
  }

  const props: LoadingProps = mergeProps(defaultProps, p);
  const spinAnim = useRef(new Animated.Value(0)).current;

  const startSpin = () => {
    spinAnim.setValue(0);
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 1200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startSpin());
  };

  useEffect(() => {
    startSpin();
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // 预留向外界暴露的对象
  useImperativeHandle(ref, () => ({}));
  const IconComponent = IconTypeEnum[props.name!];

  const renderLoading = () => {
    const { size } = props;
    const iSize = ['mini', 'small', 'middle', 'large'].includes(size as string)
      ? IconSizeEnum[size as string]
      : (size as unknown as number);
    if (LoadingTypeEnum['loading-xt'] === props.name) {
      const colorFilters = props.colorFilters?.length
        ? props.colorFilters
        : [
            {
              keypath: 'circle',
              color: token['--color-primary-6'],
            },
          ];

      return (
        <React.Fragment>
          <LottieView
            source={LoadingSourceMap[props.loadingType!]}
            autoPlay
            loop
            style={{
              height: props.height || iSize,
              width: props.width || iSize,
            }}
            colorFilters={colorFilters}
          />
        </React.Fragment>
      );
    }

    return (
      <Animated.View
        style={StyleSheet.flatten([{ transform: [{ rotate: spin }] }])}
      >
        <IconComponent fillColor={props.fill} size={iSize} />
      </Animated.View>
    );
  };

  const dynamicStyle = props.tipDisable ? styles.wrapper : styles.wrapper_tip;

  const loadingComponent = useMemoizedFn((style = {}) => {
    return (
      <View style={StyleSheet.flatten([dynamicStyle, style, props.style])}>
        {props.name !== 'transparent' && (
          <>
            {renderLoading()}
            {props.tipDisable && <View>{props.tip}</View>}
          </>
        )}
      </View>
    );
  });

  if (!props.children) {
    return loadingComponent();
  }

  const opacity = props.loading && props.name !== 'transparent' ? 0.5 : 1;

  return (
    <View style={styles.loading_wrapper}>
      <View
        style={{
          opacity,
        }}
      >
        {props.children}
      </View>
      {props.loading && loadingComponent(styles.loading_continer)}
    </View>
  );
};

export default forwardRef(Loading);
