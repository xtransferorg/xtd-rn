import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { renderTextLikeJSX } from '../../core/helpers';
import TextButton from '../Modal/TextButton';
import { PopupHeaderProps } from './interface';
import createStyle from './styles/popup-header.style';
import { useLocale } from '../Locale/locale';
import { IconXClosesmall1 } from '../../icons/index';
import { useTheme } from '../Theme';
import { useMaxLayoutWidth } from '../../core/hooks';

const PopupHeader: React.FC<PopupHeaderProps> = ({
  headerStyle,
  cancelBtnContainerStyle,
  confirmBtnContainerStyle,
  title,
  titleStyle,
  description,
  showCancelButton = true,
  onCancel,
  cancelBtnIcon,
  cancelBtnStyle,
  cancelBtnIconProps = {},
  confirmBtnStyle,
  showConfirmButton = true,
  confirmButtonText,
  onConfirm,
}) => {
  const locale = useLocale().Dialog;
  const token = useTheme();
  const styles = createStyle(token);
  const { maxLayoutWidth, handleLayout } = useMaxLayoutWidth();

  return (
    <View style={StyleSheet.flatten([styles.wrapper, headerStyle])}>
      <View
        style={StyleSheet.flatten([
          styles.cancelBtn,
          maxLayoutWidth > 0 && { width: maxLayoutWidth },
          cancelBtnContainerStyle,
        ])}
        onLayout={handleLayout}
      >
        {showCancelButton && (
          <TouchableOpacity onPress={onCancel} style={styles.cancelBtnIcon}>
            {cancelBtnIcon || (
              <IconXClosesmall1
                fillColor={token['--color-text-5']}
                size={20}
                strokeWidth={0}
                style={StyleSheet.flatten([cancelBtnStyle])}
                {...cancelBtnIconProps}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      <View style={StyleSheet.flatten([styles.title, titleStyle])}>
        {renderTextLikeJSX(title, styles.titleText, {
          numberOfLines: 1,
        })}
        {renderTextLikeJSX(description, styles.description)}
      </View>
      <View
        style={StyleSheet.flatten([
          maxLayoutWidth > 0 && { width: maxLayoutWidth },
          confirmBtnContainerStyle,
        ])}
        onLayout={handleLayout}
      >
        {showConfirmButton && (
          <TextButton
            style={StyleSheet.flatten([
              styles.confirmBtnStyle,
              confirmBtnStyle,
            ])}
            text={confirmButtonText ?? locale.confirmButtonText}
            onPress={onConfirm}
            textStyle={styles.confirmButTextStyle}
          />
        )}
      </View>
    </View>
  );
};

export default PopupHeader;
