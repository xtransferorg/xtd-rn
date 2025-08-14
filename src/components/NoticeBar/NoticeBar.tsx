import React, { forwardRef, ComponentType } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NoticeBarInstance, NoticeBarProps, NoticeBarType } from './interface';
import Marquee from './Marquee';
import createStyles from './styles/notice-bar.style';
import {
  IconXWarn2,
  IconXSuccess2,
  IconXRemind2,
  IconXError2,
} from '../../icons/index';
import { renderTextLikeJSX } from '../../core/helpers';
import ShouldRender from '../ShouldRender';
import { useTheme } from '../Theme';
import DetailButton from './DetailButton';
import { useLocale } from '../Locale/locale';

interface IconProps {
  color?: string;
  size?: string | number;
  fillColor?: string;
}
type Icon = ComponentType<IconProps>;
const IconUrlMap: { [key: string]: Icon } = {
  success: IconXSuccess2,
  fail: IconXError2,
  warn: IconXWarn2,
  remind: IconXRemind2,
};
const rnRenderIcon = (type?: NoticeBarType, iconProps?: IconProps) => {
  if (!type) return null;
  const IconComponent = IconUrlMap[type];
  if (!IconComponent) return null;
  return <IconComponent {...iconProps} />;
};

const getTextsConfig = ({
  texts,
  showBullets,
  popupTitle,
  showMoreText,
  numberOfLines,
  popupUseNative,
}: {
  texts?: {
    content: React.ReactNode;
  }[];
  showBullets?: boolean;
  popupTitle?: React.ReactNode;
  showMoreText?: React.ReactNode;
  numberOfLines?: number;
  popupUseNative?: boolean;
}) => {
  if (!texts) return {};
  const defaultShowBullets =
    showBullets === undefined ? texts.length > 1 : showBullets;
  const lastLine = numberOfLines || 2;
  return {
    numberOfLines: lastLine,
    text: texts.map((item, index) => (
      <Text key={index}>
        {index === 0 ? '' : '\n'}
        {defaultShowBullets ? '• ' : ''}
        {item.content}
        {/* {lastLine === index + 1 && lastLine < texts.length ? '...' : ''} */}
      </Text>
    )),
    wrapable: true,
    renderOverFlow: (isOverflow: boolean) => {
      return isOverflow ? (
        <DetailButton
          showBullets={defaultShowBullets}
          texts={texts}
          popupTitle={popupTitle}
          showMoreText={showMoreText}
          popupUseNative={popupUseNative}
        />
      ) : null;
    },
  };
};

const NoticeBar = forwardRef<NoticeBarInstance, NoticeBarProps>(
  (props, ref) => {
    const token = useTheme();
    const styles = createStyles(token);
    const locale = useLocale();
    const {
      onPress,
      backgroundColor,
      style,
      leftIcon,
      rightIcon,
      contentStyle,
      borderRadius,
      title,
      texts,
      showBullets,
      popupTitle = locale.NoticeBar.detail,
      showMoreText = locale.NoticeBar.viewMore,
      size = 'middle',
      children,
      showType = 'text',
      onRightPress,
      popupUseNative,
      ...restProps
    } = props;
    let { text, wrapable, numberOfLines, renderOverFlow } = props;

    if (showType === 'multipleLines') {
      const {
        numberOfLines: textNumberOfLines,
        text: textContent,
        renderOverFlow: textRenderOverFlow,
        wrapable: textWrapable,
      } = getTextsConfig({
        texts,
        showBullets,
        popupTitle,
        showMoreText,
        numberOfLines,
        popupUseNative,
      });
      wrapable = textWrapable;
      text = textContent;
      numberOfLines = textNumberOfLines;
      renderOverFlow = textRenderOverFlow;
    }

    const colorMap = {
      warn: token['--color-warning-1'],
      remind: token['--color-gray-2'],
      success: token['--color-success-1'],
      fail: token['--color-danger-1'],
    };

    const renderLeftIcon = () => {
      if (!leftIcon) {
        return null;
      }
      // 如果传入的是bool值，那么就用默认icon，否则用自定义icon
      if (leftIcon === true) {
        return <IconXWarn2 size={24} />;
      } else if (
        ['remind', 'warn', 'fail', 'success'].includes(
          leftIcon as NoticeBarType
        )
      ) {
        return rnRenderIcon(leftIcon as NoticeBarType, { size: 24 });
      }
      return renderTextLikeJSX(leftIcon);
    };

    const wrapperBgColor = colorMap?.[leftIcon as NoticeBarType];
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={StyleSheet.flatten([
            styles.wrapper,
            !!wrapperBgColor && { backgroundColor: wrapperBgColor },
            backgroundColor ? { backgroundColor } : undefined,
            borderRadius ? { borderRadius } : undefined,
            style,
          ])}
        >
          <View style={styles.leftIcon}>{renderLeftIcon()}</View>

          <View style={StyleSheet.flatten([styles.centerWrapper])}>
            <ShouldRender condition={!!title}>
              <Text style={StyleSheet.flatten([styles.titleStyle])}>
                {renderTextLikeJSX(title)}
              </Text>
            </ShouldRender>

            <Marquee
              style={[
                styles[`${size}Content`],
                texts && { width: '100%' },
                contentStyle,
              ]}
              wrapable={wrapable}
              numberOfLines={numberOfLines}
              renderOverFlow={renderOverFlow}
              {...restProps}
              text={children || text}
              ref={ref}
            />
          </View>

          <ShouldRender condition={!!rightIcon}>
            <TouchableOpacity
              style={styles.rightIcon}
              onPress={() => onRightPress?.()}
            >
              {renderTextLikeJSX(rightIcon)}
            </TouchableOpacity>
          </ShouldRender>
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

export default NoticeBar;
