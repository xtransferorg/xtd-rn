import React, { useState } from 'react';
import { Button, FloatingLayer, Space, Input, PasswordInput } from '@xrnjs/ui';
import { View, Text, Platform, Keyboard } from 'react-native';
import styles from './style';
import Card from '_global/Card';

const KeyboardHandlingScreen = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [keyboardMargin, setKeyboardMargin] = useState(0);
  const isIOS = Platform.OS === 'ios';

  const handleCancel1 = () => {
    Keyboard.dismiss();
    setVisible1(false);
  };

  const handleCancel2 = () => {
    Keyboard.dismiss();
    setVisible2(false);
  };

  const handleCancel3 = () => {
    Keyboard.dismiss();
    setVisible3(false);
  };

  return (
    <Space>
      <Card title="基础键盘处理">
        <FloatingLayer
          title="输入表单"
          visible={visible1}
          useNative
          onPressOverlay={handleCancel1}
          onCancel={handleCancel1}
          onConfirm={handleCancel1}
          onClose={handleCancel1}
          showCancelButton
          disableKeyboardManager
        >
          <View style={styles.keyboardTestContainer}>
            <Text style={styles.keyboardTestText}>基础键盘处理示例</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>用户名</Text>
              <Input placeholder="请输入用户名" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>密码</Text>
              <PasswordInput placeholder="请输入密码" />
            </View>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible1(true)}>基础键盘处理</Button>
      </Card>

      <Card title="键盘边距调整">
        <FloatingLayer
          title="键盘边距调整"
          visible={visible2}
          useNative
          onPressOverlay={handleCancel2}
          onCancel={handleCancel2}
          onConfirm={handleCancel2}
          onClose={handleCancel2}
          showCancelButton
          keyboardMargin={keyboardMargin}
          containerHeight={isIOS ? undefined : 450}
        >
          <View style={styles.keyboardTestContainer}>
            <Text style={styles.keyboardTestText}>
              这个示例展示了如何处理键盘遮挡问题。在iOS上使用keyboardMargin，
              在Android上使用containerHeight。
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>普通输入框</Text>
              <Input
                placeholder="请输入内容"
                onFocus={() => setKeyboardMargin(0)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>底部输入框</Text>
              <Input
                placeholder="请输入内容"
                onFocus={() => setKeyboardMargin(isIOS ? 320 : 0)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>最底部输入框</Text>
              <PasswordInput
                placeholder="请输入密码"
                onFocus={() => setKeyboardMargin(isIOS ? 350 : 0)}
              />
            </View>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible2(true)}>键盘边距调整</Button>
      </Card>

      <Card title="长内容键盘处理">
        <FloatingLayer
          title="长内容键盘处理"
          visible={visible3}
          useNative
          onPressOverlay={handleCancel3}
          onConfirm={handleCancel3}
          onCancel={handleCancel3}
          onClose={handleCancel3}
          showCancelButton
          keyboardMargin={keyboardMargin}
          containerHeight={isIOS ? undefined : 450}
        >
          <View style={styles.keyboardTestContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>顶部输入框</Text>
              <Input
                placeholder="请输入内容"
                onFocus={() => setKeyboardMargin(0)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>密码输入框</Text>
              <PasswordInput
                placeholder="请输入密码"
                onFocus={() => setKeyboardMargin(0)}
              />
            </View>

            {/* 长内容 */}
            <Text style={styles.keyboardTestText}>
              {Array.from({ length: 50 })
                .map((_, index) => `测试键盘遮挡情况${index + 1} `)
                .join('')}
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>中间输入框</Text>
              <Input
                placeholder="请输入内容"
                onFocus={() => setKeyboardMargin(isIOS ? 200 : 0)}
              />
            </View>

            <Text style={styles.keyboardTestText}>
              {Array.from({ length: 30 })
                .map((_, index) => `更多测试内容${index + 1} `)
                .join('')}
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>底部输入框</Text>
              <Input
                placeholder="请输入内容"
                onFocus={() => setKeyboardMargin(isIOS ? 320 : 0)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>最底部密码框</Text>
              <PasswordInput
                placeholder="请输入密码"
                onFocus={() => setKeyboardMargin(isIOS ? 350 : 0)}
              />
            </View>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible3(true)}>长内容键盘处理</Button>
      </Card>
    </Space>
  );
};

export default KeyboardHandlingScreen;
