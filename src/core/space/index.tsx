import React, { memo, Children } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';

import { varCreator as varCreatorBlank } from '../blank/style';
import { getDefaultValue } from '../helpers';
import Theme from '../theme';

import type { SpaceProps } from './interface';

const NO_GAP = 0;

const getMarginGap = (d: boolean | number, gap: number) =>
  d ? (typeof d === 'number' ? d : gap) : 0;

/**
 * Space 间距
 */
const Space: React.FC<SpaceProps> = ({
  direction = 'vertical',
  wrap = false,
  gap = 's',
  gapVertical,
  gapHorizontal,
  head,
  tail,
  justify,
  align,
  style,
  itemStyle: propsItemStyle,
  numberOfSingleLines,
  children,
  isPanel,

  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens();
  const CV_BLANK = Theme.createVar(TOKENS, varCreatorBlank);

  const defaultGap: number =
    typeof gap === 'string' ? CV_BLANK[`blank_size_${gap}`] : gap;
  const isVertical = direction === 'vertical';
  const _gapVertical = getDefaultValue(gapVertical, defaultGap);
  const _gapHorizontal = getDefaultValue(gapHorizontal, defaultGap);
  const wrapperStyle: ViewStyle = {
    flexDirection: isVertical ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: justify,
    alignItems: align,
    ...(isVertical
      ? {
          // @ts-ignore
          paddingTop: getMarginGap(head, _gapVertical),
          // @ts-ignore
          paddingBottom: getMarginGap(tail, _gapVertical),
        }
      : {
          // @ts-ignore
          paddingLeft: getMarginGap(head, _gapHorizontal),
          // @ts-ignore
          paddingRight: getMarginGap(tail, _gapHorizontal),
        }),
  };
  const itemStyle: ViewStyle = {
    marginBottom: isVertical || wrap ? _gapVertical : 0,
    marginRight: isVertical ? 0 : _gapHorizontal,
  };

  const childArray = Children.toArray(children);
  const count = childArray.length;

  return (
    <View {...restProps} style={[wrapperStyle, style]}>
      {childArray.map((child, index) => {
        return (
          <View
            key={index}
            style={[
              itemStyle,
              propsItemStyle,

              {
                marginRight:
                  isPanel && numberOfSingleLines
                    ? (index + 1) % numberOfSingleLines === 0
                      ? 0
                      : itemStyle.marginRight
                    : itemStyle.marginRight,
              },
              index + 1 === count
                ? isVertical
                  ? {
                      marginBottom: NO_GAP,
                    }
                  : {
                      marginRight: NO_GAP,
                    }
                : null,
            ]}
          >
            {child}
          </View>
        );
      })}
    </View>
  );
};

export default memo(Space);
