import React, { createContext, useContext, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Modal, Fill } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import ModalFormScreen from './modal-form';

const T = createContext(1);

const A = () => {
  return <Text>{useContext(T)}</Text>;
};

const ModalScreen = () => {
  const [modalProps1, setModalProps1] = useState({
    visible: false,
    confirmButtonLoading: false,
    cancelButtonLoading: false,
  });
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);
  const [visible12, setVisible12] = useState(false);
  const [visible13, setVisible13] = useState(false);
  const [visible14, setVisible14] = useState(false);
  const [contentFlag, setContentFlag] = useState(false);
  const [visibleMul, setVisibleMul] = useState(false);

  return (
    <T.Provider value={10}>
      <ScrollView>
        <Card title="基本用法">
          <Button
            onPress={() => {
              Modal.info({
                title: '执行XXX提示',
                message:
                  '执行XXX操作的补充说明文案，文案描述文案描述文案描述文案描述文案描述文案描述文案描述文案描述。',
                cancelButtonText: '取消',
                solidButton: true,
                buttonsDirection: 'column',
                showClose: true,
              });
            }}
          >
            状态对话框-常规提示
          </Button>
          <Button
            onPress={() => {
              Modal.warning({
                title: '执行XXX提示',
                message:
                  '执行XXX操作的补充说明文案，文案描述文案描述文案描述文案描述文案描述文案描述文案描述文案描述。',
                cancelButtonText: '取消',
                solidButton: true,
              });
            }}
          >
            状态对话框-警告
          </Button>
          <Button
            onPress={() => {
              Modal.success({
                title: '执行XXX提示',
                message:
                  '执行XXX操作的补充说明文案，文案描述文案描述文案描述文案描述文案描述文案描述文案描述文案描述。',
                cancelButtonText: '取消',
                solidButton: true,
              });
            }}
          >
            状态对话框-成功
          </Button>
          <Button
            onPress={() => {
              Modal.error({
                title: '执行XXX提示',
                message:
                  '执行XXX操作的补充说明文案，文案描述文案描述文案描述文案描述文案描述文案描述文案描述文案描述。',
                cancelButtonText: '取消',
                solidButton: true,
              });
            }}
          >
            状态对话框-失败
          </Button>

          <ModalFormScreen />

          <Modal.Component
            visible={visible12}
            title="标题"
            message={
              <View>
                <Text>
                  执行XXX操作的补充说明文案，文案描述文案描述文案描述文案描述文案描述文案描述文案描述文案描述。
                </Text>
                <Button onPress={() => setVisibleMul(true)}>
                  打开嵌套Modal
                </Button>
              </View>
            }
            confirmButtonText="主要按钮"
            onPressConfirm={() => setVisible12(false)}
            solidButton
            buttonsDirection="column"
            showCancelButton
            cancelButtonText="次要按钮"
            cancelButtonProps={{
              fill: Fill.link,
              style: { alignSelf: 'center' },
            }}
            useNative
            onPressCancel={() => setVisible12(false)}
            onClose={() => setVisible12(false)}
          />
          <Modal.Component
            useNative
            visible={visibleMul}
            message={
              <View>
                <Text>嵌套modal</Text>
                <Button onPress={() => setVisibleMul(false)}>关闭</Button>
              </View>
            }
          />
          <Button onPress={() => setVisible12(true)}>
            次要按钮是文本按钮1111111
          </Button>

          <Modal.Component
            visible={visible13}
            title="标题"
            message={
              <>
                <View style={styles.visible13MessageStyle}>
                  <Text>
                    分段文本描述，文本描述文本描述文本描述文本描述文本描述。
                  </Text>
                </View>
                <View style={styles.visible13MessageStyle}>
                  <Text>
                    分段文本描述，文本描述文本描述文本描述文本描述文本描述。
                  </Text>
                </View>
                <View style={styles.visible13MessageStyle}>
                  <Text>
                    分段文本描述，文本描述文本描述文本描述文本描述文本描述。
                  </Text>
                </View>
              </>
            }
            confirmButtonText="确定"
            onPressConfirm={() => setVisible13(false)}
            solidButton
            buttonsDirection="column"
            showCancelButton
            cancelButtonText="取消"
            onPressCancel={() => setVisible13(false)}
            onClose={() => setVisible13(false)}
          />
          <Button onPress={() => setVisible13(true)}>
            带标题的分段描述弹窗
          </Button>

          <Button
            onPress={() => {
              Modal({
                title: <A />,
                showCancelButton: true,
                cancelButtonText: '取消',
                solidButton: true,
              });
            }}
          >
            提示弹窗-标题
          </Button>

          <Button
            onPress={() => {
              Modal.confirm({
                title:
                  '结汇提现是 XTransfer代您向银行结汇申报后，将人民币汇至您在中国地区的银行账户，您确定暂停使用吗？',
                message:
                  '为了您的账户安全，忘记取款密码需到 附近网点进行重新配置。如有疑问请拨打银行客服88888-8。',
                cancelButtonText: '取消',
                solidButton: true,
              });
            }}
          >
            提示弹窗-标题+内容
          </Button>

          <Modal.Component
            visible={visible10}
            {...(contentFlag
              ? {
                  title: <A />,
                }
              : {})}
            message="为了您的账户安全，忘记取款密码需到"
            solidButton={true}
            onPressConfirm={() => {
              setVisible10(false);
            }}
          />

          <Button
            onPress={() => {
              setContentFlag((origin) => !origin);
              setVisible10(true);
            }}
          >
            切换弹窗内容高度
          </Button>

          <Modal.Component
            showCancelButton
            title="撤销后将不享受投资收益是否确定撤销是否确定撤销投资"
            {...modalProps1}
            cancelButtonProps={{
              text: '次要操作',
              loading: modalProps1.cancelButtonLoading,
            }}
            onPressOverlay={() => {
              setModalProps1({
                confirmButtonLoading: false,
                cancelButtonLoading: false,
                visible: false,
              });
            }}
            onPressCancel={() => {
              setModalProps1((origin) => ({
                ...origin,
                cancelButtonLoading: true,
              }));
            }}
            onPressConfirm={() => {
              setModalProps1((origin) => ({
                ...origin,
                confirmButtonLoading: true,
              }));

              setTimeout(() => {
                setModalProps1({
                  confirmButtonLoading: false,
                  cancelButtonLoading: false,
                  visible: false,
                });
              }, 1000);
            }}
            solidButton
          />
          <Button
            onPress={() => {
              setModalProps1((origin) => ({ ...origin, visible: true }));
            }}
          >
            有标题无文本弹窗
          </Button>

          <Modal.Component
            title="多行标题多行标题多行标题多行标多行标题多行标题"
            message="感谢您的信任并下载 XTransfer App。 依据相关法律法规，我们将在充分保障 您的知情权且获得您的明确授权后收集使用您的个人信息。请您务必仔细阅读 《用户隐私政策条款》与《用户隐私政策条款》并确保您已经全部了解关于您的个人信息收集使用规则。"
            visible={visible2}
            onPressConfirm={() => {
              setVisible2(false);
            }}
            solidButton
          />
          <Button
            onPress={() => {
              setVisible2(true);
            }}
          >
            有标题文本弹窗
          </Button>

          <Modal.Component
            title="多行标题多行标题多行标题多行标多行标题多行标题"
            message="感谢您的信任并下载 XTransfer App。 依据相关法律法规，我们将在充分保障 您的知情权且获得您的明确授权后收集使用您的个人信息。请您务必仔细阅读 《用户隐私政策条款》与《用户隐私政策条款》并确保您已经全部了解关于您的个人信息收集使用规则。"
            visible={visible3}
            showConfirmButton={false}
            solidButton
            buttonsDirection="column"
            actions={[
              {
                key: 'confirm',
                text: '主要操作',
                onPress: () => setVisible3(false),
              },
              {
                key: 'default',
                text: '次要操作',
                onPress: () => setVisible3(false),
              },
              {
                key: 'secondary',
                text: '次要操作',
                onPress: () => setVisible3(false),
              },
            ]}
          />
          <Button
            onPress={() => {
              setVisible3(true);
            }}
          >
            多按钮
          </Button>

          <Modal.Component
            title="多行标题多行标题多行标题多行标多行标题多行标题"
            message="感谢您的信任并下载 XTransfer App。 依据相关法律法规，我们将在充分保障 您的知情权且获得您的明确授权后收集使用您的个人信息。请您务必仔细阅读 《用户隐私政策条款》与《用户隐私政策条款》并确保您已经全部了解关于您的个人信息收集使用规则。"
            visible={visible14}
            showConfirmButton={false}
            buttonsDirection="column"
            actions={[
              {
                key: 'confirm',
                color: '#ff7a00',
                text: '主要操作',
                onPress: () => setVisible14(false),
              },
              {
                key: 'default',
                text: '次要操作',
                onPress: () => setVisible14(false),
              },
              {
                key: 'secondary',
                text: '次要操作',
                onPress: () => setVisible14(false),
              },
            ]}
          />
          <Button
            onPress={() => {
              setVisible14(true);
            }}
          >
            多按钮（老样式）
          </Button>

          <Modal.Component
            showClose={true}
            imgSource={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            imgSize="small"
            title="多行标题多行标题多行标题多行标多行标题多行标题"
            message="感谢您的信任并下载 XTransfer App。 依据相关法律法规，我们将在充分保障 您的知情权且获得您的明确授权后收集使用您的个人信息。请您务必仔细阅读 《用户隐私政策条款》与《用户隐私政策条款》并确保您已经全部了解关于您的个人信息收集使用规则。"
            visible={visible4}
            onPressConfirm={() => {
              setVisible4(false);
            }}
            onPressClose={() => {
              setVisible4(false);
            }}
          />
          <Button
            onPress={() => {
              setVisible4(true);
            }}
          >
            图文弹窗
          </Button>

          <Modal.Component
            showCancelButton
            imgSource={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            imgSize="large"
            title="多行标题多行标题多行标题多行标多行标题多行标题"
            message="感谢您的信任并下载 XTransfer App。 依据相关法律法规，我们将在充分保障 您的知情权且获得您的明确授权后收集使用您的个人信息。请您务必仔细阅读 《用户隐私政策条款》与《用户隐私政策条款》并确保您已经全部了解关于您的个人信息收集使用规则。"
            onClose={() => setVisible5(false)}
            visible={visible5}
            onPressConfirm={() => setVisible5(false)}
            onPressCancel={() => setVisible5(false)}
          />
          <Button onPress={() => setVisible5(true)}>图文弹窗-双按钮</Button>

          <Modal.Component
            buttonsDirection="column"
            showCancelButton
            imgSource={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            imgSize="large"
            title="多行标题多行标题多行标题多行标多行标题多行标题"
            message="感谢您的信任并下载 XTransfer App。 依据相关法律法规，我们将在充分保障 您的知情权且获得您的明确授权后收集使用您的个人信息。请您务必仔细阅读 《用户隐私政策条款》与《用户隐私政策条款》并确保您已经全部了解关于您的个人信息收集使用规则。"
            onClose={() => setVisible6(false)}
            visible={visible6}
            confirmButtonText="主要操作"
            onPressConfirm={() => setVisible6(false)}
            onPressCancel={() => setVisible6(false)}
          />
          <Button onPress={() => setVisible6(true)}>图文弹窗-纵向按钮</Button>

          <Modal.Component
            content={<Text style={styles.customContent}>自定义内容</Text>}
            footer={
              <Button
                style={styles.customFooter}
                onPress={() => {
                  setVisible7(false);
                }}
              >
                自定义底部
              </Button>
            }
            visible={visible7}
          />
          <Button
            onPress={() => {
              setVisible7(true);
            }}
          >
            自定义弹窗内容、底部内容
          </Button>

          <Modal.Component
            title="单行标题"
            message="作为一站式外贸企业跨境金融和风控服务公司，XTransfer通过与知名跨国银行及金融机构合作，建设跨国大集团级全球多币种统一结算平台，并打造了以中小微企业为中心的，数据化、自动化、互联网化和智能化的反洗钱风控基础设施。XTransfer以科技为桥梁，链接全球大型金融机构和中小微企业，让中小微企业享受到和大型跨国集团企业同等水平的跨境金融服务。「依托 B2C 跨境电商平台，业务流程统一，信息流、物流、资金流信息电子化，可迅速审查…」今天，当 B2C 跨境电商已经建立好相对完善的跨境结算和风控体系后，针对 B2C 跨境电商的支付服务，有了非常好的体验。相对于 B2C 模式，B2B 模式交易链路更长，从询盘、沟通、定制、寻找供应商、生产、找货代、发货、清关等，一笔交易往往长达数月。整个链路涉及大量的线下环节，这造成了 B2B 跨境交易数据的分散以及非结构化，同时随着 B2B 跨境贸易进一步呈现小型化、碎片化趋势，其反洗钱风控环节的难度系数更高。作为一站式外贸企业跨境金融和风控服务公司，XTransfer 历经 5 年努力，已经服务超过 25 万家 B2B 跨境中小微外贸企业，业务覆盖全球 200 多个国家和地区，有效甄别 140,000 多笔潜在风险交易，成为中国 B2B 跨境支付领域首屈一指的力量。而在这一切背后，是少有人知道的科技力量。收款问题解决得很好，其他服务也可以试试。「2021 年 XTransfer 推出了针对中小微外贸企业的客户关系管理软件，而且基础版免费，我们又抱着试一试的心态，没想到用上以后还真离不开了。现在我们用的是会员版，年费不到 1000 块，对于我这样的小老板来说，工作更加轻松了，公司的业务员们拓展业务也更高效。比如，安信成 CRM 里面的邮件追踪功能就非常实用，能追踪每一封发送的邮件是否被收件人查阅，包括查阅时间、查阅地点、查看次数等等，实实在在地帮助我们完成拓客。最关键的一点，是这套系统可以帮我一键生成 PI，后面我在收款订单关联的时候特别方便，不用再像以前那样费时费力，现在就是点一点鼠标的事情。」"
            onPressOverlay={() => {
              setVisible8(false);
            }}
            footer={
              <Button
                style={styles.customFooter}
                onPress={() => {
                  setVisible8(false);
                }}
              >
                自定义底部
              </Button>
            }
            visible={visible8}
          />
          <Button
            onPress={() => {
              setVisible8(true);
            }}
          >
            超长内容
          </Button>

          <Modal.Component
            showConfirmButton={false}
            marketingHeight
            isMarketingModal
            content={
              <View style={styles.marketing}>
                <Text>营销内容</Text>
              </View>
            }
            footer={null}
            visible={visible9}
            onClose={() => {
              setVisible9(false);
            }}
          />
          <Button
            onPress={() => {
              setVisible9(true);
            }}
          >
            营销弹窗
          </Button>
        </Card>
      </ScrollView>
    </T.Provider>
  );
};

export default ModalScreen;
