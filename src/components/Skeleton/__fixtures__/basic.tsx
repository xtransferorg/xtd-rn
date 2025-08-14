/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react';

import { Skeleton } from '@xrnjs/ui';

const BasicCell: React.FC = () => {
  return <Skeleton type={Skeleton.PageType.Detail} />;
};

export default BasicCell;
