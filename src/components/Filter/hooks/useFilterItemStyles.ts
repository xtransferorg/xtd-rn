import type { ViewStyle } from 'react-native';

import Dropdown from '../../Dropdown';
import { FilterLayoutType } from '../interface';

const { useDropdownConfig } = Dropdown;

export default function useFilterItemStyles() {
  const styles: {
    titleStyle: ViewStyle;
  } = {
    /**
     * 每项的样式
     */
    titleStyle: {},
  };

  const config = useDropdownConfig();

  // 等距布局
  if (config.filterLayoutType === FilterLayoutType.Equidistance) {
    styles.titleStyle.flex = undefined;
    styles.titleStyle.paddingHorizontal = 11;
  }

  return styles;
}
