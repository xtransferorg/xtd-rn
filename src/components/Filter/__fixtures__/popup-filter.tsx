import React, { useState, useRef, useMemo, ReactNode } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import {
  Fill,
  Filter,
  FilterLayoutType,
  ItemRef,
  Button,
  defaultColor,
  Popup,
  Checkbox,
} from '@xrnjs/ui';
import { IconXASpecification1 } from '../../../icons/index';
import styles from './style';

export interface FilterItem {
  /**
   * filter筛选项值
   */
  value: string;
  /**
   * filter筛选项标签文本
   */
  label: ReactNode;
  /**
   * filter筛选项
   */
  tags?: {
    value: string;
    label: ReactNode;
    children?: { value: string; label: string }[];
  }[];
  /**
   * filter筛选项展示方式
   */
  tagType?: string;
  /**
   * filter筛选项是否可以多选
   */
  multiple?: boolean;
}

export interface IFilterProps {
  /**
   * filter数组
   */
  filterList: FilterItem[];
  itemLabel?: { [key: string]: string | string[] | undefined };
  popupHeader?: (filter: FilterItem, curFilter: string) => ReactNode;
  popupBody?: (filter: FilterItem, curFilter: string) => ReactNode;
  popupFooter?: (filter: FilterItem, curFilter: string) => ReactNode;
  onReset?: (curFilter: string) => void;
  onChange?: (val: string | string[], curFilter: string) => void;
}

const PopupFilter = (props: IFilterProps) => {
  const {
    filterList,
    itemLabel,
    popupHeader,
    popupBody,
    popupFooter,
    onReset,
    onChange,
  } = props;

  const [curFilter, setCurFilter] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const itemNewRef = useRef<ItemRef>(null);

  const filter = useMemo(() => {
    return filterList.find((i) => i.value === curFilter);
  }, [curFilter]);

  const closePopup = () => {
    itemNewRef.current?.close();
    setVisible(false);
  };

  return (
    <>
      <Filter
        filterLayoutType={FilterLayoutType.EquallyDivide}
        style={styles.filterWrapper}
      >
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollWrapper}
        >
          {filterList.map((i, j: number) => {
            const selectedLength = (itemLabel?.[i.value] || [])?.length;
            const isSelected = i.multiple
              ? selectedLength > 0
              : !!itemLabel?.[i.value];

            const selectedValue = i.multiple
              ? selectedLength
              : i.tags?.find((p) => p.value === itemLabel?.[i.value])?.label;
            return i.value === 'filter' ? (
              <Filter.Item
                key={`${i.value}-${j}`}
                placeholder=""
                style={StyleSheet.flatten([
                  styles.item,
                  isSelected ? styles.activeItem : styles.unActiveItem,
                  j === filterList.length - 1 && styles.lastItem,
                ])}
                ref={itemNewRef}
                overlay={false}
                icon={() => (
                  <View style={styles.customIcon}>
                    <IconXASpecification1
                      size={16}
                      color={`${isSelected ? defaultColor : '#413F57'}`}
                    />
                    {i.multiple && isSelected && (
                      <Text style={styles.filterIcon}>{`${
                        (itemLabel?.[i.value] || [])?.length
                      }`}</Text>
                    )}
                  </View>
                )}
                onPanelOpen={() => {
                  setCurFilter(i.value);
                  setVisible(true);
                }}
                onPanelClosed={() => {
                  setCurFilter('');
                  setVisible(false);
                }}
              />
            ) : (
              <Filter.Item
                key={`${i.value}-${j}`}
                placeholder={`${i.label}`}
                ref={itemNewRef}
                style={StyleSheet.flatten([
                  styles.item,
                  j === filterList.length - 1 && styles.lastItem,
                ])}
                itemLabel={
                  itemLabel?.[i.value] === undefined || selectedLength === 0
                    ? undefined
                    : i.multiple
                    ? `${i.label}(${selectedValue})`
                    : (selectedValue as string)
                }
                overlay={false}
                onPanelOpen={() => {
                  setCurFilter(i.value);
                  setVisible(true);
                }}
                onPanelClosed={() => {
                  setCurFilter('');
                  setVisible(false);
                }}
              />
            );
          })}
        </ScrollView>
      </Filter>
      <Popup
        visible={visible}
        position="bottom"
        round
        onPressOverlay={() => closePopup()}
      >
        <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
          <View style={StyleSheet.flatten([styles.wrapper])}>
            {popupHeader && filter ? (
              popupHeader(filter, curFilter)
            ) : (
              <Popup.Header
                title={`${filter?.label || ''}`}
                showConfirmButton={false}
                onCancel={() => closePopup()}
              />
            )}
            {popupBody && filter ? (
              popupBody(filter, curFilter)
            ) : (
              <View style={styles.popupContent}>
                <Checkbox.Group
                  gap={0}
                  value={itemLabel?.[curFilter] || []}
                  onChange={(val) => onChange?.(val, curFilter)}
                  multiple={filter?.multiple || false}
                  checkboxComponentStyle={styles.checkboxComponentStyle}
                  options={(filter?.tags || []).map((i) => ({
                    ...i,
                    labelPosition: 'left',
                  }))}
                />
              </View>
            )}
            {popupFooter && filter ? (
              popupFooter(filter, curFilter)
            ) : (
              <View style={styles.popupBtnGroupWrapper}>
                <Button
                  style={styles.btn}
                  fill={Fill.outline}
                  onPress={() => {
                    onReset?.(curFilter);
                    closePopup();
                  }}
                >
                  重置
                </Button>
                <Button style={styles.btn} onPress={closePopup}>
                  确定
                </Button>
              </View>
            )}
          </View>
        </ScrollView>
      </Popup>
    </>
  );
};

export default PopupFilter;
