import React from 'react';
import Loading from '../Loading';
import { LoadingProps } from '../Loading/Loading';

interface IPorps {
  loading?: boolean;
  loadingProps?: LoadingProps;
}

const InputLoading = ({ loading, loadingProps }: IPorps) => {
  return loading ? (
    <Loading
      name="loading-xt"
      loadingType="circle"
      size="small"
      {...loadingProps}
    />
  ) : null;
};

export default InputLoading;
