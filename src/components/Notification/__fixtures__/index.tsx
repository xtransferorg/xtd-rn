import React, { createContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Space, Notification, Size, Fill } from '@xrnjs/ui';
import Card from '_global/Card';

const TestContext = createContext('按钮默认内容');

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <ScrollView>
      <TestContext.Provider value="Context内容，点击关闭">
        <Space>
          <Card title="基本用法">
            <Notification
              offset={100}
              visible={visible}
              onClosed={() => setVisible(false)}
              title="这是通知的标题这是通知的标题这是通知的标题"
              description="B2B外贸金融全功能平台满足您的所有需求，国际化服务，服务全球买卖家轻松实现7*24全球免费秒速到账。99%超高客户好评率安心之选。简单三步，极速开户"
              status="info"
              duration={0}
            />
            <Button onPress={() => setVisible(true)}>打开信息通知</Button>
          </Card>

          <Card title="方法调用（这种方式消费不了context）">
            <Button
              onPress={() =>
                Notification.info({
                  title: '信息通知',
                  description: '内容',
                }).then(() => console.log('关闭了'))
              }
            >
              打开信息通知
            </Button>
            <Button
              onPress={() =>
                Notification.warning({
                  title: '信息通知',
                  description: '内容',
                }).then(() => console.log('关闭了'))
              }
            >
              打开警告通知
            </Button>
            <Button
              onPress={() =>
                Notification.success({
                  title: '信息通知',
                  description: '内容',
                }).then(() => console.log('关闭了'))
              }
            >
              打开成功通知
            </Button>
            <Button
              onPress={() =>
                Notification.error({
                  title: '信息通知',
                  description: '内容',
                }).then(() => console.log('关闭了'))
              }
            >
              打开失败通知
            </Button>
          </Card>

          <Card title="配置能力">
            <Button
              onPress={() =>
                Notification.info({
                  title: '信息通知',
                  description: '内容',
                  showIcon: false,
                }).then(() => console.log('关闭了'))
              }
            >
              隐藏icon
            </Button>
            <Button
              onPress={() =>
                Notification.info({
                  title: '信息通知',
                  description: '内容',
                  showIcon: false,
                  btn: (
                    <View style={{ flexDirection: 'row' }}>
                      <Button size={Size.small} fill={Fill.weak}>
                        次按钮
                      </Button>
                      <Button size={Size.small} style={{ marginLeft: 8 }}>
                        主按钮
                      </Button>
                    </View>
                  ),
                }).then(() => console.log('关闭了'))
              }
            >
              自定义 Button
            </Button>
          </Card>
        </Space>
      </TestContext.Provider>
    </ScrollView>
  );
};
