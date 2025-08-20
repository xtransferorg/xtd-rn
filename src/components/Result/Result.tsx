import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { renderTextLikeJSX } from '../../core/helpers';
import createStyle from './style/result.style';
import {
  IconXSuccessprompt1,
  IconXFailureprompt1,
  IconXAbnormalprompt1,
  IconXProcessing1,
  IconXTerminated1,
} from '../../icons/index';
import type { Token } from '../Theme/constant';
import { useTheme } from '../Theme';
import { IconType, ResultStatus, IconProps, ResultProps } from './interface';
import { Button, Fill } from '@xrnjs/ui';

const IconUrlMap = {
  success: IconXSuccessprompt1,
  error: IconXFailureprompt1,
  warning: IconXAbnormalprompt1,
  waiting: IconXProcessing1,
  reject: IconXTerminated1,
} as { [key: string]: IconType };

const colorMap = (token: Token) => {
  return {
    success: token['--color-success-7'], // #0DA554
    error: token['--color-danger-7'], //#C72D3C
    info: token['--color-remind-7'], //#3B1FBB
    warning: token['--color-warning-7'], //#E4A500
    waiting: token['--color-process-7'], //#0775CF
    reject: token['--color-gray-7'], //#696680
  };
};

const rnRenderIcon: FC<ResultStatus> = (status: string, icon: IconProps) => {
  const IconComponent = IconUrlMap[status];
  if (!IconComponent) return null;
  return <IconComponent {...icon} />;
};

/**
 * Result结果
 * @description 用于反馈一系列操作任务的处理结果。
 */
const Result: FC<ResultProps> = (props) => {
  const token = useTheme();
  const styles = createStyle(token);

  const {
    status,
    extra,
    renderIcon,
    layout = 'vertical',
    title,
    titleTextStyle,
    subtitle,
    subtitleTextStyle,
    iconStyle,

    primaryText,
    primaryProps,
    secondaryText,
    secondaryProps,
    expand,
    ...restProps
  } = props;
  const iconSize = layout === 'vertical' ? 80 : 28;
  const color = colorMap(token)?.[status];

  const iconJSX = renderIcon ? (
    renderIcon(color, iconSize)
  ) : (
    <View style={[styles.iconWrapper, iconStyle]}>
      {rnRenderIcon(status as ResultStatus, { size: iconSize })}
    </View>
  );

  const titleJSX = renderTextLikeJSX(title, [
    styles.titleTextStyle,
    layout === 'vertical' && styles.titleTextMarginTop,
    titleTextStyle,
  ]);
  const subtitleJSX = renderTextLikeJSX(subtitle, [
    styles.subtitleTextStyle,
    subtitleTextStyle,
  ]);

  return (
    <View {...restProps}>
      {layout === 'vertical' ? iconJSX : null}
      {layout === 'vertical' ? (
        titleJSX
      ) : (
        <View style={styles.horizontalStyle}>
          <View style={styles.horizontalIconStyle}>{iconJSX}</View>
          {titleJSX}
        </View>
      )}
      {subtitleJSX}

      {extra || (
        <View style={styles.extraStyle}>
          {primaryText && (
            <Button
              fill={Fill.solid}
              style={styles.primaryStyle}
              {...primaryProps}
            >
              {primaryText}
            </Button>
          )}
          {secondaryText && (
            <Button
              fill={Fill.weak}
              style={styles.secondaryStyle}
              {...secondaryProps}
            >
              {secondaryText}
            </Button>
          )}
          {expand}
        </View>
      )}
    </View>
  );
};

export default memo(Result);
