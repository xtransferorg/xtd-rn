import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { QRCode, Button, Toast } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  const [value, setValue] = useState(
    'https://github.com/facebook/react-native'
  );

  return (
    <View style={styles.container}>
      <Card title="基础二维码">
        <Text style={styles.description}>最简单的二维码生成</Text>
        <View style={styles.row}>
          <QRCode value="Hello QRCode!" size={120} />
        </View>
      </Card>

      <Card title="不同尺寸">
        <Text style={styles.description}>支持自定义二维码尺寸</Text>
        <View style={styles.row}>
          <QRCode value="Small" size={80} />
          <QRCode value="Medium" size={120} />
          <QRCode value="Large" size={160} />
        </View>
      </Card>

      <Card title="边框和阴影">
        <Text style={styles.description}>可以添加边框和阴影效果</Text>
        <View style={styles.row}>
          <QRCode value="Bordered" size={120} bordered />
          <QRCode value="Shadow" size={120} shadow />
          <QRCode value="Both" size={120} bordered shadow />
        </View>
      </Card>

      <Card title="纠错等级">
        <Text style={styles.description}>不同的纠错等级适用于不同场景</Text>
        <View style={styles.row}>
          <View style={styles.centeredItem}>
            <QRCode value={value} size={100} errorLevel="L" bordered />
            <Text style={styles.itemLabel}>L级 (7%)</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode value={value} size={100} errorLevel="M" bordered />
            <Text style={styles.itemLabel}>M级 (15%)</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode value={value} size={100} errorLevel="Q" bordered />
            <Text style={styles.itemLabel}>Q级 (25%)</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode value={value} size={100} errorLevel="H" bordered />
            <Text style={styles.itemLabel}>H级 (30%)</Text>
          </View>
        </View>
      </Card>

      <Card title="长按保存">
        <Text style={styles.description}>长按二维码可以保存到相册</Text>
        <View style={styles.row}>
          <QRCode
            value="Long press to save"
            size={140}
            bordered
            shadow
            onSave={(svg) => {
              svg.toDataURL?.((dataUrl) =>
                console.log('QR Code data:', dataUrl)
              );
              Toast({ message: '保存成功' });
            }}
          />
        </View>
      </Card>

      <Card title="动态内容">
        <Text style={styles.description}>二维码内容可以动态更新</Text>
        <View style={styles.row}>
          <QRCode value={value} size={140} bordered />
        </View>
        <Button
          onPress={() => setValue(`${Date.now()}`)}
          style={{ marginTop: 12 }}
        >
          生成新的二维码
        </Button>
      </Card>
    </View>
  );
};

export default BasicUsage;
