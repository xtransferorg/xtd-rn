import React, { FC, useState, useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { cloneDeep, isFunction, omit } from 'lodash';

import Button from '../Button';
import { Fill } from '../Button/interface';
import ButtonGroup from './ButtonGroup';
import ShouldRender from '../ShouldRender';
import type { ButtonGroupProps } from './ButtonGroup';
import { mergeProps } from '../../core/helpers';
import type { ButtonOptionGroupProps } from '../../core';
import Dropdown from '../Dropdown';
import { useLocale } from '../Locale/locale';
import styles from './styles/open-panel.style';

const { useDropdownItemConfig } = Dropdown;

export interface OpenPanelProps extends ButtonGroupProps {
  panelMaxHeight?: number;
}

const defaultProps = {};

// 单选情况时，没有重置、确定按钮
// 多选情况是，才会有重置、确定按钮
const OpenPanel: FC<OpenPanelProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const locale = useLocale().OptionGroup;
  // 获取DropdownItem内部上下文
  const config = useDropdownItemConfig();

  const valueCopy = cloneDeep(props.value);
  const optionsCopy = cloneDeep(props.options);
  // 暂存原始的onChange
  const primitiveOnChange = props.onChange;
  // 是单选的还是多选的情况
  const isMultiple = props.multiple;

  const [value, setValue] = useState(valueCopy);

  // 进行内部状态的更新
  const handleChange: ButtonOptionGroupProps<any>['onChange'] = (v) => {
    setValue(v);

    // 如果是单选情况，值发生变化之后，需要关闭面板
    if (!isMultiple) {
      closePanel();
    }
  };

  // 重置
  const reset = useCallback(() => {
    setValue([]);
  }, [setValue]);

  // 确定
  const confirm = () => {
    updateState();
    closePanel();
  };

  // 关闭面板
  const closePanel = useCallback(() => {
    config?.setActive?.(false);
    config?.setVisible?.(false);
  }, [config]);

  // 将内部的状态同步到外部
  const updateState = useCallback(() => {
    if (isFunction(primitiveOnChange)) {
      primitiveOnChange(value);
    }
  }, [primitiveOnChange, value]);

  // 监听value的变化
  useEffect(() => {
    // 这里需要单独处理一下单选的情况
    if (!isMultiple) {
      updateState();
    }
  }, [isMultiple, updateState, value]);

  return (
    <View>
      {/* 选项区域 */}
      <View
        style={StyleSheet.flatten([
          styles.panel,
          {
            maxHeight: props.panelMaxHeight,
          },
        ])}
      >
        <ButtonGroup
          // 这一行必须放在前面，后面的属性可能要覆盖props里面的属性
          {...omit(props, ['panelMaxHeight'])}
          wrap
          gapVertical={10}
          style={styles.btnGroupWrapper}
          // 内部value
          value={value}
          // 内部options
          options={optionsCopy}
          onChange={handleChange}
        />
      </View>

      {/* 按钮区域 */}
      {/* 按钮区域的条件渲染控制，当是多选的情况时展示 */}
      <ShouldRender condition={Boolean(props.multiple)}>
        <View style={styles.btnGroup}>
          <Button style={styles.btn} fill={Fill.outline} onPress={reset}>
            {locale.resetButtonText}
          </Button>
          <View style={styles.btnGroupSpace} />
          <Button style={styles.btn} onPress={confirm}>
            {locale.confirmButtonText}
          </Button>
        </View>
      </ShouldRender>
    </View>
  );
};

export default OpenPanel;
