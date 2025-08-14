import React, {
  ReactNode,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageRequireSource,
} from 'react-native';
import { renderTextLikeJSX, mergeProps } from '../../core/helpers';
import { Button, Fill, ShouldRender } from '@xrnjs/ui';
import { ErrorBlockProps } from './interface';
import createStyle from './styles/errorBlock.style';
import { useTheme } from '../Theme/Theme';
import Image from '../Image';

const StatusMapToImage = {
  notFound: require('./asset/errorv1.png'),
  empty: require('./asset/emptyv1.png'),
  finished: require('./asset/finished.png'),
  networkError: require('./asset/errorv1.png'),
  noAuth: require('./asset/noAuthv1.png'),
  noLogin: require('./asset/emptyv1.png'),
  noData: require('./asset/404v1.png'),
  systemCompatibility: require('./asset/errorv1.png'),
  systemUpgrade: require('./asset/errorv1.png'),
  emptyIcon: require('./asset/emptyIcon.png'),
} as { [key: string]: ImageRequireSource };

export interface ErrorBlockRef {}
const ErrorBlock: ForwardRefRenderFunction<ErrorBlockRef, ErrorBlockProps> = (
  p,
  ref
) => {
  const props: ErrorBlockProps = mergeProps(p);
  const {
    isSmallScene = false,
    smallSceneText,
    title,
    titleStyle,
    description,
    descriptionStyle,
    extra,
    status = 'empty',
    image,
    fullPage = false,
    style,
    footer,
    footerText,
    footerSecondText,
    footerDescription,
    footerDescriptionText,
    footerDescriptionTextStyle,
    onFooterDescriptionPress,
    onFooterPress,
    onFooterSecondPress,
  } = props;

  const token = useTheme();
  const styles = createStyle(token);

  useImperativeHandle(ref, () => ({}));

  const renderImage = () => {
    if (image) {
      if (typeof image === 'string') {
        return <Image source={{ uri: image }} style={styles.image} />;
      }
      return image;
    } else if (StatusMapToImage[status]) {
      return <Image source={StatusMapToImage[status]} style={styles.image} />;
    }
  };

  const renderTitle = () => {
    return renderTextLikeJSX(title, [styles.title, titleStyle]);
  };

  const renderDescription = () => {
    return renderTextLikeJSX(description, [
      styles.description,
      descriptionStyle,
    ]);
  };

  const renderFooter = () => {
    return footer ? (
      footer
    ) : (
      <ShouldRender condition={!!footerText || !!footerSecondText}>
        <View style={styles.footer}>
          <ShouldRender condition={!!footerText}>
            <Button
              onPress={onFooterPress}
              fill={Fill.solid}
              style={styles.footerPrimaryButton}
              textStyle={styles.footerPrimaryButtonText}
            >
              {footerText}
            </Button>
          </ShouldRender>

          <ShouldRender condition={!!footerSecondText}>
            <Button
              onPress={onFooterSecondPress}
              fill={Fill.weak}
              style={styles.footerSecondButton}
              textStyle={styles.footerSecondButtonText}
            >
              {footerSecondText}
            </Button>
          </ShouldRender>
        </View>
      </ShouldRender>
    );
  };
  const renderFooterDescription = () => {
    return footerDescription ? (
      footerDescription
    ) : (
      <ShouldRender condition={!!footerDescriptionText}>
        <View style={styles.footerDescription}>
          <TouchableOpacity onPress={onFooterDescriptionPress}>
            <Text
              style={[styles.footerDescriptionText, footerDescriptionTextStyle]}
            >
              {footerDescriptionText}
            </Text>
          </TouchableOpacity>
        </View>
      </ShouldRender>
    );
  };

  const renderSmallScene = (text: ReactNode, icon = 'emptyIcon') => {
    return (
      <ShouldRender condition={isSmallScene}>
        <View style={styles.smallSceneWrapper}>
          <Image
            source={StatusMapToImage[icon]!}
            style={styles.smallSceneTip}
          />
          <Text style={styles.smallSceneText} numberOfLines={2}>
            {text}
          </Text>
        </View>
      </ShouldRender>
    );
  };

  return isSmallScene ? (
    <View style={styles.container}>{renderSmallScene(smallSceneText)}</View>
  ) : (
    <View
      style={StyleSheet.flatten([
        styles.container,
        fullPage && styles.fullPage,
        style,
      ])}
    >
      {renderImage()}
      {renderTitle()}
      {renderDescription()}
      {renderFooter()}
      {renderFooterDescription()}
      {extra && extra}
    </View>
  );
};

export default forwardRef(ErrorBlock);

export type { ErrorBlockProps }; // 适配之前xt-rn-core通过相对路径引入类型定义的问题
