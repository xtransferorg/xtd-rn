import React, { useState } from 'react';
import { Button, Modal, Input } from '@xrnjs/ui';
import styles from './style';

const ModalFormScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Modal.Component
        visible={visible}
        title="标题"
        message="执行XXX操作的补充说明文案，文案描述。"
        messageStyle={styles.messageStyle}
        extraNode={<Input placeholder="请输入" size="large" />}
        confirmButtonText="主要按钮"
        onPressConfirm={() => setVisible(false)}
        showCancelButton
        cancelButtonText="次要按钮"
        onPressCancel={() => setVisible(false)}
        solidButton
        onClose={() => setVisible(false)}
      />
      <Button onPress={() => setVisible(true)}>表单对话框</Button>
    </>
  );
};

export default ModalFormScreen;
