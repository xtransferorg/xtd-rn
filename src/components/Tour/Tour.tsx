import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import createStyles from './styles/tour.style';
import { useTheme } from '../Theme/Theme';
import { TourProps, TourRef } from './interface';
import Mask from '../Mask';
import Reactangle from './Reactangle';
import { useLocale } from '../Locale/locale';
import TourStep from './TourStep';
import { TourStepProps } from '@xrnjs/ui';
import { renderTextLikeJSX } from '../../core/helpers/index';
import { Fill, Size } from '../Button/enum';
import Button from '../Button/index';
import { IconXLeftsmall1, IconXRightsmall1 } from '../../icons/index';

const Tour: ForwardRefRenderFunction<TourRef, TourProps> = (props, ref) => {
  const {
    visible = false,
    onBackdropPress,
    onTargetPress,
    statusBarTranslucent = true,
    steps,
    arrow = true,
    arrowColor,
    placement,
    onSkip,
    onFinish,
    mask = true,
    maskColor,
    maskOpacity,
    onChange,
    current: cusCurrent,
    skip = false,
    indicatorsStyle: cusIndicatorsStyle,
    indicatorsRender: cusIndicatorsRender,
    footerRender: cusFooterRender,
  } = props;

  const locale = useLocale().Tour;
  const [current, setCurrent] = useState(0);
  const finalCurrent = cusCurrent ?? current;
  const stepsNum = steps?.length || 0;
  const step = (steps?.[finalCurrent] || {}) as TourStepProps;
  const [stepLayout, setStepLayout] = useState(step?.layout);

  const token = useTheme();
  const styles = createStyles(token);

  // 关闭蒙层
  const handleClose = () => {
    onBackdropPress?.();
  };

  // current变化处理
  const handleChange = (stepIndex: number) => {
    if (stepIndex >= stepsNum) {
      onFinish?.();
      return;
    }

    if (stepIndex < 0) return; //没有上一步了

    onChange?.(stepIndex);

    if (cusCurrent !== undefined) return; // 受控的话完全由业务控制

    setCurrent(stepIndex);
  };

  // 跳过
  const handleSkip = () => {
    skip && onSkip?.();
  };

  const handlePre = () => handleChange(finalCurrent - 1);
  const handleNext = () => handleChange(finalCurrent + 1);

  const setpFooterIndicatorsRender = () => {
    const { indicatorsRender, indicatorsStyle, skip: stepSkip } = step;
    const finalIndicatorsRender = indicatorsRender || cusIndicatorsRender;
    const finalSkip = stepSkip ?? skip;
    const skipStr = finalSkip ? locale.skip : '';
    return finalIndicatorsRender ? (
      finalIndicatorsRender?.(finalCurrent)
    ) : (
      <TouchableOpacity
        onPress={handleSkip}
        disabled={!finalSkip}
        testID="skipBtn"
      >
        <Text
          style={StyleSheet.flatten([
            styles.indicator,
            cusIndicatorsStyle,
            indicatorsStyle,
          ])}
        >
          {`${skipStr}(${finalCurrent + 1}/${stepsNum})`}
        </Text>
      </TouchableOpacity>
    );
  };

  const disbalePrev = finalCurrent <= 0;
  const setpFooterBtnsRender = () => {
    const { nextButton, prevButton } = step;
    const prevColor = disbalePrev
      ? token['--color-text-2']
      : token['--color-text-5'];
    const prevBtn = prevButton ? (
      renderTextLikeJSX(prevButton, styles.prevBtn)
    ) : (
      <Button
        style={styles.prevBtn}
        size={Size.small}
        fill={Fill.weak}
        icon={
          <IconXLeftsmall1
            size={token['--font-size-3']}
            fillColor={prevColor}
          />
        }
        disabled={disbalePrev}
        onPress={handlePre}
      />
    );

    const defaultNextBtn =
      stepsNum < 2 ? (
        <Button style={styles.nextBtn} size={Size.small} onPress={handleNext}>
          {locale.confirm}
        </Button>
      ) : (
        <Button
          style={styles.nextBtn}
          size={Size.small}
          icon={
            <IconXRightsmall1
              size={token['--font-size-3']}
              fillColor={token['--color-text-1']}
            />
          }
          onPress={handleNext}
        />
      );
    const nextBtn = nextButton
      ? renderTextLikeJSX(nextButton, styles.nextBtn)
      : defaultNextBtn;

    return (
      <View style={styles.btns}>
        <TouchableOpacity
          onPress={handlePre}
          disabled={disbalePrev}
          testID="preBtn"
        >
          {prevBtn}
        </TouchableOpacity>
        <TouchableOpacity testID="nextBtn" onPress={handleNext}>
          {nextBtn}
        </TouchableOpacity>
      </View>
    );
  };

  const stepFooterRender = () => {
    const { footerRender } = step;
    const finalFooterRender = footerRender || cusFooterRender;
    if (finalFooterRender) return finalFooterRender(finalCurrent);

    return (
      <View style={styles.footer}>
        {setpFooterBtnsRender()}
        {setpFooterIndicatorsRender()}
      </View>
    );
  };

  const stepRender = () => {
    return (
      <View>
        <TourStep {...step} footerRender={stepFooterRender} />
      </View>
    );
  };

  const renderContent = () => {
    return step?.layout ? (
      <Reactangle
        rect={stepLayout}
        onBackdropPress={handleClose}
        step={stepRender()}
        onTargetPress={onTargetPress}
        mask={mask}
        maskColor={maskColor}
        maskOpacity={maskOpacity}
        placement={step.placement || placement}
        arrow={step.arrow || arrow}
        arrowColor={step.arrowColor || arrowColor}
        statusBarTranslucent={statusBarTranslucent}
      />
    ) : (
      <></>
    );
  };

  useImperativeHandle(ref, () => ({}));

  const newLayout = step?.layout || { x: 0, y: 0, height: 0, width: 0 };
  useEffect(() => {
    setStepLayout(newLayout);
  }, [newLayout.x, newLayout.y, newLayout.width, newLayout.height]);

  useEffect(() => {
    if (visible && cusCurrent === undefined) setCurrent(0);
  }, [visible]);

  return (
    <Mask
      visible={visible}
      onBackdropPress={onBackdropPress}
      backdropOpacity={0}
      statusBarTranslucent={statusBarTranslucent}
    >
      {renderContent()}
    </Mask>
  );
};

export default forwardRef(Tour);
