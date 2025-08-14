import isNil from 'lodash/isNil';
import isFunction from 'lodash/isFunction';
import React, { useMemo, memo, forwardRef, useRef } from 'react';
import type { Ref } from 'react';

import { getDefaultValue } from '../helpers';
import { usePersistFn, useUpdateEffect } from '../hooks';
import { useControllableValue } from 'ahooks';
import useState from '../hooks/useStateUpdate';
import { useLocale } from '../../components/Locale/locale';

import { useDropdownConfig } from './context';
import DropdownSelector from './dropdown-selector';
import DropdownText from './dropdown-text';
import type {
  DropdownItemProps,
  DropdownItemOption,
  ItemRef,
} from './interface';

const DropdownItem = <T,>(
  {
    titleStyle,
    titleTextStyle,
    options,
    duration,
    zIndex,
    closeOnPressOutside,
    loading,
    placeholder,

    search,
    onSearch,
    cancellable,
    customPanelContent,
    onPanelOpen,
    onPanelClosed,
    children,
    itemLabel,
    useNative,
    overlay,

    ...restProps
  }: DropdownItemProps<T>,
  ref: Ref<ItemRef>
) => {
  const locale = useLocale().DropdownItem;
  const config = useDropdownConfig();
  const [active, setActive] = useState(false);
  const [value, onChange] = useControllableValue<T>(restProps);
  const _selectOption = useMemo(() => {
    if (loading) {
      return {
        label: locale.labelLoadingText,
        value: null,
      };
    }

    let selectOption = {} as DropdownItemOption<T>;

    const findX = (list: DropdownItemOption<T>[]) => {
      list.forEach((item) => {
        if (item.value === value) {
          selectOption = item;
        } else if (item.children?.length) {
          findX(item.children);
        }
      });
    };

    findX(options);

    return selectOption;
  }, [loading, locale.labelLoadingText, options, value]);

  duration = getDefaultValue(duration, config.duration);
  zIndex = getDefaultValue(zIndex, config.zIndex);
  closeOnPressOutside = getDefaultValue(
    closeOnPressOutside,
    config.closeOnPressOutside
  );

  // 当面板打开时触发
  const handlePanelOpen = () => {
    if (isFunction(onPanelOpen)) {
      onPanelOpen();
    }
  };

  // 当面板关闭后触发
  const handlePanelClosed = () => {
    if (isFunction(onPanelClosed)) {
      onPanelClosed();
    }
  };

  const instanceRef = useRef<any>(null);

  const onPressText = usePersistFn(() => {
    // 计算 Menu 的 Top 和元素高度
    config.MenuRef.current.measure((_x, _y, _width, height, _pageX, pageY) => {
      setActive(true);

      // 当面板展开时，触发自定义回调
      handlePanelOpen();

      instanceRef.current = DropdownSelector(
        {
          targetHeight: height,
          targetPageY: pageY,
          defaultValue: value,
          options,
          duration,
          zIndex,
          closeOnPressOutside,
          overlay,
          activeColor: config.activeColor,
          search,
          onSearch,
          cancellable,
          // 自定义展开面板内容
          customPanelContent,
          useNative,
          // 设置每项是否激活状态
          setActive,
          // 面板关闭之后的回调
          onClosed: handlePanelClosed,
          // 面板内容
          children,
        },
        ref
      );

      instanceRef.current.promise
        .then((d: any) => {
          onChange(d.value, d.data);
        })
        .catch(() => {})
        .finally(() => {
          setActive(false);
        });
    });
  });

  useUpdateEffect(() => {
    instanceRef.current?.update(children);
  }, [children]);

  // 获取title
  const getTitle = () => {
    // 如果有label，则优先返回label
    if (!isNil(itemLabel)) {
      return itemLabel;
    }
    return !isNil(_selectOption.label) ? _selectOption.label : placeholder;
  };

  return (
    <DropdownText
      {...restProps}
      style={titleStyle}
      textStyle={titleTextStyle}
      // @ts-ignore
      title={getTitle()}
      // @ts-ignore
      badge={_selectOption.badge}
      active={active}
      onPress={onPressText}
      disabled={restProps.disabled || loading}
    />
  );
};

export default memo(forwardRef(DropdownItem)) as <T>(
  p: DropdownItemProps<T>,
  ref: Ref<ItemRef>
) => React.ReactElement;
