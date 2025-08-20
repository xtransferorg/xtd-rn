import React, { FC, isValidElement } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from '../Theme/Theme';
import { UploadBtnProps } from './interface';
import createStyle from './style';
import { IconXAdd1, IconXBackside1, IconXUpload2 } from '../../icons/index';
import { UploadListTypes } from './enum';
import { useLocale } from '../Locale/locale';

const UploadButton: FC<UploadBtnProps> = ({
  renderBtn,
  style,
  onPress,
  tip,
  tipStyle,
  tipIcon,
  contentStyle,
  isCredentials = false,
  disabled,
  onDisabledPress,
  listType,
  subTip,
  subTipStyle,
  status,
}) => {
  const token = useTheme();
  const styles = createStyle(token);
  const isTextListType = listType === UploadListTypes.Text;
  const { Uploader } = useLocale();
  const iconColor = disabled
    ? token['--color-text-2']
    : token['--color-text-5'];
  const defaultIcon = !isCredentials ? (
    <IconXAdd1 fillColor={iconColor} size={token['--font-size-4']} />
  ) : (
    <IconXBackside1 size={40} color={iconColor} fillColor={iconColor} />
  );
  const tipIconFinal =
    tipIcon ||
    (isTextListType && <IconXUpload2 size={28} fillColor={iconColor} />) ||
    defaultIcon;
  const defaultTip = isTextListType ? Uploader.upload : '';
  const tipFinal = tip || defaultTip;
  const isError = status === 'error';
  const renderContent = (
    <View>
      {renderBtn ? (
        renderBtn
      ) : (
        <View
          style={StyleSheet.flatten([
            styles.increase_btn,
            isTextListType && styles.upload_btn,
            !!subTip && styles.upload_sub,
            disabled && styles.increase_btn_disable,
            isError && styles.error_btn,
            contentStyle,
          ])}
        >
          {tipIconFinal}
          {!!tipFinal && (
            <View
              style={StyleSheet.flatten([isTextListType && styles.tip_wrapper])}
            >
              {isValidElement(tipFinal) ? (
                tipFinal
              ) : (
                <Text
                  style={StyleSheet.flatten([
                    styles.tip,
                    isTextListType && styles.tip_upload,
                    disabled && styles.tip_disable,
                    tipStyle,
                  ])}
                >
                  {tipFinal}
                </Text>
              )}
              {isTextListType &&
                subTip &&
                (isValidElement(subTip) ? (
                  subTip
                ) : (
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={StyleSheet.flatten([styles.sub_tip, subTipStyle])}
                  >
                    {subTip}
                  </Text>
                ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
  return disabled ? (
    <TouchableWithoutFeedback onPress={onDisabledPress}>
      <View style={style}>{renderContent}</View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableOpacity style={style} onPress={onPress}>
      {renderContent}
    </TouchableOpacity>
  );
};

export default UploadButton;
