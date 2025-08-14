/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, ReactElement } from 'react';
// import { FlashList, FlashListProps } from '@shopify/flash-list';
import PullToRefresh from '../PullToRefresh';
import { Props as PullToRefreshProps } from '../PullToRefresh/interface';
import {
  Text,
  FlatList,
  FlatListProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import { Loading, Skeleton } from '@xrnjs/ui';
import { StyleSheet } from 'react-native';
import styles from './style';
import { useLocale } from '../Locale/locale';

export type VirtualListProps<T> = {
  // containerProps: ViewProps;
  isEndReached?: boolean; // 从外部传入是否到达列表底部的属性
  pullToRefreshProps?: Omit<PullToRefreshProps, 'locale' | 'children'>;
  renderEmptyComponent?: ReactElement;
  renderFooterComponent?: ReactElement;
  footerText?: React.ReactNode;
  footerTextStyle?: StyleProp<TextStyle>;
} & FlatListProps<T>;

function VirtualList<T>(props: VirtualListProps<T>, ref: any) {
  // const { onRefresh = () => Promise.resolve() } = props;
  const {
    pullToRefreshProps,
    isEndReached,
    renderEmptyComponent: propsRenderEmptyComponent,
    renderFooterComponent,
    footerText,
    footerTextStyle,
    ...flashListProps
  } = props;
  const { topPullThreshold = 0 } = pullToRefreshProps || {};
  const locale = useLocale().VirtualList;

  const renderListFooterComponent = () => {
    if (isEndReached) {
      if (renderFooterComponent) return renderFooterComponent;
      return (
        <Text style={StyleSheet.flatten([styles.footer, footerTextStyle])}>
          {footerText || locale.footerText}
        </Text>
      );
    } else {
      return (
        <Loading
          name="loading"
          tipDisable={true}
          style={{
            height: 40,
            marginBottom: 10,
          }}
        />
      );
    }
  };

  const renderEmptyComponent = () => {
    if (propsRenderEmptyComponent) return propsRenderEmptyComponent;
    return <Skeleton type={Skeleton.PageType.List} />;
  };
  return (
    <PullToRefresh
      HeaderComponent={<Loading tipDisable={true} name="loading" />}
      headerHeight={55}
      refreshing={Boolean(flashListProps?.refreshing)}
      {...pullToRefreshProps}
      style={{ flex: 1, zIndex: -99 }}
      onRefresh={flashListProps?.onRefresh}
      topPullThreshold={topPullThreshold}
    >
      <FlatList
        ref={ref}
        {...props}
        onRefresh={null}
        refreshing={null}
        ListFooterComponent={renderListFooterComponent}
        ListEmptyComponent={renderEmptyComponent}
      />
    </PullToRefresh>
  );
}

/**
 * @deprecated 不再维护，请使用 PullToRefreshNative
 */
export default forwardRef(VirtualList);
