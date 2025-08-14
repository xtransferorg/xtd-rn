import isNil from 'lodash/isNil';
import isFunction from 'lodash/isFunction';
import React, {
  useCallback,
  useMemo,
  useEffect,
  memo,
  isValidElement,
  useImperativeHandle,
  forwardRef,
  ReactNode,
} from 'react';
import type { Ref } from 'react';
import { Text, Keyboard } from 'react-native';

import { getDefaultValue } from '../helpers';
import { usePersistFn } from '../hooks';
import useState from '../hooks/useStateUpdate';
import Portal from '../portal';
import Space from '../space';
import Theme from '../theme';
import Tree from '../tree';
import type { TreeOption, TreeValue } from '../tree/interface';

import { DropdownItemConfig } from './context';
import DropdownBadge from './dropdown-badge';
import DropdownPopup from './dropdown-popup';
import type {
  DropdownItemOption,
  DropdownSelectorMethodProps,
  DropdownItemContext,
  ItemRef,
} from './interface';
import { varCreator, styleCreator } from './style';
import { Deferred } from './deferred';

const DropdownSelectorMethod = <T,>(
  {
    targetHeight,
    targetPageY,
    onConfirm,
    onCancel,
    defaultValue,
    options,
    duration,
    zIndex,
    closeOnPressOutside,
    onClosed,
    activeColor,
    customPanelContent,
    setActive,
    overlay,

    search,
    onSearch,
    cancellable,
    children,
    useNative,
  }: DropdownSelectorMethodProps<T>,
  ref: Ref<ItemRef>
) => {
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  const CV_TREE = Theme.createVar(TOKENS, Tree.varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);

  const _activeColor = getDefaultValue(activeColor, CV.dropdown_active_color);

  const [visible, setVisible] = useState(false);
  const treeOptions = useMemo(() => {
    const convertOption = (ops: DropdownItemOption<T>[]) => {
      const nodes: TreeOption[] = [];

      ops.forEach((item) => {
        const _opt: TreeOption = {
          label: item.label,
          value: item.value as unknown as number | string,
          children: item.children?.length ? convertOption(item.children) : [],
          render: isNil(item.badge)
            ? undefined
            : (p) => {
                return (
                  <Space
                    direction="horizontal"
                    align="center"
                    style={STYLES.item_tree_item}
                  >
                    <Text
                      style={[
                        {
                          fontSize: CV_TREE.tree_item_text_font_size,
                          color: CV_TREE.tree_item_text_color,
                        },
                        p.labelHighlight
                          ? {
                              color: p.activeColor,
                            }
                          : null,
                      ]}
                      numberOfLines={1}
                    >
                      {p.label}
                    </Text>
                    <DropdownBadge count={item.badge} />
                  </Space>
                );
              },
        };
        nodes.push(_opt);
      });

      return nodes;
    };

    return convertOption(options);
  }, [
    CV_TREE.tree_item_text_color,
    CV_TREE.tree_item_text_font_size,
    STYLES.item_tree_item,
    options,
  ]);

  useEffect(() => {
    setVisible(true);
  }, []);

  const onPressShade = useCallback(() => {
    setVisible(false);
    Keyboard.dismiss();
    onCancel?.();
  }, [onCancel]);

  const onRequestClose = usePersistFn(() => {
    onPressShade();
    return true;
  });

  const onChangePersistFn = usePersistFn((v: TreeValue) => {
    setVisible(false);
    Keyboard.dismiss();

    const findNodeByValue = (
      tree: DropdownItemOption<T>[],
      value: T
      // @ts-ignore
    ): DropdownItemOption<T> => {
      for (const item of tree) {
        if (item.value === value) {
          return item;
        }
        if (item.children) {
          const _v = findNodeByValue(item.children, value);
          if (_v) {
            return _v;
          }
        }
      }
    };

    const _v = v as unknown as T;
    onConfirm?.(_v as unknown as T, findNodeByValue(options, _v));
  });

  // DropdownItem value
  const dropdownItemValue: DropdownItemContext = {
    setActive,
    setVisible,
    close: () => {
      setActive?.(false);
      setVisible(false);
    },
  };

  useImperativeHandle(ref, () => ({
    close: () => {
      setActive?.(false);
      setVisible(false);
    },
  }));

  return (
    <DropdownItemConfig.Provider value={dropdownItemValue}>
      <DropdownPopup
        targetHeight={targetHeight}
        targetPageY={targetPageY}
        closeOnPressOutside={closeOnPressOutside}
        duration={duration}
        zIndex={zIndex}
        onPressShade={onPressShade}
        visible={visible}
        onRequestClose={onRequestClose}
        onClosed={onClosed}
        onPressOverlay={onPressShade}
        useNative={useNative}
        overlay={overlay}
      >
        {/* 渲染面板内容 */}
        {children}

        {/* 如果有自定义的面板内容，则渲染 */}
        {isValidElement(customPanelContent) && customPanelContent}

        {treeOptions.length !== 0 && (
          <Tree
            defaultExpandAll
            activeColor={_activeColor}
            minHeight={false}
            search={search}
            defaultValue={defaultValue as unknown as string}
            options={treeOptions}
            // @ts-ignore
            onChange={onChangePersistFn}
            onSearch={onSearch}
            cancellable={cancellable}
          />
        )}
      </DropdownPopup>
    </DropdownItemConfig.Provider>
  );
};

const DropdownSelectorMethodMemo = memo(forwardRef(DropdownSelectorMethod)) as <
  T
>(
  p: DropdownSelectorMethodProps<T>,
  ref: Ref<ItemRef>
) => React.ReactElement;

const DropdownSelector = <T,>(
  opt: DropdownSelectorMethodProps<T>,
  ref: Ref<ItemRef>
) => {
  const deferred = new Deferred<{ value: T; data: DropdownItemOption<T> }>();

  const getDropdown = (props: any, ref: any) => (
    <DropdownSelectorMethodMemo<T>
      {...props}
      onCancel={() => {
        opt.onCancel?.();
        deferred.reject(new Error());
      }}
      onConfirm={(v, d) => {
        opt.onConfirm?.(v, d);
        deferred.resolve({
          value: v,
          data: d,
        });
      }}
      onClosed={() => {
        // opt里的onClosed会被覆盖掉，所以这里手动触发一下
        if (isFunction(opt.onClosed)) {
          opt.onClosed();
        }
        Portal.remove(key);
      }}
      ref={ref}
    />
  );

  const key = Portal.add(getDropdown(opt, ref));

  const update = (children: ReactNode) => {
    Portal.update(key, getDropdown({ ...opt, children }, ref));
  };

  return {
    promise: deferred.promise,
    update,
  };
};

export default DropdownSelector;
