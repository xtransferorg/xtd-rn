import React, { useEffect, memo } from 'react';

import { callInterceptor } from '../helpers';
import useState from '../hooks/useStateUpdate';

import Modal from '../../components/Modal/Modal';

import type { DialogAction, DialogMethodState } from './interface';
import { ModalMethodProps } from '../../components/Modal/interface';

/**
 * Dialog 弹出框
 * @description 配合函数的使用
 */
const DialogMethod: React.FC<ModalMethodProps> = ({
  beforeClose,
  onResponse,
  onPressConfirm,
  onPressCancel,
  onPressOverlay,
  onPressClose,
  ...restProps
}) => {
  const [state, setState] = useState<DialogMethodState>({
    visible: false,
    cancel: false,
    confirm: false,
    overlay: false,
  });

  const genOnPressBtn = (action: DialogAction) => () => {
    setState({
      [action]: true,
    });

    callInterceptor(beforeClose, {
      args: [action],
      done: () => {
        const propsFn = {
          confirm: onPressConfirm,
          cancel: onPressCancel,
          overlay: onPressOverlay,
          close: onPressClose,
        }[action];
        propsFn?.();

        onResponse?.(action);
        setState({
          [action]: false,
          visible: false,
        });
      },
      canceled: () => {
        setState({
          [action]: false,
        });
      },
    });
  };

  useEffect(() => {
    setState({
      visible: true,
    });
  }, []);

  const onRequestClose = () => {
    genOnPressBtn('overlay')();
    return true;
  };

  return (
    <Modal
      {...restProps}
      onRequestClose={onRequestClose}
      visible={state.visible}
      onPressConfirm={genOnPressBtn('confirm')}
      onPressCancel={genOnPressBtn('cancel')}
      onPressOverlay={genOnPressBtn('overlay')}
      onPressClose={genOnPressBtn('close')}
      cancelButtonLoading={state.cancel}
      confirmButtonLoading={state.confirm}
    />
  );
};

export default memo(DialogMethod);
