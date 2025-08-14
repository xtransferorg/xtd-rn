import React, { useMemo, memo } from 'react';
import type { DimensionValue, ViewStyle } from 'react-native';
import { View } from 'react-native';

import Theme from '../theme';

import type { DividerLineProps } from './interface';
import { varCreator } from './style';

/**
 * 分割线
 */
const DividerLine: React.FC<DividerLineProps> = ({
  color,
  position,
  adaptive = true,
  direction = 'horizontal',
}) => {
  const isVertical = direction === 'vertical';
  const TOKENS = Theme.useThemeTokens();
  const VC = Theme.createVar(TOKENS, varCreator);

  const viewStyle = useMemo(() => {
    if (isVertical) {
      return {
        flex: 1,
        width: 1,
        height: '100%' as DimensionValue,
        transform: [{ scaleX: 0.5 }],
        backgroundColor: color,
      };
    }

    const s: ViewStyle = {
      flex: 1,
      maxWidth: 'auto',
      height: 1,
      transform: [{ scaleY: 0.5 }],
      backgroundColor: color,
    };

    if (position === 'left') {
      s.marginRight = 10;
    }

    if (position === 'right') {
      s.marginLeft = 10;
    }

    if (!adaptive) {
      s.maxWidth = (
        position === 'left'
          ? VC.divider_content_left_width
          : VC.divider_content_right_width
      ) as DimensionValue;
    }

    return s;
  }, [
    adaptive,
    color,
    isVertical,
    position,
    VC.divider_margin_horizontal,
    VC.divider_content_left_width,
    VC.divider_content_right_width,
  ]);

  return <View style={viewStyle} />;
};

export default memo(DividerLine);
