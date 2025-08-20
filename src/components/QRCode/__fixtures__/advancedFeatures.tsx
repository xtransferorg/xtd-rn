import React, { useState, useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import { QRCode, Button } from '@xrnjs/ui';
import Card from '_global/Card';
import type { QRCodeRef } from '../QRCode';
import styles from './style';

const AdvancedFeatures = () => {
  const qrRef = useRef<QRCodeRef>(null);
  const [qrData, setQrData] = useState('');
  const [saveConfig, setSaveConfig] = useState({
    cancelText: '取消',
    actionText: '保存到相册',
    saveScucessText: '保存成功',
    permissionFailedText: '权限获取失败',
  });

  // 生成不同类型的二维码内容
  const generateURL = () => 'https://github.com/facebook/react-native';
  const generateWiFi = () => 'WIFI:T:WPA;S:MyNetwork;P:MyPassword;H:false;;';
  const generateContact = () =>
    'BEGIN:VCARD\nVERSION:3.0\nFN:张三\nTEL:13800138000\nEMAIL:zhangsan@example.com\nEND:VCARD';
  const generateSMS = () => 'SMSTO:13800138000:Hello from QRCode!';
  const generateEmail = () =>
    'mailto:example@email.com?subject=Hello&body=Message from QRCode';

  const handleCustomSave = (svg: any) => {
    svg.toDataURL((dataUrl: string) => {
      setQrData(dataUrl.substring(0, 100) + '...');
      Alert.alert('自定义保存', '二维码数据已获取，可以进行自定义处理', [
        { text: '取消', style: 'cancel' },
        { text: '查看数据', onPress: () => console.log('Full data:', dataUrl) },
      ]);
    });
  };

  return (
    <View style={styles.container}>
      <Card title="不同内容类型">
        <Text style={styles.description}>二维码可以包含各种类型的数据</Text>
        <View style={styles.row}>
          <View style={styles.centeredItem}>
            <QRCode value={generateURL()} size={100} bordered />
            <Text style={styles.itemLabel}>网址链接</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode value={generateWiFi()} size={100} bordered />
            <Text style={styles.itemLabel}>WiFi信息</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode value={generateContact()} size={100} bordered />
            <Text style={styles.itemLabel}>联系人</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.centeredItem}>
            <QRCode value={generateSMS()} size={100} bordered />
            <Text style={styles.itemLabel}>短信</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode value={generateEmail()} size={100} bordered />
            <Text style={styles.itemLabel}>邮件</Text>
          </View>
        </View>
      </Card>

      <Card title="自定义保存配置">
        <Text style={styles.description}>自定义保存操作的文案和行为</Text>
        <View style={styles.row}>
          <QRCode
            value="Custom Save Config"
            size={140}
            bordered
            shadow
            saveActionProps={saveConfig}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            onPress={() =>
              setSaveConfig({
                ...saveConfig,
                actionText: '保存图片',
                saveScucessText: '图片已保存',
              })
            }
          >
            中文配置
          </Button>
          <Button
            onPress={() =>
              setSaveConfig({
                cancelText: 'Cancel',
                actionText: 'Save Image',
                saveScucessText: 'Image Saved',
                permissionFailedText: 'Permission Denied',
              })
            }
          >
            英文配置
          </Button>
        </View>
      </Card>

      <Card title="自定义保存处理">
        <Text style={styles.description}>完全自定义保存逻辑</Text>
        <View style={styles.row}>
          <QRCode
            ref={qrRef}
            value="Custom Save Handler"
            size={140}
            bordered
            shadow
            onSave={handleCustomSave}
          />
        </View>
        {qrData && (
          <View style={styles.dataDisplay}>
            <Text style={styles.dataText}>获取到的数据: {qrData}</Text>
          </View>
        )}
      </Card>

      <Card title="大数据量二维码">
        <Text style={styles.description}>
          包含大量数据的二维码，需要高纠错等级
        </Text>
        <View style={styles.row}>
          <QRCode
            value={JSON.stringify({
              name: '张三',
              phone: '13800138000',
              email: 'zhangsan@example.com',
              address: '北京市朝阳区某某街道某某号',
              company: '某某科技有限公司',
              position: '高级工程师',
              website: 'https://example.com',
              note: '这是一个包含大量信息的二维码示例',
            })}
            size={160}
            errorLevel="H"
            bordered
            shadow
          />
        </View>
      </Card>
    </View>
  );
};

export default AdvancedFeatures;
