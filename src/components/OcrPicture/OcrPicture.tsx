import React, {
  ForwardRefRenderFunction,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react';
import { TouchableOpacity, View } from 'react-native';
import { IconXScan1 } from '../../icons/index';
import Input from '../Input/index';
import { OcrPictureProps, OcrPictureRef } from './interface';
import { useTheme } from '../Theme/Theme';
import { createStyles } from './styles/ocrPicture.style';
import Mask from '../Mask';
import OcrCamera from './OcrCamera';
import { Camera } from 'react-native-vision-camera';
import Toast from '../Toast';
import { useLocale } from '../Locale/locale';

const OcrPicture: ForwardRefRenderFunction<OcrPictureRef, OcrPictureProps> = (
  props,
  ref
) => {
  const { inputProps, enableInput = false, ...rest } = props;
  const [showMask, setShowMask] = useState(false);
  const [inputLoading, setInputLoading] = useState(false);
  const locale = useLocale().OcrPicture;

  const token = useTheme();
  const styles = createStyles(token);

  const handleScanPress = async () => {
    const status = await Camera.requestCameraPermission();
    if (status === 'granted') {
      setShowMask(true);
    } else {
      Toast.warn(locale.openCameraAuthority);
    }
  };

  const handleCloseMask = () => {
    setShowMask(false);
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      return handleScanPress();
    },
    close: () => {
      handleCloseMask();
    },
  }));

  return (
    <View>
      {enableInput && (
        <Input
          {...inputProps}
          loading={inputLoading}
          disabled={inputLoading}
          suffix={
            <TouchableOpacity onPress={handleScanPress}>
              <IconXScan1 size={16} />
            </TouchableOpacity>
          }
        />
      )}
      <Mask visible={showMask} onBackdropPress={() => setShowMask(false)}>
        <View style={styles.maskblock}>
          <OcrCamera
            onClose={handleCloseMask}
            {...rest}
            onLoading={setInputLoading}
          />
        </View>
      </Mask>
    </View>
  );
};

export default forwardRef(OcrPicture);
