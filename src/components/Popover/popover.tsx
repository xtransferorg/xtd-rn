import noop from 'lodash/noop';
import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  memo,
  isValidElement,
  Children,
  cloneElement,
  useImperativeHandle,
  ReactElement,
  forwardRef,
} from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import RNPopoverView, { PopoverPlacement } from 'react-native-popover-view';

import Theme from '../../core/theme';

import type { PopoverProps, PopoverItemProps } from './interface';
import { varCreator, styleCreator } from './styles/popover.style';
import { PopoverAction, PopoverInstance } from './interface';

// 无箭头，需设置为0
const arrowSize = { width: 0, height: 0 };
// 默认箭头大小
const defaultArrowSize = { width: 8, height: 4 };

const PlacementMap: Record<
  Required<PopoverProps<RNPopoverView>>['placement'],
  PopoverPlacement
> = {
  auto: PopoverPlacement.AUTO,
  top: PopoverPlacement.TOP,
  bottom: PopoverPlacement.BOTTOM,
  left: PopoverPlacement.LEFT,
  right: PopoverPlacement.RIGHT,
  center: PopoverPlacement.CENTER,
  floating: PopoverPlacement.FLOATING,
};

type SelectAction = PopoverAction & RNPopoverView;
export interface P extends SelectAction {}

const Popover = forwardRef<PopoverInstance, PopoverProps<P>>((props, ref) => {
  const {
    children,
    content,
    actions = [],
    mode = 'dark',
    shadow = false,
    arrow = true,
    placement = 'auto',
    offset = 5,
    triggerStyle,
    onSelect = noop,
    closeOnClickPopover = true,
    closeOnClickOverlay = true,
    renderContentComponent,
    duration = 300,
    backgroundStyle,
    popoverStyle,
    statusBarTranslucent = true,
    ...restProps
  } = props;
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);

  const touchable = useRef<TouchableOpacity>(null);
  const [showPopover, setShowPopover] = useState(false);

  const animationConfig = useMemo(() => ({ duration }), [duration]);

  const openPopover = useCallback(() => {
    setShowPopover(true);
  }, []);

  const closePopover = useCallback(() => {
    setShowPopover(false);
  }, []);

  const handleClose = () => {
    closeOnClickOverlay && closePopover();
  };

  useImperativeHandle(ref, () => ({
    show: () => openPopover(),
    hide: () => closePopover(),
  }));

  const _onSelect = (value: PopoverAction, index: number) => {
    if (onSelect) {
      onSelect(value, index);
    }
    closeOnClickPopover && closePopover();
  };

  const renderContent = () => {
    const items = Children.map(content, (child, index) => {
      if (!isValidElement(child)) {
        return child;
      }

      return cloneElement(
        child as React.ReactElement<PopoverItemProps<RNPopoverView>>,
        {
          // @ts-ignore
          onSelect: (v: PopoverAction) => _onSelect(v, index),
          dark: mode === 'dark',
        }
      );
    });

    if (typeof renderContentComponent === 'function') {
      return renderContentComponent(items, closePopover);
    }

    return <ScrollView keyboardShouldPersistTaps="handled">{items}</ScrollView>;
  };

  const renderAction = (action: PopoverAction, index: number) => {
    const {
      icon,
      text,
      color,
      disabled: actionDisabled,
      divider = false,
      style: actionStyle,
    } = action;
    const actionTextStyle =
      mode === 'dark' ? CV.popover_text_color_dark : CV.popover_text_color;
    const textColor =
      color ||
      (actionDisabled ? CV.popover_text_color_disabled : actionTextStyle);

    return (
      <TouchableOpacity
        key={index}
        disabled={actionDisabled}
        onPress={() => _onSelect(action, index)}
        activeOpacity={CV.button_active_opacity}
      >
        <View
          style={[
            STYLES.action,
            divider ? STYLES.item_inner_divider : null,
            actionStyle,
          ]}
        >
          {icon && (
            <View style={STYLES.icon_wrapper}>
              {cloneElement(icon as ReactElement, {
                color: textColor,
                size: CV.popover_action_text_font_size,
              })}
            </View>
          )}
          <Text
            style={[
              STYLES.text_action,
              icon ? STYLES.text_with_icon : null,
              { color: textColor },
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity
        ref={touchable}
        onPress={openPopover}
        style={[STYLES.trigger, triggerStyle]}
        disabled={!closeOnClickPopover}
        activeOpacity={CV.button_active_opacity}
      >
        {isValidElement(children)
          ? cloneElement(children, {
              // @ts-ignore
              onPress: openPopover,
            })
          : children}
      </TouchableOpacity>
      <RNPopoverView
        {...restProps}
        from={touchable as unknown as React.RefObject<View>}
        isVisible={showPopover}
        placement={PlacementMap[placement]}
        backgroundStyle={[STYLES.background, backgroundStyle]}
        popoverStyle={[
          STYLES.content,
          mode === 'dark' ? STYLES.content_dark : null,
          shadow ? STYLES.content_shadow : null,
          content && mode === 'dark' ? STYLES.text_content_dark : null,
          popoverStyle,
        ]}
        arrowSize={!arrow ? arrowSize : defaultArrowSize}
        offset={offset}
        onRequestClose={handleClose}
        // @ts-ignore
        statusBarTranslucent={statusBarTranslucent}
        animationConfig={animationConfig}
      >
        {content
          ? renderContent()
          : actions.length > 0
          ? actions.map(renderAction)
          : null}
      </RNPopoverView>
    </>
  );
});

export default memo(Popover);
