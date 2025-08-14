import isArray from 'lodash/isArray';

import type {
  PickerValue,
  PickerOption,
  PickerOptionMultiple,
  PickerOptionMultipleWidthDefaultValue,
  PickerOptionCascade,
  PickerOptionType,
  Column,
} from '../interface';

/**
 * 获取当前选项是什么数据
 * @description cascade 联级选择，multiple 多列选择，single 单列选择
 */
export const getDataType = (
  columns: Column[] | Column[][]
): PickerOptionType => {
  const firstColumn = columns[0];

  if (firstColumn) {
    if ('children' in firstColumn) {
      return 'cascade';
    }

    if (
      'options' in firstColumn ||
      isArray(firstColumn as unknown as PickerOption[])
    ) {
      return 'multiple';
    }
  }

  return 'single';
};

export const findDefaultValue = (
  value: PickerValue,
  options: PickerOption[]
) => {
  // value 是否在 options 内
  const valueIndex = options.findIndex((item) => item.value === value);

  // @ts-ignore
  if (valueIndex < 0 || options[valueIndex].disabled) {
    // 重新找一个
    const index = options.findIndex((item) => !item.disabled);

    if (index < 0) {
      return null;
    }

    // @ts-ignore
    return options[index].value;
  }

  return value;
};

/** 把联级选择的所有子级找到 */
export const findNextAllColumns = (columns: PickerOptionCascade[]) => {
  const options: PickerOption[][] = [];
  const values: PickerValue[] = [];

  const findNext = (c: PickerOptionCascade[]) => {
    if (c.length) {
      options.push(c);
      // @ts-ignore
      values.push(c[0].value);

      // @ts-ignore
      const cc = c[0].children || [];

      findNext(cc);
    }
  };

  findNext(columns);

  return {
    options,
    values,
  };
};

/** 通过已有值找到联级选择的所有子级找到 */
export const findAllColumnsByValues = (
  columns: PickerOptionCascade[],
  values: PickerValue[]
): {
  options: PickerOption[][];
  values: PickerValue[];
} => {
  const options: PickerOption[][] = [];

  // TODO 补全候选项还是不需要管

  let currentColumn = columns;
  const vals = [...values];

  values.forEach((value, index) => {
    options.push(currentColumn);

    const nextIndex = currentColumn.findIndex((item) => item.value === value);

    currentColumn = currentColumn[nextIndex]?.children || [];

    if (currentColumn[0]?.value !== undefined && !values[index + 1]) {
      vals.push(currentColumn[0]?.value);
    }
  });

  if (vals.length !== values.length) {
    return findAllColumnsByValues(columns, vals);
  }

  return {
    options,
    values,
  };
};

/** 构建选项 */
export const buildOptions = (
  dataType: PickerOptionType,
  columns: Column[] | Column[][],
  values?: PickerValue[]
): [PickerOption[][], PickerValue[], PickerValue[]] => {
  switch (dataType) {
    case 'cascade': {
      let data;
      if (!values?.length) {
        data = findNextAllColumns(columns as PickerOptionCascade[]);
      } else {
        data = findAllColumnsByValues(columns as PickerOptionCascade[], values);
      }

      return [data.options, [], data.values];
    }

    case 'multiple': {
      const mixOptions: PickerOption[][] = [];
      const defaultValues: PickerValue[] = [];

      (columns as unknown as PickerOptionMultiple[]).forEach((item) => {
        const isOption = isArray(item as PickerOption[]);

        // 默认值需要检验它是否合法
        if (isOption) {
          const option = item as PickerOption[];
          mixOptions.push(option);
          // @ts-ignore
          defaultValues.push(findDefaultValue(option[0].value, option));
        } else {
          const { options: _options, defaultValue: _defaultValue } =
            item as PickerOptionMultipleWidthDefaultValue;
          mixOptions.push(_options);
          // @ts-ignore
          defaultValues.push(findDefaultValue(_defaultValue, _options));
        }
      });

      return [mixOptions, defaultValues, []];
    }

    default: {
      const options = [columns as PickerOption[]];
      const firstColumn = options?.[0]?.[0];
      let defaultValues: PickerValue[] = [];
      if (firstColumn) {
        defaultValues = [firstColumn.value];
      }
      return [options, defaultValues, []];
    }
  }
};

/** 构建选中的值 */
export const buildSelectedValue = (
  values: PickerValue[],
  options: PickerOption[][]
): [PickerValue[], Column[]] => {
  const selectedColumns = values?.map?.((v, index) => {
    // @ts-ignore
    const vIndex = options[index]?.findIndex((o) => o?.value === v);

    // @ts-ignore
    return options?.[index]?.[vIndex];
  });

  // @ts-ignore
  return [values, selectedColumns];
};
