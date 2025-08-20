import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconXDoubt1 } from '../../icons/index';
import { UploaderTitleProps } from './interface';
import { useLocale } from '../Locale/locale';
import createStyle from './style';
import { useTheme } from '../Theme/Theme';
import ShouldRender from '../ShouldRender/ShouldRender';
import { renderTextLikeJSX } from '../../core/helpers';

interface TitleProps extends UploaderTitleProps {
  /**
   * 点击预览示例的回调
   */
  onShowDemo?: () => void;
}
const UploaderTitle: FC<TitleProps> = ({
  required,
  title,
  titleContainerStyle,
  titleStyle,
  showIcon,
  onShowDemo,
  onClickIcon,
}) => {
  const local = useLocale();
  const token = useTheme();
  const styles = createStyle(token);
  return title ? (
    <View style={StyleSheet.flatten([styles.container])}>
      <View style={StyleSheet.flatten([styles.left])}>
        <View
          style={StyleSheet.flatten([
            styles.titleContainer,
            titleContainerStyle,
          ])}
        >
          {renderTextLikeJSX(
            title,
            StyleSheet.flatten([styles.title, titleStyle])
          )}
        </View>
        <ShouldRender condition={!required}>
          <Text
            style={StyleSheet.flatten([
              styles.title,
              styles.option,
              titleStyle,
            ])}
          >
            {local.Field.optional}
          </Text>
        </ShouldRender>
        {showIcon && (
          <TouchableOpacity
            onPress={onClickIcon}
            style={StyleSheet.flatten([
              styles.touchableContainer,
              // !required && styles.touchableContainerWithOption, // 暂时去除
            ])}
          >
            <IconXDoubt1
              size={token['--font-size-3']}
              fillColor={token['--color-text-3']}
            />
          </TouchableOpacity>
        )}
      </View>
      {onShowDemo && (
        <Text style={styles.demoBtn} onPress={onShowDemo}>
          {local.Uploader.demo}
        </Text>
      )}
    </View>
  ) : null;
};
export default UploaderTitle;
