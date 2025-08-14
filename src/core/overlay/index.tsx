import React from 'react';
import { usePortal } from '../../common/portal';

import { attachPropertiesToComponent } from '../helpers';

import type { OverlayProps } from './interface';
import Overlay from './overlay';
import { varCreator } from './style';

/**
 * Overlay 遮罩层
 * @description 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。
 */
const OverlayContainer: React.FC<OverlayProps> = (props) => {
  const {
    Component: IComponent,
    visible,
    useNative,
    statusBarTranslucent,
    onClosed,
  } = usePortal(props);

  return (
    <IComponent
      transparent
      visible={visible}
      onRequestClose={onClosed}
      statusBarTranslucent={statusBarTranslucent}
    >
      <Overlay useNative={useNative} {...props} onRequestClose={onClosed} />
    </IComponent>
  );
};

export default attachPropertiesToComponent(OverlayContainer, {
  varCreator,
  OverlayComponent: Overlay,
});
