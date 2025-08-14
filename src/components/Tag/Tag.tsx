import { IconXClosesmall1 } from '../../icons/index';
import Color from 'color';
import isNil from 'lodash/isNil';
import isFunction from 'lodash/isFunction';
import React, { memo, useMemo, useState } from 'react';
import { ShouldRender } from '@xrnjs/ui';
import type { TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Size as IconSize } from '../Icon/interface';
import type { RNTagProps } from './interface';
import { TagFunc, TagType } from './interface';
import useTagStyles from './hooks/useTagStyles';
import createStyle from './styles/tag.style';
import { useTheme } from '../Theme/Theme';
import { renderTextLikeJSX } from '../../core/helpers';
/**
 * Tag 标签
 */
const Tag: React.FC<RNTagProps> = ({
  children,
  style,
  innerStyle,
  closable = false,
  onClose,
  size = 'm',
  type = 'primary',
  tagType = TagType.solid,
  tagFunc = TagFunc.normal,
  status,
  visible,
  closeIcon,
  icon,
  color,
  textColor,
  hairline,

  ...restProps
}) => {
  const [_visible, setVisible] = useState<boolean>(true);

  const token = useTheme();
  const styles = createStyle(token);

  const mainColor = !isNil(color) ? color : token['--color-primary-6'];
  const { innerTypeStyle, textTypeStyle } = useMemo(() => {
    const tempInnerStyle: ViewStyle = {};
    const tempTextStyle: TextStyle = {};
    switch (type) {
      case 'primary': {
        tempInnerStyle.backgroundColor = mainColor;
        tempInnerStyle.borderColor = mainColor;
        tempTextStyle.color = token['--color-gray-1'];
        break;
      }
      case 'ghost': {
        tempInnerStyle.backgroundColor = 'transparent';
        tempInnerStyle.borderColor = mainColor;
        tempInnerStyle.borderWidth = hairline ? StyleSheet.hairlineWidth : 1;
        tempTextStyle.color = mainColor;
        break;
      }
      case 'hazy': {
        const hazyColor = Color(mainColor).lightness(95).hex();
        tempInnerStyle.backgroundColor = hazyColor;
        tempInnerStyle.borderColor = hazyColor;
        tempTextStyle.color = mainColor;
        break;
      }
      default:
        break;
    }
    return {
      innerTypeStyle: tempInnerStyle,
      textTypeStyle: tempTextStyle,
    };
  }, [hairline, type, mainColor]);

  const { innerSizeStyle, textSizeStyle } = useMemo(() => {
    const tempInnerStyle: ViewStyle = styles[`tag_inner_${size}`];
    const tempTextStyle: TextStyle = styles[`tag_text_${size}`];
    return {
      innerSizeStyle: tempInnerStyle,
      textSizeStyle: tempTextStyle,
    };
  }, [styles, size]);

  const { wrapperStyle, fontStyle } = useTagStyles(
    tagType,
    tagFunc,
    closable,
    token
  );

  const textStyle = StyleSheet.flatten<TextStyle>([
    /** 伸缩 */
    { flexShrink: 1, flexGrow: 1 },
    /** 类型样式 */
    textTypeStyle,
    textSizeStyle,
    fontStyle,
    /** 外部样式 */
    !isNil(textColor) && {
      color: textColor,
    },
  ]);

  const { IconComponent } = useMemo(() => {
    let backgroundColor = '';
    switch (status) {
      case 'processing': {
        backgroundColor = token['--color-process-7'];
        break;
      }
      case 'interrupt': {
        backgroundColor = token['--color-warning-7'];
        break;
      }
      case 'terminate': {
        backgroundColor = token['--color-gray-5'];
        break;
      }
      case 'error': {
        backgroundColor = token['--color-danger-7'];
        break;
      }
      case 'success': {
        backgroundColor = token['--color-success-7'];
        break;
      }
      default:
        break;
    }
    return {
      IconComponent: backgroundColor ? (
        <Text style={[styles.dot, { backgroundColor }]} />
      ) : (
        icon
      ),
    };
  }, [status, icon]);

  const handleClose = () => {
    visible ?? setVisible(false);
    if (isFunction(onClose)) {
      onClose();
    }
  };

  // 关闭的图标
  const renderCloseIcon = () => {
    return (
      <ShouldRender condition={closable}>
        <TouchableOpacity onPress={handleClose}>
          <View style={styles.closeIcon}>
            {closeIcon || (
              <IconXClosesmall1
                fillColor={token['--color-text-5']}
                size={IconSize.Size12}
              />
            )}
          </View>
        </TouchableOpacity>
      </ShouldRender>
    );
  };

  if (visible ?? _visible) {
    return (
      <View {...restProps} style={[styles.tag, style]}>
        <View
          style={[
            /** 类型样式 */
            styles.tag_inner,
            innerTypeStyle,
            innerSizeStyle,
            wrapperStyle,
            innerStyle,
            !!status && styles.tag_transparent,
          ]}
        >
          <ShouldRender condition={!!icon || !!status}>
            <View style={styles.icon}>{IconComponent}</View>
          </ShouldRender>
          {renderTextLikeJSX(children, textStyle, { numberOfLines: 1 })}
          {renderCloseIcon()}
        </View>
      </View>
    );
  }

  return null;
};

export default memo(Tag);
