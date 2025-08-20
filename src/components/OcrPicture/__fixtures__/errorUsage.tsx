import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { OcrPicture, Field, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ErrorUsage: FC = () => {
  const [networkErrorInput, setNetworkErrorInput] = useState('');
  const [timeoutErrorInput, setTimeoutErrorInput] = useState('');
  const [parseErrorInput, setParseErrorInput] = useState('');
  const [lastError, setLastError] = useState('');

  const handleError = (error: Error, type: string) => {
    console.log(`${type}错误:`, error);
    setLastError(`${type}: ${error.message}`);
  };

  return (
    <Card title="错误处理">
      <Text style={styles.description}>
        演示各种错误场景的处理方式，包括网络错误、超时错误和解析错误等。
      </Text>

      {lastError ? (
        <View style={styles.resultContainer}>
          <View style={styles.statusIndicator}>
            <View style={[styles.statusDot, styles.statusError]} />
            <Text style={styles.statusText}>最近错误</Text>
          </View>
          <Text style={[styles.resultText, styles.errorText]}>{lastError}</Text>
        </View>
      ) : null}

      <Space direction="vertical" gap="m">
        <Field label="网络错误模拟">
          <OcrPicture
            enableInput
            inputProps={{
              value: networkErrorInput,
              placeholder: '网络错误测试',
              onChange: setNetworkErrorInput,
            }}
            tip="请将证件放置在框内（模拟网络错误）"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            timeout={10000}
            onScan={(option) => {
              console.log('网络错误扫描:', option);
              return new Promise((_, reject) => {
                setTimeout(() => {
                  reject(new Error('网络连接失败，请检查网络设置'));
                }, 1000);
              });
            }}
            onSuccess={(result) => {
              setNetworkErrorInput(result);
            }}
            onError={(error) => {
              handleError(error, '网络错误');
            }}
          />
        </Field>

        <Field label="超时错误模拟">
          <OcrPicture
            enableInput
            inputProps={{
              value: timeoutErrorInput,
              placeholder: '超时错误测试',
              onChange: setTimeoutErrorInput,
            }}
            tip="请将证件放置在框内（模拟超时错误）"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            timeout={2000}
            onScan={(option) => {
              console.log('超时错误扫描:', option);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('超时测试结果');
                }, 5000); // 5秒后返回，但超时设置为2秒
              });
            }}
            onSuccess={(result) => {
              setTimeoutErrorInput(result);
            }}
            onError={(error) => {
              handleError(error, '超时错误');
            }}
          />
        </Field>

        <Field label="解析错误模拟">
          <OcrPicture
            enableInput
            inputProps={{
              value: parseErrorInput,
              placeholder: '解析错误测试',
              onChange: setParseErrorInput,
            }}
            tip="请将证件放置在框内（模拟解析错误）"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            timeout={10000}
            onScan={(option) => {
              console.log('解析错误扫描:', option);
              return new Promise((_, reject) => {
                setTimeout(() => {
                  reject(new Error('图片质量不佳，无法识别文字内容'));
                }, 1500);
              });
            }}
            onSuccess={(result) => {
              setParseErrorInput(result);
            }}
            onError={(error) => {
              handleError(error, '解析错误');
            }}
          />
        </Field>
      </Space>
    </Card>
  );
};

export default ErrorUsage;
