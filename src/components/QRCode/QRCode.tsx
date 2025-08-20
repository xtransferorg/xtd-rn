import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import 'text-encoding';
import { View, TouchableOpacity } from 'react-native';
import { QRCodeProps, QRCodeSaveProps, SVGInstance } from './interface';
import QRCodeSVG from 'react-native-qrcode-svg';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import QRCodeStatus, { QRCodeStatusEnum } from './QRCodeStatus';
import createStyle from './style/qrcode.style';
import { useTheme } from '../Theme';
import RNFS from 'react-native-fs';
import Toast from '../Toast';
import ShouldRender from '../ShouldRender';
import ActionSheet from '../ActionSheet';
import { useLocale } from '../Locale/locale';
import { PhoneAuths } from '../Uploader/enum';
import { requestPermission } from './permissions';
import { PlatformOS } from '../../utils';

export interface QRCodeRef {}

const QRCode: ForwardRefRenderFunction<QRCodeRef, QRCodeProps> = (
  props,
  ref
) => {
  const {
    value = '',
    size = 160,
    bordered,
    shadow,
    status,
    statusRender,
    errorLevel,
    loadingText,
    scanSuccessText,
    expiredText,
    refreshText,
    onRefresh,
    onSave,
    saveActionProps = {} as QRCodeSaveProps,
    ...rest
  } = props;

  const statusProps = {
    status,
    statusRender,
    loadingText,
    scanSuccessText,
    expiredText,
    refreshText,
    onRefresh,
  };

  const locale = useLocale();
  const token = useTheme();
  const styles = createStyle(token);
  useImperativeHandle(ref, () => ({
    getRef: () => qrCodeRef.current,
  }));

  const qrCodeRef = useRef<SVGInstance>();

  if (!value) {
    return null;
  }

  const rectSize = { width: size, height: size };

  const {
    saveScucessText = locale.QRCode.saveSuccessText,
    actionText = locale.QRCode.saveText,
    cancelText = locale.QRCode.cancelText,
  } = saveActionProps;

  const doSave = async () => {
    if (!PlatformOS.isHarmony) {
      // 非鸿蒙平台需要获取权限
      const granted = await requestPermission(PhoneAuths.PhotoLibrary);
      if (!granted) {
        return;
      }
    }
    if (qrCodeRef.current) {
      qrCodeRef.current.toDataURL((data) => {
        const path = `${RNFS.CachesDirectoryPath}/qrcode.png`;
        RNFS.writeFile(path, data, 'base64')
          .then(() => {
            return CameraRoll.save(path, { type: 'photo' }).then(() => {
              Toast({ message: saveScucessText });
            });
          })
          .catch((error) => {
            console.error('error', error);
          });
      });
    }
  };

  const handleSaveQrCode = async () => {
    if (onSave) {
      return qrCodeRef.current && onSave(qrCodeRef.current);
    }
    ActionSheet.open({
      actions: [actionText],
      cancelText,
      onSelect: doSave,
    });
  };

  return (
    <View
      testID="qr-code"
      style={[
        styles.container,
        bordered && styles.withBorder,
        shadow && styles.withShadow,
      ]}
    >
      <View style={[rectSize]}>
        <ShouldRender
          condition={!!status && status !== QRCodeStatusEnum.active}
        >
          <View style={styles.statusOverlay}>
            <QRCodeStatus
              testID="qr-code-status"
              {...statusProps}
              status={status!}
            />
          </View>
        </ShouldRender>
        <View style={[styles.qrcode]}>
          <TouchableOpacity testID="qr-code-svg" onLongPress={handleSaveQrCode}>
            <QRCodeSVG
              value={value}
              size={size}
              {...{ ...rest, ecl: errorLevel }}
              getRef={(svgRef: SVGInstance) => (qrCodeRef.current = svgRef)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default forwardRef(QRCode);
