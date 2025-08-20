import React from 'react';
import PullToRefreshComp from './PullToRefresh';
import { Props } from './interface';
import { useLocale } from '../Locale/locale';

const PullToRefresh = (props: Omit<Props, 'locale'>) => {
  const locale = useLocale().PullToRefresh;
  return <PullToRefreshComp locale={locale} {...props} />;
};

/**
 * @deprecated 不再维护，请使用 PullToRefreshNative
 */
export default PullToRefresh;
