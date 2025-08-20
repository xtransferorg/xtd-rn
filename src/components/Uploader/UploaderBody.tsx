import React, {
  useState,
  useRef,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { useTheme } from '../Theme/Theme';
import {
  PhoneAuths,
  UploadFileTypes,
  UploadListTypes,
  UploadWays,
} from './enum';
import ImagePreview from './ImagePreview';
import { ImageInfo, UploaderBodyProps, UploaderRef } from './interface';
import { PreviewImageModal } from './PreviewImageModal';
import DocumentPicker from 'react-native-document-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { requestPermission, saveLeaveCacheTime } from './permission';
import { useLocale } from '../Locale/locale';
import {
  filePathOS,
  filePathOSDisplay,
  getMimeType,
  usePropsValue,
  waitResult,
} from './help';
import { useMeasure } from '../../utils';
import { ActionSheetOptions } from '../../core/action-sheet/interface';
import { useContentStyle } from './hooks/useContentStyle';
import UploadButton from './UploadButton';
import ShouldRender from '../ShouldRender';
import ActionSheet from '../ActionSheet';
import Space from '../Space';
import TextList from './TextList';
import { isArray, isFunction, isNumber } from 'lodash';
import Toast from '../Toast';

const UploaderBody: ForwardRefRenderFunction<UploaderRef, UploaderBodyProps> = (
  props,
  uploaderRef
) => {
  const { UploaderStyle: locale, Uploader: uploaderLocal } = useLocale();
  const {
    defaultValue = [],
    value,
    attachmentType = 'image',
    maxCount = 999,
    renderUploaderBtn = null,
    disabled = false,
    deleteIcon,
    showUploadBtn = true,
    onPreviewFile,
    onChange,
    onActionContainerClose,
    uploadFileType,
    useContainerWidth = false,
    containerStyle,
    actionSheetProps = {},
    tip,
    tipStyle,
    tipIcon,
    contentStyle: customerContentStyle,
    onUpload,
    containerSpacing = 20,
    onDisabledPress,
    imgQuality = 1,
    listType = UploadListTypes.PictureCard,
    onDownload,
    onRemove: cusOnRemove,
    beforeUpload,
    doUpload,
    onSuccess,
    onError,
    errorTip = uploaderLocal?.error,
    minSize,
    maxSize,
    maxSizeErrorTip = uploaderLocal?.maxSizeError,
    minSizeErrorTip = uploaderLocal?.minSizeError,
    subTip,
    subTipStyle,
    status: btnStatus,
  } = props;
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [fileList, setFileList] = usePropsValue({
    defaultValue,
    value,
    onChange,
  });

  const [ref, onLayout, layout] = useMeasure();
  const token = useTheme();
  const { useNative = true, beforeClose } = actionSheetProps;
  const beforeCloseResovleRef = useRef<any>(); // 原生蒙层关闭问题处理 actionSheet关闭带动整个蒙层消失
  const hiddenAction = ['overlay', 'cancel'];
  const isTextListType = listType === UploadListTypes.Text;
  const needUpload = isFunction(doUpload);
  const status: ImageInfo['status'] = needUpload ? 'isUploading' : undefined; // 新文件默认状态
  const actionSheetPropsNew: Omit<ActionSheetOptions, 'actions'> = useNative
    ? {
        ...actionSheetProps,
        useNative: actionSheetProps.useNative ?? useNative,
        beforeClose: (action, item, index) => {
          return new Promise((resolve) => {
            beforeCloseResovleRef.current = resolve;
            const bcRes = beforeClose?.(action, item, index);
            if (bcRes instanceof Promise) {
              bcRes.then((res) => {
                if (hiddenAction.includes(action)) {
                  resolve(res ?? true);
                }
              });
            } else {
              hiddenAction.includes(action) && resolve(true);
            }
          });
        },
      }
    : actionSheetProps;
  const contentStyle = useContentStyle({
    width: layout.width,
    space: token['--spacing-3'],
    useContainerWidth,
    attachmentType,
    containerSpacing,
  });

  const contentStyleFinal = {
    ...(!isTextListType && contentStyle),
    ...customerContentStyle,
  };

  const hiddenPreviewModal = () => {
    if (showImagePreview) {
      setShowImagePreview(false);
      setPreviewIndex(0);
    }
  };

  const pressUploaderBtn = () => {
    const actions = [];
    const camaraType = {
      name: locale?.cameraText,
      callback: () => {
        choose(UploadWays.Camera);
      },
    };
    const imageType = {
      name: locale?.photoText,
      callback: () => {
        choose(UploadWays.Image);
      },
    };
    const pdfType = {
      name: locale?.fileText,
      callback: () => {
        choose(UploadWays.File);
      },
    };

    if (uploadFileType?.includes(UploadFileTypes.Image)) {
      actions.push(camaraType);
      actions.push(imageType);
    }
    if (uploadFileType?.includes(UploadFileTypes.Pdf)) {
      actions.push(pdfType);
    }

    // 默认不传的话，显示三种类型
    if (!uploadFileType) {
      actions.push(camaraType);
      actions.push(imageType);
      actions.push(pdfType);
    }

    ActionSheet({
      ...actionSheetPropsNew,
      actions: actions,
      closeOnPressOverlay: true,
    }).catch(() => {});
  };

  /**
   * 上传
   * @param uploadFiles
   */
  const upload = (uploadFiles: ImageInfo[]) => {
    if (!isArray(uploadFiles) || uploadFiles.length < 1) return;
    // console.log('upload==== now=====', fileList.length);
    if (isFunction(doUpload)) {
      const uploadFilesIds: string[] = uploadFiles.map(
        (file) => file._fileId as string
      );
      doUpload(uploadFiles)
        .then((res) => {
          // console.log('before onSuccess', res, fileList);
          uploadFiles.forEach((file) => {
            if (uploadFilesIds.includes(file._fileId ?? '')) {
              file.status = 'done';
            }
          });

          setFileList((pre) => {
            const newFileList = [...pre];
            onSuccess?.(uploadFiles, newFileList, res);
            return newFileList;
          });
        })
        .catch(async (err) => {
          const retry = await waitResult(onError?.(uploadFiles, err) || false);

          if (retry === true) {
            // 重试上传
            return upload(uploadFiles);
          } else if (errorTip) {
            // 失败有提示
            Toast({
              message: errorTip,
              position: 'middle',
            });
          }

          // 去除上传失败的文件
          setFileList((pre) => {
            return (
              pre?.filter?.((file) => {
                return !uploadFilesIds.includes(file._fileId ?? '');
              }) || []
            );
          });
        });
    }
  };

  /**
   * 文件体积大小是否OK？
   * @param files
   */
  const fileSizeIsOK = (files: ImageInfo[]) => {
    if (
      isNumber(minSize) &&
      files.some((file) => (file?.fileSize ?? 0) < minSize)
    ) {
      Toast({
        message: minSizeErrorTip,
        position: 'middle',
      });
      return false;
    }

    if (
      isNumber(maxSize) &&
      files.some((file) => (file?.fileSize ?? 0) > maxSize)
    ) {
      Toast({
        message: maxSizeErrorTip,
        position: 'middle',
      });
      return false;
    }

    return true;
  };
  /**
   * 新文件添加
   * @param newFiles
   */
  const doAdd = async (newFiles: ImageInfo[]) => {
    if (!newFiles || newFiles.length < 1) {
      //新文件为空直接返回
      return;
    }

    if (!fileSizeIsOK(newFiles)) return;

    const allowUpload = await waitResult(beforeUpload?.(newFiles) || true);

    if (allowUpload === false) return; //不上传

    let uploadFiles = newFiles;
    if (isArray(allowUpload)) {
      uploadFiles = allowUpload;
    }

    setFileList((prev) => {
      return [...prev, ...uploadFiles];
    });

    upload(uploadFiles);
  };

  const choose = async (way: UploadWays) => {
    let newFiles;
    try {
      if (way === UploadWays.Image) {
        if (Platform.OS === 'ios') {
          const ret = await requestPermission(
            PhoneAuths.PhotoLibrary,
            uploaderLocal,
            useNative
          );
          if (!ret.result) {
            return;
          }
        }

        const res = await launchImageLibrary({
          mediaType: 'photo',
          quality: imgQuality,
        });
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.errorCode) {
          console.log('ImagePicker Error: ', res.errorCode);
        } else {
          const response = res.assets?.[0];
          if (!response || !response?.uri) return; // 适配鸿蒙空数据
          const curImage: ImageInfo = {
            fileName: response?.fileName,
            fileSize: response?.fileSize,
            width: response?.width,
            height: response?.height,
            type: getMimeType(response?.type),
            uri: filePathOS(response?.uri as string),
            status,
            _fileId: `${Date.now()}${response?.fileName}`, // 内部使用
          };
          newFiles = [curImage];
        }
      } else if (way === UploadWays.Camera) {
        const ret = await requestPermission(
          PhoneAuths.Camera,
          uploaderLocal,
          useNative
        );
        if (!ret.result) return;
        await saveLeaveCacheTime();
        const res = await launchCamera({
          mediaType: 'photo',
          quality: imgQuality,
        });
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.errorCode) {
          console.log('ImagePicker Error: ', res.errorCode);
        } else {
          const response = res.assets?.[0];
          if (!response || !response.uri) return; //适配鸿蒙空数据
          const curImage: ImageInfo = {
            fileName: response?.fileName,
            fileSize: response?.fileSize,
            width: response?.width,
            height: response?.height,
            type: getMimeType(response?.type),
            uri: filePathOS(response?.uri as string),
            status,
            _fileId: `${Date.now()}${response?.fileName}`,
          };

          if (curImage.uri) {
            newFiles = [curImage];
          }
        }
      } else if (way === UploadWays.File) {
        const currResponse = await openFile();
        if (!currResponse?.length) return;
        newFiles = currResponse;
      }
    } finally {
      doAdd(newFiles ?? []);
      beforeCloseResovleRef.current?.(true);
      beforeCloseResovleRef.current = null;
      onActionContainerClose?.();
    }
  };

  const openFile = async () => {
    const type: any[] = [];
    uploadFileType?.forEach((typeKey) => {
      if (DocumentPicker.types[typeKey]) {
        type.push(DocumentPicker.types[typeKey]);
      }
    });
    if (type.length < 1) {
      type.push(DocumentPicker.types.allFiles);
    }
    try {
      // 只能单个
      let res = await DocumentPicker.pick({
        type,
      });

      if (!res || (isArray(res) && res.length < 1)) return [];
      if (isArray(res)) {
        //适配鸿蒙文件选择
        res = res[0];
      }
      const { name, size, type: fileType } = res;
      return [
        {
          ...res,
          fileName: name,
          fileSize: size,
          type: getMimeType(fileType),
          status,
          uri: filePathOS(res.uri),
          _fileId: `${Date.now()}${name}`,
        },
      ];
    } catch (err: any) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const onRemove = async (index: number) => {
    const file = fileList?.[index];
    if (!file) return;

    const allowRemove = await waitResult(cusOnRemove?.(file, index) ?? true);

    if (allowRemove === false) return; //不允许删除

    const newFileList = fileList.filter((_, i) => i !== index);
    setFileList(newFileList);
  };

  const onPreviewImageList = (index: number) => {
    setShowImagePreview(true);
    setPreviewIndex(index);
  };

  const isCredentials = attachmentType === 'credentials';
  const renderBtn = () => {
    return (
      <UploadButton
        style={StyleSheet.flatten([
          !(customerContentStyle || isTextListType) && {
            marginTop: fileList.length >= 3 ? token['--spacing-3'] : 0,
          },
          tipStyle,
        ])}
        renderBtn={renderUploaderBtn}
        onPress={onUpload || pressUploaderBtn}
        tip={tip}
        tipStyle={tipStyle}
        tipIcon={tipIcon}
        contentStyle={contentStyleFinal}
        isCredentials={isCredentials}
        disabled={disabled || !(maxCount > fileList?.length)}
        onDisabledPress={() => onDisabledPress?.(value)}
        listType={listType}
        subTip={subTip}
        subTipStyle={subTipStyle}
        status={btnStatus}
      />
    );
  };

  const previewList = fileList.length
    ? fileList.map((item: ImageInfo) => {
        return {
          url: filePathOSDisplay(item.uri),
        };
      })
    : [];

  useImperativeHandle(uploaderRef, () => {
    return {
      upload: () => {
        pressUploaderBtn();
      },
      choose: (way: UploadWays) => {
        return choose(way);
      },
      remove: (index: number) => {
        return onRemove(index);
      },
    };
  });

  const PictureCardListRender = (
    <Space direction="horizontal" wrap gap={0}>
      {fileList.length > 0 &&
        fileList.map((item: ImageInfo, index: number) => {
          return (
            <ImagePreview
              key={index}
              file={item}
              style={StyleSheet.flatten([
                !customerContentStyle &&
                  maxCount > 1 && {
                    marginRight:
                      (index + 1) % 3 === 0 ? 0 : token['--spacing-3'],
                    marginTop: index < 3 ? 0 : token['--spacing-3'],
                  }, // 设置三的倍数的样式
              ])}
              disabled={disabled}
              deleteIcon={deleteIcon}
              showDeleteIcon={!item.hideDeleteIcon}
              onRemove={() => onRemove(index)}
              onPreviewImage={() => onPreviewImageList(index)}
              onPreviewFile={onPreviewFile}
              onReUpload={() => {
                onRemove(index);
                choose(UploadWays.Image);
              }}
              contentStyle={contentStyleFinal}
            />
          );
        })}
      {showUploadBtn && fileList.length < maxCount && renderBtn()}
    </Space>
  );

  const TextListRender = (
    <View>
      {renderBtn()}
      <TextList
        files={fileList}
        onDownload={onDownload}
        onPreviewFile={onPreviewFile}
        onRemove={onRemove}
      />
      <View />
    </View>
  );

  return (
    <View style={containerStyle} ref={ref} onLayout={onLayout}>
      <ShouldRender condition={!isTextListType}>
        {PictureCardListRender}
      </ShouldRender>
      <ShouldRender condition={isTextListType}>{TextListRender}</ShouldRender>
      <PreviewImageModal
        visible={showImagePreview}
        onRequestClose={hiddenPreviewModal}
        index={previewIndex}
        // @ts-ignore
        imageUrls={previewList}
        onSwipeDown={hiddenPreviewModal}
        onClick={hiddenPreviewModal}
      />
    </View>
  );
};

export default forwardRef(UploaderBody);
