import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { Toast, Button } from '@xrnjs/ui';
import Card from '_global/Card';

const ToastScreen = () => {
  const [loading, setLoading] = useState(false);
  const loadingReturnRef = useRef<any>();

  useEffect(() => {
    if (loading) {
      loadingReturnRef.current = Toast.loading({
        message: '测试控制Toast',
        duration: 0,
        forbidPress: false,
      });

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      if (loadingReturnRef.current) {
        loadingReturnRef.current.close();
      }
    }
  }, [loading]);

  return (
    <ScrollView>
      <Card title="基本用法">
        <Button
          onPress={() =>
            Toast({
              position: 'top',
              message:
                '提示内容,每一行内容的宽度不能超过9%，如果超过会自动另起一行，第二行内容自动居中',
              forbidPress: true,
            })
          }
        >
          文字提示:自动换行
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '提示内容\n也可以通过n另起一行',
              forbidPress: true,
            })
          }
        >
          文字提示:手动换行
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '提示内容',
              forbidPress: true,
            })
          }
        >
          文字提示: 最小宽度120
        </Button>

        <Button onPress={() => Toast.success('操作成功')}>成功提示</Button>

        <Button onPress={() => Toast.fail('操作失败')}>失败提示</Button>
        <Button
          onPress={() =>
            Toast.fail(
              '操作失败 长文案 长文案 长文案 长文案 长文案 长文案 长文案 长文案 长文案'
            )
          }
        >
          失败提示(长文案)
        </Button>

        <Button onPress={() => Toast.warn('警告提示')}>警告提示</Button>

        {/* <Button
          onPress={() =>
            Toast({
              type: 'icon',
              message: '自定义图标文本超过120会自动换行',
              icon: <IconMASuccess2 size={40} />,
            })
          }
        >
          自定义图标
        </Button>

        <Button
          onPress={() =>
            Toast.loading({
              message: '加载中...',
              forbidPress: true,
            })
          }
        >
          加载中-默认circular
        </Button>

        <Button
          onPress={() =>
            Toast({
              type: 'loading',
              loadingType: 'spinner',
              message: '加载中...',
              forbidPress: true,
            })
          }
        >
          加载中-另一种图标spinner
        </Button>

        <Button
          onPress={() => {
            let d = 3;
            const buildMsg = () => `倒计时 ${d} 秒...`;

            const ddd = Toast.loading({
              message: buildMsg(),
              forbidPress: true,
              duration: 0,
            });
            const doLoop = () => {
              if (d > 0) {
                ddd.setMessage(buildMsg());
                d -= 1;
                setTimeout(() => {
                  doLoop();
                }, 1000);
              } else {
                //  第一种方法清除
                // ddd.close();
                // 第二种方法通过Toast.remove(key)
                Toast.remove(ddd.key);
              }
            };

            doLoop();
          }}
        >
          加载倒计时
        </Button>

        <Button onPress={() => setLoading(true)}>状态控制-loading</Button> */}

        <Button onPress={() => Toast.removeAll()}>
          清除所有Toast-removeAll
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '提示内容',
              forbidPress: true,
              position: 'top',
            })
          }
        >
          顶部提示-禁止背景点击
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '提示内容',
              forbidPress: true,
              position: 'bottom',
            })
          }
        >
          底部提示-禁止背景点击
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '提示内容-点击消息后消失',
              duration: 0,
              forbidPress: false,
              closeOnPress: true,
              position: 'bottom',
            })
          }
        >
          底部提示-不会自动消失
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '点击清除所有Toast按钮清除',
              duration: 0,
              position: 'top',
              forbidPress: false,
            })
          }
        >
          顶部提示-不会自动消失
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '提示内容-中间-点击遮罩后消失',
              duration: 0,
              overlay: true,
              forbidPress: false,
              closeOnPressOverlay: true,
            })
          }
        >
          文字提示-中间-显示遮罩
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '提示内容-点击提示内容后消失',
              duration: 0,
              overlay: true,
              closeOnPress: true,
              forbidPress: true,
              position: 'bottom',
              closeOnPressOverlay: true,
              onPressOverlay: () => {
                Toast({
                  message: '点击遮罩,打开一个新的Toast',
                  forbidPress: true,
                });
              },
            })
          }
        >
          文字提示-点击遮罩回调
        </Button>

        <Button
          onPress={() =>
            Toast({
              message: '提示内容-点击遮罩后消失',
              overlay: true,
              forbidPress: false,
              closeOnPressOverlay: true,
              position: 'bottom',
              onOpen: () => {
                Toast({
                  message: '打开一个新的Toast',
                  forbidPress: true,
                });
              },
            })
          }
        >
          文字提示-onOpen事件
        </Button>
      </Card>
    </ScrollView>
  );
};

export default ToastScreen;
