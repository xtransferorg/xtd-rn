import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { renderTextLikeJSX } from '../../core/helpers';
import { IconXDoubt1, IconXAbnormalprompt1 } from '../../icons/index';
import ShouldRender from '../ShouldRender';
import { FieldProps } from './interface';
import createStyle from './styles/field.style';
import { useLocale } from '../Locale/locale';
import { useTheme } from '../Theme';

const Field: React.FC<FieldProps> = ({
  style,
  label,
  labelWrapperStyle,
  labelContainerStyle,
  labelStyle,
  message,
  messageWrapperStyle,
  error,
  errorMessage,
  showErrorIcon = true,
  showDividerLine,
  showErrorDividerLine,
  showQuestionIcon = false,
  onClickQuestionIcon,
  layout = 'vertical',
  children,
  icon,
  iconContainerStyle,
  containerStyle,
  prefix,
  suffix,
  requiredMark,
}) => {
  const local = useLocale();
  const token = useTheme();
  const styles = createStyle(token);

  const renderErrorIcon = () => (
    <IconXAbnormalprompt1
      fillColor={token['--color-danger-7']}
      size={token['--font-size-3']}
      style={styles.errorIcon}
    />
  );

  const renderMessage = () => {
    return (
      <>
        <ShouldRender condition={!!errorMessage}>
          <View
            style={StyleSheet.flatten([
              styles.message,
              showErrorDividerLine && styles.dividerLine,
              styles.dividerLineError,
              { marginBottom: 2 },
              messageWrapperStyle,
            ])}
          >
            <ShouldRender condition={showErrorIcon}>
              {renderErrorIcon()}
            </ShouldRender>
            {renderTextLikeJSX(
              errorMessage,
              StyleSheet.flatten([styles.messageText, styles.messageTextError])
            )}
          </View>
        </ShouldRender>
        <ShouldRender condition={!!message}>
          <View
            style={StyleSheet.flatten([
              styles.message,
              showDividerLine && styles.dividerLine,
              error && styles.dividerLineError,
              !error && !showDividerLine && styles.messageNormal,
              messageWrapperStyle,
            ])}
          >
            <ShouldRender condition={!!error && showErrorIcon}>
              {renderErrorIcon()}
            </ShouldRender>
            {renderTextLikeJSX(
              message,
              StyleSheet.flatten([
                styles.messageText,
                error && styles.messageTextError,
              ])
            )}
          </View>
        </ShouldRender>
      </>
    );
  };

  const renderLabel = () => {
    return (
      <ShouldRender condition={!!label}>
        <View
          style={StyleSheet.flatten([
            styles.label,
            layout === 'vertical' && styles.labelVertical,
            layout === 'horizontal' && styles.labelHorizontal,
            labelWrapperStyle,
          ])}
        >
          {prefix}
          <View
            style={StyleSheet.flatten([
              styles.labelContainer,
              labelContainerStyle,
            ])}
          >
            <View style={styles.labelTextContainer}>
              {renderTextLikeJSX(
                label,
                StyleSheet.flatten([styles.labelText, labelStyle])
              )}
            </View>
            <ShouldRender condition={!requiredMark}>
              <Text
                style={StyleSheet.flatten([
                  styles.labelText,
                  styles.option,
                  labelStyle,
                ])}
              >
                {local.Field.optional}
              </Text>
            </ShouldRender>
            <ShouldRender condition={showQuestionIcon}>
              {/* 按压效果完善 */}
              <TouchableOpacity
                onPress={(e) => onClickQuestionIcon?.(e)}
                style={StyleSheet.flatten([
                  styles.questionIcon,
                  // !requiredMark && styles.questionIconWithOption, // 暂时去除
                ])}
              >
                <IconXDoubt1
                  size={token['--font-size-3']}
                  fillColor={token['--color-text-3']}
                />
              </TouchableOpacity>
            </ShouldRender>
          </View>

          {suffix}
        </View>
      </ShouldRender>
    );
  };
  // 内部左右布局，左边为Icon,右边为内容
  if (icon) {
    return (
      <View style={iconContainerStyle}>
        {renderLabel()}
        <View style={styles.contentContainer}>
          {icon}
          <View style={styles.rightContent}>
            <View
              style={StyleSheet.flatten([
                !label && styles.placeholder, // 如果没有传label,需要增加占位样式，保证间距一致性
                styles.childrenContainer,
                style,
              ])}
            >
              {children}
            </View>
            {renderMessage()}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={style}>
      <View
        style={StyleSheet.flatten([
          layout === 'horizontal' && styles.controlHorizontal,
          !label && styles.placeholder, // 如果没有传label,需要增加占位样式，保证间距一致性
          { zIndex: 1 },
          containerStyle,
        ])}
      >
        {renderLabel()}
        <View style={styles.childrenContainer}>{children}</View>
      </View>
      {renderMessage()}
    </View>
  );
};

export default Field;
