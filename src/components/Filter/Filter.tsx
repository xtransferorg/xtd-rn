import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import Dropdown from '../Dropdown';
import type { DropdownProps } from '../Dropdown/interface';
import { mergeProps } from '../../core/helpers';

import createStyle from './styles/filter.style';
import { useTheme } from '../Theme/Theme';

export interface FilterProps extends DropdownProps {}

const defaultProps = {};

const Filter: FC<FilterProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const token = useTheme();
  const styles = createStyle(token);

  return (
    <Dropdown
      {...props}
      divider={false}
      style={StyleSheet.flatten([styles.wrapper, props?.style || {}])}
    />
  );
};

export default Filter;
