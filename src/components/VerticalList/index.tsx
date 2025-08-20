import React, { FC, useMemo, useState } from 'react';
import styles from './styles/style';
import Item from './Item';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { isArray } from 'lodash';
import Collapse, { RNCollapseProps } from '../Collapse';
import {
  VerticalListItemBase,
  VerticalListItemProps,
  VerticalListProps,
} from './interface';
import ShouldRender from '../ShouldRender';

const COLLAPSE_ITEM_KEY = 'COLLAPSE_ITEM_KEY';

const collapseItemHeaderStyle: ViewStyle = {
  flexDirection: 'column',
  borderBottomWidth: 0,
  paddingVertical: 10,
  height: 'auto',
};

const collapseItemContentStyle: ViewStyle = {
  padding: 0,
};

/**
 * @deprecated 不再推荐使用
 */
const VerticalList: FC<VerticalListProps> = (props) => {
  const {
    data,
    style,
    gap = 14,
    autoCollapse,
    collapseKeepingCount = 2,
  } = props;

  const [sliceIdx, setSliceIdx] = useState(
    autoCollapse ? collapseKeepingCount : data.length
  );

  const hasCollapse = sliceIdx !== data.length;

  const resetDivider = (item: VerticalListItemBase) => {
    return {
      ...item,
      divider: false,
    };
  };

  const resetDividers = (item: VerticalListItemProps) => {
    if (isArray(item)) {
      return item.map((_, j) => {
        if (j === item.length - 1) {
          return resetDivider(_);
        }
        return _;
      });
    }
    return resetDivider(item);
  };

  const _dataSource = useMemo(
    () =>
      data.map((item, index) => {
        if (hasCollapse && index === sliceIdx - 1) {
          return resetDividers(item);
        }

        return item;
      }),
    [data, sliceIdx]
  );

  const renderItem = (itemProps: VerticalListItemBase, index: number) => {
    return (
      <Item
        key={itemProps.key || index}
        {...itemProps}
        style={
          index < data.length - 1 && {
            marginBottom: gap,
          }
        }
        divider={props.divider || itemProps.divider}
      />
    );
  };

  const renderItems = (dataSource: VerticalListItemProps[]) => {
    return dataSource.map((item, i) => {
      if (isArray(item)) {
        return item.map(renderItem);
      }

      return renderItem(item, i);
    });
  };

  const handleCollapseChange: RNCollapseProps['onChange'] = (activeKey) => {
    if ((activeKey as string[])[0] === COLLAPSE_ITEM_KEY) {
      setSliceIdx(data.length);
      return;
    }
    setSliceIdx(collapseKeepingCount);
  };

  return (
    <View style={StyleSheet.flatten([styles.wrapper, style])}>
      {renderItems(_dataSource.slice(0, sliceIdx))}
      <ShouldRender condition={!!autoCollapse}>
        <Collapse onChange={handleCollapseChange}>
          <Collapse.Item
            name={COLLAPSE_ITEM_KEY}
            headerStyle={collapseItemHeaderStyle}
            contentStyle={collapseItemContentStyle}
            arrowPlaceDown
          >
            {renderItems(_dataSource.slice(sliceIdx, _dataSource.length))}
          </Collapse.Item>
        </Collapse>
      </ShouldRender>
      <ShouldRender condition={!autoCollapse}>
        {renderItems(_dataSource.slice(sliceIdx, _dataSource.length))}
      </ShouldRender>
    </View>
  );
};

export default VerticalList;
