import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Modal } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const StatusDialogsExample = () => {
  const showInfoDialog = () => {
    Modal.info({
      title: '信息提示',
      message: '这是一个信息提示对话框，用于向用户展示重要信息。',
      cancelButtonText: '取消',
      solidButton: true,
      buttonsDirection: 'column',
    });
  };

  const showWarningDialog = () => {
    Modal.warning({
      title: '警告提示',
      message: '这是一个警告提示对话框，用于提醒用户注意潜在风险。',
      cancelButtonText: '取消',
      solidButton: true,
    });
  };

  const showSuccessDialog = () => {
    Modal.success({
      title: '操作成功',
      message: '恭喜您，操作已成功完成！',
      cancelButtonText: '取消',
      solidButton: true,
    });
  };

  const showErrorDialog = () => {
    Modal.error({
      title: '操作失败',
      message: '很抱歉，操作执行失败，请稍后重试。',
      cancelButtonText: '取消',
      solidButton: true,
    });
  };

  const showConfirmDialog = () => {
    Modal.confirm({
      title: '确认操作',
      message:
        '结汇提现是 XTransfer代您向银行结汇申报后，将人民币汇至您在中国地区的银行账户，您确定暂停使用吗？',
      cancelButtonText: '取消',
      solidButton: true,
    });
  };

  return (
    <ScrollView>
      <Card title="状态对话框">
        <View style={styles.buttonContainer}>
          <Button onPress={showInfoDialog}>信息对话框</Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={showWarningDialog}>警告对话框</Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={showSuccessDialog}>成功对话框</Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={showErrorDialog}>错误对话框</Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={showConfirmDialog}>确认对话框</Button>
        </View>
      </Card>
    </ScrollView>
  );
};

export default StatusDialogsExample;
