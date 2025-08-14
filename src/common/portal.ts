import { useState, useEffect, useCallback, useMemo } from 'react';
import { Modal } from 'react-native';
import Portal from '../core/portal';

interface PortalProto {
  visible?: boolean;
  useNative?: boolean;
  statusBarTranslucent?: boolean;
  onClosed?: () => void;
  onClose?: () => void;
  onRequestClose?: () => boolean;
}

export const usePortal = (props: PortalProto) => {
  // Modal 有两种原生问题，默认使用 View 模拟 Modal，这种模式下
  // 设置了 statusBarTranslucent 在安卓上会导致键盘遮挡输入框的情况
  const {
    useNative = true,
    statusBarTranslucent = false,
    onRequestClose,
  } = props;
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    if (props.visible) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  const onClosed = useCallback(
    (e?: any) => {
      if (onRequestClose && onRequestClose() === false) {
        return false;
      }
      setVisible(false);
      !!e?.nativeEvent && props.onClose?.();
      props.onClosed?.();
      return true;
    },
    [setVisible, props.onClosed, props.onClose]
  );

  const Component = useMemo(() => (useNative ? Modal : Portal), [useNative]);

  return {
    useNative,
    Component,
    visible,
    statusBarTranslucent,
    onClosed,
  };
};
