import { isNil, isBoolean } from 'lodash';
import React, { memo } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import { Divider, Skeleton, ShouldRender } from '@xrnjs/ui';
import { useTheme } from '../Theme';
import { Type } from './enum';
import createStyle from './styles/card.style';
import CardBody from './card-body';
import type { CardProps } from './interface';
import { renderTextLikeJSX } from '../../core/helpers';
import Image from '../Image';

const Card: React.FC<CardProps> = ({
  type = Type.AllCard,
  background,
  imageSource,
  imageStyle,
  children,
  title,
  titleLeftExtra,
  extra,
  footer,
  headerStyle,
  titleStyle,
  titleTextStyle,
  bodyStyle,
  footerStyle,
  footerTextStyle,
  size = 'm',
  square = false,
  loading = false,
  headerDivider = false,
  footerDivider = false,
  bodyPadding = false,
  onPressHeader,
  onLayoutHeader,
  onLayoutBody,

  style,
  ...restProps
}) => {
  const isS = size === 's';

  const token = useTheme();
  const styles = createStyle(token);

  const getCardStyle = () => {
    return {
      borderRadius:
        type === Type.AllCard
          ? token['--border-radius-medium']
          : token['--border-radius-small'],
    };
  };
  const bgColor = { backgroundColor: background };

  const hasTitleLeftExtra = !isNil(titleLeftExtra);
  const titleJSX = renderTextLikeJSX(
    title,
    [
      styles.title_text,
      isS ? styles.title_text_s : null,
      titleTextStyle,
      hasTitleLeftExtra ? styles.title_text_margin_left : null,
    ],
    {
      numberOfLines: 2,
    }
  );
  const footerJSX = renderTextLikeJSX(footer, [
    styles.footer_text,
    footerTextStyle,
  ]);

  const showHeader = !isNil(titleJSX) || hasTitleLeftExtra || !isNil(extra);
  const headerJSX = (
    <>
      <View
        style={[styles.header, isS ? styles.header_s : null, headerStyle]}
        onLayout={onLayoutHeader}
      >
        <View style={[styles.title, titleStyle]}>
          {titleLeftExtra}
          {titleJSX}
        </View>
        {extra}
      </View>
      {headerDivider ? <Divider /> : null}
    </>
  );

  return (
    <View
      {...restProps}
      style={[
        styles.card,
        square ? null : getCardStyle(),
        style,
        background ? bgColor : null,
      ]}
    >
      <ShouldRender condition={!!imageSource}>
        <Image style={[styles.image, imageStyle]} source={imageSource!} />
      </ShouldRender>

      {showHeader ? (
        onPressHeader ? (
          <TouchableWithoutFeedback onPress={onPressHeader}>
            <View collapsable={false}>{headerJSX}</View>
          </TouchableWithoutFeedback>
        ) : (
          headerJSX
        )
      ) : null}
      <CardBody
        style={bodyStyle}
        padding={
          isBoolean(bodyPadding) && bodyPadding
            ? token['--spacing-3']
            : bodyPadding
        }
        onLayout={onLayoutBody}
      >
        {loading ? <Skeleton loading /> : children}
      </CardBody>

      {!isNil(footerJSX) ? (
        <>
          {footerDivider ? <Divider /> : null}
          <View style={[styles.footer, footerStyle]}>{footerJSX}</View>
        </>
      ) : null}
    </View>
  );
};

export default memo(Card);
