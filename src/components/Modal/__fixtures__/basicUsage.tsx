import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Modal } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsageExample = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <ScrollView>
      <Card title="基础用法">
        {/* 基础弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible1(true)}>基础弹窗</Button>
        </View>

        <Modal.Component
          visible={visible1}
          title="基础弹窗"
          message="这是一个基础的 Modal 弹窗示例。"
          onPressConfirm={() => setVisible1(false)}
          onClose={() => setVisible1(false)}
        />

        {/* 带取消按钮的弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible2(true)}>带取消按钮</Button>
        </View>

        <Modal.Component
          visible={visible2}
          title="确认操作"
          message="您确定要执行此操作吗？"
          showCancelButton
          confirmButtonText="确定"
          cancelButtonText="取消"
          onPressConfirm={() => setVisible2(false)}
          onPressCancel={() => setVisible2(false)}
          onClose={() => setVisible2(false)}
        />

        {/* 仅标题弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible3(true)}>仅标题弹窗</Button>
        </View>

        <Modal.Component
          visible={visible3}
          title="撤销后将不享受投资收益是否确定撤销是否确定撤销投资"
          showCancelButton
          confirmButtonText="确定"
          cancelButtonText="取消"
          onPressConfirm={() => setVisible3(false)}
          onPressCancel={() => setVisible3(false)}
          solidButton
          onClose={() => setVisible3(false)}
        />

        {/* 长文本弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible4(true)}>长文本弹窗</Button>
        </View>

        <Modal.Component
          visible={visible4}
          title="多行标题多行标题多行标题多行标多行标题多行标题"
          message="感谢您的信任并下载 XTransfer App。依据相关法律法规，我们将在充分保障您的知情权且获得您的明确授权后收集使用您的个人信息。请您务必仔细阅读《用户隐私政策条款》与《用户隐私政策条款》并确保您已经全部了解关于您的个人信息收集使用规则。"
          onPressConfirm={() => setVisible4(false)}
          solidButton
          onClose={() => setVisible4(false)}
        />
      </Card>
    </ScrollView>
  );
};

export default BasicUsageExample;
