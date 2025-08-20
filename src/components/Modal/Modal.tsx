import React, { ComponentType, useEffect, useState, useMemo } from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Platform,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { isNil } from 'lodash';
import {
  IconXSuccessprompt1,
  IconXFailureprompt1,
  IconXAbnormalprompt1,
  IconXReminderreminder1,
  IconXRide1,
  IconMAClose1,
} from '../../icons/index';
import { Dialog } from '../../core';
import { renderTextLikeJSX } from '../../core/helpers';
import { ShouldRender } from '@xrnjs/ui';
import { useKeyboard } from '../../utils';
import ModalFooter from './ModalFooter';
import { ModalProps, StatusType } from './interface';
import { useLocale } from '../Locale/locale';
import createStyle from './styles/modal.style';
import { useTheme } from '../Theme/Theme';
import Image from '../Image';

type Icon = ComponentType<{
  color?: string;
  size?: string | number;
  fillColor?: string;
}>;

const IconUrlMap: { [key: string]: Icon } = {
  success: IconXSuccessprompt1,
  error: IconXFailureprompt1,
  warning: IconXAbnormalprompt1,
  info: IconXReminderreminder1,
};
const rnRenderIcon = (status: StatusType) => {
  const IconComponent = IconUrlMap[status];
  if (!IconComponent) return null;
  return <IconComponent size={64} />;
};

const Modal: React.FC<ModalProps> = (props) => {
  const locale = useLocale().Dialog;
  const token = useTheme();
  const styles = createStyle(token);

  const {
    visible: propsVisible,
    status,
    statusStyle,
    style,
    content,
    contentStyle,
    title,
    titleStyle,
    message,
    messageStyle,
    extraNode,
    extraNodeStyle,

    footer,
    showConfirmButton = true,
    confirmButtonText,
    confirmButtonLoading,
    confirmButtonProps,
    onPressConfirm,

    showCancelButton,
    cancelButtonText,
    cancelButtonLoading,
    cancelButtonProps,
    onPressCancel,
    actions,

    imgSource,
    imgSize = 'middle',
    solidButton,
    buttonsDirection = 'row',

    marketingHeight,
    isMarketingModal,

    onClose,
    closeIcon,
    ...restProps
  } = props;
  const [visible, setVisible] = useState(false);
  const [isOverflow, setIsOverflow] = useState<boolean>(false); // 内容是否超出最大高度

  //监听键盘弹起，并获取键盘高度
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  useKeyboard(
    (e) => setKeyboardHeight(e.endCoordinates.height as number),
    () => setKeyboardHeight(0)
  );
  const keyboardStyle = useMemo<ViewStyle>(() => {
    return Platform.OS === 'ios'
      ? {
          position: 'absolute',
          bottom: keyboardHeight + 10,
        }
      : {};
  }, [keyboardHeight]);

  useEffect(() => {
    setVisible(propsVisible || false);
  }, [propsVisible]);

  const titleJSX = renderTextLikeJSX(
    title,
    StyleSheet.flatten([styles.titleText, titleStyle])
  );
  const messageJSX = renderTextLikeJSX(
    message,
    StyleSheet.flatten([
      styles.messageText,
      messageStyle,
      isOverflow && styles.messageTextOverflow,
    ])
  );

  const footerProps = {
    showConfirmButton,
    showCancelButton,
    confirmButtonProps: {
      key: 'confirm',
      text: confirmButtonText ?? locale.confirmButtonText,
      onPress: onPressConfirm,
      color: '#ff7a00',
      loading: confirmButtonLoading,
      ...confirmButtonProps,
    },
    cancelButtonProps: {
      key: 'cancel',
      text: cancelButtonText ?? locale.cancelButtonText,
      onPress: onPressCancel,
      cancelButtonLoading,
      ...cancelButtonProps,
    },
    actions,
    solidButton: solidButton || (solidButton !== false && !!imgSource),
    buttonsDirection,
  };

  const imgStyle = {
    small: styles.imgSmall,
    middle: styles.imgMiddle,
    large: styles.imgLarge,
  }[imgSize];

  const modalWidth = Dimensions.get('window').width - 55;
  const maxHeight = Dimensions.get('window').height * 0.7;

  const onContentSizeChange = (_: number, height: number) => {
    setIsOverflow(height >= maxHeight - 1);
  };

  const height = marketingHeight ? modalWidth * (4 / 3) : 'auto';

  return (
    <Dialog.Component
      width={modalWidth}
      style={StyleSheet.flatten([
        styles.container,
        {
          maxHeight,
          height,
          ...(!marketingHeight ? { overflow: 'hidden' } : {}),
        },
        keyboardHeight > 0 && keyboardStyle,
        style,
      ])}
      visible={visible}
      {...restProps}
      showCancelButton={false}
      showConfirmButton={false}
      overlayStyle={styles.overlayStyle}
      duration={120}
    >
      <ScrollView
        scrollEnabled={false}
        onContentSizeChange={onContentSizeChange}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={StyleSheet.flatten([
            styles.scroll,
            imgSize === 'large' && styles.noTopScroll,
            { maxHeight, height },
          ])}
        >
          <ShouldRender condition={!!imgSource}>
            <Image style={imgStyle} source={imgSource as ImageSourcePropType} />
          </ShouldRender>

          <ShouldRender condition={!!status}>
            <View style={StyleSheet.flatten([styles.statusStyle, statusStyle])}>
              {rnRenderIcon(status as StatusType)}
            </View>
          </ShouldRender>

          <ShouldRender condition={!!content}>{content}</ShouldRender>
          <ShouldRender condition={!content}>
            <View
              style={StyleSheet.flatten([
                styles.content,
                !isNil(imgSource) && styles.imgContent,
                contentStyle,
              ])}
            >
              {titleJSX}
              <ShouldRender condition={!!message}>
                <ScrollView
                  scrollEnabled={isOverflow}
                  style={styles.messageWrapper}
                  keyboardShouldPersistTaps="handled"
                >
                  {messageJSX}
                </ScrollView>
                <ShouldRender condition={isOverflow}>
                  <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    colors={[
                      'rgba(255, 255, 255, 0.7)',
                      'rgba(255, 255, 255, 0.2)',
                    ]}
                    locations={[0.2, 0.8]}
                    style={styles.linear}
                  />
                </ShouldRender>
              </ShouldRender>
              <ShouldRender condition={!!extraNode}>
                <View style={extraNodeStyle}>{extraNode}</View>
              </ShouldRender>
            </View>
          </ShouldRender>

          <ShouldRender condition={!!footer || footer === null}>
            {footer}
          </ShouldRender>
          <ShouldRender condition={!footer && footer !== null}>
            <ModalFooter {...footerProps} />
          </ShouldRender>
        </View>
      </ScrollView>

      <ShouldRender condition={!!onClose}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View
            style={
              isMarketingModal ? styles.marketingCloseIcon : styles.closeIcon
            }
          >
            <ShouldRender condition={!closeIcon}>
              <View>
                {imgSize === 'large' ? (
                  <IconXRide1 fillColor={token['--color-gray-1']} size={16} />
                ) : isMarketingModal ? (
                  <IconMAClose1 fillColor={token['--color-gray-1']} size={24} />
                ) : (
                  <IconXRide1 fillColor={token['--color-gray-9']} size={16} />
                )}
              </View>
            </ShouldRender>
            <ShouldRender condition={!!closeIcon}>{closeIcon}</ShouldRender>
          </View>
        </TouchableWithoutFeedback>
      </ShouldRender>
    </Dialog.Component>
  );
};

export default Modal;
