import React, { useState } from 'react';
import {
  Button,
  FloatingLayer,
  Space,
  Input,
  PasswordInput,
  Collapse,
} from '@xrnjs/ui';
import { View, Text } from 'react-native';
import styles from './style';
import Card from '_global/Card';

const FormLayerScreen = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <Space>
      <Card title="简单表单浮层">
        <FloatingLayer
          title="用户信息"
          visible={visible1}
          useNative
          onPressOverlay={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
          onConfirm={() => setVisible1(false)}
          showCancelButton
          showConfirmButton
          confirmButtonText="保存"
          onClose={() => setVisible1(false)}
        >
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>用户名</Text>
              <Input placeholder="请输入用户名" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>邮箱</Text>
              <Input placeholder="请输入邮箱" />
            </View>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible1(true)}>简单表单</Button>
      </Card>

      <Card title="密码表单浮层">
        <FloatingLayer
          title="修改密码"
          visible={visible2}
          useNative
          onPressOverlay={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
          onConfirm={() => setVisible2(false)}
          showCancelButton
          showConfirmButton
          confirmButtonText="确认修改"
          onClose={() => setVisible2(false)}
          disableKeyboardManager
        >
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>当前密码</Text>
              <PasswordInput placeholder="请输入当前密码" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>新密码</Text>
              <PasswordInput placeholder="请输入新密码" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>确认新密码</Text>
              <PasswordInput placeholder="请再次输入新密码" />
            </View>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible2(true)}>密码表单</Button>
      </Card>

      <Card title="复杂表单浮层">
        <FloatingLayer
          title="详细信息"
          visible={visible3}
          useNative
          onPressOverlay={() => setVisible3(false)}
          onCancel={() => setVisible3(false)}
          showCancelButton
          onClose={() => setVisible3(false)}
          footer={
            <Button style={styles.newBtn} onPress={() => setVisible3(false)}>
              提交信息
            </Button>
          }
        >
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>姓名</Text>
              <Input placeholder="请输入姓名" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>手机号</Text>
              <Input placeholder="请输入手机号" />
            </View>
            <Collapse accordion>
              <Collapse.Item title="更多信息" name="1">
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>地址</Text>
                  <Input placeholder="请输入地址" />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>备注</Text>
                  <Input.TextArea placeholder="请输入备注信息" />
                </View>
              </Collapse.Item>
            </Collapse>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible3(true)}>复杂表单</Button>
      </Card>
    </Space>
  );
};

export default FormLayerScreen;
