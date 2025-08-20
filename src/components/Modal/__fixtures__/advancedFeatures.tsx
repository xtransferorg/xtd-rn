import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Modal, Fill } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const AdvancedFeaturesExample = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visibleNested, setVisibleNested] = useState(false);
  const [loadingState, setLoadingState] = useState({
    visible: false,
    confirmLoading: false,
    cancelLoading: false,
  });

  const handleLoadingConfirm = () => {
    setLoadingState((prev) => ({ ...prev, confirmLoading: true }));
    setTimeout(() => {
      setLoadingState({
        visible: false,
        confirmLoading: false,
        cancelLoading: false,
      });
    }, 2000);
  };

  const handleLoadingCancel = () => {
    setLoadingState((prev) => ({ ...prev, cancelLoading: true }));
    setTimeout(() => {
      setLoadingState({
        visible: false,
        confirmLoading: false,
        cancelLoading: false,
      });
    }, 1000);
  };

  return (
    <ScrollView>
      <Card title="高级功能">
        {/* 多按钮弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible1(true)}>多按钮弹窗</Button>
        </View>

        <Modal.Component
          visible={visible1}
          title="多按钮操作"
          message="请选择您要执行的操作。"
          showConfirmButton={false}
          solidButton
          buttonsDirection="column"
          actions={[
            {
              key: 'confirm',
              text: '主要操作',
              onPress: () => setVisible1(false),
            },
            {
              key: 'default',
              text: '次要操作',
              onPress: () => setVisible1(false),
            },
            {
              key: 'secondary',
              text: '其他操作',
              onPress: () => setVisible1(false),
            },
          ]}
          onClose={() => setVisible1(false)}
        />

        {/* 自定义内容弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible2(true)}>自定义内容弹窗</Button>
        </View>

        <Modal.Component
          visible={visible2}
          content={
            <Text style={styles.customContent}>这是完全自定义的内容区域</Text>
          }
          footer={
            <Button
              style={styles.customFooter}
              onPress={() => setVisible2(false)}
            >
              自定义底部按钮
            </Button>
          }
          onClose={() => setVisible2(false)}
        />

        {/* 超长内容弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible3(true)}>超长内容弹窗</Button>
        </View>

        <Modal.Component
          visible={visible3}
          title="超长内容示例"
          message="作为一站式外贸企业跨境金融和风控服务公司，XTransfer通过与知名跨国银行及金融机构合作，建设跨国大集团级全球多币种统一结算平台，并打造了以中小微企业为中心的，数据化、自动化、互联网化和智能化的反洗钱风控基础设施。XTransfer以科技为桥梁，链接全球大型金融机构和中小微企业，让中小微企业享受到和大型跨国集团企业同等水平的跨境金融服务。今天，当 B2C 跨境电商已经建立好相对完善的跨境结算和风控体系后，针对 B2C 跨境电商的支付服务，有了非常好的体验。相对于 B2C 模式，B2B 模式交易链路更长，从询盘、沟通、定制、寻找供应商、生产、找货代、发货、清关等，一笔交易往往长达数月。"
          footer={
            <Button
              style={styles.customFooter}
              onPress={() => setVisible3(false)}
            >
              我知道了
            </Button>
          }
          onPressOverlay={() => setVisible3(false)}
          onClose={() => setVisible3(false)}
        />

        {/* 嵌套弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible4(true)}>嵌套弹窗</Button>
        </View>

        <Modal.Component
          visible={visible4}
          title="父级弹窗"
          message={
            <View>
              <Text>这是父级弹窗的内容。</Text>
              <View style={styles.nestedModalButton}>
                <Button onPress={() => setVisibleNested(true)}>
                  打开嵌套弹窗
                </Button>
              </View>
            </View>
          }
          confirmButtonText="关闭"
          onPressConfirm={() => setVisible4(false)}
          solidButton
          buttonsDirection="column"
          showCancelButton
          cancelButtonText="取消"
          cancelButtonProps={{
            fill: Fill.link,
            style: { alignSelf: 'center' },
          }}
          onPressCancel={() => setVisible4(false)}
          onClose={() => setVisible4(false)}
        />

        <Modal.Component
          visible={visibleNested}
          title="嵌套弹窗"
          message="这是嵌套在父级弹窗中的子弹窗。"
          confirmButtonText="确定"
          onPressConfirm={() => setVisibleNested(false)}
          onClose={() => setVisibleNested(false)}
        />

        {/* 加载状态弹窗 */}
        <View style={styles.buttonContainer}>
          <Button
            onPress={() =>
              setLoadingState((prev) => ({ ...prev, visible: true }))
            }
          >
            加载状态弹窗
          </Button>
        </View>

        <Modal.Component
          visible={loadingState.visible}
          title="确认操作"
          message="点击按钮后将显示加载状态。"
          showCancelButton
          confirmButtonText="确定"
          confirmButtonLoading={loadingState.confirmLoading}
          cancelButtonText="取消"
          cancelButtonLoading={loadingState.cancelLoading}
          onPressConfirm={handleLoadingConfirm}
          onPressCancel={handleLoadingCancel}
          solidButton
          onClose={() =>
            setLoadingState({
              visible: false,
              confirmLoading: false,
              cancelLoading: false,
            })
          }
        />

        {/* 营销弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible5(true)}>营销弹窗</Button>
        </View>

        <Modal.Component
          visible={visible5}
          showConfirmButton={false}
          marketingHeight
          isMarketingModal
          content={
            <View style={styles.marketing}>
              <View style={styles.marketingContent}>
                <Text style={styles.marketingTitle}>特别优惠</Text>
                <Text style={styles.marketingDescription}>
                  限时优惠活动，立即参与享受专属福利！
                </Text>
              </View>
            </View>
          }
          footer={null}
          onClose={() => setVisible5(false)}
        />
      </Card>
    </ScrollView>
  );
};

export default AdvancedFeaturesExample;
