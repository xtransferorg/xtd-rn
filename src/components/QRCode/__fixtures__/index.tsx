import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import type { QRCodeStatusProps } from '@xrnjs/ui';
import Card from '_global/Card';
import { Toast, QRCode } from '@xrnjs/ui';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
const fake = 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF';
const FileViewerScreen = () => {
  const [value, setValue] = React.useState('123');
  const [status, setStatus] =
    React.useState<QRCodeStatusProps['status']>('expired');
  return (
    <ScrollView style={styles.wrapper}>
      <Card title="QRCode基本使用">
        <QRCode
          value={fake}
          size={200}
          errorLevel="H"
          logoMargin={8}
          logoBorderRadius={2}
          statusRender={({ status }) => <Text>{status} custom</Text>}
          onSave={(svg) => {
            svg.toDataURL((dataUrl) => console.log(dataUrl));
            Toast({ message: 'Save Success' });
          }}
          shadow
        />
      </Card>

      <Card title="Qrcode 状态">
        <QRCode
          value="123"
          logoMargin={8}
          logoBorderRadius={2}
          status="loading"
          bordered
        />
        <QRCode
          value="123"
          logoMargin={8}
          logoBorderRadius={2}
          status="scanned"
          scanSuccessText="已扫描"
          bordered
        />
        <QRCode
          value={value}
          logoMargin={8}
          logoBorderRadius={2}
          status={status}
          onRefresh={() => {
            setStatus('active');
            setValue(Math.random().toString());
          }}
          bordered
        />
      </Card>

      <Card title="自定义状态渲染">
        <QRCode
          value="123"
          logoMargin={8}
          logoBorderRadius={2}
          status="expired"
          statusRender={({ status }) => <Text>{status} 自定义状态节点</Text>}
          bordered
        />
      </Card>

      <Card title="设置中心icon">
        <QRCode
          value={value}
          logo={{
            uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
          }}
          logoMargin={8}
          logoBorderRadius={2}
          refreshText="Click to refresh"
          onRefresh={() => {
            setValue(Math.random().toString());
            setStatus('active');
          }}
          saveActionProps={{
            cancelText: 'Cancel',
            actionText: 'Save',
            saveScucessText: 'Save Success',
            permissionFailedText: 'Permission failed',
          }}
          bordered
        />
      </Card>

      <Card title="设置纠错等级">
        <Text>H等级</Text>
        <QRCode
          value="123"
          logoMargin={8}
          logoBorderRadius={2}
          errorLevel="H"
          scanSuccessText="Scan Success"
          bordered
        />
        <Text>L级纠错</Text>
        <QRCode
          value={fake}
          logoMargin={8}
          logoBorderRadius={2}
          errorLevel="L"
          scanSuccessText="Scan Success"
          bordered
        />
        <Text>M级纠错</Text>
        <QRCode
          value={fake}
          logoMargin={8}
          logoBorderRadius={2}
          errorLevel="M"
          scanSuccessText="Scan Success"
          bordered
        />
        <Text>Q级纠错</Text>
        <QRCode
          value={fake}
          logoMargin={8}
          logoBorderRadius={2}
          errorLevel="Q"
          scanSuccessText="Scan Success"
          bordered
        />
      </Card>
    </ScrollView>
  );
};

export default FileViewerScreen;
