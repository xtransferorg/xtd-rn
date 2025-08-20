import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import { OcrPicture, Field, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage: FC = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <Card title="基础用法">
      <Text style={styles.description}>
        OcrPicture 组件支持通过输入框集成 OCR
        识别功能，用户可以点击扫描图标打开相机进行识别。
      </Text>

      <Space direction="vertical" gap="m">
        <Field label="身份证号码识别">
          <OcrPicture
            enableInput
            inputProps={{
              value: input1,
              placeholder: '请输入身份证号码',
              onChange: setInput1,
            }}
            tip="请将身份证正面放置在框内"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            timeout={10000}
            onScan={(option) => {
              console.log('扫描选项:', option);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('123456789012345678');
                }, 2000);
              });
            }}
            onSuccess={(result) => {
              console.log('识别成功:', result);
              setInput1(result);
            }}
            onError={(error) => {
              console.log('识别失败:', error);
              setInput1('');
            }}
          />
        </Field>

        <Field label="护照号码识别">
          <OcrPicture
            enableInput
            inputProps={{
              value: input2,
              placeholder: '请输入护照号码',
              allowClear: true,
              onChange: setInput2,
            }}
            tip="请将护照信息页放置在框内"
            direction={OcrPicture.OcrPictureDirection.Horizontal}
            timeout={15000}
            onScan={(option) => {
              console.log('扫描选项:', option);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('E12345678');
                }, 2000);
              });
            }}
            onSuccess={(result) => {
              console.log('识别成功:', result);
              setInput2(result);
            }}
            onError={(error) => {
              console.log('识别失败:', error);
            }}
          />
        </Field>
      </Space>
    </Card>
  );
};

export default BasicUsage;
