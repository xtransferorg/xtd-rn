import React, { FC, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { mergeProps } from '../../core/helpers';
import ShouldRender from '../ShouldRender';
import Dropdown from '../Dropdown';
import useOperatePanelStyles from './hooks/useOperatePanelStyles';
import { defaultColor } from '../../common/colors';
import type { ButtonGroupProps } from './ButtonGroup';
import OpenPanel from './OpenPanel';

import styles from './styles/operate-panel.style';
import { useLocale } from '../Locale/locale';

export interface OperatePanelProps extends ButtonGroupProps {
  /**
   * 是否渲染展开面板
   * @default false
   */
  operate?: boolean;
}

const defaultProps = {
  operate: false,
};

const OperatePanel: FC<OperatePanelProps> = (p) => {
  const allProps = mergeProps(defaultProps, p);
  const { allLabels } = useLocale().OptionGroup;

  const { operate, ...props } = allProps;

  // 记录操作面板的展开收起状态
  const [panelOpen, setPanelOpen] = useState<boolean>(false);

  const { barStyle } = useOperatePanelStyles(panelOpen);

  return (
    <ShouldRender condition={operate}>
      {/* 吸附条 */}
      <View style={StyleSheet.flatten([styles.operate, barStyle])}>
        {/* 左侧bar */}
        {/* 当操作面板展开时展示 */}
        <ShouldRender condition={panelOpen}>
          <View style={StyleSheet.flatten([styles.leftBar])}>
            <Text style={StyleSheet.flatten([styles.label])}>{allLabels}</Text>
          </View>
        </ShouldRender>

        {/* 线性渐变色 */}
        {/* 当操作面板关闭时展示线性渐变 */}
        <ShouldRender condition={!panelOpen}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)']}
            locations={[0.2, 0.8]}
            style={StyleSheet.flatten([styles.linear])}
          />
        </ShouldRender>
        {/* 当操作面板展开时展示固定宽度的View */}
        <ShouldRender condition={panelOpen}>
          <View style={StyleSheet.flatten([styles.linear])} />
        </ShouldRender>

        {/* 展开区域 */}
        <View style={StyleSheet.flatten([styles.operateArea])}>
          <Dropdown
            divider={false}
            style={StyleSheet.flatten([styles.dropdown])}
          >
            <Dropdown.Item
              options={[]}
              customPanelContent={<OpenPanel {...props} />}
              arrowIconColor="#222222"
              arrowIconActiveColor={defaultColor}
              iconSize={14}
              titleStyle={StyleSheet.flatten([styles.item])}
              onPanelOpen={() => setPanelOpen(true)}
              onPanelClosed={() => setPanelOpen(false)}
            />
          </Dropdown>
        </View>
      </View>
    </ShouldRender>
  );
};

export default OperatePanel;
