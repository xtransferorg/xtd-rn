import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { OcrPicture, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const StaticUsage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleStaticCall = (type: 'success' | 'error' | 'timeout') => {
    setLoading(true);
    setResult('');
    setError('');

    const config = {
      tip: '请将证件放置在框内',
      direction: OcrPicture.OcrPictureDirection.Horizontal,
      timeout: type === 'timeout' ? 1000 : 10000,
      onScan: (option: any) => {
        console.log('静态调用扫描:', option);
        return new Promise<string>((resolve, reject) => {
          setTimeout(
            () => {
              if (type === 'success') {
                resolve('静态调用成功: 123456789012345678');
              } else {
                reject(new Error('静态调用失败'));
              }
            },
            type === 'timeout' ? 2000 : 1500
          );
        });
      },
    };

    OcrPicture.open(config)
      .then((result) => {
        console.log('静态调用结果:', result);
        setResult(JSON.stringify(result));
      })
      .catch((error) => {
        console.log('静态调用错误:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card title="静态方法调用">
      <Text style={styles.description}>
        通过 OcrPicture.open() 方法可以直接调用 OCR
        识别功能，无需渲染输入框组件。
      </Text>

      <Space direction="horizontal" gap="m" wrap>
        <Button
          style={styles.button}
          loading={loading}
          onPress={() => handleStaticCall('success')}
        >
          成功调用
        </Button>

        <Button
          style={styles.button}
          loading={loading}
          onPress={() => handleStaticCall('error')}
        >
          失败调用
        </Button>

        <Button
          style={styles.button}
          loading={loading}
          onPress={() => handleStaticCall('timeout')}
        >
          超时调用
        </Button>
      </Space>

      {result ? (
        <View style={styles.resultContainer}>
          <View style={styles.statusIndicator}>
            <View style={[styles.statusDot, styles.statusSuccess]} />
            <Text style={styles.statusText}>识别成功</Text>
          </View>
          <Text style={[styles.resultText, styles.successText]}>{result}</Text>
        </View>
      ) : null}

      {error ? (
        <View style={styles.resultContainer}>
          <View style={styles.statusIndicator}>
            <View style={[styles.statusDot, styles.statusError]} />
            <Text style={styles.statusText}>识别失败</Text>
          </View>
          <Text style={[styles.resultText, styles.errorText]}>{error}</Text>
        </View>
      ) : null}
    </Card>
  );
};

export default StaticUsage;
