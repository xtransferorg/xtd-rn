import React, { FC, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, OcrPicture, Field } from '@xrnjs/ui';
import Card from '_global/Card';

interface OcrPictureProps {}
const OcrPictureScreen: FC<OcrPictureProps> = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [resultStr1, setResultStr1] = useState('');
  const [resultStr2, setResultStr2] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Card>
        <View>
          <Field label="带有Input框的扫描">
            <OcrPicture
              enableInput
              inputProps={{
                value: input1,
                placeholder: '请输入身份证号码',
                autoFocus: true,
                onChange: (val) => {
                  console.log('---------->', val);
                  setInput1(val);
                },
              }}
              tip="请将身份证正反面放置在框内"
              direction={OcrPicture.OcrPictureDirection.Horizontal}
              timeout={10000}
              onScan={(option: any) => {
                console.log('option', option);
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve('123456789012345678');
                  }, 2000);
                });
              }}
              onSuccess={(result) => {
                console.log('result', result);
                setInput1(result);
              }}
              onError={(error) => {
                console.log('error', error);
              }}
            />
          </Field>
        </View>
        <Field label="接口失败, 垂直方向的情况：">
          <OcrPicture
            enableInput
            inputProps={{
              value: input2,
              placeholder: '请输入身份证号码',
              allowClear: true,
              onChange: (val) => {
                console.log('----------', val);
                setInput2(val);
              },
            }}
            tip="请将身份证正反面放置在框内"
            direction={OcrPicture.OcrPictureDirection.Vertical}
            timeout={10000}
            onScan={(option) => {
              console.log('option', option);
              return new Promise((_, reject) => {
                setTimeout(() => {
                  reject(new Error('接口异常'));
                }, 2000);
              });
            }}
            onSuccess={(result) => {
              console.log('result', result);
              setInput2(result);
            }}
            onError={(error) => {
              console.log('error', error);
            }}
          />
        </Field>
      </Card>
      <Card title="函数式调用">
        <View>
          <Button
            loading={loading}
            onPress={() => {
              setLoading(true);
              OcrPicture.open({
                tip: '请将身份证正反面放置在框内',
                direction: OcrPicture.OcrPictureDirection.Horizontal,
                timeout: 10000,
                onScan: (option) => {
                  console.log('option', option);
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      resolve('123456789012345678');
                    }, 2000);
                  });
                },
              })
                .then((result) => {
                  console.log('result', result);
                  setResultStr1(JSON.stringify(result));
                })
                .catch((error) => {
                  console.log('error', error);
                  setResultStr2('调用失败');
                })
                .finally(() => {
                  setLoading(false);
                });
            }}
          >
            函数调用:成功
          </Button>
        </View>
        <Text style={{ color: 'green' }}>{resultStr1}</Text>
        <View>
          <Button
            loading={loading}
            onPress={() => {
              setLoading(true);
              OcrPicture.open({
                tip: '请将身份证正反面放置在框内',
                direction: OcrPicture.OcrPictureDirection.Vertical,
                timeout: 10000,
                onScan: (option) => {
                  console.log('option', option);
                  return new Promise((_, reject) => {
                    setTimeout(() => {
                      reject(new Error('函数式调用失败'));
                    }, 2000);
                  });
                },
              })
                .then((result) => {
                  console.log('result', result);
                })
                .catch((error) => {
                  console.log('error', error);
                  setResultStr2('函数式调用失败');
                })
                .finally(() => {
                  setLoading(false);
                });
            }}
          >
            函数调用:失败
          </Button>
        </View>
        <Text style={{ color: 'red' }}>{resultStr2}</Text>
      </Card>
    </ScrollView>
  );
};

export default OcrPictureScreen;
