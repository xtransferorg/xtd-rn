import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { QRCode, Button } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const LogoAndStyle = () => {
  const [qrColor, setQrColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const logoUrl =
    'https://static.xtransfer.com/boss/static/favicon_adb49d0503860935.ico';

  const colors = [
    '#000000',
    '#1890ff',
    '#52c41a',
    '#faad14',
    '#f5222d',
    '#722ed1',
    '#13c2c2',
    '#eb2f96',
  ];

  const bgColors = [
    '#ffffff',
    '#f0f0f0',
    '#fff1f0',
    '#f6ffed',
    '#fff7e6',
    '#f9f0ff',
    '#e6fffb',
    '#fff0f6',
  ];

  return (
    <View style={styles.container}>
      <Card title="带Logo的二维码">
        <Text style={styles.description}>在二维码中心添加Logo图标</Text>
        <View style={styles.row}>
          <View style={styles.centeredItem}>
            <QRCode
              value="QRCode with Logo"
              size={140}
              logo={logoUrl}
              logoSize={30}
              logoMargin={4}
              logoBorderRadius={4}
              bordered
            />
            <Text style={styles.itemLabel}>圆角Logo</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode
              value="QRCode with Logo"
              size={140}
              logo={logoUrl}
              logoSize={35}
              logoMargin={6}
              logoBorderRadius={0}
              bordered
            />
            <Text style={styles.itemLabel}>方形Logo</Text>
          </View>
        </View>
      </Card>

      <Card title="Logo尺寸和边距">
        <Text style={styles.description}>不同的Logo尺寸和边距设置</Text>
        <View style={styles.row}>
          <View style={styles.centeredItem}>
            <QRCode
              value="Small Logo"
              size={120}
              logo={logoUrl}
              logoSize={20}
              logoMargin={2}
              logoBorderRadius={2}
              bordered
            />
            <Text style={styles.itemLabel}>小Logo</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode
              value="Medium Logo"
              size={120}
              logo={logoUrl}
              logoSize={30}
              logoMargin={4}
              logoBorderRadius={4}
              bordered
            />
            <Text style={styles.itemLabel}>中Logo</Text>
          </View>
          <View style={styles.centeredItem}>
            <QRCode
              value="Large Logo"
              size={120}
              logo={logoUrl}
              logoSize={40}
              logoMargin={6}
              logoBorderRadius={6}
              bordered
            />
            <Text style={styles.itemLabel}>大Logo</Text>
          </View>
        </View>
      </Card>

      <Card title="自定义颜色">
        <Text style={styles.description}>自定义二维码的前景色和背景色</Text>
        <View style={styles.row}>
          <QRCode
            value="Custom Color QRCode"
            size={140}
            color={qrColor}
            backgroundColor={bgColor}
            bordered
            shadow
          />
        </View>
        <Text style={styles.sectionTitle}>前景色:</Text>
        <View style={styles.colorRow}>
          {colors.map((color) => (
            <Button
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color },
                qrColor === color && styles.colorButtonActive,
              ]}
              onPress={() => setQrColor(color)}
            />
          ))}
        </View>
        <Text style={styles.sectionTitle}>背景色:</Text>
        <View style={styles.colorRow}>
          {bgColors.map((color) => (
            <Button
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color },
                bgColor === color && styles.colorButtonActive,
              ]}
              onPress={() => setBgColor(color)}
            />
          ))}
        </View>
      </Card>

      <Card title="渐变背景">
        <Text style={styles.description}>使用渐变色作为二维码背景</Text>
        <View style={styles.row}>
          <QRCode
            value="Gradient Background"
            size={140}
            color="#ffffff"
            backgroundColor="#1890ff"
            bordered
            shadow
          />
          <QRCode
            value="Gradient Background"
            size={140}
            color="#ffffff"
            backgroundColor="#52c41a"
            bordered
            shadow
          />
        </View>
      </Card>

      <Card title="Logo背景色">
        <Text style={styles.description}>为Logo设置背景色，提高识别度</Text>
        <View style={styles.row}>
          <QRCode
            value="Logo with Background"
            size={140}
            logo={logoUrl}
            logoSize={35}
            logoMargin={8}
            logoBorderRadius={6}
            logoBackgroundColor="#ffffff"
            bordered
            shadow
          />
        </View>
      </Card>
    </View>
  );
};

export default LogoAndStyle;
