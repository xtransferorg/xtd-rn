import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShouldRender from '../ShouldRender';
import { ModalProps, TextButtonProps } from './interface';
import TextButton from './TextButton';
import { joinElement } from './utils';
import Button from '../Button';
import { Fill } from '../Button/enum';
import createStyle from './styles/modal-footer.style';
import { useTheme } from '../Theme/Theme';

export interface ModalFooterProps
  extends Pick<
    ModalProps,
    | 'showConfirmButton'
    | 'showCancelButton'
    | 'actions'
    | 'solidButton'
    | 'buttonsDirection'
  > {
  confirmButtonProps: TextButtonProps;
  cancelButtonProps: TextButtonProps;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  showConfirmButton,
  confirmButtonProps,
  showCancelButton,
  cancelButtonProps,
  actions,
  solidButton,
  buttonsDirection,
}) => {
  const defaultButtonProps = [
    showCancelButton && cancelButtonProps,
    showConfirmButton && confirmButtonProps,
  ].filter(Boolean) as TextButtonProps[];
  const token = useTheme();
  const styles = createStyle(token);

  const getFooterStyle = () => {
    if (solidButton) {
      return buttonsDirection === 'row'
        ? styles.solidButtonFooterRow
        : styles.solidButtonFooterColumn;
    }
    return !actions ? styles.footerHorizontal : styles.footerVertical;
  };

  return (
    <View style={StyleSheet.flatten([getFooterStyle()])}>
      {/* 横向文本按钮 */}
      <ShouldRender condition={!actions && !solidButton}>
        {joinElement(
          defaultButtonProps
            .map(({ style, ...restButtonProps }) => ({
              style: StyleSheet.flatten([styles.buttonHorizontal, style]),
              ...restButtonProps,
            }))
            .map((props) => <TextButton key={props.key} {...props} />),
          <View style={styles.dividerVertical} />
        )}
      </ShouldRender>

      {/* 多按钮 */}
      <ShouldRender condition={!!actions}>
        {actions?.map(({ key, text, style, ...buttonProps }, index) => {
          return !solidButton ? (
            <View key={key}>
              <View style={styles.dividerHorizontal} />
              <TextButton style={style} {...buttonProps} text={text} />
            </View>
          ) : (
            <Button
              key={key}
              fill={key === 'confirm' ? Fill.solid : Fill.weak}
              style={StyleSheet.flatten([
                index > 0 && styles.solidButtonVerticalSpace,
                style,
              ])}
              {...buttonProps}
            >
              {text}
            </Button>
          );
        })}
      </ShouldRender>

      {/* 横向图文按钮 */}
      <ShouldRender condition={!!solidButton && buttonsDirection === 'row'}>
        {defaultButtonProps
          .map(({ style, ...buttonProps }, index) => ({
            style: StyleSheet.flatten([
              styles.solidButtonHorizontal,
              index === 1 && styles.solidButtonHorizontalSpace,
              style,
            ]),
            ...buttonProps,
          }))
          .map(({ key, text, ...restProps }) => (
            <Button
              key={key}
              fill={key === 'confirm' ? Fill.solid : Fill.weak}
              {...restProps}
            >
              {text}
            </Button>
          ))}
      </ShouldRender>

      {/* 纵向图文按钮 */}
      <ShouldRender condition={!!solidButton && buttonsDirection === 'column'}>
        {defaultButtonProps
          .reverse()
          .map(({ key, text, style, ...restProps }, index) => {
            return (
              <Button
                key={key}
                fill={key === 'confirm' ? Fill.solid : Fill.weak}
                style={StyleSheet.flatten([
                  index > 0 && styles.solidButtonVerticalSpace,
                  style,
                ])}
                {...restProps}
              >
                {text}
              </Button>
            );
          })}
      </ShouldRender>
    </View>
  );
};

export default ModalFooter;
