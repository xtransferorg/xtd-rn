import { IconMASuccess1, IconMAFail1, IconMAWarning1 } from '../../icons/index';
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  memo,
  ComponentType,
  isValidElement,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlexStyle,
} from 'react-native';
import type { ToastProps, ToastType, ToastMethods } from './interface';
import { Popup, Loading, useTheme, ShouldRender } from '@xrnjs/ui';
import createStyle from './styles/toast.style';

interface IconProps {
  color?: string;
  size?: string | number;
  fillColor?: string;
}
type Icon = ComponentType<IconProps>;
const IconUrlMap: { [key: string]: Icon } = {
  success: IconMASuccess1,
  fail: IconMAFail1,
  warn: IconMAWarning1,
};
const rnRenderIcon = (status?: ToastType, iconProps?: IconProps) => {
  if (!status) return null;
  const IconComponent = IconUrlMap[status];
  if (!IconComponent) return null;
  return <IconComponent {...iconProps} />;
};

const Toast = forwardRef<ToastMethods, ToastProps>(
  (
    {
      type = 'text',
      position = 'middle',
      message,
      overlay = false,
      forbidPress = false,
      closeOnPress = false,
      closeOnPressOverlay = false,
      duration = 2000,
      icon,
      onPressOverlay,
      useNative = true,
      ...reset
    },
    ref
  ) => {
    const token = useTheme();
    const styles = createStyle(token);

    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState(message);

    // 修正数据
    if (closeOnPress) {
      // 是否在点击后关闭
      // 是否禁止背景点击
      // 可以触发点击的地方正好被背景 View 挡住
      forbidPress = false;
    }

    /**
     * 点击遮罩层
     */
    const onPopupPressOverlay = () => {
      // 是否在点击遮罩层后关闭
      if (closeOnPressOverlay) {
        setShow(false);
      }
      // 点击遮罩回调方法
      if (overlay) {
        onPressOverlay && onPressOverlay();
      }
    };

    /**
     * 点击内容
     */
    const onPressContent = () => {
      // 是否在点击后关闭
      if (closeOnPress) {
        setShow(false);
      }
    };

    const renderIcon = () => {
      const hasIcon =
        icon || ['success', 'fail', 'warn', 'loading'].includes(type || '');

      if (hasIcon) {
        if (isValidElement(icon)) return icon;

        if (['success', 'fail', 'warn'].includes(type || '')) {
          return rnRenderIcon(type, { size: 44, fillColor: '#FFFFFF' });
        }

        if (type === 'loading') {
          return <Loading name={'loading-xt'} size={44} fill={'#FFFFFF'} />;
        }
      }

      return null;
    };

    useEffect(() => {
      setShow(true);

      let timer: ReturnType<typeof setTimeout>;

      if (duration !== 0) {
        timer = setTimeout(() => {
          // 隐藏弹窗
          setShow(false);
        }, duration);
      }

      return () => {
        clearTimeout(timer);
      };
    }, [duration]);

    // 向外暴露方法
    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          setShow(false);
        },
        setMessage: (s) => {
          setMsg(s);
        },
      }),
      []
    );

    return (
      <Popup
        {...reset}
        useNative={useNative}
        visible={show}
        overlay={overlay}
        onPressOverlay={onPopupPressOverlay}
      >
        <TouchableWithoutFeedback onPress={onPressContent}>
          <View
            style={StyleSheet.flatten([
              styles.toast,
              {
                justifyContent: {
                  top: 'flex-start',
                  bottom: 'flex-end',
                  middle: 'center',
                }?.[position] as FlexStyle['justifyContent'],
              },
            ])}
            pointerEvents={forbidPress ? undefined : 'box-none'}
            collapsable={false}
          >
            <View
              style={StyleSheet.flatten([
                styles.inner,
                type === 'text' ? styles.inner_type_text : null,
                overlay ? styles.inner_overlay : null,
              ])}
            >
              <ShouldRender condition={type !== 'text'}>
                <View style={styles.icon}>{renderIcon()}</View>
              </ShouldRender>

              <Text
                style={StyleSheet.flatten([
                  styles.text,
                  type === 'text' ? styles.text_top_0 : null,
                  overlay ? styles.text_overlay : null,
                ])}
                // numberOfLines={2} // 无需限制，实际业务无此场景
              >
                {msg}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Popup>
    );
  }
);

export default memo(Toast);
