import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { OcrPicture, Field, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const TimeoutUsage: FC = () => {
  const [shortTimeoutInput, setShortTimeoutInput] = useState('');
  const [longTimeoutInput, setLongTimeoutInput] = useState('');
  const [noTimeoutInput, setNoTimeoutInput] = useState('');

  return (
    <Card title="超时配置">
      <Text style={styles.description}>
        可以配置不同的超时时间来控制 OCR 识别的等待时长，避免长时间等待。
      </Text>

      <View style={styles.timeoutContainer}>
        <Text style={styles.timeoutTitle}>⚠️ 超时说明</Text>
        <Text style={styles.timeoutDescription}>
          超时时间设置过短可能导致识别失败，建议根据网络环境和识别复杂度合理设置。
        </Text>
      </View>

      <Space direction="vertical" gap="m">
        <Field label="短超时（5秒）">
          <View style={styles.configContainer}>
            <Text style={styles.configTitle}>配置信息</Text>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>超时时间:</Text>
              <Text style={styles.configValue}>5000ms</Text>
            </View>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>适用场景:</Text>
              <Text style={styles.configValue}>快速识别</Text>
            </View>
          </View>

          <OcrPicture
            enableInput
            inputProps={{
              value: shortTimeoutInput,
              placeholder: '5秒超时识别',
              onChange: setShortTimeoutInput,
            }}
            tip="请将证件放置在框内（5秒超时）"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            timeout={5000}
            onScan={(option) => {
              console.log('短超时扫描:', option);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('短超时识别成功');
                }, 3000);
              });
            }}
            onSuccess={(result) => {
              setShortTimeoutInput(result);
            }}
            onError={(error) => {
              console.log('短超时失败:', error);
            }}
          />
        </Field>

        <Field label="长超时（30秒）">
          <View style={styles.configContainer}>
            <Text style={styles.configTitle}>配置信息</Text>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>超时时间:</Text>
              <Text style={styles.configValue}>30000ms</Text>
            </View>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>适用场景:</Text>
              <Text style={styles.configValue}>复杂识别</Text>
            </View>
          </View>

          <OcrPicture
            enableInput
            inputProps={{
              value: longTimeoutInput,
              placeholder: '30秒超时识别',
              onChange: setLongTimeoutInput,
            }}
            tip="请将证件放置在框内（30秒超时）"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            timeout={30000}
            onScan={(option) => {
              console.log('长超时扫描:', option);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('长超时识别成功');
                }, 2000);
              });
            }}
            onSuccess={(result) => {
              setLongTimeoutInput(result);
            }}
            onError={(error) => {
              console.log('长超时失败:', error);
            }}
          />
        </Field>

        <Field label="无超时限制">
          <View style={styles.configContainer}>
            <Text style={styles.configTitle}>配置信息</Text>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>超时时间:</Text>
              <Text style={styles.configValue}>无限制</Text>
            </View>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>适用场景:</Text>
              <Text style={styles.configValue}>稳定识别</Text>
            </View>
          </View>

          <OcrPicture
            enableInput
            inputProps={{
              value: noTimeoutInput,
              placeholder: '无超时限制识别',
              onChange: setNoTimeoutInput,
            }}
            tip="请将证件放置在框内（无超时限制）"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            onScan={(option) => {
              console.log('无超时扫描:', option);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('无超时识别成功');
                }, 2000);
              });
            }}
            onSuccess={(result) => {
              setNoTimeoutInput(result);
            }}
            onError={(error) => {
              console.log('无超时失败:', error);
            }}
          />
        </Field>
      </Space>
    </Card>
  );
};

export default TimeoutUsage;
