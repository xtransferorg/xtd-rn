import React, { memo } from 'react';
import { Text, View } from 'react-native';
import createStyle from './styles/index-bar.style';
import { useTheme } from '../Theme/Theme';
import OptionGroup from '../OptionGroup';
import { OptionGroupProps } from '../OptionGroup/OptionGroup';
import type { IndexBarBaseData, IndexBarValue } from './interface';

export interface ListHeaderProps<
  Data extends IndexBarBaseData = IndexBarBaseData
> {
  visible?: boolean;
  height: number;
  hotGroups?: Data[];
  hotSectionValue?: string[];
  multiple?: boolean;
  hotSectionTitle?: React.ReactNode;
  onChange?: (vals: IndexBarValue) => void;
}
const ListHeader = (props: ListHeaderProps) => {
  const {
    visible = false,
    height,
    hotGroups,
    hotSectionTitle,
    hotSectionValue,
    multiple,
    onChange,
  } = props;

  const token = useTheme();
  const styles = createStyle(token);
  const display = visible ? 'flex' : 'none';

  return (
    <View style={{ height, display }}>
      <Text style={styles.hotSectionTitle}>{hotSectionTitle}</Text>
      <OptionGroup
        multiple={multiple}
        options={(hotGroups as OptionGroupProps['options']) ?? []}
        style={[styles.hotSection, { height: height - 32 }]}
        value={hotSectionValue}
        onChange={onChange}
      />
    </View>
  );
};

export default memo(ListHeader);
