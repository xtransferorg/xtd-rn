import React, { memo, useMemo } from 'react';
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ViewStyle,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../Theme/Theme';
import { PlacementType } from './enum';
import { RectangleProps } from './interface';
import RadiusView from './RadiusView';
import createStyles from './styles/reactangle.style';
import ArrowView from './ArrowView';
import { PlatformOS, useStatusBar } from '../../utils/index';

const Rectangle: React.FC<RectangleProps> = (props) => {
  const token = useTheme();
  const styles = createStyles(token);

  const {
    rect = { x: 0, y: 0, width: 0, height: 0 },
    arrow,
    arrowColor,
    mask,
    maskColor = token['--color-gray-9'],
    maskOpacity = 0.4,
    rectPadding = token['--spacing-1'],
    placement,
    step,
    onBackdropPress,
    onTargetPress,
    statusBarTranslucent,
  } = props;
  const { width = 0, height = 0 } = Dimensions.get('window') || {};
  const navHeight = PlatformOS.select({
    ios: 0,
    android: statusBarTranslucent ? StatusBar.currentHeight ?? 0 : 0,
    harmony: 0,
    default: 0,
  }) as number;
  const isOpenStatusBar = useStatusBar();

  const layoutDatas = useMemo(() => {
    const vX = rect.x - rectPadding;
    // 反之则未开启沉浸式状态栏，此时rect.y不包含状态栏高度
    const redressY = isOpenStatusBar ? 0 : navHeight;
    let vY = rect.y - rectPadding + redressY;
    const vW = rect.width + rectPadding * 2;
    const vH = rect.height + rectPadding * 2;
    vY = vY < height ? vY : 0; // 防止超出屏幕情况
    const borderTopValue = vY;
    const borderLeftValue = vX;
    const borderRightValue = width - vX - vW;
    // 显示在状态栏下方，整个Mask的高度为 视口高度 + 状态栏高度
    const borderBottomValue = height + navHeight - vY - vH;

    let isTop = placement === PlacementType.TOP || false;
    if (!placement && borderTopValue > borderBottomValue) {
      // 用户未设置&上部空间更大
      isTop = true;
    }
    const arrowHeight = 8;
    const arrowWidth = 16;
    const arrowSpace = arrowHeight + token['--spacing-2'];
    const topSpace = vY + vH;
    const arrowLeft = vX + (vW - arrowWidth) / 2;
    let arrowStyle: ViewStyle = {
      top: topSpace,
      left: arrowLeft,
      paddingTop: token['--spacing-2'],
    };
    let stepStyle: ViewStyle = { top: topSpace + arrowSpace - 1 };

    // 顶部
    if (isTop) {
      const bottomSpace = height - vY + navHeight;
      arrowStyle = {
        bottom: bottomSpace,
        left: arrowLeft,
        transform: [
          {
            rotateZ: '180deg',
          },
        ],
        paddingTop: token['--spacing-2'],
      };
      stepStyle = { bottom: bottomSpace + arrowSpace - 1 };
    }

    return {
      vW,
      vH,
      borderTopValue,
      borderLeftValue,
      borderRightValue,
      borderBottomValue,
      arrowStyle,
      stepStyle,
    };
  }, [rect, rectPadding, placement, navHeight, width, height, token]);

  const maskRender = () => {
    return mask ? (
      <>
        <TouchableWithoutFeedback onPress={onBackdropPress}>
          <View
            style={{
              height: layoutDatas.borderTopValue,
              opacity: maskOpacity,
              backgroundColor: maskColor,
            }}
          />
        </TouchableWithoutFeedback>

        <View style={styles.middle}>
          <TouchableWithoutFeedback onPress={onBackdropPress}>
            <View
              style={{
                width: layoutDatas.borderLeftValue,
                height: layoutDatas.vH,
                backgroundColor: maskColor,
                opacity: maskOpacity,
              }}
            />
          </TouchableWithoutFeedback>
          {/* 目标  */}
          <TouchableWithoutFeedback onPress={onTargetPress}>
            <View
              style={{
                width: layoutDatas.vW,
                height: layoutDatas.vH,
              }}
            >
              {/* 左上 */}
              <RadiusView fillColor={maskColor} fillOpacity={maskOpacity} />
              {/* 右上 */}
              <RadiusView
                fillColor={maskColor}
                style={styles.rightTop}
                fillOpacity={maskOpacity}
              />
              {/* 右下 */}
              <RadiusView
                fillColor={maskColor}
                style={styles.rightBottom}
                fillOpacity={maskOpacity}
              />
              {/* 左下 */}
              <RadiusView
                fillColor={maskColor}
                style={styles.leftBottom}
                fillOpacity={maskOpacity}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={onBackdropPress}>
            <View
              style={{
                width: layoutDatas.borderRightValue,
                height: layoutDatas.vH,
                backgroundColor: maskColor,
                opacity: maskOpacity,
              }}
            />
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback onPress={onBackdropPress}>
          <View
            style={{
              height: layoutDatas.borderBottomValue,
              backgroundColor: maskColor,
              opacity: maskOpacity,
            }}
          />
        </TouchableWithoutFeedback>
      </>
    ) : (
      <></>
    );
  };

  const stepRender = () => {
    return (
      <View style={StyleSheet.flatten([styles.step, layoutDatas.stepStyle])}>
        {/* 具体step */}
        {step}
      </View>
    );
  };

  const arrowRender = () => {
    return arrow ? (
      <ArrowView
        fillColor={arrowColor}
        fillOpacity={maskOpacity}
        style={StyleSheet.flatten([styles.arrow, layoutDatas.arrowStyle])}
      />
    ) : (
      <></>
    );
  };
  return (
    <View style={styles.wrapper} testID="tourContent">
      {maskRender()}
      {stepRender()}
      {arrowRender()}
    </View>
  );
};

export default memo(Rectangle);
