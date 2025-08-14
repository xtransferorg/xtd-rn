import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  NotificationProps,
  NotificationRef,
  NotificationStatus,
} from './interface';
import {
  IconXRemind2,
  IconXSuccess2,
  IconXWarn2,
  IconXError2,
  IconXClosesmall1,
} from '../../icons/index';
import { ShouldRender } from '@xrnjs/ui';
import { renderTextLikeJSX } from '../../core/helpers';
import createStyle from './styles/notification.style';
import { useTheme } from '../Theme';

const TypeIconMap: Record<NotificationStatus, any> = {
  success: IconXSuccess2,
  error: IconXError2,
  warning: IconXWarn2,
  info: IconXRemind2,
};

const Notification: ForwardRefRenderFunction<
  NotificationRef,
  NotificationProps
> = (props, ref) => {
  const {
    showIcon = true,
    duration = 5000,
    title,
    titleStyle,
    titleProps,

    description,
    descriptionStyle,
    descriptionProps,
    btn,
    offset,
    onSolidPress,
    onWeakPress,
    onRequestClose,
    onClose,
    onClosed,
  } = props;
  const { top } = useSafeAreaInsets();
  const _top = useMemo(() => (top || 10) + (offset || 0), [top, offset]);
  const token = useTheme();
  const styles = createStyle(token);
  const IconComponent = TypeIconMap[props.status];
  const timer = useRef<any>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [visible, setVisible] = useState<boolean>();

  const onInnerClose = useCallback(
    (finishedCallback?: () => void) => {
      clearTimeout(timer.current);
      onClose?.();
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished) {
          setVisible(false);
          onClosed?.();
          finishedCallback?.();
        }
      });
    },
    [timer.current, setVisible]
  );

  const onCancel = useCallback(async () => {
    await onWeakPress?.();
    onInnerClose();
  }, [onInnerClose, onSolidPress]);

  useEffect(() => {
    setVisible(props.visible);
    if (props.visible) {
      Animated.spring(fadeAnim, {
        toValue: _top,
        useNativeDriver: false,
      }).start();
      if (duration > 0) {
        timer.current = setTimeout(onCancel, duration);
      }
    }
  }, [props.visible, duration, top]);

  useImperativeHandle(ref, () => ({
    close: onInnerClose,
  }));

  return (
    <Modal transparent visible={visible} onRequestClose={onRequestClose}>
      <Animated.View
        style={StyleSheet.flatten([
          styles.container,
          {
            top: fadeAnim,
            opacity: fadeAnim.interpolate({
              inputRange: [0, _top],
              outputRange: [0, 1],
            }),
          },
        ])}
      >
        <View style={StyleSheet.flatten([styles.message])}>
          <ShouldRender condition={showIcon}>
            <View style={StyleSheet.flatten([styles.typeIcon])}>
              <IconComponent />
            </View>
          </ShouldRender>
          <View style={styles.center}>
            {renderTextLikeJSX(
              title,
              [StyleSheet.flatten([styles.title, titleStyle])],
              { numberOfLines: 2, ellipsizeMode: 'tail', ...titleProps }
            )}
            {renderTextLikeJSX(
              description,
              [StyleSheet.flatten([styles.description, descriptionStyle])],
              { numberOfLines: 3, ellipsizeMode: 'tail', ...descriptionProps }
            )}
          </View>

          <TouchableOpacity
            onPress={onCancel}
            style={StyleSheet.flatten([styles.close])}
          >
            <IconXClosesmall1
              size={token['--font-size-3']}
              color={token['--color-text-5']}
              fillColor={token['--color-text-5']}
            />
          </TouchableOpacity>
        </View>

        <ShouldRender condition={!!btn}>
          <View style={StyleSheet.flatten([styles.customBtn])}>{btn}</View>
        </ShouldRender>
      </Animated.View>
    </Modal>
  );
};

export default forwardRef(Notification);
