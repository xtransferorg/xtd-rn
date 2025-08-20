import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { OcrPicture, Field, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const DirectionUsage: FC = () => {
  const [horizontalInput, setHorizontalInput] = useState('');
  const [verticalInput, setVerticalInput] = useState('');

  return (
    <Card title="扫描方向配置">
      <Text style={styles.description}>
        支持水平和垂直两种扫描方向，适应不同证件的拍摄需求。
      </Text>

      <View style={styles.directionContainer}>
        <View style={styles.directionItem}>
          <Text>📄</Text>
          <Text style={styles.directionLabel}>水平方向</Text>
        </View>
        <View style={styles.directionItem}>
          <Text>📋</Text>
          <Text style={styles.directionLabel}>垂直方向</Text>
        </View>
      </View>

      <Space direction="vertical" gap="m">
        <Field label="水平方向扫描（身份证）">
          <OcrPicture
            enableInput
            inputProps={{
              value: horizontalInput,
              placeholder: '请扫描身份证',
              onChange: setHorizontalInput,
            }}
            tip="请将身份证正面水平放置在框内"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            timeout={10000}
            onScan={(option) => {
              console.log('水平扫描:', option);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('水平扫描结果: 123456789012345678');
                }, 2000);
              });
            }}
            onSuccess={(result) => {
              setHorizontalInput(result);
            }}
            onError={(error) => {
              console.log('水平扫描失败:', error);
            }}
          />
        </Field>

        <Field label="垂直方向扫描（营业执照）">
          <OcrPicture
            enableInput
            inputProps={{
              value: verticalInput,
              placeholder: '请扫描营业执照',
              onChange: setVerticalInput,
            }}
            tip="请将营业执照垂直放置在框内"
            direction={OcrPicture.OcrPictureDirection.Vertical}
            timeout={10000}
            onScan={(option) => {
              console.log('垂直扫描:', option);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('垂直扫描结果: 91110000123456789X');
                }, 2000);
              });
            }}
            onSuccess={(result) => {
              setVerticalInput(result);
            }}
            onError={(error) => {
              console.log('垂直扫描失败:', error);
            }}
          />
        </Field>
      </Space>
    </Card>
  );
};

export default DirectionUsage;
