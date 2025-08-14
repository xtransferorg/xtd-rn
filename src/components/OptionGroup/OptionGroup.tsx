import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import { StyleSheet, View } from 'react-native';
import { isNumber } from 'lodash';

import { mergeProps } from '../../core/helpers';
import type { OperatePanelProps } from './OperatePanel';
import OperatePanel from './OperatePanel';
import ButtonGroup from './ButtonGroup';
import type { ButtonGroupProps } from './ButtonGroup';

import styles from './styles/option-group.style';
import { OpenPanelProps } from './OpenPanel';

export interface OptionGroupProps
  extends ButtonGroupProps,
    Pick<OperatePanelProps, 'operate'>,
    OpenPanelProps {}

const defaultProps = {};

export interface OptionGroupRef {}

const OptionGroup: ForwardRefRenderFunction<
  OptionGroupRef,
  OptionGroupProps
> = (p, ref) => {
  const allProps = mergeProps(defaultProps, p);

  const { operate, fakeRightPadding, ...props } = allProps;

  // 获取选项条右侧fake padding
  const getFakeRightPadding = () => {
    if (operate) {
      return isNumber(fakeRightPadding) ? fakeRightPadding : 34;
    }
    return undefined;
  };

  useImperativeHandle(ref, () => ({}));

  return (
    <View style={StyleSheet.flatten([styles.wrapper])}>
      <ButtonGroup
        fakeRightPadding={getFakeRightPadding()}
        itemStyle={allProps.scrollable ? { marginBottom: 0 } : null}
        {...props}
      />
      <OperatePanel isPanel operate={operate} {...props} />
    </View>
  );
};

export default forwardRef(OptionGroup);
