import React, {
  forwardRef,
  ForwardRefRenderFunction,
  isValidElement,
} from 'react';
import { Text, View } from 'react-native';
import { Space } from '@xrnjs/ui';
import { useTheme } from '../Theme/Theme';
import { UploaderScreenProps, UploaderRef } from './interface';
import createStyle from './style';
import UploaderBody from './UploaderBody';
import UploaderTitle from './UploaderTitle';
import { isArray } from 'lodash';

const RNUploader: ForwardRefRenderFunction<UploaderRef, UploaderScreenProps> = (
  p,
  ref
) => {
  const {
    children,
    title,
    titleStyle,
    titleContainerStyle,
    showIcon = false,
    required,
    attachmentType,
    defaultValue,
    uploadFileType,
    value,
    description,
    maxCount = 999,
    renderUploaderBtn,
    disabled,
    deleteIcon,
    showUploadBtn,
    style,
    useContainerWidth = true,
    containerSpacing,
    actionSheetProps,
    containerStyle,
    onPreviewFile,
    onClickIcon,
    onShowDemo,
    onChange,
    onActionContainerClose,
    tip,
    tipStyle,
    contentStyle,
    onUpload,
    onDisabledPress,
    imgQuality,
    listType,
    onDownload,
    onRemove,
    beforeUpload,
    doUpload,
    onSuccess,
    onError,
    errorTip,
    minSize,
    maxSize,
    minSizeErrorTip,
    maxSizeErrorTip,
    subTip,
    subTipStyle,
    status,
  } = p;
  const token = useTheme();
  const styles = createStyle(token);

  const renderDescription = (node: any) => {
    return isValidElement(node) ? (
      node
    ) : (
      <Text style={styles.desc}>{node}</Text>
    );
  };
  const renderChildern = (node: React.ReactNode) => {
    if (isArray(node) && node.length > 1) {
      // 多children 使用横向布局
      return (
        <Space direction="horizontal" gap={0} justify="space-between">
          {node}
        </Space>
      );
    } else {
      // 单个直接显示 解决横向布局导致的容器宽度获取问题
      return node;
    }
  };

  return (
    <View style={[{ width: '100%' }, style]}>
      {title && (
        <UploaderTitle
          required={required}
          titleContainerStyle={titleContainerStyle}
          titleStyle={titleStyle}
          title={title}
          showIcon={showIcon}
          onShowDemo={onShowDemo}
          onClickIcon={onClickIcon}
        />
      )}

      {children ? (
        renderChildern(children)
      ) : (
        <UploaderBody
          ref={ref}
          uploadFileType={uploadFileType}
          defaultValue={defaultValue}
          value={value}
          attachmentType={attachmentType}
          maxCount={maxCount}
          disabled={disabled}
          deleteIcon={deleteIcon}
          showUploadBtn={showUploadBtn}
          renderUploaderBtn={renderUploaderBtn}
          onPreviewFile={onPreviewFile}
          onChange={onChange}
          onActionContainerClose={onActionContainerClose}
          useContainerWidth={useContainerWidth}
          containerSpacing={containerSpacing}
          actionSheetProps={actionSheetProps}
          containerStyle={containerStyle}
          contentStyle={contentStyle}
          tip={tip}
          tipStyle={tipStyle}
          onUpload={onUpload}
          onDisabledPress={onDisabledPress}
          imgQuality={imgQuality}
          listType={listType}
          onDownload={onDownload}
          onRemove={onRemove}
          beforeUpload={beforeUpload}
          doUpload={doUpload}
          onSuccess={onSuccess}
          onError={onError}
          errorTip={errorTip}
          minSize={minSize}
          maxSize={maxSize}
          minSizeErrorTip={minSizeErrorTip}
          maxSizeErrorTip={maxSizeErrorTip}
          subTip={subTip}
          subTipStyle={subTipStyle}
          status={status}
        />
      )}

      {description && renderDescription(description)}
    </View>
  );
};

export default forwardRef(RNUploader);
