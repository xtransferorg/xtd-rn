import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { QRCode, Button, Fill } from '@xrnjs/ui';
import Card from '_global/Card';
import type { QRCodeStatusProps } from '@xrnjs/ui';
import styles from './style';

const StatusBar = ({
  status,
  onRefresh,
}: {
  status: string;
  onRefresh?: () => void;
}) => {
  return (
    <View style={styles.customStatus}>
      <Text style={styles.customStatusText}>
        自定义{status === 'expired' ? '过期' : status}状态
      </Text>
      {status === 'expired' && (
        <Button onPress={onRefresh} style={{ marginTop: 8 }}>
          立即刷新
        </Button>
      )}
    </View>
  );
};

const StatusManagement = () => {
  const [status1, setStatus1] = useState<QRCodeStatusProps['status']>('active');
  const [status2, setStatus2] =
    useState<QRCodeStatusProps['status']>('expired');
  const [value, setValue] = useState('Status Demo QRCode');

  const handleRefresh = () => {
    setStatus2('active');
    setValue(`Refreshed at ${new Date().toLocaleTimeString()}`);
  };

  return (
    <View style={styles.container}>
      <Card title="基础状态">
        <Text style={styles.description}>二维码支持多种状态显示</Text>
        <View style={styles.row}>
          <View style={styles.centeredItem}>
            <QRCode value="Active QRCode" size={120} status="active" bordered />
            <Text style={styles.itemLabel}>激活状态</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode
              value="Loading QRCode"
              size={120}
              status="loading"
              loadingText="生成中..."
              bordered
            />
            <Text style={styles.itemLabel}>加载状态</Text>
          </View>
        </View>
      </Card>

      <Card title="扫描和过期状态">
        <Text style={styles.description}>扫描成功和过期状态的展示</Text>
        <View style={styles.row}>
          <View style={styles.centeredItem}>
            <QRCode
              value="Scanned QRCode"
              size={120}
              status="scanned"
              scanSuccessText="扫描成功"
              bordered
            />
            <Text style={styles.itemLabel}>扫描成功</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode
              value={value}
              size={120}
              status={status2}
              expiredText="二维码已过期"
              refreshText="点击刷新"
              onRefresh={handleRefresh}
              bordered
            />
            <Text style={styles.itemLabel}>过期状态</Text>
          </View>
        </View>
      </Card>

      <Card title="动态状态切换">
        <Text style={styles.description}>通过按钮切换不同状态</Text>
        <View style={styles.row}>
          <QRCode
            value="Dynamic Status QRCode"
            size={140}
            status={status1}
            loadingText="加载中..."
            scanSuccessText="扫描完成"
            expiredText="已过期"
            refreshText="重新生成"
            onRefresh={() => setStatus1('active')}
            bordered
            shadow
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            fill={status1 === 'active' ? Fill.solid : Fill.weak}
            onPress={() => setStatus1('active')}
          >
            激活
          </Button>
          <Button
            fill={status1 === 'loading' ? Fill.solid : Fill.weak}
            onPress={() => setStatus1('loading')}
          >
            加载
          </Button>
          <Button
            fill={status1 === 'scanned' ? Fill.solid : Fill.weak}
            onPress={() => setStatus1('scanned')}
          >
            扫描
          </Button>
          <Button
            fill={status1 === 'expired' ? Fill.solid : Fill.weak}
            onPress={() => setStatus1('expired')}
          >
            过期
          </Button>
        </View>
      </Card>

      <Card title="自定义状态渲染">
        <Text style={styles.description}>可以完全自定义状态的显示内容</Text>
        <View style={styles.row}>
          <QRCode
            value="Custom Status QRCode"
            size={140}
            status="expired"
            statusRender={({ status, onRefresh }) =>
              StatusBar({ status, onRefresh })
            }
            onRefresh={() => console.log('Custom refresh')}
            bordered
          />
        </View>
      </Card>
    </View>
  );
};

export default StatusManagement;
