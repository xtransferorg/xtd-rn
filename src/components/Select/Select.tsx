import React, { useState, isValidElement, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageStyle,
  StyleProp,
} from 'react-native';
import { isString, isUndefined, omit } from 'lodash';
import {
  FloatingLayer,
  ShouldRender,
  Button,
  Input,
  InputInstance,
} from '@xrnjs/ui';
import Checkbox from './Checkbox';
import createStyles from './styles/Select.style';
import { SelectProps, Option, Group } from './interface';
import { Type } from './enum';
import { IconXSearchfor1, IconXRightsmall1 } from '../../icons/index';
import { useLocale } from '../Locale/locale';
import { FloatingLayerRef } from '../FloatingLayer/interface';
import { PlatformOS, useKeyboard } from '../../utils';
import { useMaxHeight } from '../../utils';
import ErrorBlock from '../ErrorBlock/errorBlock';
import { useTheme } from '../Theme';
import { renderHighLightTextLikeJSX } from '../../core/helpers';
import Image from '../Image';
import { ImageProps } from '../Image/interface';

const isValidString = (v: React.ReactNode) => isString(v) && v !== '';

const Select = ({
  type,
  visible,
  options,
  defaultValue = '',
  title,
  showFooter = true,
  showConfirmButton = false,
  value,
  currencySelectProps,
  showSearch = false,
  searchInputProps = {},
  cancelable = true,
  customFooter,
  contentStyle,
  itemFullContainer = false,
  dataEmptyText,
  searchEmptyText,
  onPressOverlay,
  onConfirm,
  onCancel,
  onChange,
  onSearch,
  filterOption,
  onRepeatClick,

  testID = '',
  onDisabledPress,
  extra,
  ...resetProps
}: SelectProps) => {
  const locale = useLocale();
  const [selectedValues, setSelectedValues] = useState(value ?? defaultValue);
  const [_options, setOptions] = useState(options);
  const [searchValue, setSearchValue] = useState('');
  const [containerHeight, setContainerHeight] = useState(0);
  const searchRef = useRef<InputInstance>(null);
  const floatingLayerRef = useRef<FloatingLayerRef>(null);
  const floatingLayerHeight = useRef(0);
  const maxHeight = useMaxHeight();
  const token = useTheme();
  const styles = createStyles(token);

  const onChangeFn = (values: string | string[]) => {
    if (type === Type.radio && !cancelable && isUndefined(values)) {
      onRepeatClick?.();
    } else {
      setSelectedValues(values);
      onChange?.(values);
    }
  };

  const onConfirmFn = () => {
    onConfirm?.(selectedValues, searchValue);
  };

  const addLabelPosition = (currentOptions: Option[]) => {
    return currentOptions?.map?.((option) => {
      const { labelTextStyle, subLabelTextStyle, contentLabelTextStyle } =
        option;
      return {
        ...option,
        labelPosition: option.labelPosition || 'left',
        testID: `${testID}${option.value}`,
        labelTextStyle: StyleSheet.flatten([styles.label, labelTextStyle]),
        subLabelTextStyle: StyleSheet.flatten([
          styles.subLabel,
          subLabelTextStyle,
        ]),
        contentLabelTextStyle: StyleSheet.flatten([
          styles.contenLabel,
          contentLabelTextStyle,
        ]),
      };
    });
  };

  const renderOptions = (currentOptions: Option[]) => {
    return (
      <Checkbox.Group<string>
        gap={0}
        style={[styles.checkboxGroupStyle, contentStyle]}
        checkboxComponentStyle={
          itemFullContainer ? styles.itemFullContainer : null
        }
        multiple={type === Type.checkbox}
        defaultValue={defaultValue}
        value={value}
        options={addLabelPosition(currentOptions)}
        onChange={onChangeFn}
        highlight={searchValue}
        onDisabledPress={(option) => onDisabledPress?.(option)}
      />
    );
  };

  const renderRedirectOptions = (currentOptions: Option[]) =>
    currentOptions?.map?.((option) => renderRedirectItem(option));

  const renderGroups = (groups: Group[]) => {
    if (type === Type.redirect) {
      return (
        <View style={styles.groupContainer}>
          {groups.map((group, i) => (
            <View style={styles.groupItem} key={`group-${i}`}>
              <Text style={styles.groupTitle}>{group.label}</Text>
              {renderRedirectOptions(group.children)}
            </View>
          ))}
        </View>
      );
    }
    return (
      <View style={styles.groupContainer}>
        {groups.map((group, i) => (
          <View style={styles.groupItem} key={`group-${i}`}>
            <Text style={styles.groupTitle}>{group.label}</Text>
            {renderOptions(group.children)}
          </View>
        ))}
      </View>
    );
  };

  // 判断是否是分组数据， 只有分组有children
  const isGroup = (group: Group[]) => {
    const firstOpt = group?.[0] as Group;

    return firstOpt?.children instanceof Array;
  };
  const renderContent = () => {
    if (options.length === 0) {
      return (
        <View style={styles.emptyNoDataContainer}>
          <ErrorBlock
            title={dataEmptyText || locale.Select.empty}
            status="empty"
          />
        </View>
      );
    }

    if (_options.length === 0) {
      return (
        <View style={styles.emptySearchContainer}>
          <ErrorBlock
            title={searchEmptyText || locale.Select.empty}
            status="empty"
          />
        </View>
      );
    }

    if (isGroup(_options as Group[])) {
      // 分组？
      return renderGroups(_options as Group[]);
    }

    return type === Type.redirect ? (
      <ScrollView
        contentContainerStyle={[styles.redirectContainer, contentStyle]}
      >
        {renderRedirectOptions(_options as Option[])}
      </ScrollView>
    ) : (
      renderOptions(_options as Option[])
    );
  };

  const renderRedirectItem = (option: Option) => {
    return (
      <TouchableOpacity
        testID={`${testID}${option.value}`}
        key={'renderRedirectItem ' + option.value}
        onPress={() => {
          if (option?.disabled) {
            onDisabledPress?.(option);
            return;
          }

          onChangeFn(option.value);
        }}
        style={styles.itemContainer}
      >
        <ShouldRender condition={isValidString(option.prefixIcon)}>
          <Image
            {...((currencySelectProps?.imageProps as ImageProps) || {})}
            source={{ uri: option.prefixIcon?.toString() }}
            style={StyleSheet.flatten([
              styles.default_img,
              currencySelectProps?.imageStyle as StyleProp<ImageStyle>,
              option.disabled && styles.disabled_img,
            ])}
          />
        </ShouldRender>
        <ShouldRender condition={isValidElement(option.prefixIcon)}>
          {option.prefixIcon}
        </ShouldRender>

        <View style={styles.left_content}>
          <View>
            {renderHighLightTextLikeJSX(
              option.label,
              StyleSheet.flatten([
                styles.label,
                option.disabled && styles.labelDisabled,
              ]),
              searchValue
            )}
            {renderHighLightTextLikeJSX(
              option.subLabel,
              StyleSheet.flatten([
                styles.subLabel,
                option.disabled && styles.subLabelDisabled,
              ]),
              searchValue
            )}
          </View>
          {renderHighLightTextLikeJSX(
            option.contentLabel,
            StyleSheet.flatten([
              styles.contenLabel,
              option.disabled && styles.contentLabelDisabled,
            ]),
            searchValue
          )}
        </View>
        <View
          style={StyleSheet.flatten([
            styles.right_icon,
            option.disabled && styles.disabled_img,
          ])}
        >
          <IconXRightsmall1
            size={token['--font-size-3']}
            fillColor={token['--color-text-4']}
          />
        </View>
      </TouchableOpacity>
    );
  };
  /**
   * 数据内容是否包含某字符串信息 element元素默认返回true（与之前逻辑保持一致）
   */
  const isContainStr = ({
    data,
    searchStr,
  }: {
    data: React.ReactNode;
    searchStr: string;
  }) => {
    if (!data) return false; // 无数据默认不匹配

    // 非有效元素
    if (!isValidElement(data)) {
      return String(data)
        .toLocaleLowerCase()
        .includes(searchStr.toLocaleLowerCase());
    }

    return true; // 元素默认包含
  };

  /**
   * 根据搜索内容筛选选择项
   */
  const doFilterOptions = ({
    optionList,
    searchStr,
  }: {
    optionList: Option[];
    searchStr: string;
  }) => {
    return optionList.filter((option: Option) => {
      if (filterOption) {
        return filterOption(searchStr, option);
      }

      return (
        isContainStr({ data: option?.label, searchStr }) ||
        isContainStr({ data: option?.subLabel, searchStr }) ||
        isContainStr({ data: option?.contentLabel, searchStr })
      );
    });
  };

  /**
   * 根据搜索内容筛选选择项（分组形式）
   */
  const doFilterGroupOptions = ({
    groupList,
    searchStr,
  }: {
    groupList: Group[];
    searchStr: string;
  }) => {
    const filterGroup: Group[] = [];
    groupList.forEach((group) => {
      const optionList = doFilterOptions({
        optionList: group?.children,
        searchStr,
      });
      if (optionList.length > 0) {
        filterGroup.push({
          label: group.label,
          children: optionList,
        });
      }
    });

    return filterGroup;
  };

  const filterOptions = (searchStr: string) => {
    if (!searchStr || options?.length < 1) {
      // 优化，若未输入内容 或 无列表内容，返回全部内容即可
      return [...options];
    }

    if (isGroup(options as Group[])) {
      return doFilterGroupOptions({
        groupList: options as Group[],
        searchStr: searchValue,
      });
    }

    return doFilterOptions({
      optionList: options as Option[],
      searchStr: searchValue,
    });
  };

  const onChangeSearch = (data: string) => {
    if (isUndefined(data)) {
      data = '';
    }
    setSearchValue(data);

    visible && onSearch?.(data);
  };

  useEffect(() => {
    // 外部传入的options变化时，更新内部options
    const searchOptions = filterOptions(searchValue) as Option[] | Group[];
    setOptions(searchOptions);
  }, [options, searchValue]);

  const onClosed = () => {
    setSearchValue('');
    searchRef.current?.clear();
    searchRef.current?.blur();
    resetProps?.onClosed?.();
  };

  useKeyboard(
    ({ endCoordinates: { height } }) => {
      if (floatingLayerRef.current && showSearch) {
        if (floatingLayerHeight.current === 0) {
          const h = floatingLayerRef.current.getContainerHeight();
          // 仅在第一次键盘弹出时记录高度
          floatingLayerHeight.current = h;
        }

        if (
          floatingLayerHeight.current + height > maxHeight &&
          !(PlatformOS.isHarmony && !resetProps.useNative)
        ) {
          setContainerHeight(maxHeight - height + 34);
        }
      }
    },
    () => {
      setContainerHeight(floatingLayerHeight.current);
    }
  );

  const renderHeader = () => {
    return (
      <ShouldRender condition={showSearch}>
        <View style={styles.searchContainer}>
          <Input
            placeholder={locale.Select.placeholder}
            style={styles.searchInput}
            onChange={onChangeSearch}
            prefix={
              <IconXSearchfor1
                size={token['--font-size-3']}
                fill={token['--color-text-5']}
                fillColor={token['--color-text-5']}
              />
            }
            ref={searchRef}
            {...searchInputProps}
          />
        </View>
      </ShouldRender>
    );
  };

  return (
    <FloatingLayer
      cancelBtnStyle={styles.cancelBtnStyle}
      confirmBtnStyle={styles.confirmBtnStyle}
      showConfirmButton={showConfirmButton}
      title={title}
      contentStyle={styles.contentStyle}
      visible={visible}
      onPressOverlay={onPressOverlay}
      onConfirm={onConfirmFn}
      onCancel={onCancel}
      onClosed={onClosed}
      footerStyle={styles.footerStyle}
      containerHeight={containerHeight}
      ref={floatingLayerRef}
      autoResize={showSearch}
      footer={
        !((type === Type.checkbox && showFooter) || customFooter) ? null : (
          <>
            <ShouldRender condition={type === Type.checkbox && showFooter}>
              <Button style={styles.btn} onPress={onConfirmFn}>
                {locale.Select.footerConfirmButtonText}
              </Button>
            </ShouldRender>
            <ShouldRender condition={!!customFooter}>
              {customFooter}
            </ShouldRender>
          </>
        )
      }
      headerExtra={renderHeader()}
      {...omit(resetProps, 'onClosed')}
    >
      {renderContent()}
      {extra}
    </FloatingLayer>
  );
};

export default Select;
