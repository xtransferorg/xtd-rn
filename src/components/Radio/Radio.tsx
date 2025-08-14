import { RadioProps } from './interface';
import { isUndefined } from 'lodash';
import { useControllableValue } from 'ahooks';
import Checkbox from '../Checkbox';
import React from 'react';
// import RadioIcon from './RadioIcon';

const { Group, Icon: RadioIcon } = Checkbox;

const Radio = <T,>({ children, onChange, ...restProps }: RadioProps<T>) => {
  const [value, onValueChange] = useControllableValue<T | T[]>(restProps);

  const onInnerChange = (
    data: T[] | T,
    options: { value: T; label: string; disabled?: boolean }[]
  ) => {
    if (!isUndefined(data)) {
      onValueChange(data);
      onChange?.(data, options);
    }
  };

  return (
    <Group
      {...restProps}
      value={value}
      onChange={onInnerChange}
      multiple={false}
      renderIcon={(props) => <RadioIcon {...props} />}
    >
      {children}
    </Group>
  );
};

export default Radio;
