import React, { memo } from 'react';

import { attachPropertiesToComponent } from '../helpers';

import type { PopupProps, PopupPageProps } from './interface';
import Popup from './popup';
import PopupHeader from './popup-header';
import PopupKeyboardShim from './popup-keyboard-shim';
import PopupPage from './popup-page';
import { varCreator, styleCreator } from './style';
import { usePortal } from '../../common/portal';
import { View, ViewProps } from 'react-native';
import { PlatformOS, useKeyboardDimensions } from '../../utils';

const AutoResizeView: React.FC<ViewProps & { enable?: boolean }> = ({
  enable = true,
  style,
  children,
}) => {
  const { height } = useKeyboardDimensions();

  let bottomStyle = {};
  if (enable && PlatformOS.isHarmony) {
    bottomStyle = { marginBottom: height };
  }
  return (
    <View pointerEvents="box-none" style={[{ flex: 1 }, bottomStyle, style]}>
      {children}
    </View>
  );
};

/**
 * Popup 弹出层
 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。
 */
const PopupContainer: React.FC<PopupProps> = (props) => {
  const { Component, visible, useNative, statusBarTranslucent, onClosed } =
    usePortal(props);
  const { autoResize = true } = props;

  return (
    <Component
      transparent
      visible={visible}
      onRequestClose={onClosed}
      statusBarTranslucent={statusBarTranslucent}
    >
      <AutoResizeView enable={autoResize}>
        <Popup useNative={useNative} {...props} onClosed={onClosed} />
      </AutoResizeView>
    </Component>
  );
};

const PopupPageContainer: React.FC<PopupPageProps> = (props) => {
  const { Component, visible, useNative, statusBarTranslucent, onClosed } =
    usePortal(props);

  const { autoResize = true } = props;

  return (
    <Component
      transparent
      visible={visible}
      onRequestClose={props.onClosed}
      statusBarTranslucent={statusBarTranslucent}
    >
      <AutoResizeView enable={autoResize}>
        <PopupPage useNative={useNative} {...props} onClosed={onClosed} />
      </AutoResizeView>
    </Component>
  );
};

export default attachPropertiesToComponent(memo(PopupContainer), {
  varCreator,
  styleCreator,
  PopupComponent: Popup,
  Header: PopupHeader,
  Page: PopupPageContainer,
  PageComponent: PopupPage,
  KeyboardShim: PopupKeyboardShim,
});
