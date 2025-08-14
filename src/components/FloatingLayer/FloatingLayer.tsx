import { isNil } from 'lodash';
import React, {
  ForwardRefRenderFunction,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardManager } from 'react-native-keyboard-manager';
import Col from '../Col';
import TextButton from '../Modal/TextButton';
import Popup from '../Popup';
import Row from '../Row';
import ShouldRender from '../ShouldRender';
import { FloatingLayerProps, FloatingLayerRef } from './interface';
import createStyle from './styles/floatingLayer.style';
import { useTheme } from '../Theme';
import { PlatformOS, useMaxHeight } from '../../utils';
import { isValidElement } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FloatingLayer: ForwardRefRenderFunction<
  FloatingLayerRef,
  FloatingLayerProps
> = (
  {
    items,
    textButton,
    onPressTextButton,
    children,
    footer,
    footerStyle,
    containerStyle,
    contentStyle,
    title,
    titleStyle,
    description,
    headerStyle,
    showCancelButton,
    cancelButtonText,
    onCancel,
    cancelBtnIcon,
    showConfirmButton,
    confirmButtonText,
    onConfirm,
    cancelBtnStyle,
    confirmBtnStyle,
    cancelBtnContainerStyle,
    confirmBtnContainerStyle,
    showsVerticalScrollIndicator,
    cancelBtnIconProps,
    containerHeight: innerContainerHeight,
    onContentScroll,
    topExtra,
    headerExtra,
    scrollStyle,
    splitLine,
    keyboardMargin,
    visible,
    useNative = true,
    disableKeyboardManager = false,
    ...restProps
  },
  ref
) => {
  const [contentScrollTop, setContentScrollTop] = useState(true);
  const token = useTheme();
  const styles = createStyle(token);
  const maxHeight = useMaxHeight();
  const titleProps = {
    title,
    titleStyle,
    description,
    headerStyle: StyleSheet.flatten([styles.head, headerStyle]),
    showCancelButton,
    cancelButtonText,
    onCancel,
    cancelBtnIcon,
    showConfirmButton,
    confirmButtonText,
    onConfirm,
    cancelBtnStyle,
    confirmBtnStyle,
    cancelBtnContainerStyle,
    confirmBtnContainerStyle,
    cancelBtnIconProps,
  };

  const insets = useSafeAreaInsets();

  const renderItems = () => {
    if (!Array.isArray(items)) {
      return null;
    }
    const span = Math.max(24 / items?.length, 6);

    return (
      <Row gap={10} style={styles.itemRow}>
        {items?.map((item, index) => (
          <Col span={span} key={index} style={styles.itemCol}>
            {item}
          </Col>
        ))}
      </Row>
    );
  };

  const renderTextButton = () => {
    if (isNil(textButton)) {
      return null;
    }

    return (
      <View style={styles.textButton}>
        <TextButton
          color="#222"
          textStyle={styles.text}
          text={textButton}
          onPress={onPressTextButton}
        />
      </View>
    );
  };

  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  const onContentSizeChange = (_: number, height: number) => {
    // 需要加上键盘高度，否则搜索输入等存在遮挡问题
    if (height + keyboardHeight > maxHeight) {
      setIsOverflow(true);
    }
    setContainerHeight(Math.min(height, maxHeight));
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      nativeEvent: {
        contentOffset: { y },
      },
    } = event;
    if (y === 0) {
      setContentScrollTop(true);
    } else {
      setContentScrollTop(false);
    }
    onContentScroll?.(event);
  };

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      getContainerHeight: () => containerHeight,
    };
  });

  useEffect(() => {
    const needKeyboardMarginHarmony = PlatformOS.isHarmony && useNative;
    const handleKeyboardWillShow = (e: any) => {
      setKeyboardHeight(e.endCoordinates.height - insets.bottom);
    };
    const handleKeyboardWillHide = () => setKeyboardHeight(0);
    const keyboardWillShow = Keyboard.addListener(
      needKeyboardMarginHarmony ? 'keyboardDidShow' : 'keyboardWillShow',
      handleKeyboardWillShow
    );
    const keyboardWillHide = Keyboard.addListener(
      needKeyboardMarginHarmony ? 'keyboardDidHide' : 'keyboardWillHide',
      handleKeyboardWillHide
    );
    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, [useNative]);

  useEffect(() => {
    const enable = Platform.OS === 'ios' && disableKeyboardManager;
    if (enable) {
      KeyboardManager.setEnable(false);
    }
    return () => {
      if (enable) {
        KeyboardManager.setEnable(true);
      }
    };
  }, []);

  let marginBottom = 0;

  if (PlatformOS.isIos) {
    // marginBottom = keyboardMargin || 0;
    // 在业务不改动的情况下，处理iOS键盘bug，这个是兼容鸿蒙前的逻辑
    marginBottom = keyboardHeight ? keyboardMargin ?? keyboardHeight : 0;
  }

  return (
    <Popup
      position="bottom"
      round
      {...restProps}
      useNative={useNative}
      contentScrollTop={contentScrollTop}
      visible={visible}
    >
      <View
        style={{
          marginBottom,
        }}
      >
        <ShouldRender condition={isValidElement(topExtra)}>
          {topExtra}
        </ShouldRender>
        <ScrollView
          scrollEnabled={false}
          onContentSizeChange={onContentSizeChange}
          keyboardShouldPersistTaps="handled"
          style={StyleSheet.flatten([scrollStyle])}
        >
          <View
            style={StyleSheet.flatten([
              styles.wrapper,
              containerStyle,
              {
                ...((isOverflow || innerContainerHeight) && {
                  height: innerContainerHeight || containerHeight,
                }),
              },
            ])}
          >
            {renderItems()}
            {renderTextButton()}

            <ShouldRender condition={!!children}>
              <Popup.Header {...titleProps} />
              <ShouldRender condition={isValidElement(headerExtra)}>
                {headerExtra}
              </ShouldRender>
              <ScrollView
                scrollEnabled={isOverflow || !!innerContainerHeight}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                scrollEventThrottle={64}
                onScroll={onScroll}
              >
                <View style={[styles.main, contentStyle]}>{children}</View>
              </ScrollView>

              <ShouldRender condition={!!footer}>
                <View style={[styles.footer, footerStyle]}>
                  <ShouldRender condition={splitLine ?? isOverflow}>
                    <LinearGradient
                      start={{ x: 0, y: 1 }}
                      end={{ x: 0, y: 0 }}
                      colors={['rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0)']}
                      locations={[0.2, 0.8]}
                      style={styles.linear}
                    />
                  </ShouldRender>
                  {footer}
                </View>
              </ShouldRender>
            </ShouldRender>
          </View>
        </ScrollView>
      </View>
    </Popup>
  );
};

export default forwardRef(FloatingLayer);
