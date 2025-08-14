import React, { FC } from 'react';
import { mergeProps } from '../../core/helpers';
import { Popup } from '../../core';
import type { PopupProps } from './interface';
import styles from './styles/popup.style';

const defaultProps = {};

const RNPopup: FC<PopupProps> = (p) => {
  const allProps = mergeProps(defaultProps, p);
  const { ...props } = allProps;

  return <Popup {...props} overlayStyle={styles.overlayStyle} />;
};

export default RNPopup;
