import React, { useMemo, useState } from 'react';
import { StyleSheet, View, LayoutChangeEvent } from 'react-native';
import { renderTextLikeJSX } from '../../core/helpers';
import ShouldRender from '../ShouldRender';
import { StepProps } from './interface';
import createStyle from './styles/step-vertical.style';
import { useTheme } from '../Theme';

const StepVertical: React.VFC<
  StepProps & {
    isFirstChild: boolean;
    isLastChild: boolean;
    reverse: boolean;
  }
> = ({
  dot,
  time,
  status,
  title,
  description,
  descriptionProps = {},
  isFirstChild,
  isLastChild,
  reverse,
}) => {
  const dotSize = 8;
  const token = useTheme();
  const styles = createStyle(token, dotSize);
  const [dotWidth, setDotWidth] = useState<number>(dotSize);

  // 自定义dot情况，根据dot尺寸调节样式
  const getViewSize = (e: LayoutChangeEvent) => {
    setDotWidth(e?.nativeEvent?.layout?.width);
  };
  const adjustStyle = useMemo(() => {
    return {
      textContent: { marginLeft: 20 + dotSize - dotWidth },
      dot: { transform: [{ translateX: (dotSize - dotWidth) / 2 }] },
    };
  }, [dotWidth]);

  if (reverse && status === 'wait') {
    return null;
  }

  const { dotStyle } = reverse
    ? {
        dotStyle:
          status === 'process'
            ? styles.activeBackgroundColor
            : styles.inactiveBackgroundColor,
      }
    : {
        dotStyle:
          status === 'wait'
            ? styles.inactiveBackgroundColor
            : styles.activeBackgroundColor,
      };

  const textContent = (
    <View style={[styles.textContent, !!dot && adjustStyle.textContent]}>
      <View>
        {renderTextLikeJSX(title, StyleSheet.flatten([styles.title]))}
      </View>
      {/*要使description换行生效，需设置Steps的maxWidth*/}
      <View>
        {renderTextLikeJSX(
          description,
          StyleSheet.flatten([styles.description]),
          { numberOfLines: 3, ...descriptionProps }
        )}
      </View>
      <View>{renderTextLikeJSX(time, StyleSheet.flatten([styles.time]))}</View>
    </View>
  );

  return (
    <View style={[styles.wrapper]}>
      <ShouldRender condition={reverse && !isLastChild && status === 'process'}>
        <View style={styles.lineWrapper}>
          <View style={styles.waitLine} />
        </View>
      </ShouldRender>

      <View style={styles.content}>
        <View>
          <View style={!!dot && adjustStyle.dot} onLayout={getViewSize}>
            {dot || <View style={StyleSheet.flatten([styles.dot, dotStyle])} />}
          </View>

          <ShouldRender
            condition={(!reverse && !isLastChild) || (reverse && !isFirstChild)}
          >
            <View style={styles.lineWrapper}>
              <View
                style={StyleSheet.flatten([
                  styles.line,
                  styles.inactiveBackgroundColor,
                ])}
              />
            </View>
          </ShouldRender>
        </View>
        {textContent}
      </View>
    </View>
  );
};

export default StepVertical;
