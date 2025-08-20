import { Text, View, TouchableOpacity, ViewStyle } from 'react-native';
import {
  IconXClosesmall1,
  IconXAlbum1,
  IconXFlashlight1,
  IconXFlashlightopen1,
  IconXPicbutton1,
} from '../../icons/index';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { useLocale } from '../Locale/locale';
import { useTheme } from '../Theme/Theme';
import { createStyles } from './styles/ocrCamera.style';
import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';

import RadiusView from './RadiusView';
import DashLine from './dashLine';
import {
  IOcrCameraProps,
  OcrPictureOption,
  OcrPictureDirection,
} from './interface';
import { launchImageLibrary } from 'react-native-image-picker';
import { debounce } from 'lodash';
import { getFileInfo } from './utils';
import Toast from '../Toast';

const OcrCamera = (props: IOcrCameraProps) => {
  const {
    onClose,
    onScan,
    direction = OcrPictureDirection.Horizontal,
    timeout,
    onSuccess,
    onError,
    onLoading,
    tip,
  } = props;
  const device = useCameraDevice('back');
  const cameraRef = useRef<Camera>(null);
  const token = useTheme();
  const locale = useLocale().OcrPicture;
  const styles = createStyles(token, direction);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(true);

  const callWithTimeout = useCallback(
    (
      fn: (option: OcrPictureOption) => Promise<string | undefined>,
      option: OcrPictureOption,
      timeout?: number
    ): Promise<string | undefined> => {
      return new Promise((resolve, reject) => {
        let timeoutId: NodeJS.Timeout | undefined;

        if (timeout) {
          timeoutId = setTimeout(() => {
            reject(new Error(`call api Timeout in ${timeout}ms`));
          }, timeout);
        }

        onLoading(true);
        fn(option)
          .then((result) => {
            timeoutId && clearTimeout(timeoutId);
            resolve(result);
          })
          .catch((error) => {
            timeoutId && clearTimeout(timeoutId);
            reject(error);
          })
          .finally(() => {
            onLoading(false);
          });
      });
    },
    [onLoading]
  );

  const turnOffLight = useCallback(() => {
    setIsFlashOn(false);
  }, []);

  // 拍照缺少fileSize和type
  const takePicture = useCallback(
    debounce(async () => {
      if (!cameraRef.current) {
        onClose();
        onError?.(new Error('Camera not initialized'));
        return;
      }
      try {
        const data = await cameraRef.current.takePhoto({
          flash: isFlashOn ? 'on' : 'off',
        });
        setIsCameraActive(false);
        turnOffLight();
        onClose();
        // 兼容 OcrPictureOption 结构
        let fileInfo = { fileSize: 0, type: '' };
        try {
          fileInfo = await getFileInfo(data.path);
        } catch (e) {
          // ignore
        }
        const ocrOption: OcrPictureOption = {
          uri: data.path,
          width: data.width,
          height: data.height,
          ...fileInfo,
        };
        const result = await callWithTimeout(onScan, ocrOption, timeout);
        onSuccess(result);
      } catch (err) {
        onError(err instanceof Error ? err : new Error(String(err)));
      }
    }, 300),
    [callWithTimeout, onClose, onScan, timeout, turnOffLight, isFlashOn]
  );

  const toggleFlash = useCallback(() => {
    setIsFlashOn((prev) => !prev);
  }, []);

  const handleAlbumPress = useCallback(
    debounce(async () => {
      try {
        const res = await launchImageLibrary({
          selectionLimit: 1,
          mediaType: 'photo',
          quality: 1,
        });

        turnOffLight();
        if (res.didCancel) {
          throw new Error('User cancelled image picker');
        }

        onClose();
        if (res.errorCode) {
          throw new Error(res.errorCode);
        }

        const photo = res.assets?.[0];
        if (!photo) {
          throw new Error('No photo selected');
        }

        const result = await callWithTimeout(
          onScan,
          photo as OcrPictureOption,
          timeout
        );

        onSuccess(result);
      } catch (err) {
        onError(err instanceof Error ? err : new Error(String(err)));
      }
    }, 300),
    [callWithTimeout, onClose, onScan, timeout, turnOffLight]
  );

  const isVertical = useMemo(
    () => direction === OcrPictureDirection.Vertical,
    [direction]
  );

  const CameraContent = useMemo(() => {
    return (
      <View style={styles.rectWrap}>
        <View style={styles.maskOuter}>
          {/* 上部遮罩 */}
          <View style={[styles.maskInner]}>
            <View style={styles.closeBtn}>
              <TouchableOpacity onPress={onClose}>
                <IconXClosesmall1 fillColor="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.tipText}>{tip}</Text>
          </View>

          {/* 中间区域 */}
          <View style={styles.mid}>
            {/* 左侧遮罩 */}
            <View style={styles.leftMask} />
            {/* 扫描框容器 */}
            <View style={styles.scanContainer}>
              {/* 扫描框 */}
              <View style={styles.rect}>
                <RadiusView
                  style={[styles.corner, styles.lt] as ViewStyle}
                  fillColor={'rgba(24, 23, 33, 0.70)'}
                />
                <RadiusView
                  style={[styles.corner, styles.rt] as ViewStyle}
                  fillColor={'rgba(24, 23, 33, 0.70)'}
                />
                <RadiusView
                  style={[styles.corner, styles.lb] as ViewStyle}
                  fillColor={'rgba(24, 23, 33, 0.70)'}
                />
                <RadiusView
                  style={[styles.corner, styles.rb] as ViewStyle}
                  fillColor={'rgba(24, 23, 33, 0.70)'}
                />

                {/* 中间虚线 */}
                {isVertical ? <DashLine style={styles.dashline} /> : null}
              </View>
            </View>

            {/* 右侧遮罩 */}
            <View style={styles.rightMask} />
          </View>

          {/* 底部遮罩 */}
          <View style={[styles.maskInner, { flex: 1 }]}>
            <View style={styles.light}>
              <TouchableOpacity onPress={toggleFlash} style={styles.lightIcon}>
                {isFlashOn ? (
                  <IconXFlashlightopen1 color="#fff" />
                ) : (
                  <IconXFlashlight1 color="#fff" fillColor="transparent" />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleFlash}>
                <Text style={styles.lightText}>
                  {isFlashOn ? locale.tapDown : locale.tapLight}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.control}>
              <TouchableOpacity onPress={takePicture}>
                <IconXPicbutton1 size={68} fillColor="#fff" color="#fff" />
              </TouchableOpacity>
              <View style={styles.controlAlbum}>
                <TouchableOpacity onPress={handleAlbumPress}>
                  <IconXAlbum1 size={32} fillColor="#fff" color="#fff" />
                </TouchableOpacity>
                <Text style={styles.controlAlbumText}>{locale.album}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }, [styles, isFlashOn]);

  useEffect(() => {
    if (!device) {
      Toast.warn(locale.noDevice);
    }
  }, [device]);

  if (!device) {
    return CameraContent;
  }

  return (
    <View style={[styles.container]}>
      <Camera
        ref={cameraRef}
        style={[styles.camera]}
        device={device}
        isActive={isCameraActive}
        photo={true}
        enableZoomGesture={false}
        torch={isFlashOn ? 'on' : 'off'}
      />
      {CameraContent}
    </View>
  );
};

export default OcrCamera;
