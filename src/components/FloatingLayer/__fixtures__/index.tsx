import React, { createContext, useContext, useState } from 'react';
import {
  Button,
  FloatingLayer,
  Space,
  Input,
  PasswordInput,
  Uploader,
  Dropdown,
  Collapse,
  Modal,
} from '@xrnjs/ui';
import { Keyboard, ScrollView, View, Platform } from 'react-native';
import { Text } from 'react-native';
import styles from './style';
import Card from '_global/Card';
import NewFloatingLayerScreen from './new';
import SwitchFloatingLayerScreen from './switch';

const T = createContext(1);

const A = () => {
  return <Text>{useContext(T)}</Text>;
};

const FloatingLayerScreen = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visibleM, setVisibleM] = useState(false);
  const [count, setCount] = useState(2);
  const [keyboardMargin, setKeyboardMargin] = useState(0);
  const isIOS = Platform.OS === 'ios';

  const handleCancel4 = () => {
    Keyboard.dismiss();
    setVisible4(false);
  };
  const handleCancel8 = () => {
    Keyboard.dismiss();
    setVisible8(false);
  };
  const handleCancel5 = () => {
    Keyboard.dismiss();
    setVisible5(false);
  };

  // let resolve1: (value: boolean | PromiseLike<boolean>) => void;

  return (
    <T.Provider value={10}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Space>
          <Card title="API直接调用">
            <Button
              onPress={() => {
                const layer = FloatingLayer.open({
                  title: 'api测试',
                  closeOnPressOverlay: true,
                  onCancel: () => layer.close(),
                  onConfirm: () => layer.close(),
                  children: (
                    <View>
                      <Text>
                        这是一个弹窗测试这是一个弹窗测试这是一个弹窗测试
                      </Text>
                      <Text>
                        这是一个弹窗测试这是一个弹窗测试这是一个弹窗测试
                      </Text>
                    </View>
                  ),
                });
              }}
            >
              方法调用
            </Button>
          </Card>
          <NewFloatingLayerScreen />

          <SwitchFloatingLayerScreen />

          <Card title="多个 Modal">
            <FloatingLayer
              title="上传"
              visible={visible7}
              description="描述"
              onPressOverlay={() => setVisible7(false)}
              onPressTextButton={() => setVisible7(false)}
              onConfirm={() => setVisible7(false)}
              onCancel={() => setVisible7(false)}
              useNative
              onClose={() => setVisible7(false)}
            >
              <Uploader
                useContainerWidth
                // onActionContainerClose={() => { 原本业务处理，目前组件内部已经处理
                //   resolve1(true);
                // }}
                actionSheetProps={{
                  useNative: true,
                  // beforeClose: (action) => { 原本业务处理，目前组件内部已经处理
                  //   return new Promise((resolve) => {
                  //     console.log(action);
                  //     if (action === 'overlay' || action === 'cancel') {
                  //       resolve(true);
                  //     } else {
                  //       resolve1 = resolve;
                  //     }
                  //   });
                  // },
                }}
              />
              <Dropdown>
                <Dropdown.Item
                  search
                  useNative
                  options={[
                    { label: '全部商品', value: null, badge: true },
                    ...[1, 2, 3, 4, 5, 6, 7, 8].map((v) => ({
                      label: `商品分类${v}`,
                      value: v,
                      badge: v,
                    })),
                  ]}
                  value={null}
                />
              </Dropdown>
              <Button onPress={() => setVisibleM(true)}>打开Modal</Button>
              <Button
                onPress={() =>
                  Modal.info({
                    title: '执行XXX提示',
                    message:
                      '执行XXX操作的补充说明文案，文案描述文案描述文案描述文案描述文案描述文案描述文案描述文案描述。',
                    cancelButtonText: '取消',
                    solidButton: true,
                    buttonsDirection: 'column',
                    useNative: true,
                  })
                }
              >
                打开Modal(api)
              </Button>
            </FloatingLayer>
            <Modal.Component
              title={
                <View>
                  <Input placeholder="请输入1" />
                </View>
              }
              message={
                <View>
                  <Input placeholder="请输入2" />
                </View>
              }
              visible={visibleM}
              onPressConfirm={() => {
                setVisibleM(false);
              }}
              solidButton
              useNative
            />
            <Button onPress={() => setVisible7(true)}>打开上传组件浮层</Button>
          </Card>

          <Card title="向下拖拽关闭">
            <FloatingLayer
              title="标题很长标题很长标题很长标题很长标题很长标题很长"
              visible={visible2}
              description="描述"
              onPressOverlay={() => setVisible2(false)}
              onPressTextButton={() => setVisible2(false)}
              onCancel={() => setVisible2(false)}
              onConfirm={() => setVisible2(false)}
              footer={<Button style={styles.btn}>唯一按钮</Button>}
              enableSlidingClose
            >
              <View>
                <A />
              </View>
            </FloatingLayer>
            <Button onPress={() => setVisible2(true)}>
              功能类浮层(向下拖拽关闭)
            </Button>
          </Card>

          <Card title="超长内容">
            <FloatingLayer
              title="标题"
              enableSlidingClose
              threshold={0.7}
              visible={visible3}
              onPressOverlay={() => setVisible3(false)}
              onPressTextButton={() => setVisible3(false)}
              onCancel={() => setVisible3(false)}
              footer={<Button style={styles.btn}>唯一按钮</Button>}
            >
              <View style={styles.mockContent}>
                <Text>
                  作为一站式外贸企业跨境金融和风控服务公司，XTransfer通过与知名跨国银行及金融机构合作，建设跨国大集团级全球多币种统一结算平台，并打造了以中小微企业为中心的，数据化、自动化、互联网化和智能化的反洗钱风控基础设施。XTransfer以科技为桥梁，链接全球大型金融机构和中小微企业，让中小微企业享受到和大型跨国集团企业同等水平的跨境金融服务。「依托
                </Text>
              </View>
            </FloatingLayer>
            <Button onPress={() => setVisible3(true)}>
              功能类浮层-超长内容(向下拖拽关闭)
            </Button>
          </Card>

          <Card title="带输入框">
            <FloatingLayer
              title="标题"
              visible={visible4}
              useNative
              onPressOverlay={handleCancel4}
              onPressTextButton={handleCancel4}
              onClose={handleCancel4}
              onCancel={handleCancel4}
              keyboardMargin={keyboardMargin}
              containerHeight={isIOS ? undefined : 450} // 存在输入组件且若内容过多，根据实际情况设置，避免输入时候键盘显示将内容推出屏幕 Android若超出可以根据键盘弹出情况改变containerHeight的值 iOS通过keyboardMargin来
            >
              <Input
                placeholder="请输入"
                onFocus={() => setKeyboardMargin(0)}
              />
              <PasswordInput
                placeholder="请输入密码"
                onFocus={() => setKeyboardMargin(0)}
              />
              <Collapse accordion>
                <Collapse.Item title="标题 1" name="1">
                  <Text>Hello 1 content</Text>
                </Collapse.Item>
                <Collapse.Item title="标题 2" name="2">
                  <Text>Hello 2 content</Text>
                </Collapse.Item>
              </Collapse>
              <Text>
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
                测试键盘遮挡情况测试键盘遮挡情况
              </Text>
              <Input
                placeholder="请输入"
                onFocus={() => setKeyboardMargin(isIOS ? 320 : 0)}
              />
              <PasswordInput
                placeholder="请输入密码"
                onFocus={() => setKeyboardMargin(isIOS ? 350 : 0)}
              />
            </FloatingLayer>
            <Button onPress={() => setVisible4(true)}>
              输入框内（内容过多情况）
            </Button>
            <FloatingLayer
              title="标题"
              visible={visible8}
              useNative
              disableKeyboardManager
              onPressOverlay={handleCancel8}
              onPressTextButton={handleCancel8}
              onCancel={handleCancel8}
              onClose={handleCancel8}
            >
              <Input placeholder="请输入" />
              <PasswordInput placeholder="请输入密码" />
            </FloatingLayer>
            <Button onPress={() => setVisible8(true)}>输入框</Button>
          </Card>

          <Card title="自动控制高度">
            <FloatingLayer
              title="标题"
              visible={visible5}
              onPressOverlay={handleCancel5}
              onPressTextButton={handleCancel5}
              onCancel={handleCancel5}
              items={Array.from({ length: 3 }).map((_, index) => (
                <View style={styles.item} key={index}>
                  <Text>{index}</Text>
                </View>
              ))}
              footer={<Button style={styles.btn}>唯一按钮</Button>}
            >
              <Button onPress={() => setCount(count + 1)}>+1</Button>
              {Array.from({ length: count }).map((_, index) => (
                <View style={styles.blockItem} key={index}>
                  <Text>{index}</Text>
                </View>
              ))}
            </FloatingLayer>
            <Button onPress={() => setVisible5(true)}>动态设置内容</Button>
          </Card>

          <Card title="items换行">
            <FloatingLayer
              visible={visible}
              onPressOverlay={() => setVisible(false)}
              items={Array.from({ length: 3 }).map((_, index) => (
                <View style={styles.item} key={index}>
                  <Text>{index}</Text>
                </View>
              ))}
              textButton="取消分享"
              onPressTextButton={() => setVisible(false)}
            />
            <Button onPress={() => setVisible(true)}>分享类浮层</Button>

            <FloatingLayer
              visible={visible1}
              onPressOverlay={() => setVisible1(false)}
              items={Array.from({ length: 10 }).map((_, index) => (
                <View style={styles.item} key={index}>
                  <Text>{index}</Text>
                </View>
              ))}
              textButton="取消分享"
              onPressTextButton={() => setVisible1(false)}
            />
            <Button onPress={() => setVisible1(true)}>分享类浮层</Button>
          </Card>

          <Card title="动画时长">
            <FloatingLayer
              visible={visible6}
              onPressOverlay={() => setVisible6(false)}
              onPressTextButton={() => setVisible6(false)}
              onConfirm={() => setVisible6(false)}
              duration={100}
            >
              <Button onPress={() => setVisible6(false)}>Text</Button>
            </FloatingLayer>
            <Button onPress={() => setVisible6(true)}>动画时长</Button>
          </Card>
        </Space>
      </ScrollView>
    </T.Provider>
  );
};

export default FloatingLayerScreen;
