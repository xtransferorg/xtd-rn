import React from 'react';
import { mergeProps, attachPropertiesToComponent } from '../../core/helpers';
import SkeletonComponent from '../../core/skeleton';
import { SkeletonProps as CustomSkeletonProps } from '../../core/skeleton/interface';
import { PageType } from './enum';
import ListPage from './ListPage';
import DetailPage from './DetailPage';

interface P extends CustomSkeletonProps {
  /**
   * 页面类型，包含List、Detail和Custom
   * @default Custom
   */
  type?: PageType;
  children?: React.ReactNode;
}

const defaultProps = {
  type: PageType.Custom,
};

const Skeleton = (p: P) => {
  const props = mergeProps(defaultProps, p);

  const { type } = props;

  if (type === PageType.List) {
    return <ListPage />;
  }
  if (type === PageType.Detail) {
    return <DetailPage />;
  }

  return <SkeletonComponent {...props} />;
};

// export default Skeleton;
export default attachPropertiesToComponent(Skeleton, {
  PageType,
});
