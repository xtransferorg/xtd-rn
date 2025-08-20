import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Modal } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ImageDialogsExample = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const imageSource = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  };

  return (
    <ScrollView>
      <Card title="图文对话框">
        {/* 小图片弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible1(true)}>小图片弹窗</Button>
        </View>

        <Modal.Component
          visible={visible1}
          showClose={true}
          imgSource={imageSource}
          imgSize="small"
          title="小图片标题"
          message="这是一个带有小图片的对话框示例，图片尺寸为 64x64。"
          onPressConfirm={() => setVisible1(false)}
          onPressClose={() => setVisible1(false)}
          onClose={() => setVisible1(false)}
        />

        {/* 中等图片弹窗 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible2(true)}>中等图片弹窗</Button>
        </View>

        <Modal.Component
          visible={visible2}
          imgSource={imageSource}
          imgSize="middle"
          title="中等图片标题"
          message="这是一个带有中等尺寸图片的对话框示例。"
          showCancelButton
          onPressConfirm={() => setVisible2(false)}
          onPressCancel={() => setVisible2(false)}
          onClose={() => setVisible2(false)}
        />

        {/* 大图片弹窗 - 横向按钮 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible3(true)}>
            大图片弹窗 - 横向按钮
          </Button>
        </View>

        <Modal.Component
          visible={visible3}
          showCancelButton
          imgSource={imageSource}
          imgSize="large"
          title="大图片标题"
          message="这是一个带有大尺寸图片的对话框示例，按钮为横向排列。"
          confirmButtonText="确定"
          cancelButtonText="取消"
          onPressConfirm={() => setVisible3(false)}
          onPressCancel={() => setVisible3(false)}
          onClose={() => setVisible3(false)}
        />

        {/* 大图片弹窗 - 纵向按钮 */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => setVisible4(true)}>
            大图片弹窗 - 纵向按钮
          </Button>
        </View>

        <Modal.Component
          visible={visible4}
          buttonsDirection="column"
          showCancelButton
          imgSource={imageSource}
          imgSize="large"
          title="大图片标题"
          message="这是一个带有大尺寸图片的对话框示例，按钮为纵向排列。"
          confirmButtonText="主要操作"
          cancelButtonText="次要操作"
          onPressConfirm={() => setVisible4(false)}
          onPressCancel={() => setVisible4(false)}
          onClose={() => setVisible4(false)}
        />
      </Card>
    </ScrollView>
  );
};

export default ImageDialogsExample;
