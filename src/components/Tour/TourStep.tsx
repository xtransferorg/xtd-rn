import React from 'react';
import { View, StyleSheet } from 'react-native';
import createStyles from './styles/tourStep.style';
import { useTheme } from '../Theme';
import { TourStepProps } from './interface';
import { renderTextLikeJSX } from '../../core/helpers';
import isNil from 'lodash/isNil';

const TourStep = (props: TourStepProps) => {
  const {
    style,
    cover,
    coverContainerStyle,
    title,
    titleStyle,
    description,
    descriptionStyle,
    footerRender,
  } = props;
  const token = useTheme();
  const styles = createStyles(token);

  const renderCover = () => {
    return !isNil(cover) ? (
      <View style={[styles.cover, coverContainerStyle]}>{cover}</View>
    ) : null;
  };

  return (
    <View style={[styles.wrapper, style]}>
      {renderCover()}
      {renderTextLikeJSX(title, StyleSheet.flatten([styles.title, titleStyle]))}
      {renderTextLikeJSX(
        description,
        StyleSheet.flatten([styles.description, descriptionStyle])
      )}
      {footerRender?.()}
    </View>
  );
};

export default TourStep;
