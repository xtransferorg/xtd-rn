import { useLocale } from '../Locale/locale';
import React, {
  ForwardRefRenderFunction,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
} from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  UIManager,
  Platform,
} from 'react-native';
import { renderTextLikeJSX } from '../../core/helpers';
import { RNCollapseItemProps } from './interface';
import createStyle from './style';
import { IconXLowersmall1, IconXCopy1 } from '../../icons/index';
import ShouldRender from '../ShouldRender';
import { useTheme } from '../Theme/Theme';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const CollapseItem: ForwardRefRenderFunction<
  unknown,
  RNCollapseItemProps
> = (props) => {
  const {
    style,
    headerStyle,
    contentStyle,
    expanded,
    onExpand,
    arrow,
    name,
    onClick,
    icon = false,
    iconStyle,
    title,
    titleStyle,
    description,
    children,
    arrowStyle,
    disabled,
    arrowPlaceDown,
    hideArrowTip,
    expandArrowTip,
    collapseArrowTip,
    arrowTipStyle,
    hideArrow,
    noBorder,
    permanentNode,
  } = props;

  const locale = useLocale().Collapse;
  const token = useTheme();
  const collapseItemStyle = createStyle(token);

  const arrowAnim = useRef(new Animated.Value(0)).current;

  const onItemExpand = () => {
    Animated.parallel([
      Animated.timing(arrowAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onItemClose = () => {
    Animated.parallel([
      Animated.timing(arrowAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onPress = () => {
    if (disabled) {
      return;
    }
    onExpand && onExpand();
    if (expanded) {
      return onItemClose();
    }
    return onItemExpand();
  };

  const borderStyle = arrowPlaceDown
    ? collapseItemStyle.collapseItemHeaderBorderTop
    : collapseItemStyle.collapseItemHeaderBorderBottom;

  const headerBorder = noBorder ? null : borderStyle;

  const renderTitle = () => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <View
          style={[
            collapseItemStyle.collapseItemHeader,
            headerBorder,
            headerStyle,
          ]}
        >
          <ShouldRender condition={!!icon}>
            <View style={[collapseItemStyle.collapseItemHeaderIcon, iconStyle]}>
              {icon === true ? (
                <IconXCopy1
                  size={token['--font-size-3']}
                  fillColor={
                    disabled ? token['--color-text-2'] : token['--color-text-4']
                  }
                />
              ) : (
                icon
              )}
            </View>
          </ShouldRender>

          <View style={[collapseItemStyle.collapseItemHeaderTitle, titleStyle]}>
            {renderTextLikeJSX(
              title,
              [
                collapseItemStyle.collapseTitle,
                disabled && collapseItemStyle.collapseItemDisabled,
              ],
              {
                numberOfLines: 2,
                onPress: onClick,
              }
            )}
            {renderTextLikeJSX(
              description,
              [
                collapseItemStyle.collapseDescription,
                disabled && collapseItemStyle.collapseItemDisabled,
              ],
              {
                numberOfLines: 2,
              }
            )}
          </View>

          <View style={[collapseItemStyle.collapseItemHeaderArrow, arrowStyle]}>
            <ShouldRender condition={!hideArrowTip}>
              {renderTextLikeJSX(
                expanded
                  ? collapseArrowTip || locale.collapse
                  : expandArrowTip || locale.expand,
                [
                  collapseArrowTip || expandArrowTip
                    ? { color: token['--color-primary-6'] }
                    : { color: token['--color-text-4'] },
                  disabled
                    ? collapseItemStyle.collapseItemDisabled
                    : collapseItemStyle.collapseItemHeaderArrowText,
                  arrowTipStyle,
                ]
              )}
            </ShouldRender>

            <ShouldRender condition={!hideArrow}>
              <Animated.View
                style={{
                  padding: token['--spacing-1'],
                  transform: [
                    {
                      rotate: arrowAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: arrowPlaceDown
                          ? ['0deg', '180deg']
                          : ['-180deg', '0deg'],
                      }),
                    },
                  ],
                }}
              >
                {isValidElement(arrow) ? (
                  arrow
                ) : (
                  <IconXLowersmall1
                    size={token['--font-size-3']}
                    fillColor={
                      disabled
                        ? token['--color-text-2']
                        : token['--color-text-4']
                    }
                  />
                )}
              </Animated.View>
            </ShouldRender>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <Animated.View
        style={[collapseItemStyle.collapseItemContent, contentStyle]}
      >
        <View>{children}</View>
      </Animated.View>
    );
  };

  useEffect(() => {
    // 修复初始展开时箭头方向不对的问题
    if (expanded) {
      onItemExpand();
    } else {
      onItemClose();
    }
  }, [expanded]);

  const header = renderTitle();
  const content = expanded ? renderContent() : null;
  const renderList = arrowPlaceDown
    ? [permanentNode, content, header]
    : [header, permanentNode, content];

  return (
    <View style={[collapseItemStyle.collapseItem, style]} key={name}>
      {renderList.map((node, key) => (
        <Fragment key={key}>{node}</Fragment>
      ))}
    </View>
  );
};
