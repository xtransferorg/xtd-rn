import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Modal, Input } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const FormDialogsExample = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView>
      <Card title="表单对话框">
        {/* 基础表单弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible1(true)}>基础表单弹窗</Button>
        </View>

        <Modal.Component
          visible={visible1}
          title="请输入信息"
          message="执行XXX操作的补充说明文案，文案描述。"
          messageStyle={styles.messageStyle}
          extraNode={
            <View style={styles.formContainer}>
              <Input
                placeholder="请输入内容"
                size="large"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e);
                }}
              />
            </View>
          }
          confirmButtonText="确定"
          onPressConfirm={() => {
            console.log('输入的内容:', inputValue);
            setVisible1(false);
          }}
          showCancelButton
          cancelButtonText="取消"
          onPressCancel={() => setVisible1(false)}
          solidButton
          onClose={() => setVisible1(false)}
        />

        {/* 分段描述表单弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible2(true)}>分段描述表单弹窗</Button>
        </View>

        <Modal.Component
          visible={visible2}
          title="详细信息填写"
          message={
            <>
              <View style={styles.messageSegment}>
                <Text>
                  分段文本描述，文本描述文本描述文本描述文本描述文本描述。
                </Text>
              </View>
              <View style={styles.messageSegment}>
                <Text>
                  分段文本描述，文本描述文本描述文本描述文本描述文本描述。
                </Text>
              </View>
              <View style={styles.messageSegment}>
                <Text>
                  分段文本描述，文本描述文本描述文本描述文本描述文本描述。
                </Text>
              </View>
            </>
          }
          extraNode={
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>姓名</Text>
                <Input placeholder="请输入姓名" />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>邮箱</Text>
                <Input placeholder="请输入邮箱地址" />
              </View>
            </View>
          }
          confirmButtonText="提交"
          onPressConfirm={() => setVisible2(false)}
          showCancelButton
          cancelButtonText="取消"
          onPressCancel={() => setVisible2(false)}
          solidButton
          buttonsDirection="column"
          onClose={() => setVisible2(false)}
        />
      </Card>
    </ScrollView>
  );
};

export default FormDialogsExample;
